import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DetailWeatherInfo() {
  const { area } = useParams();

  useEffect(() => {
    getTodayWeather(area);
  }, []);

  console.log(area);

  return <div>DetailWeatherInfo</div>;
}
