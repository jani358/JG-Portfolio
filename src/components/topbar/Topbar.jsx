//This imports the React library and the useState hook from the 'react' module.
import React, { useState } from 'react';
//This imports the AiOutlineHome icon from the 'react-icons/ai' module.
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';


import './topbar.css';

const Topbar = () => {
  //This declares a state variable called 'activeNav' and a function called 'setActiveNav' to update it. It initializes 'activeNav' with the value '#home'.
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav>
    //This is a link element that displays the AiOutlineHome icon. When clicked, it sets the 'activeNav' state to '#home'. 
    //It also adds the 'active' class to the link if 'activeNav' is equal to '#home'.
      <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Topbar;
