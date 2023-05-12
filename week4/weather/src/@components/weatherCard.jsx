import React from "react";

export default function WeatherCard(props) {
  const { weatherData } = props;
  const { name, main, clouds } = weatherData;

  return (
    <>
      <h1>{name}</h1>
      <p>온도 | {main?.temp}</p>
      <p>체감 온도 | {main?.feels_like}</p>
      <p>
        최저/최고 | {main?.temp_min}/{main?.temp_max}
      </p>
      <p>구름 | {clouds?.all}</p>
    </>
  );
}
