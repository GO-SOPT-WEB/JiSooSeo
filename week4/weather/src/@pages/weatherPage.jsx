import React from "react";
import Header from "../@components/header";
import PageLayout from "../@components/pageLayout";
import { Outlet } from "react-router-dom";

export default function WeatherPage() {
  return (
    <PageLayout>
      <>
        <select name="weather">
          <option value="today">오늘</option>
          <option value="week">주간</option>
        </select>
        <input type="text" placeholder="영어로 도시명 ex) Seoul" />
        <button type="button">날씨 검색</button>
      </>
      <Outlet />
    </PageLayout>
  );
}
