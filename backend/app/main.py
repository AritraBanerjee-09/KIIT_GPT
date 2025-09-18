from fastapi import FastAPI, Request
from pydantic import BaseModel
from app.rag import get_context
from app.llm import ask_llm
from fastapi import HTTPException
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Update to your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Query(BaseModel):
    question: str

@app.post("/chat")
async def chat(query: Query):
    try:
        context = get_context(query.question)
        response = ask_llm(query.question, context)
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

