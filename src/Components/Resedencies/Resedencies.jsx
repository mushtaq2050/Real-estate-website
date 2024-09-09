import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import data from "../Slider.json"
import "./Resedencies.css"
import "swiper/css"
import { sliderSettings } from './Common';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
const Resedencies = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize animation duration
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
    <div className='container'>
          <div className="residence-container" id='resedencies'>
          <div className="residence-text-container">
         <p className='choice-p' data-aos="fade-right" data-aos-easing="ease-in-out">Best Choices</p>
         <h3 className='residence-text-h3' data-aos="fade-right" data-aos-easing="ease-in-out">Popular Residencies</h3>
          </div>
          {/* <Sliderbutton/> */}
          <Swiper {...sliderSettings} className='swippar'>
            <Sliderbutton/>
            
              <div className="slider-card-container">
                {
              data.map((card,i)=>(
                <SwiperSlide key={i} className='swippar'>
                  <div className="residence-card" data-aos="zoom-in" data-aos-easing="ease-in-out">
                    <img src={card.image} alt="" />
                    <span className='residence-price'>
                      <span style={{color:"orange"}}>$</span>
                      <span>{card.price}</span>
                    </span>
                    <span className='residence-name'>{card.name}</span>
                    <span className='residence-detail'>{card.detail}</span>
                  </div>
                </SwiperSlide>
              ))
            }
              </div>
            
          </Swiper>
          
          </div>
          </div>
      
    </>
  )
}

export default Resedencies

const Sliderbutton=()=>{
  const swiper= useSwiper()
  return(
    <div className="slider-buttons">
      <button className='slider-btn-1' onClick={()=> swiper.slidePrev()}>&lt;</button>
      <button className='slider-btn-2' onClick={()=>swiper.slideNext()}>&gt;</button>
    </div>
  )
}


