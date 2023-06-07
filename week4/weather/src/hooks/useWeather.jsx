import React, { useState } from "react";
import { getTodayWeather, getWeekWeather } from "../api/getWeather";

export default function useWeather() {
  const [todayData, setTodayData] = useState([]);
  const [weekDatas, setWeekDatas] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchTodayWeatherInfo(area) {
    try {
      setIsLoading(true);
      const response = await getTodayWeather(area);
      setIsLoading(false);
      setTodayData(response);
    } catch (e) {
      setIsError(true);
    }
  }

  async function fetchWeekWeatherInfo(area) {
    try {
      setIsLoading(true);
      const response = await getWeekWeather(area);
      setIsLoading(false);
      setWeekDatas(response);
    } catch (e) {
      setIsError(true);
    }
  }

  return { fetchTodayWeatherInfo, fetchWeekWeatherInfo, isError, isLoading, todayData, weekDatas };
}
