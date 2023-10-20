import React from 'react'
import './intro.css'
import Github from  '../../image/github.png';
import Linkedin from '../../image/linkedin.png';
import Instragram from '../../image/instagram.png';
import Vector1 from '../../image/Vector1.png';
import Vector2 from '../../image/Vector2.png';
import boy from '../../image/hasan-bg.png';
import Thumbup from '../../image/thumbup.png';
import Crown from '../../image/crown.png';
import Glassesimoji from'../../image/glassesimoji.png'
import  FlotingDiv from '../Floting/floting'
import{ motion} from 'framer-motion'
import { themeContext } from '../../Context';
import { useContext } from 'react';

const intro = () => {
    const transition={duration: 3 ,type :'spring'}

  const theme =useContext(themeContext);
  const darkMode =theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color:darkMode? 'white': '' }}> Hy ! I am</span>
                <span> Mehedi Hasan</span>
                <span style={{fontSize:"18px",lineHeight:"1.5" }}> I am a Frontend Developer with high level of experience <br />
                 in web Design and Development.</span>
            </div>
            <button className='i-button button i-btn' style={{boxShadow:darkMode? 'none': '' }}> Hire Me</button>
            <div className="i-icons">
              <a target='blank' href="https://github.com/mehedihasan924 "> <img src={Github } alt="" /></a> 
               <a target='blank' href="https://www.linkedin.com/in/mehedi-hasan-a1a48b288/">  <img src={Linkedin } alt="" /></a>
               <a target='blank' href=" https://www.instagram.com/mdhasanmehedi924/"> <img src={Instragram } alt="" /></a> 
            </div>
        </div> 
        <div className="i-right">
               <img className='i-right-img' src={Vector1 } alt="" />
               <img className='i-right-img' src={Vector2} alt="" />
               <img src={ boy} alt="" />
               <motion.img
               initial={{left:"-36p%"}}
               whileInView={{left :"-24%"}}
               transition={transition}
                src={Glassesimoji} alt="" />

               <motion.div  
                initial={{top:"-4%", left:"61%"}}
                whileInView={{left :"68%"}}
                transition={transition} 
                style={{top:'3%',left:'61%', color:darkMode? 'black': '' }}
                className='fluting-div'
                >
                <FlotingDiv image={Crown} text1="Web" text2="Developer"/> 
                </motion.div>                  
                <motion.div 
                initial={{left:"9rem",top:"20rem"}}
                whileInView={{left :"0rem"}}
                transition={transition}
                
                style={{top:'20rem',left:'0rem' , color:darkMode? 'black': '' }}
                className='fluting-div'
                >         
                <FlotingDiv image={Thumbup} text1="Best Design" text2="Award"/>
                 </motion.div>
              <div className="purpleDiv" style={{ background: 'rgb(238 210 255)'}}> 
              </div>
              <div className="blueDiv"> 
              </div>  
          </div>
    </div>
  )
}

export default intro;