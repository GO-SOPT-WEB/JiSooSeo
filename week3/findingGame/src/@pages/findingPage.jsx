import styled from 'styled-components';

export default function findingPage() {
  return <Title>findingPage</Title>;
}

const Title = styled.h1`
  display: flex;
  justify-content: center;
  width: 26.875rem;
  height: 7.2188rem;
  ${({ theme }) => theme.fonts.title}
  margin-left: -1rem;
`;
