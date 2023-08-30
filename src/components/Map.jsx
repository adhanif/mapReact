import React from "react";
import "./Map.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map({ ipData }) {
  return (
    <MapContainer
      center={[ipData.latitude, ipData.longitude]}
      zoom={13}
      style={{ height: "70vh", width: "70%" }}
      className="shadow rounded "
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[ipData.latitude, ipData.longitude]}>
        <Popup className="custom-popup">
          <div className="card-header custom-card-header">
            <img
              src={ipData.country_flag}
              alt="flag"
              className="card-img-top custom-card-img"
            />
            <div className="card-body">
              <p>
                <strong> IP address : {ipData.ip}</strong>
                <br />
              </p>
              <p>
                You are currently located in {ipData.city} {ipData.country_name}
              </p>
            </div>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
