import React from 'react';
import styled from 'styled-components';
import { idxType, selectCardType } from '../type/cardType';

interface CardProps {
  idx: number;
  img: string;
  name: string;
  selectedIdx: idxType[];
  setSelectedIdx: React.Dispatch<React.SetStateAction<idxType[]>>;
  selectCards: selectCardType[];
  setSelectCards: React.Dispatch<React.SetStateAction<selectCardType[]>>;
}

export default function Card(props: CardProps) {
  const { idx, img, name, selectedIdx, setSelectedIdx, selectCards, setSelectCards } = props;

  function reverseCard() {
    if (selectedIdx.length < 2) {
      setSelectCards(
        selectCards.map((selectCard) =>
          selectCard.idx === idx ? { ...selectCard, selected: !selectCard.selected } : selectCard
        )
      );
      setSelectedIdx([...selectedIdx, { idx }]);
    }
  }

  return (
    <CardBoxWrapper onClick={reverseCard}>
      <CardBox isReverse={selectCards[idx].selected}>
        <CardImgFrontWrapper isReverse={selectCards[idx].selected}>
          <Img src={img} alt={name} />
        </CardImgFrontWrapper>
        <CardImgBackWrapper isReverse={selectCards[idx].selected}>
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

const CardBox = styled.div<{ isReverse: boolean }>`
  width: 100%;
  height: 100%;
  transition: all 1s;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transform: rotateY(${({ isReverse }) => isReverse && 180}deg);
`;

const CardImgFrontWrapper = styled.div<{ isReverse: boolean }>`
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

const CardImgBackWrapper = styled.div<{ isReverse: boolean }>`
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
