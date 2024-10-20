// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './homepage.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export default function HomeSlider() {
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
            <div className="carousel_content">
                <div className="carousel_first_container">
                    <span className="carousel_tag" style={{'fontSize': '16px', 'fontWeight': 600,"color": "black"}}> 
                        #SurgeryKeHarModPe<br/>
                        <span className="color-primary">Hospital Bridge hai na!</span>
                    </span>
                    <p className="curousel_sub">We assist you in getting the best post-operative care, so you can recover faster.</p>
                    </div>
                <img
                    src="images/slide-1.jpg"
                    loading="lazy"
                />
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="carousel_content">
                <div className="carousel_first_container">
                    <span className="carousel_tag" style={{'fontSize': '16px', 'fontWeight': 600,"color": "black"}}> 
                        #SurgeryKeHarModPe<br/>
                        <span className="color-primary">Hospital Bridge hai na!</span>
                    </span>
                    <p className="curousel_sub">We assist you in getting the best post-operative care, so you can recover faster.</p>
                    </div>
                <img
                    src="images/slide-2.jpg"
                    loading="lazy"
                />
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="carousel_content">
                <div className="carousel_first_container">
                    <span className="carousel_tag" style={{'fontSize': '16px', 'fontWeight': 600,"color": "black"}}> 
                        #SurgeryKeHarModPe<br/>
                        <span className="color-primary">Hospital Bridge hai na!</span>
                    </span>
                    <p className="curousel_sub">We assist you in getting the best post-operative care, so you can recover faster.</p>
                    </div>
                <img
                    src="images/slide-3.jpg"
                    loading="lazy"
                />
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
