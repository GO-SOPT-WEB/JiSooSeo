import styled from 'styled-components';

export default function Card({ imgSrc, id }) {
  return (
    <CardWrapper>
      <CardImg src={imgSrc} alt={`잔망루피${id}`} />
    </CardWrapper>
  );
}

const CardWrapper = styled.article``;

const CardImg = styled.img``;
