"use client"
import React, {useState} from 'react'
import "../../styles/components/menuItem.css"

const MenuIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="nav-icon1" className={isOpen ? 'open' : ''} onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default MenuIcon;
