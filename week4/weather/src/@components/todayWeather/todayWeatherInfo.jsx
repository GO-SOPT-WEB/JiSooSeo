import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WeatherCard from "../common/weatherCard";
import useWeather from "../../hooks/useWeather";
import ErrorPage from "../../@pages/errorPage";
import SkeletonTemplate from "../skeleton/skeletonTemplate";

export default function DetailWeatherInfo() {
  const { area } = useParams();
  const { fetchTodayWeatherInfo, isError, todayData, isLoading } = useWeather();

  useEffect(() => {
    fetchTodayWeatherInfo(area);
  }, []);

  useEffect(() => {
    fetchTodayWeatherInfo(area);
  }, [area]);

  if (isError) {
    return <ErrorPage />;
  }

  return <>{isLoading ? <SkeletonTemplate /> : <WeatherCard weatherData={todayData} title={todayData.name} />}</>;
}
