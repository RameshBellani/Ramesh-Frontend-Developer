"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';  
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-black text-white">
      <div className="flex bg-black text-white">
      <Image 
        src="https://res.cloudinary.com/dwffepf9q/image/upload/v1729008065/pd8rttforz5jdksy5fkt.png" 
        alt="EthAi Logo" 
        height={40} 
        width={40} 
      />
      <h1 className="text-2xl font-bold">Eth.AI</h1>
      </div>

      
      <div className="md:hidden m-t-3">
        <button onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      
      <ul
        className={`flex-col md:flex md:flex-row md:space-x-6 p-4 bg-gray-50 rounded-3xl text-black absolute md:static transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'flex' : 'hidden md:flex'
        }`}
      >
        <li className="hover:text-gray-400 cursor-pointer">
          <Link href="#features">Features</Link>
        </li>
        <li className="hover:text-gray-400 cursor-pointer">
          <Link href="#why-us">Why Us</Link>
        </li>
        <li className="hover:text-gray-400 cursor-pointer">
          <Link href="#roadmap">Roadmap</Link>
        </li>
        <li className="hover:text-gray-400 cursor-pointer">
          <Link href="#tokenomics">Tokenomics</Link>
        </li>
      </ul>

      
      <div className="hidden md:flex space-x-4">
        <button className="py-2 px-4 rounded-full hover:bg-purple-700">Log in</button>
        <button className="bg-white text-black py-2 px-4 rounded-full">Whitepaper</button>
      </div>
    </nav>
  );
};

export default Header;
