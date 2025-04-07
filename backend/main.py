from fastapi import FastAPI
from routers import locations
import os

app = FastAPI(
    title="LocateMe API",
    description="A Location Insights Platform",
    version="0.1.0"
)

# Include routers
app.include_router(locations.router, prefix="/api/locations", tags=["Locations"])

@app.get("/")
def read_root():
    return {"message": "Welcome to LocateMe API"}
