import React from "react";
import "leaflet";
import { MapContainer as Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./bundeslaenderKarte.css";

function BundeslaenderKarte() {
  const position = [51.51544151359322, 10.210642638997257];

  return (
    <Map
      center={[position[0], position[1]]}
      zoom={5.5}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </Map>
  );
}

export default BundeslaenderKarte;
