import { BrowserRouter, Route, Routes } from "react-router-dom";
import WeatherPage from "./pages/WeatherPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeatherPage />} />
      </Routes>
    </BrowserRouter>
  );
}
