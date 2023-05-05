import CardList from '../@components/cardList';
import LevelButton from '../@components/levelButton';
import MainHeader from '../@components/mainHeader';
import ResetButton from '../@components/resetButton';
import { CARDS_LIST } from '../core/cardsData';
import { useEffect, useState } from 'react';
import { levelType } from '../core/levelType';
import styled from 'styled-components';

export default function FindingPage() {
  const [copyCards, setCopyCards] = useState([]);
  const [cards, setCards] = useState([]);
  const [isReset, setIsReset] = useState(false);

  function mixCards(level) {
    console.log('들어옴1' + level);
    let newCardData = JSON.parse(JSON.stringify(CARDS_LIST)); //카드데이터 깊은 복사

    //1~9 수 중에서 level개만큼 랜덤 숫자 뽑기
    let randomIndexArray = [];
    for (let i = 0; i < level; i++) {
      console.log('들어옴2');

      let randomNum = Math.floor(Math.random() * (9 - 0) + 0);
      if (randomIndexArray.indexOf(randomNum) === -1) {
        randomIndexArray.push(randomNum);
      } else {
        i--;
      }
    }

    //랜덤 숫자의 인덱스에 해당하는 카드 정보 담기
    for (let i = 0; i < level; i++) {
      setCopyCards((copyCards) => [...copyCards, newCardData[randomIndexArray[i]]]);
    }
  }

  function makeCardSet() {
    let realCardData = [];
    for (let i = 0; i < copyCards.length; i++) {
      realCardData.push(copyCards[i]);
      realCardData.push(copyCards[i]);
    }

    realCardData.sort(() => Math.random() - 0.5);
    setCards(realCardData);
  }

  const [level, setLevel] = useState(levelType.EASY);
  const [correct, setCorrect] = useState(0);

  //맨처음 카드 깔기
  useEffect(() => {
    mixCards(level);
  }, []);

  useEffect(() => {
    //복사한 카드를 2개씩 랜덤 순서로 담기(완전복사)
    makeCardSet();
  }, [copyCards]);

  //레벨 변경 시마다 카드 깔기
  useEffect(() => {
    setCopyCards([]);
    setCards([]);

    mixCards(level);
  }, [level, isReset]);

  useEffect(() => {
    setCopyCards([]);
    setCards([]);
  }, [isReset]);

  return (
    <>
      <ResetButton isReset={isReset} setIsReset={setIsReset} />
      <MainHeader level={level} correct={correct} />
      <MainSectionWrapper>
        <LevelButton level={level} setLevel={setLevel} />
        <CardList cards={cards} setCorrect={setCorrect} />
      </MainSectionWrapper>
    </>
  );
}

const MainSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
