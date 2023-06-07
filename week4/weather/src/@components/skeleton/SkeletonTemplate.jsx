import React from "react";
import { keyframes, styled } from "styled-components";

export default function SkeletonTemplate() {
  return (
    <SkeletonBoxWrapper>
      <Title></Title>
      <Img></Img>
      <Text></Text>
    </SkeletonBoxWrapper>
  );
}

const loading = keyframes`
  0% {
    transform: translateX(0);
  }
  50%,
  100% {
    transform: translateX(45rem);
  }
`;

const SkeletonBoxWrapper = styled.section`
  width: 28rem;
  height: 40rem;

  margin: 1rem;

  background-color: #ddd;
  border-radius: 1rem;

  overflow: hidden;
`;

const Title = styled.div`
  width: 25rem;
  height: 3rem;

  margin: 1.5rem 0 0.5rem 0;

  background-color: rgba(145, 145, 145, 0.1);

  animation: ${loading} 4s infinite;
`;

const Img = styled.div`
  width: 25rem;
  height: 25rem;

  margin: 0.5rem;

  background-color: rgba(145, 145, 145, 0.1);

  animation: ${loading} 4s infinite;
`;

const Text = styled.div`
  width: 25rem;
  height: 8rem;

  margin: 0.5rem;

  background-color: rgba(145, 145, 145, 0.1);

  animation: ${loading} 4s infinite;
`;
