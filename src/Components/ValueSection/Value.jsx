import React from "react";
import "./Value.css";
import Data from "./Accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Value = () => {
    const [className,setClassName] = useState(null)
    useEffect(() => {
      AOS.init({
        // duration: 1000, // Customize animation duration
        once: false, // Whether animation should happen only once
        delay:1000,
      });
    }, []);
  return (
    <div className="container">
      <div className="value-section-container" id="value">
        <div className="value-image-container"  data-aos="fade-right">
          <img src="/images/hero1.png" alt="" />
        </div>
        <div className="value-text-container">
          <div className="top-value-text-container"  data-aos="fade-down" data-aos-easing="ease-in-out">
            {/* {console.log(Data)} */}
            <span className="orange-value">Our Value</span>
            <span className="value-give">Value We Give to You</span>
            <p className="value-p">
              We always ready to help by providijng the best services for you.
              We beleive a good blace to live can make your life better
            </p>
          </div>
          <Accordion
          className="accordian"
          allowMultipleExpanded={false}
          preExpanded={[0]}
          >
            {Data.map((item, i) => {
              return (
              <AccordionItem className={`accordian-item ${className}`} key={i} uuid={i} >
                 <AccordionItemHeading>
                 <AccordionItemButton className="accordian-button">
                 <AccordionItemState>
                {({ expanded })=>
                expanded ? setClassName("expanded") : setClassName("collapesed")
                    
                    }
                     </AccordionItemState>
                    <div className="icon-item icon ">{item.icon}</div>
                    <span className="item-heading">{item.heading}</span>
                    <div className="icon ">
                    <MdOutlineArrowDropDown size={20}/>
                    </div>
                 </AccordionItemButton>
                 </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="accordiat-detail">{item.detail}</p>
            </AccordionItemPanel>
        
              </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Value;
