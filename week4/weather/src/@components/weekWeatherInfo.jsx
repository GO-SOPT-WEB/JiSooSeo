import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getWeekWeather } from "../api/getWeather";

export default function WeekWeatherInfo() {
  const { area } = useParams();
  const [weatherData, setWeatherData] = useState([]);
  const [weatherImg, setWeatherImg] = useState("");

  async function fetchWeekWeatherInfo() {
    const response = await getWeekWeather(area);
    setWeatherData(response.list);
  }

  useEffect(() => {
    fetchWeekWeatherInfo();
  }, []);

  useEffect(() => {
    fetchWeekWeatherInfo();
  }, [area]);

  console.log(weatherData);

  // useEffect(() => {
  //   weatherData?.weather &&
  //     setWeatherImg(WEATHER_TYPE.filter((w) => w.description === weatherData?.weather[0].description)[0].imgURL);
  // }, [weatherData]);

  // return <WeatherCard weatherData={weatherData} weatherImg={weatherImg} />;
  return <></>;
}
