import { useState } from 'react';
import styled from 'styled-components';

export default function Card(props) {
  const { img, name } = props;
  const [isReverse, setIsReverse] = useState(false);

  function reverseCard() {
    setIsReverse(true);
  }

  console.log(isReverse);
  return (
    <CardBoxWrapper onClick={reverseCard}>
      <CardBox isReverse={isReverse}>
        <CardImgFrontWrapper isReverse={isReverse}>
          <Img src={img} alt={name} />
        </CardImgFrontWrapper>
        <CardImgBackWrapper isReverse={isReverse}>
          <i>🌊</i>
        </CardImgBackWrapper>
      </CardBox>
    </CardBoxWrapper>
  );
}

const CardBoxWrapper = styled.article`
  position: relative;
  width: 18rem;
  height: 18rem;
  margin: 1rem;

  border-radius: 1rem;
  perspective: 50rem;
  cursor: pointer;
`;

const CardBox = styled.div`
  width: 100%;
  height: 100%;
  transition: all 1s;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transform: rotateY(${({ isReverse }) => isReverse && 180}deg);
`;

const CardImgFrontWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: 18rem;
  height: 18rem;

  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.skyblue};
  transform: rotateY(180deg);
`;

const CardImgBackWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: 18rem;
  height: 18rem;
  z-index: 2;

  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.blue};
`;

const Img = styled.img`
  width: 15rem;
`;
