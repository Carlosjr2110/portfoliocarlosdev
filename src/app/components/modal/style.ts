import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: transparent;
  padding: 20px;
  border-radius: 8px;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
`;

export const ModalImage = styled.img`
  border-radius: 8px;
  object-fit: contain;
  
  /* Default size */
  width: 80vw;
  height: 80vh;

  /* Adjust size based on screen width */
  @media (max-width: 768px) {
    width: 90vw;
    height: 60vh;
  }

  @media (max-width: 480px) {
    width: 100vw;
    height: 50vh;
  }
`;