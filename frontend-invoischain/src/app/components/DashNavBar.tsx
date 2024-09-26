'use client'
import React, { useState } from 'react';
import Button from './Button';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow min-h-[10vh] py-6 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-green">
              IVOISCHAIN
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <label className="relative block">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.16675 0.666992C4.02461 0.666992 0.666748 4.02486 0.666748 8.16699C0.666748 12.3091 4.02461 15.667 8.16675 15.667C9.93759 15.667 11.5651 15.0533 12.8482 14.0269L15.9108 17.0896C16.2363 17.415 16.7639 17.415 17.0893 17.0896C17.4148 16.7641 17.4148 16.2365 17.0893 15.9111L14.0267 12.8484C15.053 11.5653 15.6667 9.93784 15.6667 8.16699C15.6667 4.02486 12.3089 0.666992 8.16675 0.666992ZM2.33341 8.16699C2.33341 4.94533 4.94509 2.33366 8.16675 2.33366C11.3884 2.33366 14.0001 4.94533 14.0001 8.16699C14.0001 11.3887 11.3884 14.0003 8.16675 14.0003C4.94509 14.0003 2.33341 11.3887 2.33341 8.16699Z" fill="#667185"/>
                </svg>
              </span>
              <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm rounded-[6px] px-6 py-2 min-w-[30vw]" placeholder="Search for components..." type="text" name="search"/>
            </label>
          </div>

          {/* Connect Wallet Button */}
          <Button btnText='Connect Wallet'/>

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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="mb-4">
              <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.16675 0.666992C4.02461 0.666992 0.666748 4.02486 0.666748 8.16699C0.666748 12.3091 4.02461 15.667 8.16675 15.667C9.93759 15.667 11.5651 15.0533 12.8482 14.0269L15.9108 17.0896C16.2363 17.415 16.7639 17.415 17.0893 17.0896C17.4148 16.7641 17.4148 16.2365 17.0893 15.9111L14.0267 12.8484C15.053 11.5653 15.6667 9.93784 15.6667 8.16699C15.6667 4.02486 12.3089 0.666992 8.16675 0.666992ZM2.33341 8.16699C2.33341 4.94533 4.94509 2.33366 8.16675 2.33366C11.3884 2.33366 14.0001 4.94533 14.0001 8.16699C14.0001 11.3887 11.3884 14.0003 8.16675 14.0003C4.94509 14.0003 2.33341 11.3887 2.33341 8.16699Z" fill="#667185"/>
                  </svg>
                </span>
                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm rounded-[6px] px-6 py-2" placeholder="Search for components..." type="text" name="search"/>
              </label>
            </div>
            <a href="#" className="block text-[#1E1E1E] text-sm cursor-pointer hover:text-[#428777]">Home</a>
            <a href="#" className="block text-[#1E1E1E] text-sm cursor-pointer hover:text-[#428777]">About</a>
            <a href="#" className="block text-[#1E1E1E] text-sm cursor-pointer hover:text-[#428777]">How it works</a>
            <a href="#" className="block text-[#1E1E1E] text-sm cursor-pointer hover:text-[#428777]">Pricing</a>
            <a href="#" className="block text-[#1E1E1E] text-sm cursor-pointer hover:text-[#428777]">Blog</a>
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
