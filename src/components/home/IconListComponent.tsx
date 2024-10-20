import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './IconListComponent.css';

interface CarouselItem {
  icon: string; // URL to the icon image
  text: string;
}

interface CarouselProps {
  title: string;
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ title, items }) => {
  return (
    <div className="carousel-container">
      <h2>{title}</h2>
      <Swiper spaceBetween={20} slidesPerView="auto" loop>
        {items.map((item, index) => (
          <SwiperSlide key={index} className="carousel-slide">
            <div className="carousel-item">
              <img src={item.icon} alt={item.text} className="carousel-icon" />
              <p>{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
