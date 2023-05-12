import React from "react";
import { styled } from "styled-components";

export default function Header() {
  return (
    <HeaderWrapper>
      <Title>🌞수수의 기상예보⛱️</Title>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 2rem;

  background-color: ${({ theme }) => theme.colors.blue};
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.header};
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
`;
