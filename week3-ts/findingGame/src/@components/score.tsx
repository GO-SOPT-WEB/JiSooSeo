import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { MainHeaderProps } from '../type/scoreType';

export default function Score(props: MainHeaderProps) {
  const { level, correct, setOnModal } = props;
  const [correctOneCard, setCorrectOneCard] = useState(false);

  function checkAllCorrect() {
    level === correct && setOnModal(true);
  }

  useEffect(() => {
    correct !== 0 && setCorrectOneCard(true);
    setTimeout(() => {
      setCorrectOneCard(false);
    }, 2000);
    checkAllCorrect();
  }, [correct]);

  return (
    <ScoreText correctOneCard={correctOneCard}>
      {correct}/{level}
    </ScoreText>
  );
}

const BlinkEffect = keyframes`
  50% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const ScoreText = styled.p<{ correctOneCard: boolean }>`
  margin-top: 1rem;

  color: ${({ correctOneCard, theme }) => (correctOneCard ? theme.colors.blue : theme.colors.grey)};
  ${({ theme }) => theme.fonts.title};

  animation: ${BlinkEffect} ${({ correctOneCard }) => (correctOneCard ? 1 : 0)}s step-end infinite;
`;
