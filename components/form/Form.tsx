import {FC} from 'react';
import { useSwiperSlide } from "swiper/react";

interface Props {
    setActive: (active: boolean) => void;
}

export const Form: FC<Props> = ({setActive}) => {

    const swiperSlide = useSwiperSlide();

    if(swiperSlide.isActive){
        setActive(!swiperSlide.isActive);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

  return (
    <div className='form'>
        <div className='form-container-text'>
            <div>Formulario de Contacto</div>
            <div>Llena el formulario y envíame un correo</div>
        </div>
        <div className='form-container-formulario'>
            <form onSubmit={handleSubmit}>
                <div className='form-container-formulario-input-text'>
                    <label htmlFor="name">Tú nombre</label> <br />
                    <input type="text" name='name' id='name' placeholder='Nombre' />
                </div>

                <div className='form-container-formulario-input-email'>
                    <label htmlFor="email">Tú correo</label> <br />
                    <input type="email" name='email' id='email' placeholder='Correo' />
                </div>
                
                <div className='form-container-formulario-textarea'>
                    <label htmlFor="message">Tú Mensaje</label> <br />
                    <textarea name='message' id='message' placeholder='Coloca tu mensaje' rows={5} />
                </div>

                <button type='submit'>
                    <div>Enviar</div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m702 755-43-42 106-106H120v-60h646L660 441l42-42 178 178-178 178Z"/></svg>
                </button>
            </form>
        </div>
    </div>
  )
}
