import React from "react";
import { styled } from "styled-components";

export default function Skeleton() {
  return (
    <SkeletonWrapper>
      <Title></Title>
      <Img></Img>
      <Text></Text>
    </SkeletonWrapper>
  );
}

const SkeletonWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 1rem;
  padding: 2rem;
`;

const Title = styled.h1`
  width: 10rem;
  height: 3rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.grey};
`;

const Img = styled.img`
  width: 10rem;
  height: 10rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.grey};
`;

const Text = styled.p`
  width: 10rem;
  height: 5rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.grey};
`;
