import styled from 'styled-components';
import { levelType } from '../core/levelType';

export default function LevelButton(props) {
  const { level, setLevel } = props;

  function changeLevel(levelType) {
    setLevel(levelType);
  }

  return (
    <ButtonWrapper>
      <Button onClick={() => changeLevel(levelType.EASY)}>easy</Button>
      <Button onClick={() => changeLevel(levelType.NORMAL)}>normal</Button>
      <Button onClick={() => changeLevel(levelType.HARD)}>hard</Button>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.section`
  display: flex;
`;

const Button = styled.button`
  width: 8rem;
  padding: 1rem 2rem;
  margin: 1rem;

  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.blue};
  ${({ theme }) => theme.fonts.text};
`;
