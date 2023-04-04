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

  const [ active, setActive ] = useState(false);

  const handleClickItemOne = () => {
    const element = document.getElementsByClassName('swiper-pagination-bullet')[0] as HTMLElement;
    element.click();
  }
  const handleClickItemTwo = () => {
      const element = document.getElementsByClassName('swiper-pagination-bullet')[1] as HTMLElement;
      element.click();
  }
  const handleClickItemThree = () => {
      const element = document.getElementsByClassName('swiper-pagination-bullet')[2] as HTMLElement;
      element.click();
  }

  return (
    <>
      <Header 
        active={active} 
        handleClickItemOne={handleClickItemOne}
        handleClickItemTwo={handleClickItemTwo}
        handleClickItemThree={handleClickItemThree}
      />
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
        <SwiperSlide data-hash="slide1">
          <Main setActive={setActive} />
        </SwiperSlide>
        <SwiperSlide data-hash="slide2">
          <Work setActive={setActive} />
        </SwiperSlide>
        <SwiperSlide data-hash="slide3">
          <Form setActive={setActive} />
        </SwiperSlide>
        <SwiperSlide data-hash="slide3">
          <Footer 
            setActive={setActive} 
            handleClickItemOne={handleClickItemOne}
            handleClickItemTwo={handleClickItemTwo}
            handleClickItemThree={handleClickItemThree}
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Portfolio;