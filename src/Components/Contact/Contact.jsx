import React from 'react'
import { IoIosCall } from "react-icons/io";
import "./Contact.css"
import Contactbox from './Contactbox'
import { FaRocketchat } from "react-icons/fa";
import { MdVideoCall } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';


const Contact = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize animation duration
      once: false, // Whether animation should happen only once
      delay:1000,
    });
  }, []);


  return (
    <div className='container'>
      <div className="contact-container" id='contact'>
        <div className="contact-text-container">
        <div className="top-value-text-container"   data-aos="fade-down">
            {/* {console.log(Data)} */}
            <span className="orange-value">Our Contact</span>
            <span className="value-give">Value We Give to You</span>
            <p className='contact-p'>
              We always ready to help by providijng the best services for you.
              We beleive a good blace to live can make your life better
            </p>
            </div>
            <div className="Contact-box-container">
            <Contactbox boxtext="Call" boxnumber="021 123 145 14" boxbutton="Call now" callicon={<IoIosCall/>}/>
            <Contactbox boxtext="Chat" boxnumber="021 123 145 14" boxbutton="Chat now" callicon={<FaRocketchat />}/>
            <Contactbox boxtext="Video call" boxnumber="021 123 145 14" boxbutton="Video now" callicon={<MdVideoCall />}/>
            <Contactbox boxtext="Message" boxnumber="021 123 145 14" boxbutton="Message now" callicon={<RiMessage2Line />}/>
            </div>
        </div>
        <div className="contact-image-container"  data-aos="fade-left">
             <img src="/images/hero6.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Contact
