import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { cardsReset } from '../recoil/card';

export default function ResetButton() {
  const [isReset, setIsReset] = useRecoilState(cardsReset);

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
