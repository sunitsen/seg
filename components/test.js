import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";

const Test = () => {
  return (
    <Swiper
      direction="vertical"
      slidesPerView="auto"
      centeredSlides={true}
      grabCursor={true}
      mousewheel={true}
      spaceBetween={24}
      effect="coverflow"
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 250,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow, Mousewheel]}
      className="swiper-container"
    >
      <SwiperSlide className="swiper-slide">
        <img src="https://picsum.photos/192/192" alt="" className="image" />
        <div className="content">
          <h2 className="content__title">Title</h2>
          <p className="content__text">When I was young. I was young.</p>
          <a href="#" className="content__link">
            Read more
          </a>
        </div>
      </SwiperSlide>

      <SwiperSlide className="swiper-slide">
        <img src="https://picsum.photos/192/192" alt="" className="image" />
        <div className="content">
          <h2 className="content__title">Title</h2>
          <p className="content__text">When I was young. I was young.</p>
          <a href="#" className="content__link">
            Read more
          </a>
        </div>
      </SwiperSlide>

      <SwiperSlide className="swiper-slide">
        <img src="https://picsum.photos/192/192" alt="" className="image" />
        <div className="content">
          <h2 className="content__title">Title</h2>
          <p className="content__text">When I was young. I was young.</p>
          <a href="#" className="content__link">
            Read more
          </a>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Test;
