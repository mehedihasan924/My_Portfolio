import React from 'react'
import './services.css';
import HeartEmoji from '../../image/heartemoji.png';
import Glasses from '../../image/glasses.png';
import Humble from '../../image/humble.png';
import Card from  '../Card/card'
import Resume from './../Srevices/blue professional modern CV resume.pdf'
import { themeContext } from '../../Context';
import { useContext } from 'react';
import{ motion} from 'framer-motion'
const services = () => {
  const transition={duration: 1 ,type :'spring'}

  const theme =useContext(themeContext);
  const darkMode =theme.state.darkMode;

  return (
    <div className="srevices" id='services'>
        {/* Left Side  */}
        <div className="awesome">
            <span>My Awesome</span>
             <span>Services</span>
               <span> Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br />
                  veritatis ipsa illo! Cumque animi.</span>
               <a href={Resume} download>  <button className='button s-button' style={{boxShadow:darkMode? 'none': '' }}>Download CV </button> </a>
               <div className="blueDiv" > 
                </div>        
        </div>

         {/* Right Side  */}
         <div className="cards">
        
              <motion.div 
                   initial={{left:"30rem"}}
                   whileInView={{left :"25rem"}}
                   transition={transition} 
                   style={{left:'14rem'}}>
                <Card
                  emoji={HeartEmoji }
                  heading={"Design"}
                  detail={"Figma, Photoshop,Adobe, Adobe xd"}
                />
                   <div className="purpleDiv2" style={{}}> </div>
              </motion.div>
             
              {/* second Card */}
              <motion.div  
               initial={{left:"35%"}}
               whileInView={{left :"5rem"}}
               transition={transition} 
              
               style={{top:'13rem', left:'4rem'}}>
                <Card
                  emoji={ Glasses }
                  heading={"Developer"}
                  detail={"Figma, Photoshop,Adobe, Adobe xd"}
                />
              
              </motion.div>

               {/* 3rd Card */}
               <motion.div 
                initial={{left:"35rem"}}
                whileInView={{left :"25rem"}}
                transition={transition} 
                style={{top:'21rem', left:'21rem'}}>
                <Card
                  emoji={ Humble }
                  heading={"UX/UI"}
                  detail={"Figma, Photoshop,Adobe, Adobe xd"}
                />
              </motion.div>
         </div>
    </div>
    
  )
}

export default services