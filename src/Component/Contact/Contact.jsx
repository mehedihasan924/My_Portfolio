
import './Contact.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Contact = () => {

    const theme =useContext(themeContext);
    const darkMode =theme.state.darkMode;

    //Email -Cannection Code..//
    const [done , setDone]=useState(false)
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_m356iec', 'template_o4sl6v9', form.current, 'ZqFfAgJ-nHPDYVWCf')
          .then((result) => {
              console.log(result.text);
              setDone(true)
          }, (error) => {
              console.log(error.text);
          });
      };


  return (
   <div className="contact-from">
        <div className="w-left">
            <div className="contact-awesome">
                <span> Get in  touch</span> 
                <span> Contact me</span>
                    <div className=' blur s-blur1' style={{background:"#ABF1FF94"}}>
                </div>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input required type="text" name='user_name' className='user' placeholder='Name' />
                <input  required type="email" name='user_email' className='user' placeholder='Email'/>
                <textarea  required name="message" className='user'placeholder='Message'  ></textarea>
                <input type="submit" value="Send" className='button'  style={{boxShadow:darkMode? 'none': '' }} />
                <span> {done && "Thanks for Contactin me !"}</span>
                <div className='blur s-blur2' style={{}}></div>
            </form>
        </div>
   </div>
  )
}

export default Contact