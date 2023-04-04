import Link from 'next/link';
import {FC, useState} from 'react';

export const Header: FC = () => {

    const [ menu, setMenu ] = useState(false);

    const handleClickMenu = () => {
        setMenu(!menu);
    }

  return (
    <div className='header'>
        <div className={menu ? 'header-name header-name-blue' : 'header-name header-name-white'}>Peter Aspiazu</div>

        <button className='header-button' onClick={handleClickMenu}>
            <div className={menu ? 'header-line-one header-line-one-transform' : 'header-line-one'}></div>
            <div className={menu ? 'header-line-two header-line-two-opacity' : 'header-line-two'}></div>
            <div className={menu ? 'header-line-three header-line-three-transform' : 'header-line-three'}></div>
        </button>

        {
            menu &&
            <div className='header-menu'>
                <div className='header-menu-items'>
                    <div>Resumen</div>
                    <div>Trabajos</div>
                    <div>Contactar</div>
                </div>
                <div className='header-menu-redes'>
                    <Link href="#">
                        <img className='header-menu-img-one' src="/image/github-ico.png" alt="icono de github" />
                    </Link>
                    
                    <Link href="#">
                        <img className='header-menu-img-two' src="/image/linkedin-ico.png" alt="icono de linkedin" />
                    </Link>
                    
                    <Link href="#">
                        <img className='header-menu-three' src="/image/instagram-ico.png" alt="icono de instagram" />
                    </Link>
                </div>
            </div>
        }
    </div>
  )
}
