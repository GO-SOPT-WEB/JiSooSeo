import styled from 'styled-components';

export default function Card(props) {
  const { img, name } = props;

  return (
    <CardImgWrapper>
      <Img src={img} alt={name} />
    </CardImgWrapper>
  );
}

const CardImgWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20rem;
  height: 22rem;
  padding: 1rem;
  margin: 1rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.skyblue};
`;

const Img = styled.img`
  width: 15rem;
`;
