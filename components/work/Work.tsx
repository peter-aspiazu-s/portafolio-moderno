import {FC, useState, useEffect} from 'react';
import { useSwiperSlide } from "swiper/react";



interface Props {
    setActive: (active: boolean) => void;
    icon: boolean;
}

export const Work: FC<Props> = ({setActive, icon}) => {

    const infoWorkOne = [
    
        {
            title: icon ? "Tienda en línea" : 'E-Commerce',
            description: icon ? "Desarrollé esta aplicación web usando Next.js, Tailwind, Next Auth y PostgreSQL." : 'I developed this web application using Next.js, Tailwin, Next Auth, and Postgresql.',
            link: 'https://tienda-aspiazu.vercel.app/'
        },
        {
            title: 'Rosari Construction',
            description: icon ? "Desarrollado con Next.js, uso de hooks, CSS, manipulación del DOM, funciones backend para el formulario, encuesta y almacenamiento de datos en MySQL." : 'Developed with Next.js, use of hooks, CSS, DOM manipulation, backend functions for the form, survey, and data storage in MySQL.',
            link: 'https://rosari-construction-inc.vercel.app/'
        }
    ]
    
    const infoWorkTwo = [
        {
            title: 'Fox Exterior Solutions',
            description: icon ? "Sitio web empresarial con Next.js." : 'Business website with Next js.',
            link: 'https://foxexteriorsolutionswny.com/'
        },
        {
            title: 'Project Journal App',
            description: icon ? "Hice esta aplicación web con React y utilicé herramientas como Redux, Firebase, Cloudinary y Material UI." : 'I made this web application with React and used tools like redux, firebase, cloudinary and material UI.',
            link: 'https://journal-app-sigma.vercel.app/'
        },
    ]
    
    const infoWorkThree = [
        
        {
            title: 'King Clean Project',
            description: icon ? "Desarrollado con Next.js, uso de hooks, animaciones CSS, manipulación del DOM, funciones backend para el formulario y la encuesta." : 'Developed with Next.js, use of hooks, CSS animation, DOM manipulation, backend functions for the form and survey.',
            link: 'https://king-clean.vercel.app/'
        },
        {
            title: 'Project for EJC',
            description: icon ? "Construí este sitio web utilizando Next.js, TypeScript y Material UI." : 'I built this website using Next.js, TypeScript, and Material UI.',
            link: 'https://www.ejc-home.com/'
        },
    ]
    
    const infoWorkFour = [
        {
            title: icon ? "Mi sitio web" : 'My Website',
            description: icon ? "Construí este sitio web utilizando Next.js, TypeScript y CSS3." : 'I built this website using Next.js, TypeScript, and CSS3.',
            link: 'https://aspiazu-technology.vercel.app/'
        }
    ]

    const swiperSlide = useSwiperSlide();

    if(swiperSlide.isActive){
        setActive(!swiperSlide.isActive);
    }

    const [ work, setWork ] = useState(infoWorkOne);
    const [selectedIndex, setSelectedIndex] = useState(1);

    useEffect(() => {
        setWork(infoWorkOne);
      }, [icon]);

    const handleClickWorkOne = () => {
        setWork(infoWorkOne)
        setSelectedIndex(1);
    }

    const handleClickWorkTwo = () => {
        setWork(infoWorkTwo)
        setSelectedIndex(2);
    }

    const handleClickWorkThree = () => {
        setWork(infoWorkThree)
        setSelectedIndex(3);
    }

    const handleClickWorkFour = () => {
        setWork(infoWorkFour)
        setSelectedIndex(4);
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
                            <div>{icon ? "Ver Proyecto" : "See project"}</div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m702 755-43-42 106-106H120v-60h646L660 441l42-42 178 178-178 178Z"/></svg>
                        </div>
                    </a>
                </div>
            ))
        }
        <div className='wrok-container-state'>
            <button onClick={handleClickWorkOne} className={selectedIndex === 1 ? 'work-container-btn-active' : 'work-container-btn'}>1</button>
            <button onClick={handleClickWorkTwo} className={selectedIndex === 2 ? 'work-container-btn-active' : 'work-container-btn'}>2</button>
            <button onClick={handleClickWorkThree} className={selectedIndex === 3 ? 'work-container-btn-active' : 'work-container-btn'}>3</button>
            <button onClick={handleClickWorkFour} className={selectedIndex === 4 ? 'work-container-btn-active' : 'work-container-btn'}>4</button>
        </div>
    </div>
  )
}
