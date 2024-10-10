/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Claim() {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 mr-4 ml-4'>
        <div className='solana-bg text-left flex flex-col items-left justify-between py-10 px-6 w-full sm:min-w-[392px] min-h-[245px] rounded-[19px] mb-6 sm:mb-0'>
            <p className='font-bold text-[28px] sm:text-[36px] text-white'>LISK</p>
            <div className='flex flex-row items-center justify-between w-full'>
                <div>
                    <p className='font-bold text-[18px] sm:text-[20px] text-white '>Amount</p>
                    <p className='text-white'>3LSK</p>
                </div>
                <div>
                     <img src="./Lisk_logo.png" alt="" className='h-16 w-16 sm:h-[73px] sm:w-[73px]' />
                </div>
            </div>
        </div>
        <div className='solana-bg text-left flex flex-col items-left justify-between py-10 px-6 w-full sm:min-w-[392px] min-h-[245px] rounded-[19px] mb-6 sm:mb-0'>
            <p className='font-bold text-[28px] sm:text-[36px] text-white'>LISK</p>
            <div className='flex flex-row items-center justify-between w-full'>
                <div>
                    <p className='font-bold text-[18px] sm:text-[20px] text-white '>Amount</p>
                    <p className='text-white'>2LSK</p>
                </div>
                <div>
                   <img src="./Lisk_logo.png" alt="" className='h-16 w-16 sm:h-[73px] sm:w-[73px]' />
                </div>
            </div>
        </div>
        <div className='solana-bg text-left flex flex-col items-left justify-between py-10 px-6 w-full sm:min-w-[392px] min-h-[245px] rounded-[19px]'>
            <p className='font-bold text-[28px] sm:text-[36px] text-white'>LISK</p>
            <div className='flex flex-row items-center justify-between w-full'>
                <div>
                    <p className='font-bold text-[18px] sm:text-[20px] text-white '>Amount</p>
                    <p className='text-white'>3LSK</p>
                </div>
                <div>
                   <img src="./Lisk_logo.png" alt="" className='h-16 w-16 sm:h-[73px] sm:w-[73px]' />
                </div>
            </div>
        </div>
    </div>
  )
}
