import React from 'react'
import Navber from './Component/Navbar/navber';
import Intro from './Component/Intro/intro';
import Srevices from './Component/Srevices/services'
import { BrowserRouter, Routes , Route } from "react-router-dom";
import './App.css'
import Experience from './Component/Experience/Experience';
import Work from './Component/Work/Work'
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Testimonial from './Component/Testimonial/Testimonial';
import { themeContext } from './Context';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { useContext } from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
 function App() {
  const theme =useContext(themeContext);
  const darkMode =theme.state.darkMode;



  return (
    <div  className='App' 
      style={{background:darkMode? 'black': '',
      color:darkMode? 'white': '',
      boxShadow:darkMode? 'none':''
    }}>
  <MessengerCustomerChat
    pageId="<PAGE_ID>"
    appId="<APP_ID>"
    htmlRef="<REF_STRING>"
  />
  
                   
         <Navber /> 
         <Intro />
         <Srevices />
         <Experience/> 
         <Work/> 
         <Portfolio/>  
         <Testimonial/>  
         <Contact/>
         <Footer/>
        {/* Whatsapp button */}
        <div className="App">
            <FloatingWhatsApp
              phoneNumber="01954311300"
              accountName="Mehedi Hasan "
              allowEsc
              allowClickAway
              notification
              notificationSound
            />
          </div>
    </div>
  );
}
export default App; 