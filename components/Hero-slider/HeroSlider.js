"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const MultiRowSlider = () => {
  const rows = 3;
  const boxesPerRow = 10;

  const generateBoxes = (rowIndex) =>
    Array.from({ length: boxesPerRow }).map((_, i) => ({
      id: `${rowIndex}-${i}`,
      title: `Box ${i + 1}`,
      color: `hsl(${(i + 1) * 36 + rowIndex * 30}, 70%, 50%)`,
    }));

  return (
    <div className="space-y-4 p-4 max-w-6xl mx-auto">
      {Array.from({ length: rows }).map((_, rowIndex) => {
        const boxes = generateBoxes(rowIndex);
        const reverse = rowIndex % 2 === 1; // alternate direction

        return (
          <Swiper
            key={rowIndex}
            modules={[Autoplay]}
            slidesPerView={5} // how many boxes visible at once
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: reverse,
              pauseOnMouseEnter: true,
            }}
            speed={5000} // speed of autoplay in ms
          >
            {boxes.map((box) => (
              <SwiperSlide key={box.id}>
                <div
                  className="h-24 flex items-center justify-center text-white font-bold rounded-lg"
                  style={{ backgroundColor: box.color }}
                >
                  {box.title}
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
