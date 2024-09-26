import React from 'react'
import Button from './Button'

export default function LastLandingComp() {
  return (
    <div className='mt-20 pb-20'>
        <div className='px-4 sm:px-8 md:px-16 lg:px-36 mt-10 sm:mt-20 pb-10 sm:pb-20'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-52 bg-[#E8F4F1] px-4 sm:px-8 py-10 sm:py-20 rounded-[10px]'>
                <div className='w-full lg:basis-1/3'>
                    <p className='text-[#428777] font-bold text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-[50px] mb-4'>Create and Manage Invoices With ease</p>
                    <p className='text-[#000] text-xs sm:text-sm mb-6 sm:mb-8'>Our platform facilitates seamless invoice creation and management. Easily itemize goods or services, set payment terms, and display the total amount in cryptocurrency or fiat equivalent.</p>
                    <Button btnText='Connect your wallet address' />
                </div>
                <div className='flex flex-col items-center lg:items-end justify-center gap-4 sm:gap-6 mt-8 lg:mt-0'>
                    <div className='w-full sm:w-max bg-[#428777] text-white py-2 px-4 rounded-[15px] text-center sm:text-left'>
                        <p>Seamless invoicing process</p>
                    </div>
                    <div className='w-full sm:w-max bg-[#428777] text-white py-2 px-4 rounded-[15px] text-center sm:text-left lg:mr-8'>
                        <p>Cyptocurrency payment verification</p>
                    </div>
                    <div className='flex items-center justify-center sm:justify-between gap-4'>
                       <img src="./invois-arrow.svg" alt="" className='hidden sm:block' />
                        <div className='w-full sm:w-max bg-[#428777] text-white py-2 px-4 rounded-[15px] text-center sm:text-left'>
                            <p>Automatic status update</p>
                        </div>
                    </div>
                    <div className='w-full sm:w-max bg-[#428777] text-white py-2 px-4 rounded-[15px] text-center sm:text-left lg:mr-8'>
                        <p>Secure Blockchain integration</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
