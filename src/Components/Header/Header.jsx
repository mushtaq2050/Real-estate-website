import React from 'react'
import "./Header.css"
import { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
const Header = () => {
  const [togglemenu, settogglemenu] = useState(false)
  return (
    <div className='container'>
    <div className='header-container'>
        <div className="navbar-container">
      <div className="logo-header">
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="menu-navbar">
        <div className="a-menu-container">
            <a href="#resedencies">Residencies</a>
            <a href="#value">Our Value</a>
            <a href="#contact">Contact Us</a>
            <a href="#started">Get Started</a>
            </div>
            <div>
            <button>Contact</button>
            </div>
      </div>
      <div className="menulist-mobile">
       {togglemenu
          ? <IoClose color="#fff" size={27} onClick={() => settogglemenu(false)} />
          : < CiMenuBurger color="#fff" size={27} onClick={() => settogglemenu(true)} />}
          {togglemenu && (
             <div className="menucontainer-mobile scale-up-center">
             <a href="">Residence</a>
            <a href="">Our Value</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>
            <button className='mobile-btn'>Contact</button>
             </div>
             
          )
          }
       </div>

    </div>
    </div>
    </div>
  )
}

export default Header
