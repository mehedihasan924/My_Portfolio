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
import { useContext } from 'react';
 function App() {
  const theme =useContext(themeContext);
  const darkMode =theme.state.darkMode;
  return (
    <div  className='App' 
      style={{background:darkMode? 'black': '',
      color:darkMode? 'white': '',
      boxShadow:darkMode? 'none':''
    }}
    >               
         <Navber /> 
       < Intro />
         <Srevices />
         <Experience/> 
         <Work/> 
         <Portfolio/>  
         <Testimonial/>  
         <Contact/>
         <Footer/>
       
    </div>
  );
}
export default App; 