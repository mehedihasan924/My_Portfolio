import React from 'react'
import '../Work/Work.css'
import Upwork from'./../../image/upwork.png';
import Fiverr from'./../../image/fiverr.png';
import Amazon from'./../../image/amazon.png';
import Shopify from'./../../image/shopify.png';
import Facebook from'./../../image/facebook.png';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import{ motion} from 'framer-motion'
const Work = () => {
  const transition={duration: 3.5 ,type :'spring'}
  const theme =useContext(themeContext);
  const darkMode =theme.state.darkMode;

  return (
    <div className='works'>
       <div className="awesome">
          <span> Works for All there</span>
            <span>Brands and Clients </span>
            <span> Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br />
            veritatis ipsa illo! Cumque animi.
            <br />
            veritatis ipsa illo! Cumque animi.
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            <br />
            veritatis ipsa illo! Cumque animi.

            </span>
            <button className='button s-button' style={{boxShadow:darkMode? 'none': '' }}>Hire Me </button>        
           
            <div className="blueDiv" > 
           </div>         
        </div>

        {/* Right Site */}
        <div className="w-right">
          <motion.div className="w-mainCircle" 
               initial={{rotate:45}}
               whileInView={{rotate:0}}
               viewport={{margin:"-40px"}}
               transition={transition} 

            style={{boxShadow:darkMode? 'none': '' }}>
            <div className="w-seeCircle">
              <img src={Upwork} alt="" />
            </div>
            <div className="w-seeCircle">
              <img src={Fiverr} alt="" />
            </div>
            <div className="w-seeCircle">
              <img src={Amazon} alt="" />
            </div>
            <div className="w-seeCircle">
              <img src={Shopify} alt="" />
            </div>
            <div className="w-seeCircle">
              <img src={Facebook} alt="" />
            </div>
          </motion.div>
          {/* Backgroung Circle */}
          <div className="w-backCircle blueCircle"> </div>
          <div className="w-backCircle yellowCircle"> </div>
        </div>
    </div>
  )
}

export default Work