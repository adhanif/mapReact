import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import "./App.css";
import Map from "./components/Map.jsx";
import { Container, Row, Col, Stack } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      <div className="app-container">
        <Navbar ipData={ipData} />
        {ipData ? (
          <>
            {/* style={{ minHeight: "100vh" }} */}
            <Container className="text-center my-auto">
              <Row className="justify-content-center">
                <Map ipData={ipData} />
              </Row>
            </Container>
          </>
        ) : (
          <p>Loading IP data...</p>
        )}

        <Footer />
      </div>
    </>
  );
}

export default App;
