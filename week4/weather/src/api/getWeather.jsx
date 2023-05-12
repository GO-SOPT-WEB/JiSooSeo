import axios from "axios";

//오늘 날씨 조회
export async function getTodayWeather(area) {
  try {
    const data = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${
        import.meta.env.VITE_APP_WEATHER
      }&units=metric`,
    );

    return data.data;
  } catch (e) {
    console.log(e);
  }
}

//주간 날씨 조회
export async function getWeekWeather(area) {
  try {
    const data = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${area}&appid=${
        import.meta.env.VITE_APP_WEATHER
      }&units=metric`,
    );

    return data.data;
  } catch (e) {
    console.log(e);
  }
}
