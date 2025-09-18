import requests

OLLAMA_URL = "http://localhost:11434/api/chat"

def ask_llm(question, context):
    prompt = f"""Use the following college information to answer the user's question:

    Context: {context}

    Question: {question}
    """

    payload = {
        "model": "llama3.1:latest",
        "messages": [{"role": "user", "content": prompt}],
        "stream": False
    }

    try:
        res = requests.post(OLLAMA_URL, json=payload)
        res.raise_for_status()
        data = res.json()
        return data["message"]["content"]
    except requests.RequestException as e:
        # handle request errors (connection, timeout, etc.)
        return f"Request error: {str(e)}"
    except (KeyError, ValueError):
        # handle JSON decode error or missing keys
        return "Unexpected response format from LLM."
