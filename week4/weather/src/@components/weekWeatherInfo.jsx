import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getWeekWeather } from "../api/getWeather";
import WeatherCard from "./weatherCard";
import { styled } from "styled-components";

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

  // console.log(weatherDatas);

  return (
    <CardWrapper>
      {weatherDatas.map(
        (weatherData) => (
          <WeatherCard weatherData={weatherData} title={weatherData.dt_txt} />
        ),
        // console.log(weatherData),
      )}
    </CardWrapper>
  );
}

const CardWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;

  width: 100rem;
`;
