import React from 'react'
import '../Experience/Experience.css'
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Experience = () => {
      const theme =useContext(themeContext);
      const darkMode =theme.state.darkMode;
  return (
    <div className='experience' id='experience' >
        <div className='achievement'>
            <div className='circle'>20+</div>
            <span> Years</span>
            <span> Experience</span>
        </div>
        <div className='achievement'>
            <div className='circle' >25+</div> 
            <span> Completed</span>
            <span> Project</span>
        </div>
        <div className='achievement'>
            <div className='circle'  >10+</div>
            <span> Companies</span>
            <span>  Work</span>
        </div>
    </div>
  )
}

export default Experience