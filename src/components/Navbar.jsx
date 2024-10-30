import React, { useState } from 'react';
import logo from '../assets/Full-logo-black.png'; 
import runningimage from '../assets/3.jpeg'; // Ensure this image is in the assets folder
import { motion } from 'framer-motion';
import '../components/Navbar.css';
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="flex items-center justify-between p-4 text-white shadow-md fixed w-full top-0 z-20 drop-shadow-xl">
        {/* Hamburger Menu Button */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={toggleMenu}>
          <HiOutlineMenuAlt4  size={24} color='#059212' />
          <span className="text-lg text-[#059212] font-medium">MENU</span>
        </div>  
        
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-10 w-auto" />

        {/* Contact Link */}
        <a href="#contact" className="text-[#059212] text-lg font-bold">
          ChatBot
        </a>
      </nav>

      {/* Sidebar Menu */}
      {isOpen && (
        <div className="flex fixed top-0 left-0 h-full w-full z-30 backdrop-blur-lg">
          {/* Sidebar */}
          <motion.div 
            className="sidebar fixed top-0 left-0 h-full w-1/3 backdrop-blur-lg shadow-lg z-30 p-6"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5 }}
          >
            {/* Close Icon */}
            <div className="flex justify-end">
              <HiOutlineX size={24} className="cursor-pointer" onClick={toggleMenu} />
            </div>

            {/* Menu Links */}
            <ul className="mt-8 space-y-4 text-gray-700 text-right gap-10 flex flex-col">
              <li>1.About</li>
              <li>2.初心者向け</li>
              <li>3.ランニングのメリット</li>
              <li>4.ランニングと栄養</li>
              <li>5.初めてのマラソン</li>
            </ul>
          </motion.div>

          {/* Background Image Section */}
          <motion.div 
            className="h-full w-full"
            style={{
              backgroundImage: `url(${runningimage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      )}
    </div>
  );
}

export default Navbar;
