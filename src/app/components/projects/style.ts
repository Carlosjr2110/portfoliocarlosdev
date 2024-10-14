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
  border: 2px solid transparent;
  height: 100%; 
  min-height: 250px;
  overflow: hidden; /* Evita que o conteúdo ampliado saia do card */


  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); 
    background: #282c34;
    color: #ffffff;

    /* Aplica o efeito de aumento somente ao conteúdo interno */
    & > div {
      transform: scale(1.05);
    }
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const ProjectContent = styled.div`
  transition: transform 0.3s ease; /* Efeito de zoom suave */
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