'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

export function HomePageCarousel() {
  return (
    <Swiper
      loop={true}
      navigation={false}
      modules={[Autoplay, Pagination]}
      pagination={{ dynamicBullets: true, clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: true }}
      className="h-[30vh] sm:max-md:h-[40vh] md:h-[60vh] xl:h-[80vh] select-none rounded-md"
    >
      {Array(9)
        .fill(null)
        .map((_, i) => (
          <SwiperSlide
            key={i}
            className="bg-cover rounded-md"
            style={{
              backgroundImage: `url(/images/banner/${i + 1}.jpg)`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100%'
            }}
          ></SwiperSlide>
        ))}
    </Swiper>
  );
}
