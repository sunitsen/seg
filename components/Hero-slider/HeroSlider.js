"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const images = [
  { id: 23, src: "/herosliderimage/Rectangle23.png", alt: "Rectangle 23" },
  { id: 24, src: "/herosliderimage/Rectangle24.png", alt: "Rectangle 24" },
  { id: 25, src: "/herosliderimage/Rectangle25.png", alt: "Rectangle 25" },
  { id: 26, src: "/herosliderimage/Rectangle26.png", alt: "Rectangle 26" },
  { id: 27, src: "/herosliderimage/Rectangle27.png", alt: "Rectangle 27" },
  { id: 28, src: "/herosliderimage/Rectangle28.png", alt: "Rectangle 28" },
  { id: 29, src: "/herosliderimage/Rectangle29.png", alt: "Rectangle 29" },
  { id: 30, src: "/herosliderimage/Rectangle30.png", alt: "Rectangle 30" },
  { id: 31, src: "/herosliderimage/Rectangle31.png", alt: "Rectangle 31" },
  { id: 32, src: "/herosliderimage/Rectangle32.png", alt: "Rectangle 32" },
  { id: 33, src: "/herosliderimage/Rectangle33.png", alt: "Rectangle 33" },
  { id: 34, src: "/herosliderimage/Rectangle34.png", alt: "Rectangle 34" },
  { id: 35, src: "/herosliderimage/Rectangle35.png", alt: "Rectangle 35" },
  { id: 36, src: "/herosliderimage/Rectangle36.png", alt: "Rectangle 36" },
  { id: 37, src: "/herosliderimage/Rectangle37.png", alt: "Rectangle 37" },
  { id: 38, src: "/herosliderimage/Rectangle38.png", alt: "Rectangle 38" },
];

const MultiRowSlider = () => {
  const rows = 3;
  const imagesPerRow = 5;

  return (
    <div className="space-y-4 p-4 max-w-6xl mx-auto">
      {Array.from({ length: rows }).map((_, rowIndex) => {
        const reverse = rowIndex % 2 === 1;

        return (
          <Swiper
            key={rowIndex}
            className="custom-shadow"
            modules={[Autoplay]}
            slidesPerView={imagesPerRow}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: reverse,
              pauseOnMouseEnter: true,
            }}
            speed={5000}
          >
            {images.map((img) => (
              <SwiperSlide key={`${rowIndex}-${img.id}`}>
                <div
                  className={`
                    relative w-full border border-[#232326] rounded-lg overflow-hidden
                    aspect-[16/9]  /* mobile default */
                    md:aspect-[3/3] /* desktop */
                  `}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        );
      })}
    </div>
  );
};

export default MultiRowSlider;
