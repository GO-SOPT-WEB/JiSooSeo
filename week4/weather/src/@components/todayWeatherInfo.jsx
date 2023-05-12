import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTodayWeather } from "../api/getWeather";

export default function DetailWeatherInfo() {
  const { area } = useParams();
  const [weatherData, setWeatherData] = useState([]);

  async function fetchWeatehrInfo() {
    const response = await getTodayWeather(area);
    setWeatherData(response);
  }

  useEffect(() => {
    fetchWeatehrInfo();
  }, []);

  console.log(weatherData);

  return <div>DetailWeatherInfo</div>;
}
