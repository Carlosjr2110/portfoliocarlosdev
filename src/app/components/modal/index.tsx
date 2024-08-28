import * as C from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type ImageCarouselModalProps = {
  images: string[];
  onClose: () => void;
};

export const ImageCarouselModal: React.FC<ImageCarouselModalProps> = ({ images, onClose }) => {
  return (
    <C.ModalOverlay onClick={onClose}>
      <C.ModalContent onClick={(e) => e.stopPropagation()}>
        <Swiper           
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
        style={{ width: '100%', height: 'auto' }}
      >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <C.ModalImage src={image} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </C.ModalContent>
    </C.ModalOverlay>
  );
};


