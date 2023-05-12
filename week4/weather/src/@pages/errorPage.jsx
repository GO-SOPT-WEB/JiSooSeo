import React from "react";
import { styled } from "styled-components";

export default function ErrorPage() {
  return (
    <ErrorPageWrapper>
      <ErrorMessage>Error</ErrorMessage>
    </ErrorPageWrapper>
  );
}

const ErrorMessage = styled.h1`
  ${({ theme }) => theme.fonts.header}
`;

const ErrorPageWrapper = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.fonts.blue};
`;
