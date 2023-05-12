import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTodayWeather } from "../api/getWeather";
import WeatherCard from "./weatherCard";

export default function DetailWeatherInfo() {
  const { area } = useParams();
  const [weatherData, setWeatherData] = useState([]);

  async function fetchTodayWeatehrInfo() {
    const response = await getTodayWeather(area);
    setWeatherData(response);
  }

  useEffect(() => {
    fetchTodayWeatehrInfo();
  }, []);

  return <WeatherCard weatherData={weatherData} />;
}
