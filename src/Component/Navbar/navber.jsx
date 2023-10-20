import React from 'react';
import './navber.css';
import Toggle from '../Toggle/Toggle';
import { Link ,Navbar} from 'react-scroll';
import { themeContext } from '../../Context';
import { useContext, useState} from 'react';
import {  Bars4Icon , XMarkIcon } from '@heroicons/react/24/solid'

const navber = () => {
    const theme =useContext(themeContext);
    const darkMode =theme.state.darkMode; 

     const [open , setOpen]=useState(false);
  return (
    <div className="n-wrapper">
         <div className="n-left">
            <div className="logo-name"> Mehedi</div>
            <Toggle />
        </div>
         <div className="n-right">
            <div className="menu-list">
              <div onClick={()=>setOpen(!open)} className='menu-list-button'>
                        <span>
                          {
                            open===true?  <XMarkIcon  className="icon-1" />: 
                                          <Bars4Icon  className="icon-2" />
                          }
                        </span>
                    </div>
                <ul className={ `menu-list-toggle  ${open? 'open': 'close'}`}>
                    <Link spy={true} to='navber' smooth={true} activeClass='activeClass'>  <li>Home</li>  </Link>
                    <Link spy={true} to='services' smooth={true} activeClass='activeClass'>  <li>Services</li>  </Link>
                    <Link spy={true} to='experience'  smooth={true} activeClass='activeClass'>  <li>Experience</li>  </Link>
                    <Link spy={true} to='portfolio'  smooth={true} activeClass='activeClass'>  <li>Portfoloi</li>  </Link>
                    <Link spy={true} to='testimonials' smooth={true} activeClass='activeClass'>  <li>Testimonials</li>  </Link>         
                  </ul>
              
            </div>
            <div className="button n-button"  style={{boxShadow:darkMode? 'none': '' }}>
                Contact 
            </div>
         </div>
    </div>
  )
}

export default navber