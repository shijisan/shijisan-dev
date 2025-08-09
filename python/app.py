from fastapi import FastAPI
from transformers import pipeline
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

generator = pipeline(
    "text2text-generation",
    model="google/flan-t5-small"
)

@app.get("/greet")
def greet():
    prompt = "You are Ai-delas Alas, a helpful chatbot.\n\nUser: Hello!\nAI:"
    output = generator(prompt, max_new_tokens=100, do_sample=True, temperature=0.9)
    return {"response": output[0]["generated_text"]}

class PromptRequest(BaseModel):
    text: str

@app.post("/prompt")
def buzzword(req: PromptRequest):
    prompt = f"You are Ai-delas Alas, a lightweight AI chatbot. Respond to the user's prompt:\n '{req.text}'"
    output = generator(prompt, max_new_tokens=100, do_sample=True, temperature=0.9)
    return {"response": output[0]["generated_text"]}
