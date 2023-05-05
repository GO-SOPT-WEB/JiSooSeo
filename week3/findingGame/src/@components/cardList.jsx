import Card from './card';

export default function CardList(props) {
  const { cards, setCorrect } = props;
  return (
    <>
      {cards.map((card, idx) => (
        <Card key={idx} name={card.name} img={card.img} />
      ))}
    </>
  );
}
