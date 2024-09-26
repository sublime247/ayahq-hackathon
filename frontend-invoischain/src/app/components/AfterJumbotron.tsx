/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function AfterJumbotron() {
  return (
    <div className='mt-96 sm:mt-56 flex flex-col items-center justify-center px-4 sm:px-20 py-6 gap-6'>
        <p className='text-3xl sm:text-[36px] font-bold text-[#428777] mb-6 sm:mb-10 text-center'>How It Works</p>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-6 sm:mt-[-20vh]'>
            <div className='text-center rounded-[8px] flex flex-col items-center justify-center shadow-md bg-[#428777] px-4 sm:px-6 py-8 sm:py-10 text-white w-full sm:w-auto mb-6 sm:mb-0'>
               <img src="./invois-frame.png" alt="" className='w-16 sm:w-auto' />
                <p className='text-xl sm:text-2xl leading-[30px] font-bold mt-4'>Create and Send Invoice</p>
                  <p className='text-xs sm:text-sm mt-2'>Our platform allows business owners and freelancers to quickly generate professional invoices, ensuring every detail is accurate and secured on the blockchain. With just a few clicks, they can add services, amounts, and due dates, with the invoice being automatically time-stamped and ready for tracking.</p>
            </div>
            <div className='text-center rounded-[8px] flex flex-col items-center justify-center shadow-md bg-[#E8F4F1] px-4 sm:px-6 py-8 sm:py-10 sm:mt-[40vh] w-full sm:w-auto mb-6 sm:mb-0'>
               <img src="./invoisframe.png" alt="" className='w-16 sm:w-auto' />
                <p className='text-[#000] text-xl sm:text-2xl leading-[30px] font-bold mt-4'>Verify Invoice</p>
                <p className='text-[#1E1E1E] text-xs sm:text-sm mt-2'>Each invoice is linked to a smart contract that automates verification, ensuring all details like amounts and deadlines match agreed terms. This removes the need for intermediaries, as customers can verify the invoice and payment status directly through the smart contract, ensuring transparency and trust.</p>
            </div>
            <div className='text-center rounded-[8px] flex flex-col items-center justify-center shadow-md bg-[#428777] px-4 sm:px-6 py-8 sm:py-10 text-white w-full sm:w-auto mb-6 sm:mb-0'>
               <img src="./invois-frame.png" alt="" className='w-16 sm:w-auto' />
                <p className='text-xl sm:text-2xl leading-[30px] font-bold mt-4'>Storage on Blockchain </p>
                <p className='text-xs sm:text-sm mt-2'>Once verified , the invoice is securely stored on the blockchain as an immutable record, preventing any alterations or tampering. All parties can access these records in real time, ensuring a permanent, fraud-proof transaction history. Blockchain storage guarantees that financial records are safe, permanent, and always accessible.</p>
            </div>
            <div className='text-center rounded-[8px] flex flex-col items-center justify-center shadow-md bg-[#E8F4F1] px-4 sm:px-6 py-8 sm:py-10 sm:mt-[40vh] w-full sm:w-auto'>
               <img src="./invoisframe.png" alt="" className='w-16 sm:w-auto' />
                <p className='text-[#000] text-xl sm:text-2xl leading-[30px] font-bold mt-4'>Payment Processing</p>
                <p className='text-[#1E1E1E] text-xs sm:text-sm mt-2'>Our platform provides flexible payment options, allowing customers to pay via cryptocurrency or traditional methods. Crypto payments are instant and secure on the blockchain, cutting fees and processing time, while traditional payments integrate seamlessly with standard gateways.</p>
            </div>
        </div>
    </div>
  )
}
