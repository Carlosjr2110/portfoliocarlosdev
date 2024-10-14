'use client'

import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as C from './page.style';
import { useTranslation } from "react-i18next";
import i18n from "../../i18next";
import spain from '../../public/assets/espanha.png'; 
import usa from '../../public/assets/estados-unidos.png';
import bra from '../../public/assets/brasil.png';
import { Photo } from "./components/photo";
import java from '../../public/assets/javascript.jpg';
import typescript from '../../public/assets/typescript.jpg';
import react from '../../public/assets/reactjs.jpg';
import next from '../../public/assets/nextjs.jpg';
import dados from '../../public/assets/database.jpg'
import node from '../../public/assets/nodejs.png';
import html from '../../public/assets/html5-e-css3.jpg';
import { Projects } from "./components/projects";
import { useEffect, useState } from "react";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../themes';

const App: React.FC = () => {
const { t} = useTranslation();
const userName = 'Carlos Jr.';
const [isDarkMode, setIsDarkMode] = useState(true);
const [isClient, setIsClient] = useState(false);

const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
};

const toggleTheme = () => {
  setIsDarkMode((prevMode) => !prevMode);
};
const theme = isDarkMode ? darkTheme : lightTheme;
useEffect(() => {
  setIsClient(true);
}, []);

if (!isClient) {
  return null; 
}


return (
  <ThemeProvider theme={theme}>
  <C.Container>
  <C.HeaderContainer>
      <C.ThemeToggleButton onClick={toggleTheme} isDarkMode={isDarkMode} />
      <C.LanguageSelector isDarkMode={isDarkMode}>
        <button onClick={() => changeLanguage('en')}><img src={usa.src} alt="" /></button>
        <button onClick={() => changeLanguage('es')}> <img src={spain.src} alt="" /></button>
        <button onClick={() => changeLanguage('pt')}><img src={bra.src} alt="" /></button>
      </C.LanguageSelector>
    </C.HeaderContainer>
    <C.HeroSection>
      <Photo />
      <C.TextContainer>
        <C.HeroTitle>{t('hero.title')}</C.HeroTitle>
        <C.HeroSubtitle>{t('hero.subtitle')}</C.HeroSubtitle>
      </C.TextContainer>
    </C.HeroSection>

    <C.AboutSection isDarkMode={isDarkMode}>
      <h2>{t('about.title')}</h2>
      <C.AboutText isDarkMode={isDarkMode}>
        {t('about.description')}
      </C.AboutText>
    </C.AboutSection>

    <Projects/>

    <C.SkillsSection isDarkMode={isDarkMode}>
      <h2 className="">{t('skills.title')}</h2>
      <C.SkillList>
        <C.SkillItem><img src={html.src} alt="" className="skill-image" />Html e Css</C.SkillItem>
        <C.SkillItem><img src={java.src} alt="" className="skill-image" />Javascript</C.SkillItem>
        <C.SkillItem><img src={typescript.src} alt="" />Typescript</C.SkillItem>
        <C.SkillItem><img src={react.src} alt="" />ReactJs</C.SkillItem>
        <C.SkillItem><img src={next.src} alt="" />NextJs</C.SkillItem>
        <C.SkillItem><img src={dados.src} alt="" />Data Base</C.SkillItem>
        <C.SkillItem><img src={node.src} alt="" />NodeJs</C.SkillItem>

      </C.SkillList>
    </C.SkillsSection>

    <C.ContactSection isDarkMode={isDarkMode}>
      <h2>{t('contact.title')}</h2>
      <C.ContactLinks isDarkMode={isDarkMode} >
        <a href="https://github.com/carlosjr2110" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} style={{ color: theme.contactLinksColor }}/>
        </a>
        <a href="https://linkedin.com/in/carlosjrdev" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} style={{ color: theme.contactLinksColor }}/>
        </a>
        <a href="mailto:carloshumberto2110@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} style={{ color: theme.contactLinksColor }} />
        </a>
        <a href="https://wa.me/5511930258999" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} style={{ color: theme.contactLinksColor }} />
        </a>
      </C.ContactLinks>
    </C.ContactSection>

    <C.Footer isDarkMode={isDarkMode}>
      &copy; {new Date().getFullYear()} {userName}. {t('footer.rights')}
    </C.Footer>
  </C.Container>
  </ThemeProvider>
);
};

export default App;