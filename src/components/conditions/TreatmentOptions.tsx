
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './TreatmentOptions.css';


interface TreatmentOptionsProps {
  treatments: string[];
}

const TreatmentOptions: React.FC<TreatmentOptionsProps> = ({ treatments }) => {
  return (
    <div className="treatment-options">
      <h2>Treatment Options</h2>
      <Swiper spaceBetween={20} slidesPerView={1} pagination={{ clickable: true }}>
        {treatments.map((treatment, index) => (
          <SwiperSlide key={index}>
            <div className="treatment-item">{treatment}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TreatmentOptions;
