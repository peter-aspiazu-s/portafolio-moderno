import {FC, useState} from 'react';
import { useSwiperSlide } from "swiper/react";

const infoWorkOne = [
    
    {
        title: 'E-Commerce',
        description: 'I developed this web application using Next.js, Material UI, Next Auth, and MongoDB.',
        link: 'https://aspiazu-shop.vercel.app/'
    },
    {
        title: 'Rosari Construction',
        description: 'Developed with Next.js, use of hooks, CSS, DOM manipulation, backend functions for the form, survey, and data storage in MySQL.',
        link: 'https://rosari-construction-inc.vercel.app/'
    }
]

const infoWorkTwo = [
    {
        title: 'Project Journal App',
        description: 'I made this web application with React and used tools like redux, firebase, cloudinary and material UI.',
        link: 'https://journal-app-sigma.vercel.app/'
    },
    {
        title: 'King Clean Project',
        description: 'Developed with Next.js, use of hooks, CSS animation, DOM manipulation, backend functions for the form and survey.',
        link: 'https://king-clean.vercel.app/'
    }
]

const infoWorkThree = [
    {
        title: 'TodoApp Project',
        description: 'I built this web application using Next.js, TypeScript, Firebase, and Material UI.',
        link: 'https://todo-app-advance.vercel.app/'
    },
    {
        title: 'Project for EJC',
        description: 'I built this website using Next.js, TypeScript, and Material UI.',
        link: 'https://www.ejc-home.com/'
    },
]

const infoWorkFour = [
    {
        title: 'My Website',
        description: 'I built this website using Next.js, TypeScript, and CSS3.',
        link: 'https://aspiazu-technology.vercel.app/'
    }
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

    const handleClickWorkFour = () => {
        setWork(infoWorkFour)
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
                            <div>See project</div>
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
            <button onClick={handleClickWorkFour} className={work === infoWorkFour ? 'work-container-btn-active' : 'work-container-btn'}>4</button>
        </div>
    </div>
  )
}
