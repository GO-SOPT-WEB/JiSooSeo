import React from "react";
import { styled } from "styled-components";
import Header from "./header";

export default function PageLayout(props) {
  const { children } = props;
  return (
    <PageWrapper>
      <Header />
      {children}
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;
