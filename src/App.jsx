import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import "./App.css";
import Map from "./components/Map.jsx";

// console.log(import.meta.env);
function App() {
  const [ipData, setIpData] = useState();
  const apiKey = import.meta.env.VITE_API_KEY;
  // console.log(apiKey);
  // https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=8.8.8.8
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data);
        setIpData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(position);
  return (
    <>
      {ipData ? (
        <>
          <p>{ipData.location.country}</p>
          <div className="d-flex justify-content-center">
            <Map
              position={[ipData.location.lat, ipData.location.lng]}
              ip={ipData.ip}
              location={ipData.location}
            />
          </div>
        </>
      ) : (
        <p>Loading IP data...</p>
      )}
    </>
  );
}

export default App;
