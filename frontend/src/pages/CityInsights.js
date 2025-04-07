import React, { useState, useEffect } from 'react';

const CityInsights = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/locations')
      .then(res => res.json())
      .then(data => setLocations(data.locations))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>City Insights</h1>
      <ul>
        {locations.map(loc => (
          <li key={loc.id}>
            {loc.name}, {loc.country}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityInsights;
