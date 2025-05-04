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
import { Certifications } from '../certifications/Certifications';
import Image from 'next/image';
import { Videos } from '../videos/Videos';

const Portfolio: FC = () => {

  const [ active, setActive ] = useState(false);
  const [ icon, setIcon ] = useState(false);

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

  const handleClickItemFour = () => {
      const element = document.getElementsByClassName('swiper-pagination-bullet')[3] as HTMLElement;
      element.click();
  }

  const handleClickItemFive = () => {
      const element = document.getElementsByClassName('swiper-pagination-bullet')[4] as HTMLElement;
      element.click();
  }

  const handleClickIcon = () => {
    setIcon(!icon);
  }

  return (
    <>
      <Header 
        active={active} 
        handleClickItemOne={handleClickItemOne}
        handleClickItemTwo={handleClickItemTwo}
        handleClickItemThree={handleClickItemThree}
        handleClickItemFour={handleClickItemFour}
        handleClickItemFive={handleClickItemFive}
        handleClickIcon={handleClickIcon}
        icon={icon}
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
          <Main setActive={setActive} icon={icon} />
        </SwiperSlide>
        <SwiperSlide data-hash="slide2">
          <Work setActive={setActive} icon={icon} />
        </SwiperSlide>
        <SwiperSlide data-hash="slide3">
          <Form setActive={setActive} icon={icon} />
        </SwiperSlide>
        <SwiperSlide data-hash="slide4">
          <Videos setActive={setActive} icon={icon} />
        </SwiperSlide>
        <SwiperSlide data-hash="slide5">
          <Certifications setActive={setActive} icon={icon} />
        </SwiperSlide>
        <SwiperSlide data-hash="slide6">
          <Footer 
            setActive={setActive} 
            handleClickItemOne={handleClickItemOne}
            handleClickItemTwo={handleClickItemTwo}
            handleClickItemThree={handleClickItemThree}
            icon={icon}
          />
        </SwiperSlide>
      </Swiper>
      <a href={icon ? "https://wa.link/iyespw" : "https://wa.link/8u26zk"} target='_blank' className='whatsapp'>
                <Image src="/image/whatsapp.png" alt="" layout="fill" />
            </a>
    </>
  )
}

export default Portfolio;