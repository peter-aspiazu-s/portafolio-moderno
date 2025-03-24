import Image from 'next/image'
import { FC } from 'react'
import { useSwiperSlide } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation, Autoplay } from 'swiper';

interface certificationsProps {
    setActive: (active: boolean) => void;
    icon: boolean;
}

export const Certifications: FC<certificationsProps> = ({ icon, setActive }) => {

    const swiperSlide = useSwiperSlide();

    if(swiperSlide.isActive){
        setActive(!swiperSlide.isActive);
    }

  return (
    <div className='certifications'>
        <div className='certifications-container'>
            <div className="certifications-title">{icon ? "Mis Certificaciones" : "My Certifications"}</div>

            <Swiper navigation={true} autoplay={true} modules={[Navigation, Autoplay]} className="mySwiperCertifications">
                <SwiperSlide>
                    <div className='certifications-image'>
                        <Image src="/image/certificado-freecodecamp-webdesign.png" alt="" layout="responsive"
                        width={800}
                        height={600} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='certifications-image'>
                        <Image src="/image/certificado-udemy-javascript.jpg" alt="" layout="responsive"
                        width={800}
                        height={600} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='certifications-image'>
                        <Image src="/image/certificado-udemy-html-css.jpg" alt="" layout="responsive"
                        width={800}
                        height={600} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='certifications-image'>
                        <Image src="/image/certificado-udemy-nodejs.jpg" alt="" layout="responsive"
                        width={800}
                        height={600} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='certifications-image'>
                        <Image src="/image/certificado-udemy-reactjs.jpg" alt="" layout="responsive"
                        width={800}
                        height={600} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='certifications-image'>
                        <Image src="/image/certificado-udemy-nextjs.jpg" alt="" layout="responsive"
                        width={800}
                        height={600} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='certifications-image'>
                        <Image src="/image/certificacion-udemy-mysql.jpg" alt="" layout="responsive"
                        width={800}
                        height={600} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='certifications-image'>
                        <Image src="/image/certificado-udemy-wordpress.jpg" alt="" layout="responsive"
                        width={800}
                        height={600} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='certifications-image'>
                        <Image src="/image/certificacion-udemy-seo.jpg" alt="" layout="responsive"
                        width={800}
                        height={600} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='certifications-image'>
                        <Image src="/image/certificado-udemy-typescript.jpg" alt="" layout="responsive"
                        width={800}
                        height={500} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='certifications-image'>
                        <Image src="/image/certificado-udemy-git-github.jpg" alt="" layout="responsive"
                        width={800}
                        height={600} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='certifications-image'>
                        <Image src="/image/certificado-udemy-facebook-ads.jpg" alt="" layout="responsive"
                        width={800}
                        height={600} />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}
