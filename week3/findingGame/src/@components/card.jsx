import styled from 'styled-components';

export default function card({ imgSrc, id }) {
  return (
    <CardWrapper>
      <Card src={imgSrc} alt={`잔망루피${id}`} />
    </CardWrapper>
  );
}

const CardWrapper = styled.article``;

const Card = styled.img``;
