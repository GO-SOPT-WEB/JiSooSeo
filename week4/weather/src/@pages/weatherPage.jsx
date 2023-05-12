import React from "react";
import Header from "../@components/header";
import PageLayout from "../@components/pageLayout";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

export default function WeatherPage() {
  return (
    <PageLayout>
      <DropBox>
        <Select name="weather">
          <option value="today">오늘</option>
          <option value="week">주간</option>
        </Select>
        <input type="text" placeholder="영어로 도시명 ex) Seoul" />
        <button type="button">날씨 검색</button>
      </DropBox>
      <Outlet />
    </PageLayout>
  );
}

const DropBox = styled.section`
  display: flex;
  margin: 2rem 0;
`;

const Select = styled.select`
  ${({ theme }) => theme.fonts.title}
`;
