import styled from 'styled-components';
import ModalPortal from './modalPortal';

export default function ModalFrame({ children, setOnModal }) {
  function closeModal() {
    setOnModal(false);
  }

  return (
    <ModalPortal>
      <ModalWrapper onClick={closeModal}>
        <Modal>
          {children}
          <Button onClick={closeModal}>게임으로 돌아가기</Button>
        </Modal>
      </ModalWrapper>
    </ModalPortal>
  );
}

const ModalWrapper = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.7);
`;

const Modal = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50rem;
  height: 30rem;

  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.blue};
  ${({ theme }) => theme.fonts.title};
`;

const Button = styled.button`
  width: 30rem;
  height: 7rem;
  margin-top: 2rem;

  border-radius: 1rem;

  color: ${({ theme }) => theme.colors.grey};
  background-color: ${({ theme }) => theme.colors.skyblue};
  ${({ theme }) => theme.fonts.title};
`;
