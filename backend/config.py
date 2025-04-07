import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://locate_user:locate_pass@localhost:5432/locate_db")
