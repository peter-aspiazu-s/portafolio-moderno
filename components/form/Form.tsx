import {FC, FormEvent, useState} from 'react';
import { useForm } from '../../hooks';
import { useSwiperSlide } from "swiper/react";
import validator from 'validator';
import Swal from 'sweetalert2'

interface Props {
    setActive: (active: boolean) => void;
    icon: boolean;
}

export const Form: FC<Props> = ({setActive, icon}) => {

    const swiperSlide = useSwiperSlide();

    if(swiperSlide.isActive){
        setActive(!swiperSlide.isActive);
    }

    const { formState, onInputChange, reset } = useForm({
        name: '',
        email: '',
        message: '',
    });

    const {name, email, message} = formState;

    const [touchedName, setTouchedName] = useState(false);
    const [touchedEmail, setTouchedEmail] = useState(false);
    const [touchedMessage, setTouchedMessage] = useState(false);

    const [btnForm, setBtnForm] = useState(false);

    const [] = useState();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(isFormValid()){
            console.log('Sending...');

            setTouchedName( false );
            setTouchedEmail( false );
            setTouchedMessage( false );
            setBtnForm(true);

            fetch('/api/send-email', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(formState)
              }).then((res) => {
                console.log('Response received')
                if(res.status === 200){
                  console.log('Response succeeded')
                  reset();
                  setBtnForm(false);

                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Sent successfully!',
                    showConfirmButton: false,
                    timer: 1500
                  })
                }
              }).catch((error) => {
                console.log(error)
                console.log('Something went wrong')
              })
        }
    }

    const isFormValid = () => {
        if(name.trim().length === 0){
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'The name is required',
                showConfirmButton: false,
                timer: 1500
              })
            return false
          } else if(!validator.isEmail(email)){
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'The email is required',
                    showConfirmButton: false,
                    timer: 1500
                })
            return false
          } else if(message.length < 10){
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'The message is required and must have at least 10 characters',
                    showConfirmButton: false,
                    timer: 2000
                })
            return false
          }
          return true
    }

  return (
    <div className='form'>
        <div className='form-container-text'>
            <div>{icon ? "Formulario de contacto" : "Contact Form"}</div>
            <div>{icon ? "Rellena el formulario y envíame un correo electrónico." : "Fill out the form and send me an email."}</div>
        </div>
        <div className='form-container-formulario'>
            <form onSubmit={handleSubmit}>
                <div className='form-container-formulario-input-text'>
                    <label htmlFor="name">{icon ? "Tu nombre" : "Your name"}</label> <br />
                    <input 
                        type="text" 
                        name='name' 
                        id='name' 
                        value={name}
                        onChange={onInputChange}
                        placeholder='name' 
                        className={name.length <= 0 && touchedName ? 'input-or-textarea-error' : ''}
                        onBlur={() => setTouchedName(true)}
                    />
                </div>

                <div className='form-container-formulario-input-email'>
                    <label htmlFor="email">{icon ? "Tu correo" : "Your email"}</label> <br />
                    <input 
                        type="email" 
                        name='email' 
                        id='email' 
                        value={email}
                        onChange={onInputChange}
                        placeholder='email' 
                        className={email.length <= 0 && touchedEmail ? 'input-or-textarea-error' : ''}
                        onBlur={() => setTouchedEmail(true)}
                    />
                </div>
                
                <div className='form-container-formulario-textarea'>
                    <label htmlFor="message">{icon ? "Tu mensaje" : "Your Message"}</label> <br />
                    <textarea 
                        name='message' 
                        id='message' 
                        value={message}
                        onChange={onInputChange}
                        placeholder='Enter your message' 
                        rows={5} 
                        className={message.length <= 0 && touchedMessage ? 'input-or-textarea-error' : ''}
                        onBlur={() => setTouchedMessage(true)}
                    />
                </div>

                {
                    btnForm
                    ? <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                    : <button type='submit'>
                        <div>{icon ? "Enviar" : "Send"}</div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m702 755-43-42 106-106H120v-60h646L660 441l42-42 178 178-178 178Z"/></svg>
                    </button>
                }
            </form>
        </div>
    </div>
  )
}
