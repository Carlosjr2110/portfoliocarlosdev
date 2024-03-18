import { useState } from "react";
import fechar from '../assets/images/fechar.png';
import seta_e from '../assets/images/seta-esquerda.png';
import seta_d from '../assets/images/seta-direita.png';



type Props = {
    fotos: string[];
    closeModal: () => void;
}

export const Modal = ( {fotos, closeModal}: Props) => {

const [currentIndex, setCurrentIndex] = useState(0);
const [transitioning, setTransitioning] = useState(false)

  const goToNextSlide = () => {
    setTransitioning(true)
    setTimeout(() => {
    setCurrentIndex((prevIndex) => (prevIndex === fotos.length - 1 ? 0 : prevIndex + 1));
    setTransitioning(false)
  }, 300);
  };

  const goToPrevSlide = () => {
    setTransitioning(true)
    setTimeout(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? fotos.length - 1 : prevIndex - 1));
    setTransitioning(false)
  }, 300);
  };
   
    return (
      <div className="relative z-30">
    <div className="fixed inset-0 flex justify-center items-center bg-white/60">
      <button onClick={goToPrevSlide} className="absolute left-16 top-[250px] md:left-0 md:relative md:top-0 md:flex md:justify-between md:items-center">
        <img className="w-8 h-8" src={seta_e.src} alt="" />
      </button>
      <img
        src={`/assets/${fotos[currentIndex]}`}
        alt="Imagem"
        className={`modal-image ${transitioning ? "transitioning" : ""} w-[370px] h-[190px] rounded-l md:w-[1000px] md:h-[450px]`}
      />
      <button onClick={goToNextSlide} className="absolute top-[250px] right-16 md:right-0 md:relative md:top-0 md:flex md:justify-between md:items-center">
        <img className="w-8 h-8" src={seta_d.src} alt="" />
      </button>
      <button onClick={closeModal} className="absolute top-[250px] md:relative md:flex md:justify-between md:top-0 md:items-center">
        <img className="w-8 h-8" src={fechar.src} alt="" />
      </button>
    </div>
  </div>
);
}