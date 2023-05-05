import styled from 'styled-components';

export default function Score(props) {
  const { level, correct } = props;
  return (
    <ScoreText>
      {correct}/{level}
    </ScoreText>
  );
}

const ScoreText = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  ${({ theme }) => theme.fonts.title};
`;
