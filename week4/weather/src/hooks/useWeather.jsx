import React, { useState } from "react";
import { useQuery } from "react-query";
import { getTodayWeather, getWeekWeather } from "../api/getWeather";

export default function useWeather() {
  const [todayData, setTodayData] = useState([]);
  const [weekData, setWeekData] = useState([]);
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
      setWeekData(response);
    } catch (e) {
      setIsError(true);
    }
  }

  return { fetchTodayWeatherInfo, fetchWeekWeatherInfo, isError, isLoading, todayData, weekData };
}
