from fastapi import FastAPI
from transformers import pipeline
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
   CORSMiddleware,
   allow_origins= ["http://localhost:3000"],
   allow_credentials= True,
   allow_methods= ["*"],
   allow_headers= ["*"],
)

generator = pipeline("text2text-generation", model="google/flan-t5-small")

@app.get("/greet")
def generate_shower_thoughts():
   prompt = "Introduce yourself as Ai-delas Alas, a lightweight AI chatbot. Greet the user in a polite and clear way.\n"
   return generator(prompt, max_new_tokens=40, do_sample=True, temperature=0.9)

class BuzzwordRequest(BaseModel):
   text: str

@app.post("/prompt")
def buzzword(req: BuzzwordRequest):
   prompt = f"You are Ai-delas Alas, a lightweight AI chatbot. Respond to the users prompt:\n '{req.text}'\n "
   return {"response": generator(prompt, max_new_tokens=40, do_sample=True, temperature=0.9)[0]["generated_text"]}
