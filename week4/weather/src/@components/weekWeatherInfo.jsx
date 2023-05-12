import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getWeekWeather } from "../api/getWeather";
import WeatherCard from "./weatherCard";

export default function WeekWeatherInfo() {
  const { area } = useParams();
  const [weatherDatas, setWeatherDatas] = useState([]);

  async function fetchWeekWeatherInfo() {
    const response = await getWeekWeather(area);
    setWeatherDatas(response.list);
  }

  useEffect(() => {
    fetchWeekWeatherInfo();
  }, []);

  useEffect(() => {
    fetchWeekWeatherInfo();
  }, [area]);

  console.log(weatherDatas);

  return (
    <>
      {weatherDatas.map(
        (weatherData) => (
          <WeatherCard weatherData={weatherData} name={name} />
        ),
        // console.log(weatherData),
      )}
    </>
  );
}
