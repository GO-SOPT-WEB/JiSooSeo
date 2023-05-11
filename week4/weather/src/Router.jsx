import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodayWeatherInfo from "./@components/todayWeatherInfo";
import TodayWeatherPage from "./@pages/todayWeatherPage";
import WeekWeatherPage from "./@pages/weekWeatherPage";
import WeekWeatherInfo from "./@components/weekWeatherInfo";
import MainPage from "./@pages/mainPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/day" element={<TodayWeatherPage />}>
          <Route path=":area" element={<TodayWeatherInfo />} />
        </Route>
        <Route path="/week" element={<WeekWeatherPage />}>
          <Route path=":area" element={<WeekWeatherInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
