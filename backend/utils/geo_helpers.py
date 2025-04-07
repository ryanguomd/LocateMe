import geojson

def create_feature_collection(data):
    """
    Helper function that converts location data into
    a GeoJSON FeatureCollection (if needed).
    """
    features = []
    for loc in data:
        feature = geojson.Feature(
            geometry=geojson.Point((loc["longitude"], loc["latitude"])),
            properties={"id": loc["id"], "name": loc["name"], "country": loc["country"]}
        )
        features.append(feature)
    return geojson.FeatureCollection(features)
