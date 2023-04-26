import styled from 'styled-components';
import Score from './score';

export default function MainHeader() {
  return (
    <Header>
      <Title>잔망루피를 찾아라!</Title>
      <Score />
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 10rem;

  background-color: ${({ theme }) => theme.colors.blue};
`;
const Title = styled.h1`
  ${({ theme }) => theme.fonts.title};
`;
