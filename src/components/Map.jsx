import React from "react";
import { DateTime } from "luxon";
import "./Map.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map({ position, ip, location }) {
  const [Flagdata, setFlagData] = useState();
  //   const apiKey = import.meta.env.VITE_API_COUNTRY_KEY;
  const FlagUrl = `https://restcountries.com/v3.1/name/germany`;

  const now = DateTime.now();
//   console.log(now);

  useEffect(() => {
    axios
      .get(FlagUrl)
      .then((res) => {
        setFlagData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //   console.log(Flagdata);
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "80vh", width: "70%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup className="custom-popup">
          <div className="card custom-card">
            <div className="card-header custom-card-header">
              {Flagdata ? (
                <img
                  src={Flagdata[0].flags.png}
                  alt="flag"
                  className="card-img-top custom-card-img"
                />
              ) : (
                <p>Loading IP data...</p>
              )}
            </div>
            <div className="card-body">
              <p>
                <strong>Your IP address is {ip}</strong>
                <br />
                You are currently located in {location.city}
                {Flagdata ? Flagdata[0]?.name?.common : "Loading..."}
                {/* {Flagdata[0].name.common} */}
              </p>
            </div>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
