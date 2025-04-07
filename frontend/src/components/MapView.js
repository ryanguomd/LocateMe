import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapView() {
  const [geoJsonData, setGeoJsonData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/locations/geojson')
      .then(res => res.json())
      .then(data => setGeoJsonData(data))
      .catch(err => console.error(err));
  }, []);

  if (!geoJsonData) return <p>Loading map...</p>;

  // Default center - arbitrary example
  const position = [37.7749, -122.4194];

  return (
    <MapContainer style={{ height: "400px", width: "100%" }} center={position} zoom={3}>
      <TileLayer
        attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geoJsonData.features.map(feature => {
        const coords = feature.geometry.coordinates;
        return (
          <Marker key={feature.properties.id} position={[coords[1], coords[0]]}>
            <Popup>
              <b>{feature.properties.name}</b><br />
              Country: {feature.properties.country}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

export default MapView;
