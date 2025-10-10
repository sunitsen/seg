'use client';

import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './InnerSlider.module.css';

const InnerSlider = ({ items }) => {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!items || items.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className={`${styles.sliderContainer} ${loaded ? styles.loaded : ''}`}
    >
      <Swiper
        modules={[Pagination]}
        spaceBetween={25}
        slidesPerView={2}
        pagination={{
          clickable: true,
          dynamicBullets: true, // nicer dots
        }}
        className={`${styles.sliderWrapper} mySwiper`}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className={styles.innerCard}>
              <img src={item.icon} alt={`slide-${idx}`} className={styles.icon} />
              <h4 className={styles.name}>{item.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InnerSlider;