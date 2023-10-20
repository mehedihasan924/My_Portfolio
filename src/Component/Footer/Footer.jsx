import React from 'react'
import './Footer.css'
import Wava from '../../image/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
const Footer = () => {
  return (
    <div className='footer'>
        <img src={Wava} alt="" style={{width:'100%'}} />
        <div className="f-content">
            <span>mdhasanmehedi924@gmail.com</span>
            <div className="f-icons">
                  <a href="https://instagram.com/mdhasanmehedi924?igshid=NzZlODBkYWE4Ng=="> <Insta color='white' size='3rem' /></a> 
               <a target='blank' href=" https://www.facebook.com/people/Mehedi-Hasan/pfbid0GUcRtd5wsWHYU5CJgC7uWdEXfdTCuYQxyagdH7yiifArJzhGTHwt5JKURw8ML2qSl/?mibextid=ZbWKwL"> <Facebook  color='white' size='3rem' /> </a> 
               <a target='blank' href="https://github.com/mehedihasan924"> <Github  color='white' size='3rem' /> </a>
               
            </div>
        </div>
    </div>
  )
}

export default Footer