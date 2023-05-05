import CardList from '../@components/cardList';
import LevelButton from '../@components/levelButton';
import MainHeader from '../@components/mainHeader';
import ResetButton from '../@components/resetButton';
import { CARDS_LIST } from '../core/cardsData';
import { useEffect, useState } from 'react';
import { levelType } from '../core/levelType';

export default function FindingPage() {
  const [copyCards, setCopyCards] = useState([]);
  const [cards, setCards] = useState([]);
  const [isReset, setIsReset] = useState(false);

  function mixCards(level) {
    setCopyCards([]);
    setCards([]);

    let newCardData = JSON.parse(JSON.stringify(CARDS_LIST)); //카드데이터 깊은 복사

    //1~9 수 중에서 level개만큼 랜덤 숫자 뽑기
    let randomIndexArray = [];
    for (let i = 0; i < level; i++) {
      let randomNum = Math.floor(Math.random() * (8 - 0) + 0);
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

    //복사한 카드를 2개씩 랜덤 순서로 담기(완전복사)
    let realCardData = [];
    for (let i = 0; i < copyCards.length; i++) {
      realCardData.push(copyCards[i]);
      realCardData.push(copyCards[i]);
    }

    realCardData.sort(() => Math.random() - 0.5);
    console.log(realCardData);
    setCards(realCardData);
  }

  const [level, setLevel] = useState(levelType.NORMAL);
  const [correct, setCorrect] = useState(0);

  useEffect(() => {
    mixCards(level);
  }, []);

  useEffect(() => {
    mixCards(level);
  }, [level, isReset]);

  return (
    <>
      <ResetButton isReset={isReset} setIsReset={setIsReset} />
      <MainHeader level={level} correct={correct} />
      <LevelButton level={level} setLevel={setLevel} />
      <CardList cards={cards} setCorrect={setCorrect} />
    </>
  );
}
