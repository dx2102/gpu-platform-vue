from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi import HTTPException
'''
uvicorn ping:app --reload
'''


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/ping")
async def pong():
    return {"ping": "pong!"}

@app.get("/protected")
async def protected():
    raise HTTPException(
        403,
        detail="Not authorized"
    )








