import {FC, useState} from 'react';
import { useSwiperSlide } from "swiper/react";

const infoWorkOne = [
    
    {
        title: 'Proyecto de E-Commerce',
        description: 'Esta aplicación Web la desarrolle con Next JS(React, Node), Material UI, Next Auth, MongoDB.',
        link: 'https://aspiazu-shop.vercel.app/'
    },
    {
        title: 'Proyecto de Journal App',
        description: 'Esta aplicación Web en proceso, la estoy realizando con Next JS y firebase',
        link: 'https://journal-app-con-next.vercel.app/'
    }
]

const infoWorkTwo = [
    {
        title: 'Proyecto para EJC',
        description: 'Este sitio web lo realice con NextJS, TypeScript y Material UI',
        link: 'https://www.ejc-home.com/'
    },
    {
        title: 'Mi Sitio Web',
        description: 'Este sitio web lo realice con NextJS, TypeScript y CSS3',
        link: 'https://aspiazu-technology.vercel.app/'
    }
]

const infoWorkThree = [
    {
        title: 'Proyecto de TodoApp',
        description: 'Esta aplicación web la realice con NextJS, TypeScript y css',
        link: 'https://aspiazu-todo-app.vercel.app/'
    },
]

interface Props {
    setActive: (active: boolean) => void;
}

export const Work: FC<Props> = ({setActive}) => {

    const swiperSlide = useSwiperSlide();

    if(swiperSlide.isActive){
        setActive(!swiperSlide.isActive);
    }

    const [ work, setWork ] = useState(infoWorkOne);

    const handleClickWorkOne = () => {
        setWork(infoWorkOne)
    }

    const handleClickWorkTwo = () => {
        setWork(infoWorkTwo)
    }

    const handleClickWorkThree = () => {
        setWork(infoWorkThree)
    }

  return (
    <div className='work'>
        {/* <div className='work-title'>Mis Proyectos</div> */}
        {
            work.map( (w, index) => (
                <div className='work-container' key={index}>
                    <div className='work-container-title'>{w.title}</div>
                    <div className='work-container-description'>{w.description}</div>
                    <a href={w.link} target='_blank' className='work-container-box'>
                        <div className='work-container-box-info'>
                            <div>ver proyecto</div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m702 755-43-42 106-106H120v-60h646L660 441l42-42 178 178-178 178Z"/></svg>
                        </div>
                    </a>
                </div>
            ))
        }
        <div className='wrok-container-state'>
            <button onClick={handleClickWorkOne} className={work === infoWorkOne ? 'work-container-btn-active' : 'work-container-btn'}>1</button>
            <button onClick={handleClickWorkTwo} className={work === infoWorkTwo ? 'work-container-btn-active' : 'work-container-btn'}>2</button>
            <button onClick={handleClickWorkThree} className={work === infoWorkThree ? 'work-container-btn-active' : 'work-container-btn'}>3</button>
        </div>
    </div>
  )
}
