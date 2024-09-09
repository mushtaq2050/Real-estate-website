import React from 'react'
import "./Contactbox.css"
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Contactbox = ({boxtext,boxnumber,boxbutton,callicon}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <div className='box-container'  data-aos="zoom-in" data-aos-easing="ease-in-out">
        <div className="box-top">
      <div className="box-icon">{callicon}</div>
      <div className="box-text">
        <span className='box-inner-text'>{boxtext}</span>
        <span className='box-inner-number'>{boxnumber}</span>
        </div>
      </div>
      <button className='box-inner-btn'>{boxbutton}</button>
    </div>
  )
}

export default Contactbox
