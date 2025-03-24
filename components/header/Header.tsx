import Image from 'next/image';
import {FC, useState} from 'react';

interface Props {
    active: boolean;
    handleClickItemOne: () => void;
    handleClickItemTwo: () => void;
    handleClickItemThree: () => void;
    handleClickItemFour: () => void;
    handleClickIcon: () => void;
    icon: boolean;
}


export const Header: FC<Props> = ({ 
    active,
    handleClickItemOne,
    handleClickItemTwo,
    handleClickItemThree,
    handleClickItemFour,
    handleClickIcon,
    icon
}) => {

    const [ menu, setMenu ] = useState(false);

    const handleClickMenu = () => {
        setMenu(!menu);
    }
    
    // hacer que se haga en una sola función
    const handleClickResumen = () => {
        handleClickItemOne();
        setMenu(!menu)
    }
    
    const handleClickTrabajos = () => {
        handleClickItemTwo();
        setMenu(!menu);
    }
    
    const handleClickContactar = () => {
        handleClickItemThree();
        setMenu(!menu);
    }

    const handleClickCertificaciones = () => {
        handleClickItemFour();
        setMenu(!menu);
    }

  return (
    <div className='header'>
        {
            active 
            ? <div 
                onClick={handleClickItemOne}
                className={
                    menu 
                    ? 'header-name header-name-blue' 
                    : 'header-name header-name-white'
                }>Peter Aspiazu</div>
            : <div 
                onClick={handleClickItemOne}
                className={
                    'header-name header-active-blue'
                }>Peter Aspiazu</div>
        }

        <div className='header-icon-paises'>
            {
                icon 
                ? <Image src="/image/estados-unidos.png" alt='bandera de estados unidos' layout='fill' onClick={handleClickIcon} />
                : <Image src="/image/espana.png" alt='bandera de españa' layout='fill' onClick={handleClickIcon} />
            }
        </div>

        {
            active
            ?<button className='header-button' onClick={handleClickMenu}>
                <div className={menu ? 'header-line-one header-line-one-transform' : 'header-line-one menu-blue-active'}></div>
                <div className={menu ? 'header-line-two header-line-two-opacity' : 'header-line-two menu-blue-active'}></div>
                <div className={menu ? 'header-line-three header-line-three-transform' : 'header-line-three menu-blue-active'}></div>
            </button>
            :<button className='header-button' onClick={handleClickMenu}>
                <div className={menu ? 'header-line-one header-line-one-transform' : 'header-line-one menu-blue'}></div>
                <div className={menu ? 'header-line-two header-line-two-opacity' : 'header-line-two menu-blue'}></div>
                <div className={menu ? 'header-line-three header-line-three-transform' : 'header-line-three menu-blue'}></div>
            </button>
        }

        {
            menu &&
            <div className='header-menu'>
                <div className='header-menu-items'>
                <div onClick={handleClickResumen}>{icon ? "Resumen" : "Summary" }</div>

                <div onClick={handleClickTrabajos}>{icon ? "Trabajos" : "Jobs" }</div>

                <div onClick={handleClickContactar}>{icon ? "Contacto" : "Contact"}</div>

                <div onClick={handleClickCertificaciones}>{icon ? "Certificaciones" : "Certifications"}</div>
                </div>
                <div className='header-menu-redes'>
                    <a href="https://github.com/peter-aspiazu-s" target='_blank' onClick={() => setMenu(!menu)}>
                        <img className='header-menu-img-one' src="/image/github-ico.png" alt="icono de github" />
                    </a>
                    
                    <a href="https://www.linkedin.com/in/peter-aspiazu/" target='_blank' onClick={() => setMenu(!menu)}>
                        <img className='header-menu-img-two' src="/image/linkedin-ico.png" alt="icono de linkedin" />
                    </a>
                    
                    <a href="https://www.facebook.com/profile.php?id=61566286537016" target='_blank' onClick={() => setMenu(!menu)}>
                        <img className='header-menu-three' src="/image/facebook-ico.png" alt="icono de facebook" />
                    </a>
                </div>
            </div>
        }
    </div>
  )
}
