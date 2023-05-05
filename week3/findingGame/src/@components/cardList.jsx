import styled from 'styled-components';
import Card from './card';

export default function CardList(props) {
  const { cards, setCorrect } = props;
  return (
    <CardsContainer>
      {cards.map((card, idx) => (
        <Card key={idx} name={card.name} img={card.img} />
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
