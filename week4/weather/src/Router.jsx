import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodayWeatherInfo from "./@components/todayWeather/todayWeatherInfo";
import WeekWeatherInfo from "./@components/weekWeather/weekWeatherInfo";
import WeatherPage from "./@pages/weatherPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeatherPage />}>
          <Route path="/day/:area" element={<TodayWeatherInfo />} />
          <Route path="/week/:area" element={<WeekWeatherInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
