import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTodayWeather } from "../api/getWeather";
import WeatherCard from "./weatherCard";
import { WEATHER_TYPE } from "../core/weatherImg";

export default function DetailWeatherInfo() {
  const { area } = useParams();
  const [weatherData, setWeatherData] = useState([]);
  const [weatherImg, setWeatherImg] = useState("");

  async function fetchTodayWeatehrInfo() {
    const response = await getTodayWeather(area);
    setWeatherData(response);
  }

  useEffect(() => {
    fetchTodayWeatehrInfo();
  }, []);

  useEffect(() => {
    console.log(area);
    fetchTodayWeatehrInfo();
  }, [area]);

  useEffect(() => {
    weatherData?.weather &&
      setWeatherImg(WEATHER_TYPE.filter((w) => w.description === weatherData?.weather[0].description)[0].imgURL);
  }, [weatherData]);

  return <WeatherCard weatherData={weatherData} weatherImg={weatherImg} />;
}
