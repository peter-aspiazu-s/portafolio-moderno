import {FC} from 'react';
import Link from 'next/link';
import { useSwiperSlide } from "swiper/react";
import Image from 'next/image';

interface Props {
    setActive: (active: boolean) => void;
    handleClickItemOne: () => void;
    handleClickItemTwo: () => void;
    handleClickItemThree: () => void;
    icon: boolean;
}

export const Footer: FC<Props> = ({
    setActive,
    handleClickItemOne,
    handleClickItemTwo,
    handleClickItemThree,
    icon
}) => {

    const swiperSlide = useSwiperSlide();

    if(swiperSlide.isActive){
        setActive(swiperSlide.isActive);
    }

  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-container-contact'>
                <div>{icon ? "Contáctame" : "Contact me"}</div>
                <a href="mailto:paspiazusabando@gmail.com">paspiazusabando@gmail.com</a>
                <a href="tel:+593967454468">+593 967454468</a>
            </div>

            <div className='footer-container-section'>
                <div onClick={handleClickItemOne}>{icon ? "Resumen" : "Summary"}</div>

                <div onClick={handleClickItemTwo}>{icon ? "Trabajos" : "Jobs"}</div>

                <div onClick={handleClickItemThree}>{icon ? "Contacto" : "Contact"}</div>
            </div>

            <div className='footer-container-copy'>
                <div>© Peter Aspiazu 2023</div>
            </div>
        </div>
    </div>
  )
}
