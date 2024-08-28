import styled from 'styled-components';
import { keyframes } from 'styled-components';

const rotateY = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;

export const Container = styled.div`
  perspective: 1000px;
  width: 150px;
  height: 150px;

`;

export const Coin = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: ${rotateY} 5s linear infinite;
`;

export const Face = styled.div<{ $front?: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%; 
  overflow: hidden; 
  ${(props) => (props.$front ? '' : 'transform: rotateY(180deg);')}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%; /* Garante que a imagem seja redonda */
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%; /* Garante que o logo seja redondo */
`;