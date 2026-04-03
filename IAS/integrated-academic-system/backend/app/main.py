from fastapi import FastAPI
from app.routers import auth, users

# ✅ CREATE APP FIRST
app = FastAPI(
    title="Integrated Academic System API",
    version="1.0.0"
)

# ✅ THEN INCLUDE ROUTERS
app.include_router(auth.router)
app.include_router(users.router)

# ✅ ROOT ENDPOINT
@app.get("/")
def root():
    return {
        "status": "Backend is running",
        "message": "Integrated Academic System API is live 🚀"
    }
