import axios from "axios";

//오늘 날씨 조회
export async function getTodayWeather(area) {
  const data = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${import.meta.env.VITE_APP_WEATHER}&units=metric`,
  );
  return data.data;
}

//주간 날씨 조회
export async function getWeekWeather(area) {
  const data = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${area}&appid=${import.meta.env.VITE_APP_WEATHER}&units=metric`,
  );

  return data.data;
}
