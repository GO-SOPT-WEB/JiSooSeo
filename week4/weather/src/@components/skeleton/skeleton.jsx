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
`;

const Title = styled.h1`
  width: 23rem;
  height: 3rem;

  margin: 0.5rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.grey};
`;

const Img = styled.img`
  width: 23rem;
  height: 20rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.grey};
`;

const Text = styled.p`
  width: 23rem;
  height: 7rem;

  margin: 0.5rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.grey};
`;
