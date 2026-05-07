import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { ToastContainer, toast } from "react-toastify";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const flashsalecarditems = [
  {
    id: 1,
    img: ".../src/assets/images/sample.png",
    title: "Bantam",
    description: "เนื้อนุ่ม ฉ่ำ หวานละมุน",
    pricebefore: "฿900",
    price: "฿10",
  },
  {
    id: 2,
    img: "src/assets/images/sample.png",
    title: "Bantam Plus",
    description: "เนื้อหวาน ละลายในปาก",
    pricebefore: "฿900",
    price: "฿20",
  },
  {
    id: 3,
    img: "src/assets/images/sample.png",
    title: "Bantum Pro",
    description: "เนื้อพรีเมี่ยม หวาน หอม",
    pricebefore: "฿900",
    price: "฿30",
  },
  {
    id: 4,
    img: "src/assets/images/sample.png",
    title: "Bantum Max",
    description: "สุดยอดความฟิน หวานฉ่ำ ดีที่สุด",
    pricebefore: "฿900",
    price: "฿40",
  },
];

export default function App() {
  const notify = () => toast.success("Purchased!");
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {/* desktop layout show  */}
        {flashsalecarditems.map((item) => (
          <SwiperSlide key={item.id} className="desktop-card pt-7">
            <div className=" w-full h-full grid justify-center items-center pb-10">
              <img
                src={item.img}
                alt={item.title}
                className="w-[300px] object-contain"
              />
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <h2 className="text-md ">{item.description}</h2>
              </div>
              <div className="flex justify-center items-center">
                <h2 className="text-xl ml-auto items-center justify-center text-orange-600 font-bold">
                  {item.price}
                </h2>
                <h2 className="text-xs ml-2 items-center justify-center text-gray-600 font-bold line-through">
                  {item.pricebefore}
                </h2>
              </div>
              <button className="flash-sale-btn" onClick={notify}>
                BUY
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* mobile*/}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {flashsalecarditems.map((item) => (
          <SwiperSlide key={item.id} className="mobile-card pt-10">
            <div className=" w-full h-full grid justify-center items-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-[300px] object-contain"
              />
              <div className="flex justify-center items-center pb-7">
                <h2 className="text-xl text-center items-center justify-center text-orange-600 font-bold">
                  {item.price}
                </h2>
                <h2 className="text-xs  ml-2 items-center justify-center text-gray-600 font-bold line-through">
                  {item.pricebefore}
                </h2>
              </div>
              <button className="flash-sale-btn mb-10" onClick={notify}>
                BUY
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ToastContainer />
    </>
  );
}
