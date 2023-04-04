import {FC} from 'react';
import Link from 'next/link';
import { useSwiperSlide } from "swiper/react";

interface Props {
    setActive: (active: boolean) => void;
    handleClickItemOne: () => void;
    handleClickItemTwo: () => void;
    handleClickItemThree: () => void;
}

export const Footer: FC<Props> = ({
    setActive,
    handleClickItemOne,
    handleClickItemTwo,
    handleClickItemThree
}) => {

    const swiperSlide = useSwiperSlide();

    if(swiperSlide.isActive){
        setActive(swiperSlide.isActive);
    }

  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-container-contact'>
                <div>Contáctame</div>
                <a href="mailto:paspiazusabando@gmail.com">paspiazusabando@gmail.com</a>
                <a href="tel:+593967454468">+593 967454468</a>
            </div>

            <div className='footer-container-section'>
                <div onClick={handleClickItemOne}>Resumen</div>

                <div onClick={handleClickItemTwo}>Trabajos</div>

                <div onClick={handleClickItemThree}>Contactar</div>
            </div>

            <div className='footer-container-copy'>
                <div>© Peter Aspiazu 2023</div>
            </div>
        </div>
    </div>
  )
}
