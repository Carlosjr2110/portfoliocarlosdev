import styled from 'styled-components';

export const ProjectSection = styled.section<{ isDarkMode: boolean }>`
  background: ${({ theme }) => theme.projectSectionBackground};
  color: ${({ theme }) => theme.text};
  padding: 20px 0;
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 10px;

  @media (max-width: 768px) {
    margin-top:5px;  
  }

  @media (max-width: 480px) {
    margin-top: 10px;  
  }
`;



export const ProjectCard = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #282c34;
  background: #4b5563;

  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, border 0.3s ease; 
  border: 2px solid transparent;
  height: 100%; 
  min-height: 250px;


  &:hover {
    transform: scale(1.05); 
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Adiciona uma sombra mais forte para dar a impressão de estar mais próximo */
    background: #282c34;
      
      color: #ffffff; 
    
    
     p {
      color: #ffffff;
    }
  }


  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 2px;
  color: #61dafb;
`;

export const ProjectDescription = styled.p`
  font-size: 1em;
  color: #c9c9c9;
  flex-grow: 1;
`;