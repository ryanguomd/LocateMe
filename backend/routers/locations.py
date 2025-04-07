from fastapi import APIRouter
from typing import List
import json

router = APIRouter()

# Example static data (replace with DB calls)
locations_data = [
    {"id": 1, "name": "San Francisco", "country": "USA", "latitude": 37.7749, "longitude": -122.4194},
    {"id": 2, "name": "Lisbon", "country": "Portugal", "latitude": 38.7223, "longitude": -9.1393}
]

@router.get("/")
def get_all_locations():
    return {"locations": locations_data}

@router.get("/geojson")
def get_locations_geojson():
    # Convert to simplistic GeoJSON FeatureCollection
    features = []
    for loc in locations_data:
        feature = {
            "type": "Feature",
            "properties": {
                "id": loc["id"],
                "name": loc["name"],
                "country": loc["country"]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [loc["longitude"], loc["latitude"]]
            }
        }
        features.append(feature)
    return {
        "type": "FeatureCollection",
        "features": features
    }
