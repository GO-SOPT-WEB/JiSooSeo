import styled from 'styled-components';

export default function Score() {
  return <ScoreText>/</ScoreText>;
}

const ScoreText = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  ${({ theme }) => theme.fonts.title};
`;
