import styled, { keyframes } from 'styled-components';

export default function Score(props) {
  const { level, correct } = props;

  function checkAllCorrect() {
    return correct === level;
  }

  return (
    <ScoreText checkAllCorrect={checkAllCorrect()}>
      {correct}/{level}
    </ScoreText>
  );
}

const BlinkEffect = keyframes`
  50% {
    opacity: 0;
  }
`;

const ScoreText = styled.p`
  margin-top: 1rem;

  color: ${({ checkAllCorrect, theme }) =>
    checkAllCorrect ? theme.colors.blue : theme.colors.grey};
  ${({ theme }) => theme.fonts.title};

  animation: ${BlinkEffect} ${({ checkAllCorrect }) => (checkAllCorrect ? 1 : 0)}s step-end infinite;
`;
