import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodayWeatherInfo from "./@components/todayWeatherInfo";
import WeekWeatherInfo from "./@components/weekWeatherInfo";
import WeatherPage from "./@pages/weatherPage";
import ErrorPage from "./@pages/errorPage";

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
