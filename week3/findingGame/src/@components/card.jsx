import styled from 'styled-components';

export default function Card(props) {
  const { img, name } = props;

  return (
    <CardWrapper>
      <CardImg src={img} alt={name} />
    </CardWrapper>
  );
}

const CardWrapper = styled.article``;

const CardImg = styled.img``;
