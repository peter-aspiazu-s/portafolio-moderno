import {FC, useState} from 'react';

interface Props {
    active: boolean;
    handleClickItemOne: () => void;
    handleClickItemTwo: () => void;
    handleClickItemThree: () => void;
}


export const Header: FC<Props> = ({ 
    active,
    handleClickItemOne,
    handleClickItemTwo,
    handleClickItemThree
}) => {

    const [ menu, setMenu ] = useState(false);

    const handleClickMenu = () => {
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
                <div onClick={handleClickItemOne}>Resumen</div>

                <div onClick={handleClickItemTwo}>Trabajos</div>

                <div onClick={handleClickItemThree}>Contactar</div>
                </div>
                <div className='header-menu-redes'>
                    <a href="https://github.com/peter-aspiazu-s" target='_blank'>
                        <img className='header-menu-img-one' src="/image/github-ico.png" alt="icono de github" />
                    </a>
                    
                    <a href="https://www.linkedin.com/in/peter-aspiazu/" target='_blank'>
                        <img className='header-menu-img-two' src="/image/linkedin-ico.png" alt="icono de linkedin" />
                    </a>
                    
                    <a href="https://www.instagram.com/paspiazus/" target='_blank'>
                        <img className='header-menu-three' src="/image/instagram-ico.png" alt="icono de instagram" />
                    </a>
                </div>
            </div>
        }
    </div>
  )
}
