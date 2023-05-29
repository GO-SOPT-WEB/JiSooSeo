import styled from 'styled-components';
import Card from './card';
import { useEffect, useState } from 'react';
import { levelType } from '../core/levelType';
import { reverseCardEasy, reverseCardHard, reverseCardNormal } from '../core/reverseCard';

export default function CardList(props) {
  const { level, cards, correct, setCorrect, isReset } = props;
  //카드 전체의 선택여부
  const [selectCards, setSelectCards] = useState(reverseCardEasy);
  //선택된 카드의 인덱스 두 개 담기는 배열
  const [selectedIdx, setSelectedIdx] = useState([]);

  useEffect(() => {
    switch (level) {
      case levelType.EASY:
        setSelectCards(reverseCardEasy);
        break;
      case levelType.NORMAL:
        setSelectCards(reverseCardNormal);
        break;
      case levelType.HARD:
        setSelectCards(reverseCardHard);
        break;
      default:
        setSelectCards();
        break;
    }
  }, [level]);

  //리셋한 경우 카드 다 뒤집기
  useEffect(() => {
    setSelectCards(
      selectCards.map((selectCard) =>
        selectCard.idx === 0
          ? { ...selectCard, selected: false }
          : { ...selectCard, selected: false }
      )
    );
  }, [isReset]);

  function checkSameCards(selectedIdxLen) {
    const idx1 = selectedIdx[selectedIdxLen - 2].idx;
    const idx2 = selectedIdx[selectedIdxLen - 1].idx;

    //카드 정보가 담긴 배열에서 이름이 동일하면 같은 카드
    if (cards[idx1].name == cards[idx2].name) {
      setCorrect(correct + 1);
      setSelectCards(
        selectCards.map((selectCard) =>
          selectCard.idx === idx1 || selectCard.idx === idx2
            ? { ...selectCard, selected: true }
            : selectCard
        )
      );
    } else {
      //다른 카드라면 1초 뒤 원상복귀
      setTimeout(() => {
        setSelectCards(
          selectCards.map((selectCard) =>
            selectCard.idx === idx1 || selectCard.idx === idx2
              ? { ...selectCard, selected: false }
              : selectCard
          )
        );
      }, '1000');
    }
    setSelectedIdx([]);
  }

  //selectedIdx 변경될 때마다 길이 2이상인지 확인
  useEffect(() => {
    const selectedIdxLen = selectedIdx.length;

    if (selectedIdxLen === 2) {
      checkSameCards(selectedIdxLen);
    }
  }, [selectCards]);

  return (
    <CardsContainer>
      {cards.map((card, idx) => (
        <Card
          key={idx}
          idx={idx}
          name={card.name}
          img={card.img}
          selectedIdx={selectedIdx}
          setSelectedIdx={setSelectedIdx}
          selectCards={selectCards}
          setSelectCards={setSelectCards}
        />
      ))}
    </CardsContainer>
  );
}

const CardsContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  width: 110rem;
`;
