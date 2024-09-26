import React from 'react'
import Button from './Button'

export default function Footer() {
  return (
    <footer className='bg-white min-h-[10vh] pt-6 pb-8 px-20 border-t-2'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
          <div className="flex-shrink-0">
            <a href="#" className="text-xl md:text-2xl font-bold text-green">
              IVOISCHAIN
            </a>
          </div>
            <div className='flex items-center justify-center gap-4'>
                <input className='bg-transparent py-2 px-4 h-[40px] border-2 rounded' type="text" placeholder='Enter your email' />
                <Button btnText='Subscribe' />
            </div>
        </div>
        <div className="md:flex items-center space-x-8 mt-4">
            <a href="#" className="text-[#1E1E1E] text-sm cursor-pointer hover:text-[#428777]">Home</a>
            <a href="#" className="text-[#1E1E1E] text-sm cursor-pointer hover:text-[#428777]">About us</a>
            <a href="#" className="text-[#1E1E1E] text-sm cursor-pointer hover:text-[#428777]">How it works</a>
            <a href="#" className="text-[#1E1E1E] text-sm cursor-pointer hover:text-[#428777]">Pricing</a>
            <a href="#" className="text-[#1E1E1E] text-sm cursor-pointer hover:text-[#428777]">Blog</a>
        </div>
    </footer>
  )
}
