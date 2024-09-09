import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='container'>
      <div className="footer-container">
        <div className="footrt-1">
              <img src="/images/logo2.png" alt="" />
              <p>Our vision is to make all people
              the best place to live for them.</p>
        </div>
        <div className="footer-2">
            <div className="upper-footer-2">
           <h2>Information</h2>
           </div>
           <div className="footer-span">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
