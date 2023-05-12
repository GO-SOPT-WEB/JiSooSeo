import React from "react";
import Header from "../@components/header";
import PageLayout from "../@components/pageLayout";
import { Outlet } from "react-router-dom";

export default function WeatherPage() {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
}
