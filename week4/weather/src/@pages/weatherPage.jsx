import React, { useState } from "react";
import Header from "../@components/header";
import PageLayout from "../@components/pageLayout";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

export default function WeatherPage() {
  const [dayOption, setDayOption] = useState();
  const [city, setCity] = useState();

  function getDayOption(e) {
    setDayOption(e.target.value);
  }

  function getCity(e) {
    setCity(e.target.value);
  }

  return (
    <PageLayout>
      <DropBox>
        <Select name="weather" onChange={getDayOption}>
          <option value="today">오늘</option>
          <option value="week">주간</option>
        </Select>
        <Input type="text" placeholder="영어로 도시명 ex) Seoul" onChange={getCity} />
        <Button type="button">날씨 검색</Button>
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
