import styled from 'styled-components';
import Card from './card';
import { useEffect, useState } from 'react';
import { levelType } from '../core/levelType';
import { reverseCardEasy, reverseCardHard, reverseCardNormal } from '../core/reverseCard';

export default function CardList(props) {
  const { level, cards, setCorrect } = props;
  //카드 전체의 선택여부
  const [selectCards, setSelectCards] = useState(reverseCardEasy);
  //선택된 카드의 인덱스 두 개 담기는 배열
  const [selectedIdx, setSelectedIdx] = useState();

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
        console.log('aaaaaa');
        break;
    }
  }, [level]);

  //selectedIdx 변경될 때마다 길이 2이상인지 확인 후 ->
  //cards[idx] setCorrect로 높이기
  useEffect(() => {
    // console.log(selectCards);
    // console.log(selectedIdx);
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
