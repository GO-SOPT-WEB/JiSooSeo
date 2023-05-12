import React from "react";
import Header from "../@components/header";

export default function WeatherPage() {
  return (
    <PageLayout>
      <Header />
      <Outlet />
    </PageLayout>
  );
}
