import {FC} from 'react';
import { useSwiperSlide } from "swiper/react";

interface Props {
    setActive: (active: boolean) => void;
    icon: boolean;
}


export const Main: FC<Props> = ({setActive, icon}) => {

    const swiperSlide = useSwiperSlide();

    if(swiperSlide.isActive){
        setActive(swiperSlide.isActive);
    }
    

  return (
    <div className='main' id='animationScroll'>
        <div className='main-container-info'>
            <div className='main-container-info-title'>{icon ? "Desarrollador Web" : "Web developer"}</div>
            <div className='main-container-info-description'>
                {
                    icon
                    ? (<>Soy un apasionado de la tecnología, mis principales lenguajes para desarrollar proyectos web son <strong> Javascript, Css Y Html</strong>, también utilizo <strong>React, Nextjs, Nodejs y Elementor Pro en Wordpress</strong> para sitios web administrables de forma sencilla y agradable, para bases de datos suelo usar Prisma con Postgresql.</>)
                    : (<>I am passionate about technology. My main languages for developing web projects are <strong>JavaScript, CSS, and HTML</strong>. I also use <strong>React, Next.js, Node.js, and Elementor Pro in WordPress</strong> to create websites that are easy and pleasant to manage. For databases, I usually work with Prisma and PostgreSQL.</>)
                }
            </div>
        </div>
        <div className='main-container-img'>
            <div className='main-container-img-perfil'>
                <img src="/image/foto-perfil.jpg" alt="foto de Peter Aspiazu" />
            </div>
            <div className='main-container-img-technologies'>
                <div className='main-container-img-html'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M0 696V456h48v89h108v-89h48v240h-48V593H48v103H0Zm316 0V504h-70v-48h188v48h-70v192h-48Zm160 0V490q0-15 9.5-24.5T510 456h200q15 0 24.5 9.5T744 490v206h-48V504h-62v150h-48V504h-62v192h-48Zm326 0V456h48v192h110v48H802Z"/></svg>
                </div>
                <div className='main-container-img-css'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M414 696q-15 0-24.5-9.5T380 662v-46h48v32h104v-53H414q-14 0-24-10t-10-24v-71q0-15 9.5-24.5T414 456h132q15 0 24.5 9.5T580 490v46h-48v-32H428v53h118q14 0 24 10t10 24v71q0 15-9.5 24.5T546 696H414Zm260 0q-15 0-24.5-9.5T640 662v-46h48v32h104v-53H674q-14 0-24-10t-10-24v-71q0-15 9.5-24.5T674 456h132q15 0 24.5 9.5T840 490v46h-48v-32H688v53h118q14 0 24 10t10 24v71q0 15-9.5 24.5T806 696H674Zm-520 0q-15 0-24.5-9.5T120 662V490q0-15 9.5-24.5T154 456h132q15 0 24.5 9.5T320 490v46h-48v-32H168v144h104v-32h48v46q0 15-9.5 24.5T286 696H154Z"/></svg>
                </div>
                <div className='main-container-img-js'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M274 696q-15 0-24.5-9.5T240 662v-66h48v52h84V456h48v206q0 15-9.5 24.5T386 696H274Zm240 0q-15 0-24.5-9.5T480 662v-46h48v32h104v-53H514q-14 0-24-10t-10-24v-71q0-15 9.5-24.5T514 456h132q15 0 24.5 9.5T680 490v46h-48v-32H528v53h118q14 0 24 10t10 24v71q0 15-9.5 24.5T646 696H514Z"/></svg>
                </div>
                <div className='main-container-img-code'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M320 814 80 574l242-242 43 43-199 199 197 197-43 43Zm318 2-43-43 199-199-197-197 43-43 240 240-242 242Z"/></svg>
                </div>
            </div>
        </div>
    </div>
  )
}