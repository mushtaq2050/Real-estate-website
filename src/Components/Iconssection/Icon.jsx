import React from 'react'
import "./Icon.css"
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Icon = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize animation duration
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
    <div className="container">
    <div className="icons-section-container">
    <div className='icons-container'>
      <div className="icon-1" data-aos="zoom-in" data-aos-easing="ease-in-out">
        <img src="/images/icon1.png" alt="" />
      </div>
      <div className="icon-1" data-aos="zoom-in" data-aos-easing="ease-in-out">
        <img src="/images/icon2.png" alt=""  />
      </div>
      <div className="icon-1" data-aos="zoom-in" data-aos-easing="ease-in-out">
        <img src="/images/icon3.png" alt="" />
      </div>
      <div className="icon-1" data-aos="zoom-in" data-aos-easing="ease-in-out">
        <img src="/images/icon4.png" alt="" />
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Icon
