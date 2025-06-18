// MapView.jsx
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {motion} from 'framer-motion'
import { fadeIn } from '../ultils/motion';
// ✅ Custom red icon (make sure marker-icon-red.png and marker-shadow.png are in /public)
const redIcon = new L.Icon({
  iconUrl: '/marker-icon-red.png',
  shadowUrl: '/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -30],
});

// 📌 Adds marker when user clicks on map
const ClickToAddMarker = ({ addMarker }) => {
  useMapEvents({
    click(e) {
      addMarker(e.latlng);
    },
  });
  return null;
};

const MapView = () => {
  const [markers, setMarkers] = useState([
    {
      id: 1,
      position: [28.6139, 77.2090], // Delhi
      label: "Delhi 🏙️"
    }
  ]);

  // 📌 Function to add marker to state
  const addMarker = (latlng) => {
    const newMarker = {
      id: Date.now(),
      position: [latlng.lat, latlng.lng],
      label: `Lat: ${latlng.lat.toFixed(2)}, Lng: ${latlng.lng.toFixed(2)}`
    };
    setMarkers((prev) => [...prev, newMarker]);
  };

  return (
    <section id="map" className="p-4 ml-16 md:ml-64 lg:ml-64 pt-24 pb-20">
      {/* Heading */}
      <motion.h1 
       variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView="show"
      className="text-3xl font-bold mb-2 text-sky-700 text-center">
        🗺️ Interactive Map
      </motion.h1>

      {/* Sub-heading */}
      <motion.p 
       variants={fadeIn("up", 0.3)}
                  initial="hidden"
                  whileInView="show"
      className="text-center text-slate-600 mb-6">
        Click anywhere on the map to add marker 📍
      </motion.p>

      {/* Map box */}
      <div className="w-full max-w-3xl mx-auto h-[400px] rounded-lg overflow-hidden shadow-lg border border-sky-300 ">
        <MapContainer
          center={[28.6139, 77.2090]}
          zoom={5}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />

          <ClickToAddMarker addMarker={addMarker} />

          {markers.map((marker) => (
            <Marker key={marker.id} position={marker.position} icon={redIcon}>
              <Popup>{marker.label}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

export default MapView;
