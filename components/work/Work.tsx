import {FC, useState} from 'react';

const infoWorkOne = [
    {
        title: 'Proyecto para EJC',
        description: 'Este sitio web lo realice con NextJS y Material UI',
        link: '#'
    },
    {
        title: 'Plantilla web moderna',
        description: 'Este sitio web lo realice con NextJS y css',
        link: '#'
    }
]

const infoWorkTwo = [
    {
        title: 'Proyecto de TodoApp',
        description: 'Esta aplicación web la realice con NextJS y css',
        link: '#'
    },
    {
        title: 'Mi Sitio Web',
        description: 'Este sitio web lo realice con NextJS y Material UI',
        link: '#'
    },
]

export const Work: FC = () => {

    const [ work, setWork ] = useState(infoWorkOne);

    const handleClickWorkOne = () => {
        setWork(infoWorkOne)
    }

    const handleClickWorkTwo = () => {
        setWork(infoWorkTwo)
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
        </div>
    </div>
  )
}
