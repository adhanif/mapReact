import React from "react";
import "./Map.css";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import { Container, Row, Col, Table } from "react-bootstrap";
import Weather from "./Weather";

const icon = L.icon({
  iconRetinaUrl: iconRetina,
  iconUrl: iconMarker,
  // shadowUrl: iconShadow,
  iconSize: [20, 30],
});

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map({ ipData }) {
  return (
    <Row className="flex flex-column flex-md-row">
      <Col className="col-md-5 col-12 text-start">
        <h5 className="text-dark ">What is my IP address?</h5>

        <h1 className="mb-5">{ipData.ip}</h1>
        <p className="card-text-2 m-0 fw-bold">My IP address location:</p>
        <div className="d-flex flex-row align-items-center mb-3">
          <img
            src={ipData.country_flag}
            alt=""
            className="img-fluid mr-5"
            style={{ width: "20px", height: "15px", marginRight: "7px" }}
          />
          <p className="m-0">
            {ipData.country_name}, {ipData.state_prov}, {ipData.city},{" "}
            {ipData.zipcode}
          </p>
        </div>
        <div>
          <p className="m-0 fw-bold">Internet service provider:</p>
          <p>{ipData.organization}</p>
        </div>

        <div>
          <p className="m-0 fw-bold">Coordinates:</p>
          <p>
            {ipData.latitude} (lat) / {ipData.longitude} (long)
          </p>
        </div>
        <div>
          <p className="m-0 fw-bold">Continent:</p>
          <p>
            {ipData.continent_name} ({ipData.continent_code})
          </p>
        </div>
        <div>
          <Weather ipData={ipData} />
        </div>
      </Col>
      <Col className="col-md-7 col-12">
        <MapContainer
          center={[ipData.latitude, ipData.longitude]}
          zoom={13}
          style={{ height: "50vh", width: "100%" }}
          className="shadow rounded "
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[ipData.latitude, ipData.longitude]} icon={icon}>
            <Popup className="custom-popup">
              <div className="card-header custom-card-header">
                <img
                  src={ipData.country_flag}
                  alt="flag"
                  className="card-img-top custom-card-img "
                />
                <div className="card-body">
                  <p>
                    <strong> IP address : {ipData.ip}</strong>
                    <br />
                  </p>
                  <p>
                    You are currently located in {ipData.city}{" "}
                    {ipData.country_name}
                  </p>
                </div>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </Col>
    </Row>
  );
}
