import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WeatherCard from "../common/weatherCard";
import useWeather from "../../hooks/useWeather";
import ErrorPage from "../../@pages/errorPage";

export default function DetailWeatherInfo() {
  const { area } = useParams();
  const { fetchTodayWeatherInfo, isError, todayData } = useWeather();

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
