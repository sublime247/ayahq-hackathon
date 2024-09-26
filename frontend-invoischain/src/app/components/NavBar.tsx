'use client'
import React, { useState, useEffect } from 'react';
import Button from './Button';
import Link from 'next/link';
// import { ConnectButton } from '@rainbow-me/rainbowkit';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
  
    <nav className="bg-white shadow py-8 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl md:text-2xl font-bold text-green">
              IVOISCHAIN
            </a>
          </div>

          {/* Desktop Menu */}
          {!isMobile && (
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8 border rounded-full px-4 lg:px-6 py-2 bg-[#E8F4F1]">
              <a href="#" className="text-[#1E1E1E] text-sm cursor-pointer hover:text-[#428777]">Home</a>
              <Link href={"dashboard"} className="text-[#1E1E1E] text-sm cursor-pointer hover:text-[#428777]">Dashboard</Link>    
              <a href="#" className="text-[#1E1E1E] text-sm cursor-pointer hover:text-[#428777]">How it works</a>
              <a href="#" className="text-[#1E1E1E] text-sm cursor-pointer hover:text-[#428777]">Pricing</a>
              <a href="#" className="text-[#1E1E1E] text-sm cursor-pointer hover:text-[#428777]">Blog</a>
            </div>
          )}

          {/* Connect Wallet Button (Desktop) */}
          {!isMobile && (
           <Button btnText='Connect Wallet'/>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1E1E1E] text-sm cursor-pointer hover:text-[#428777] focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

            <a href="#" className="block text-[#1E1E1E] text-sm cursor-pointer hover:text-[#428777] py-2">Home</a>
            <a href="#" className="block text-[#1E1E1E] text-sm cursor-pointer hover:text-[#428777] py-2">About</a>
            <a href="#" className="block text-[#1E1E1E] text-sm cursor-pointer hover:text-[#428777] py-2">How it works</a>
            <a href="#" className="block text-[#1E1E1E] text-sm cursor-pointer hover:text-[#428777] py-2">Pricing</a>
            <a href="#" className="block text-[#1E1E1E] text-sm cursor-pointer hover:text-[#428777] py-2">Blog</a>
            <div className="mt-4">
              <Button btnText='Connect Wallet'/>
            </div>
          </div>
        </div>
      )}
      </nav>
   
  );
};

export default NavBar;
