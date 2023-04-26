import styled from 'styled-components';

export default function MainHeader() {
  return (
    <header>
      <Title>잔망루피를 찾아라!</Title>
    </header>
  );
}

const Title = styled.h1`
  ${({ theme }) => theme.fonts.title}
`;
