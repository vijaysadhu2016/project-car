"use client"
import {useState} from "react";

function MenuIcon() {
  const [isOpen, setIsOpen] = useState(false) as any;

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
