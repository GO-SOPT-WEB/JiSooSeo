import styled from 'styled-components';

export default function ResetButton() {
  return <Button>RESET</Button>;
}

const Button = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;

  width: 10rem;
  padding: 1rem 2rem;

  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.blue};
  ${({ theme }) => theme.fonts.title};
`;
