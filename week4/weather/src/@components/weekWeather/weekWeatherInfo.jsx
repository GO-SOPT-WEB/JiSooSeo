import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WeatherCard from "../common/weatherCard";
import { styled } from "styled-components";
import useWeather from "../../hooks/useWeather";
import ErrorPage from "../../@pages/errorPage";

export default function WeekWeatherInfo() {
  const { area } = useParams();
  const { fetchWeekWeatherInfo, isError, weekDatas } = useWeather();

  useEffect(() => {
    fetchWeekWeatherInfo(area);
  }, []);

  useEffect(() => {
    fetchWeekWeatherInfo(area);
  }, [area]);

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <CardWrapper>
      {weekDatas.list?.slice(0, 5).map((weatherData, i) => (
        <WeatherCard key={i} weatherData={weatherData} title={weatherData?.dt_txt?.split(" ")[0]} />
      ))}
    </CardWrapper>
  );
}

const CardWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;

  width: 100rem;
`;
