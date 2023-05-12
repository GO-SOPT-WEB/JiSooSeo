import React, { useState } from "react";
import PageLayout from "../@components/common/pageLayout";
import { Outlet, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Skeleton from "../@components/skeleton/skeleton";

export default function WeatherPage() {
  const [dayOption, setDayOption] = useState("day");
  const [city, setCity] = useState();
  const navigate = useNavigate();

  function getDayOption(e) {
    setDayOption(e.target.value);
  }

  function getCity(e) {
    setCity(e.target.value);
  }

  function searchWeather() {
    navigate(`/${dayOption}/${city}`);
  }

  return (
    <PageLayout>
      <DropBox>
        <Select name="weather" onChange={getDayOption}>
          <option value="day">오늘</option>
          <option value="week">주간</option>
        </Select>
        <Input type="text" placeholder="영어로 도시명 ex) Seoul" onChange={getCity} />
        <Button type="button" onClick={searchWeather}>
          날씨 검색
        </Button>
      </DropBox>
      <Skeleton />
      <Outlet />
    </PageLayout>
  );
}

const DropBox = styled.section`
  display: flex;
  margin: 2rem 0;
`;

const Select = styled.select`
  margin-right: 1rem;
  ${({ theme }) => theme.fonts.title}
`;

const Input = styled.input`
  width: 25rem;
  margin-right: 1rem;

  border: 0.3rem solid ${({ theme }) => theme.colors.blue};
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.skyblue};
  ${({ theme }) => theme.fonts.title}
`;

const Button = styled.button`
  width: 10rem;

  outline: none;
  border: none;
  &:focus {
    outline: none;
    border: none;
  }
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.blue};
  ${({ theme }) => theme.fonts.title}
`;
