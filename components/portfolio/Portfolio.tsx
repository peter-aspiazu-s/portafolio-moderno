import {FC} from 'react';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper";


import { Header } from '../header';
import { Main } from '../main';
import { Work } from '../work';
import { Form } from '../form';
import { Footer } from '../footer';

const Portfolio: FC = () => {

    console.log('Hola mundo desde el front')

  return (
    <>
      <Header />
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Main />
        </SwiperSlide>
        <SwiperSlide>
          <Work />
        </SwiperSlide>
        <SwiperSlide>
          <Form />
        </SwiperSlide>
        <SwiperSlide>
          <Footer />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Portfolio;