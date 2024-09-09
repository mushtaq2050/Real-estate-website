import React from 'react'
import "./Herosection.css"
import { MdLocationPin } from "react-icons/md";
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
const Herosection = () => {
  const fadeanimationvarient={
    hidden:{
    opacity:0,
    y:90,
    },
    show:{
      opacity:1,
      y:0,
      transition:{
       staggerChildren:0.3,
       duration:1,
      }
    },
  };
  return (
    <div>
      <div className="hero-container">
        <motion.div 
        initial="hidden"
        whileInView="show"
        variants={fadeanimationvarient}
        className="hero-text">
          <motion.h1
        variants={fadeanimationvarient}
          >
            Discover <br /> Most Suitable Property
            </motion.h1>
          <motion.p
          variants={fadeanimationvarient}
          >Find a Variety of Properties tha suit your easilty Forget all difficulties in finding a residence for you</motion.p>
          <motion.div
          variants={fadeanimationvarient}
           className="input-container">
          <MdLocationPin color='var(--blue)' size={25} />
          <input type="text" />
          <button>Search</button>
          </motion.div>
          <motion.div
          variants={fadeanimationvarient}
           className="viewsstat-container">
          <div className="viewsstats">
            <span className='count'>
            <CountUp start={8841} end={9000} duration={4} />
            <span className='plus'>  +</span>
            </span>
            <span className='product'>Premium Product</span>
          </div>
          <div className="viewsstats">
            <span className='count'>
            <CountUp start={1965} end={2000} duration={4} />
            <span className='plus'>  +</span>
            </span>
            <span className='product'>Happy Customer</span>
          </div>
          <div className="viewsstats">
            <span className='count'>
            <CountUp start={12} end={28} duration={4} />
            <span className='plus'>  +</span>
            </span>
            <span className='product'>Award Winning</span>
          </div>
          </motion.div>
        </motion.div>
        <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeanimationvarient}
        className="hero-img">
     <img
      src="/images/hero1.png" alt="" />
        </motion.div>
      </div>
    </div>
  )
}

export default Herosection
