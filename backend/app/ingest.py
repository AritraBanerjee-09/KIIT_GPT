from langchain_community.document_loaders import TextLoader, PyPDFLoader
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain.text_splitter import RecursiveCharacterTextSplitter
import os


def load_documents(path="data"):
    def custom_loader(file_path):
        ext = os.path.splitext(file_path)[1].lower()
        if ext == ".pdf":
            docs = PyPDFLoader(file_path).load()
        elif ext == ".txt":
            docs = TextLoader(file_path).load()
        else:
            docs = []
        print(f"Loaded {len(docs)} documents from {file_path}")  # Debug print
        return docs

    documents = []
    for root, dirs, files in os.walk(path):
        for file in files:
            full_path = os.path.join(root, file)
            docs = custom_loader(full_path)
            documents.extend(docs)
    print(f"Total documents loaded: {len(documents)}")  # Debug print
    return documents


def ingest_documents():
    documents = load_documents("data")
    splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
    chunks = splitter.split_documents(documents)
    print(f"Total chunks created: {len(chunks)}")  # Debug print

    embedding = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
    db = Chroma.from_documents(chunks, embedding=embedding, persist_directory="./chroma_db")
    db.persist()

    print("Ingestion complete!")

    # Optional: Verify number of vectors in DB
    try:
        count = db._collection.count()
        print(f"Number of vectors in Chroma DB: {count}")
    except Exception as e:
        print(f"Could not get vector count: {e}")


if __name__ == "__main__":
    ingest_documents()
