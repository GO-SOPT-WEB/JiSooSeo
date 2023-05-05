import CardList from '../@components/cardList';
import LevelButton from '../@components/levelButton';
import MainHeader from '../@components/mainHeader';
import ResetButton from '../@components/resetButton';
// import { CARDS_LIST } from '../core/cardsData';
import { useEffect, useState } from 'react';

export default function FindingPage() {
  // const [cards, setCards] = useState([]);
  // const [newCard, setNewCard] = useState({
  //   id: '',
  //   img: '',
  // });
  // const { id, img } = newCard;

  // function mixCards(level) {
  //   let randomNum = [];
  //   let newCardData = JSON.parse(JSON.stringify(CARDS_LIST)); //카드데이터 깊은 복사

  //   //1~9 수 중에서 level개만큼 랜덤 숫자 뽑기
  //   for (let i = 0; i < level; i++) {
  //     randomNum.push(Math.floor(Math.random() * (9 - 1) + 1));
  //   }

  //   // console.log(newCardData);
  //   //랜덤 숫자와 같은 id를 가진 데이터 가져오기
  //   //randomNum.forEach(() => cardData);
  //   // for (let i = 0; i < randomNum.length; i++) {
  //   //   console.log(newCardData);
  //   //   //  cardData.filter((cardData.id)=>(cardData.id));

  //   for (let i = 0; i < newCardData.length; i++) {
  //     for (let j = 0; j < level; j++) {
  //       if (newCardData[i].id === randomNum[j]) {
  //         setCards([...cards, newCardData[i]]);
  //       }
  //     }
  //   }
  // }

  // mixCards(5);
  const [level, setLevel] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [correct, setCorrect] = useState(0);

  useEffect(() => {}, [level]);

  return (
    <>
      <ResetButton />
      <MainHeader level={level} correct={correct} />
      <LevelButton level={level} setLevel={setLevel} />
      <CardList />
    </>
  );
}
