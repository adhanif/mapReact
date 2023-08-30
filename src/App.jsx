import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import "./App.css";
import Map from "./components/Map.jsx";
import { Container, Row, Col, Stack } from "react-bootstrap";

function App() {
  const [ipData, setIpData] = useState();
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setIpData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {ipData ? (
        <>
          <Container className="bg-light text-center">
            <h1>Your location and IP</h1>
            <Row className="justify-content-center">
              <Map ipData={ipData} />
            </Row>
            <Row
              className="justify-content-center bg-light"
              style={{ width: "70%", margin: "0 auto" }}
            >
              <p>egrzrrz</p>
            </Row>
          </Container>
        </>
      ) : (
        <p>Loading IP data...</p>
      )}
    </>
  );
}

export default App;
