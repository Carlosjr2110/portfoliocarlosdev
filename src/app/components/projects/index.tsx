'use client'

import * as C from './style';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import Button from '../buttonLink';
import { ImageCarouselModal } from '../modal';
import { useTheme } from 'styled-components';


type Project = {
  title: string;
  description: string;
  link?: any,
  label: string;
  images?: string[];
};

export const Projects = () => {
  const { t } = useTranslation();
  const theme = useTheme(); 
  const [projects, setProjects] = useState<Project[]>([]); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [currentImages, setCurrentImages] = useState<string[]>([]); 

  const isDarkMode = theme.body === '#1e1e1e'; 


  useEffect(() => {
    const projectsData: Project[] = [
      {
        title: t('projects.project1.title'),
        description: t('projects.project1.description'),
        link: 'https://digmemogame.vercel.app',
        label: t('projects.project1.label')
      },
      {
        title: t('projects.project2.title'),
        description: t('projects.project2.description'),
        link: 'https://calculadora-imc-digital.vercel.app/',
        label: t('projects.project2.label')
      },
      {
        title: t('projects.project3.title'),
        description: t('projects.project3.description'),
        link: 'https:/pop-it-five.vercel.app',
        label: t('projects.project3.label')
      },
      {
        title: t('projects.project4.title'),
        description: t('projects.project4.description'),
        label: t('projects.project4.label'),
        images: ['']
      },
      {
        title: t('projects.project5.title'),
        description: t('projects.project5.description'),
        link: 'https://batterydigital.vercel.app',
        label: t('projects.project5.label')
      },
      {
        title: t('projects.project6.title'),
        description: t('projects.project6.description'),
        label: t('projects.project6.label'),
        images: [
          '/assets/formdev1.png',
          '/assets/formdev2.png',
          '/assets/formdev3.png',
          '/assets/formgame1.png',
          '/assets/formgame2.png',
          '/assets/formgame3.png',
          '/assets/formgame4.png',
        ]
      },
      {
        title: t('projects.project7.title'),
        description: t('projects.project7.description'),
        label: t('projects.project7.label'),
        images: [
          '/assets/awax1.png',
          '/assets/awax2.png',
          '/assets/awax3.png',
          '/assets/awax4.png',
          '/assets/awax5.png',
          '/assets/awax6.png',
          '/assets/star1.png',
          '/assets/star2.png',
          '/assets/star3.png',
          '/assets/star4.png',
          '/assets/medicenter1.png'
        ]
      },
    ];
    setProjects(projectsData);
  }, [t]);

  const handleOpenModal = (images: string[]) => {
    setCurrentImages(images);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    
    <C.ProjectSection isDarkMode={isDarkMode}>
      <h2>{t('projects.title')}</h2>
      <C.CarouselWrapper>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
          style={{ width: '100%', height: 'auto' }}
          breakpoints={{
            320: { 
              slidesPerView: 1, 
              spaceBetween: 10, 
            },
            425: { 
              slidesPerView: 1, 
              spaceBetween: 10, 
            }, 
            768: { 
              slidesPerView: 2, 
              spaceBetween: 10, 
            },
           
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <C.ProjectCard>
                <C.ProjectTitle>{project.title}</C.ProjectTitle>
                <C.ProjectDescription>{project.description}</C.ProjectDescription>
                {project.link ? (
                <Button label={t(project.label)} link={project.link} />
              ) : project.images ? (
                <Button label={t(project.label)} onClick={() => handleOpenModal(project.images!)} />
              ) : null}             
              </C.ProjectCard>
            </SwiperSlide>
          ))}
            <div className="custom-swiper-pagination" style={{ marginTop: '5px' }}></div>

        </Swiper>
      </C.CarouselWrapper>
      {isModalOpen && <ImageCarouselModal images={currentImages} onClose={handleCloseModal} />}

    </C.ProjectSection>
  );
};