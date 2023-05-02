import styled from 'styled-components';

export default function LevelButton() {
  return (
    <>
      <Button>easy</Button>
      <Button>middle</Button>
      <Button>hard</Button>
    </>
  );
}

const Button = styled.button`
  width: 8rem;
  padding: 1rem 2rem;
  margin: 1rem;

  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.blue};
  ${({ theme }) => theme.fonts.text};
`;
