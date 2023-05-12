import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTodayWeather } from "../api/getWeather";
import WeatherCard from "./weatherCard";
import { WEATHER_TYPE } from "../core/weatherImg";
import useWeather from "../hooks/useWeather";
import ErrorPage from "../@pages/errorPage";

export default function DetailWeatherInfo() {
  const { area } = useParams();
  const { fetchTodayWeatherInfo, isError, todayData } = useWeather();
  // const [weatherData, setWeatherData] = useState([]);

  // async function fetchTodayWeatherInfo() {
  //   const response = await getTodayWeather(area);
  //   setWeatherData(response);
  // }

  useEffect(() => {
    fetchTodayWeatherInfo(area);
  }, []);

  useEffect(() => {
    fetchTodayWeatherInfo(area);
  }, [area]);

  if (isError) {
    return <ErrorPage />;
  }

  return <WeatherCard weatherData={todayData} title={todayData.name} />;
}
