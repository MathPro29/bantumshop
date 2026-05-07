import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  {
    id: 1,
    img: "public/1.png",
    title: "Mountain View",
    description: "Explore beautiful mountain landscapes",
  },
  {
    id: 2,
    img: "public/2.png",
    title: "Beach Paradise",
    description: "Relax near the ocean",
  },
  {
    id: 3,
    img: "public/3.png",
    title: "City Lights",
    description: "Discover modern city life",
  },
  {
    id: 4,
    img: "public/bannerads.png",
    title: "City Lights",
    description: "Discover modern city life",
  },
];

export default function ImageSlider() {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        className="mySwiper h-full w-full"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="slide w-full h-full">
              <img
                src={image.img}
                alt={image.title}
                className="w-full h-full object-contain object-center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
