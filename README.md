# 🌍 LocateMe: Smart Location Insights Platform
 
A location intelligence web application that helps users explore geographic and demographic trends for planning business expansions, travel, or climate-conscious decisions.

## 🧩 Features
- Interactive world map with custom filters (climate, safety, population density, etc.)
- City-specific insights: cost of living, digital infrastructure, climate trends
- "Best Places for X" tool (e.g., surfing, remote work)
- Downloadable GeoJSON exports for researchers

## Tech Stack
- **Frontend**: React, Leaflet.js / Mapbox (OpenStreetMap base tiles)
- **Backend**: Python (FastAPI), REST APIs
- **Database**: PostgreSQL + PostGIS
- **Visualization** (Optional): Tableau for advanced dashboards
- **Containerization**: Docker + docker-compose

## Getting Started

1. **Clone the repo**:
   ```
   bash
   git clone https://github.com/YourUser/LocateMe.git
   cd LocateMe
   ```

2. **Set environment variables**:
    Copy `.env.example` to `.env` and fill in relevant values (database URLs, API keys, etc.).

3. **Build & run docker compose**:
    ```
    docker-compose build
    docker-compose up
    ```

    The backend should be running at `http://localhost:8000` and the frontend at `http://localhost:3000`.

4. **Without Docker**:
    - **Backend:**
    ```
    cd backend
    pip install -r requirements.txt
    uvicorn main:app --host 0.0.0.0 --port 8000
    ```

    - **Frontend:**
    ```
    cd frontend
    yarn install
    yarn start
    ```

    - (Or `npm install && npm start` if using npm)

## Database

* Uses PostgreSQL with the PostGIS extension for geospatial queries.
* Ensure PostGIS is installed: `CREATE EXTENSION postgis;`

## Contributing

Please open an issue or submit a PR if you find bugs or want to contribute new features.

