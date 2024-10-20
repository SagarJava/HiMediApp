// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './homepage.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import OnBoard1 from '../../pages/onBoard1';
import OnBoard2 from '../../pages/onBoard2';
import OnBoard3 from '../../pages/onBoard3';
import SplashPage from '../../pages/splashPage';

export default function HomeSlider1() {
  return (
    <>
      <Swiper
        style={{
            // @ts-ignore
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        lazy={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
                <SplashPage/>
        </SwiperSlide>
        <SwiperSlide>
        <div className="carousel_content">
                <OnBoard2/></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="carousel_content">
        <OnBoard3/>
                </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
