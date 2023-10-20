import React from 'react'
import './Portfolio.css'
import { useEffect } from "react";
import {Swiper, SwiperSlide } from 'swiper/react'
import Sideber from'./../../image/sidebar.png';
import Ecommerce from'./../../image/ecommerce.png';
import Hoc from'./../../image/hoc.png';
import MusicApp from'./../../image/musicapp.png';
import 'swiper/css'
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Portfolio = () => {
    const theme =useContext(themeContext);
    const darkMode =theme.state.darkMode;


    const swiperParams = {
        slidesPerView: 1, // Default setting for mobile
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
            500: {
                spaceBetween: 20,
                slidesPerView: 2, // Show 3 slides on screens larger than or equal to 768px (PC)
              },
          700: {
            spaceBetween: 20,
            slidesPerView: 3, // Show 3 slides on screens larger than or equal to 768px (PC)
          },
        },
      };

  return (
    <div className='portfolio' id='portfolio'>
        {/* Heading */}
        <span style={{color:darkMode? 'white': '' }}>Recent Projects</span>
        <span>Portfolio</span>
        
        {/* slider  */}
        <Swiper       
            className='portfolio-slide'{...swiperParams}     
        >
            <SwiperSlide className='slider-img'>
                <img src={Sideber} alt="" />              
            </SwiperSlide>

            <SwiperSlide className='slider-img'>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide className='slider-img'>
                <img src={Hoc} alt="" />
            </SwiperSlide>
            <SwiperSlide className='slider-img'>
                <img src={MusicApp} alt="" />
            </SwiperSlide>
            <SwiperSlide className='slider-img'>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide className='slider-img'>
                <img src={Hoc} alt="" />
            </SwiperSlide>
            <SwiperSlide className='slider-img'>
                <img src={MusicApp} alt="" />
            </SwiperSlide>
            
        </Swiper>

    </div>

  )
}

export default Portfolio