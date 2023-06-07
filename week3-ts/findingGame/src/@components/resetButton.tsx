import React from 'react';
import styled from 'styled-components';

interface ResetButtonProps {
  isReset: boolean;
  setIsReset: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ResetButton(props: ResetButtonProps) {
  const { isReset, setIsReset } = props;

  function reset() {
    setIsReset(!isReset);
  }
  return <Button onClick={reset}>RESET</Button>;
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
