import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import headerLogo from '../assets/byfaux-vit.svg';
import de from '../assets/de.png';
import en from '../assets/en.png';

const Header = () => {
  const [scrollHeader, setScrollHeader] = useState(false)
  const changeNavbarScrollStyle = () =>{
        if(Math.floor(window.scrollY) >= 80){
          setScrollHeader(true);
        }  else {
          setScrollHeader(false)
        }
  }
  console.log(scrollHeader)
  window.addEventListener('scroll', changeNavbarScrollStyle);
  return (
    <div id={scrollHeader ? "sticky-header" : "header"}>
      <div className="container-main flex items-center justify-between py-4">
        <div>
          <img className='w-40' src={headerLogo} alt="Header logo" />
        </div>
        <div className='flex items-center'>
          <NavLink className="nav-link" to="/home" >Home</NavLink>
          <NavLink className="nav-link" to="/home" >About</NavLink>
          <NavLink className="nav-link" to="/home" >Blog</NavLink>
          <NavLink className="nav-link" to="/home" >Contact</NavLink>
          <NavLink className="nav-link" to="/home" >
            <img src={de} alt="" />
          </NavLink>
          <NavLink className="nav-link" to="/home" >
            <img src={en} alt="" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;