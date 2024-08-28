import styled from 'styled-components';


export const Container = styled.div`
  font-family: 'Arial, sans-serif';
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.body};
  line-height: 1.6;
  padding: 5px;
  margin: 0;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  
`;

export const ThemeToggleButton = styled.button<{ isDarkMode: boolean }>`
  width: 60px;
  height: 30px;
  border-radius: 15px;
  border: none;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#ccc' : '#333')};
  position: relative;
  cursor: pointer;
  outline: none;

  &::before {
    content: '';
    width: 25px;
    height: 25px;
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#333' : '#ccc')};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: ${({ isDarkMode }) => (isDarkMode ? '30px' : '5px')};
    transform: translateY(-50%);
    transition: left 0.3s ease;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 25px;
    &::before {
      width: 20px;
      height: 20px;
      left: ${({ isDarkMode }) => (isDarkMode ? '25px' : '5px')};
    }
  }
`;

export const LanguageSelector = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  justify-content: flex-end;
  padding: 5px;

  button {
    margin: 0 2px;
    cursor: pointer;
    border: none;
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#333' : '#fff')};
    
    img {
      width: 20px;
      height: 20px;
    }
  }
  @media (max-width: 768px) {
    justify-content: center;
    button img {
      width: 18px;
      height: 18px;
    }
  }

  @media (max-width: 480px) {
    button img {
      width: 16px;
      height: 16px;
    }
  }
`;


export const Section = styled.section`
  padding: 8px 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 10px;
  }
  @media (max-width: 480px) {
    padding: 20px 5px;
  }
`;

export const HeroSection = styled(Section)`
  background: ${({ theme }) => theme.heroBackground};
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 3em;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.5em;
  }
  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 25px;
  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;


export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  text-align: center; 
  flex: 1;
  margin-left: -200px;  

  @media (max-width: 768px) {
    margin-left: 0;  
  }

  @media (max-width: 480px) {
    margin-left: 0;  
  }
`;

export const AboutSection = styled(Section)<{ isDarkMode: boolean }>`
  background: ${({ isDarkMode }) => (isDarkMode ? '#3e3e3e' : '#f4f4f4')};
  color: ${({ isDarkMode }) => (isDarkMode ? '#f4f4f4' : '#333')};
`;

export const AboutText = styled.p<{ isDarkMode: boolean }>`
  margin: 20px 0;
  font-size: 18px;
  line-height: 1.6;
  color: ${({ isDarkMode }) => (isDarkMode ? '#e0e0e0' : '#333')};
  text-shadow: ${({ isDarkMode }) => (isDarkMode ? '1px 1px 3px rgba(0, 0, 0, 0.3)' : '1px 1px 3px rgba(0, 0, 0, 0.1)')};

  &:first-child {
    font-size: 20px;
    font-weight: bold;
    color: ${({ isDarkMode }) => (isDarkMode ? '#4a90e2' : '#2980b9')};
  }

  &:last-child {
    font-size: 16px;
    color: ${({ isDarkMode }) => (isDarkMode ? '#b0b0b0' : '#666')};
  }
`;

export const SkillsSection = styled(Section)<{ isDarkMode: boolean }>`
  background: ${({ isDarkMode }) => (isDarkMode ? '#3e3e3e' : '#f4f4f4')};
  color: ${({ isDarkMode }) => (isDarkMode ? '#f4f4f4' : '#333')};

  @media (max-width: 768px) {
    padding: 20px 10px;
  }

  @media (max-width: 480px) {
    padding: 15px 5px;
  }
`;

export const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100px;

  img {
    width: 50px;
    height: auto;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      width: 45px;
    }

    @media (max-width: 480px) {
      width: 40px;
    }
  }

`;

export const ContactSection = styled(Section)<{ isDarkMode: boolean }>`
  background: ${({ theme }) => theme.heroBackground};
  color: ${({ theme }) => theme.text};
  padding: 8px 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 4px 10px;
  }

  @media (max-width: 480px) {
    padding: 2px 5px;
  }
`;

export const ContactLinks = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 1.5em;
  color: ${({ theme }) => theme.contactLinksColor};

  @media (max-width: 480px) {
    gap: 15px;
    font-size: 1.2em;
  }
`;

export const Footer = styled.footer<{ isDarkMode: boolean }>`
  background: ${({ theme }) => theme.heroBackground};
  color: ${({ theme }) => theme.text};
  text-align: center;
  padding: 5px;
`;