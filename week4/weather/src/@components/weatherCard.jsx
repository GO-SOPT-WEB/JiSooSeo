import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { WEATHER_TYPE } from "../core/weatherImg";

export default function WeatherCard(props) {
  const { weatherData, weatherImg } = props;
  const { name, main, clouds } = weatherData;

  return (
    <WeatherCardWrapper>
      <h1>{name}</h1>
      <img src={weatherImg} alt={name} />
      <p>온도 | {main?.temp}</p>
      <p>체감 온도 | {main?.feels_like}</p>
      <p>
        최저/최고 | {main?.temp_min}/{main?.temp_max}
      </p>
      <p>구름 | {clouds?.all}</p>
    </WeatherCardWrapper>
  );
}

const WeatherCardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2rem;

  border: 0.3rem solid ${({ theme }) => theme.colors.blue};
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.skyblue};
  ${({ theme }) => theme.fonts.title}
`;
