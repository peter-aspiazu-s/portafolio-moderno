import {FC} from 'react';

export const Footer: FC = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-container-contact'>
                <div>Contáctame</div>
                <a href="mailto:paspiazusabando@gmail.com">paspiazusabando@gmail.com</a>
                <a href="tel:+59367454468">+593 67454468</a>
            </div>

            <div className='footer-container-section'>
                <div>Resumen</div>
                <div>Trabajos</div>
                <div>Contactar</div>
            </div>

            <div className='footer-container-copy'>
                <div>© Peter Aspiazu 2023</div>
            </div>
        </div>
    </div>
  )
}
