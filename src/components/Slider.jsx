import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../assets/IMG_1462.jpg";
import image2 from "../assets/IMG_0865.jpg";
import image3 from "../assets/IMG_1622.jpg";
import image4 from "../assets/IMG_1623.jpg";
import image5 from "../assets/IMG_1624.jpg";
import image6 from "../assets/IMG_1625.jpg";
import image7 from "../assets/IMG_1626.jpg";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
      className='mySwiper'
    >
      <SwiperSlide className='swips'>
        <img src={image1} alt='image1' />
      </SwiperSlide>
      <SwiperSlide className='swips'>
        <img src={image2} alt='image2' />
      </SwiperSlide>
      <SwiperSlide className='swips'>
        <img src={image3} alt='image3' />
      </SwiperSlide>
      <SwiperSlide className='swips'>
        <img src={image4} alt='image4' />
      </SwiperSlide>
      <SwiperSlide className='swips'>
        <img src={image5} alt='image5' />
      </SwiperSlide>
      <SwiperSlide className='swips'>Slide 6</SwiperSlide>
      <SwiperSlide className='swips'>Slide 7</SwiperSlide>
      <SwiperSlide className='swips'>Slide 8</SwiperSlide>
      <SwiperSlide className='swips'>Slide 9</SwiperSlide>
    </Swiper>
  );
};

export default Slider;
