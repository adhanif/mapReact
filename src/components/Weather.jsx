import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Weather({ ipData }) {
  const [weatherData, setWeatherData] = useState(null);

  const api_key = import.meta.env.VITE_API_KEY2;
  const WeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${ipData.latitude}&lon=${ipData.longitude}&appid=${api_key}`;

  useEffect(() => {
    axios
      .get(WeatherUrl)
      .then((res) => {
        // console.log(res.data);
        setWeatherData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {weatherData ? (
        <div className="d-flex flex-row">
          <div className="mr-6">
            <p className="card-text-2 m-0 fw-bold">Weather in {ipData.city}</p>
            <p className="m-0">{weatherData.main.temp - 273.15} °C </p>
            <p>wind {weatherData.wind.speed} m/s</p>
          </div>
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt=""
            />
          </div>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
