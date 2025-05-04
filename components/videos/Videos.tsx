import Image from 'next/image'
import { FC } from 'react'
import { useSwiperSlide } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation, Autoplay, Controller } from 'swiper';

interface videosProps {
    setActive: (active: boolean) => void;
    icon: boolean;
}

export const Videos: FC<videosProps> = ({ icon, setActive }) => {

    const swiperSlide = useSwiperSlide();

    if(swiperSlide.isActive){
        setActive(!swiperSlide.isActive);
    }

  return (
    <div className='certifications'>
        <div className='certifications-container'>
            <div className="certifications-title">{icon ? "Tutoriales de Programación" : "Programming Tutorials"}</div>

            <Swiper navigation={true} autoplay={true} modules={[Navigation, Autoplay]} className="mySwiperCertifications">
                <SwiperSlide>
                    <div className='certifications-image'>
                        <iframe className='video-yt' src="https://www.youtube.com/embed/nHd_pgpEmSY?si=wpkhuBH0EFy4NcUV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='certifications-image'>
                        <iframe className='video-yt' src="https://www.youtube.com/embed/Y2eYTBTJYFw?si=yU0wtNM3IFB-V8B6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}
