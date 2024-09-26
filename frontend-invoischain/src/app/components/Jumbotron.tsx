'use client'
import React  from 'react';
import Button from '../components/Button';

const Jumbotron = () => {

  return (
    <div className='jumbo-bg mt-14'>
        <div className='text-left rounded-[8px] pt-16 sm:pt-32 px-4 sm:px-0 sm:pl-20 w-full sm:w-[36vw]'>
            <p className='text-[#428777] font-bold text-3xl sm:text-[46px] leading-tight'>Create and Manage Invoices With Ease</p>
            <p className='text-[#1E1E1E] text-sm sm:text-base mt-4'>Our platform facilitates seamless invoice creation and management. Easily itemize goods or services, set payment terms, and display the total amount in cryptocurrency or fiat equivalent.</p>
            
            <div className='mt-8'>
                <Button btnText='Connect your wallet'/>
            </div>
        </div>

        <div className='mt-16 sm:mt-[43vh] flex flex-col items-center justify-center px-4 sm:px-20 gap-6'>
              <p className='text-2xl sm:text-[36px] font-bold text-[#428777] text-center '>More for you</p>
              
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 w-full'>
                <div className='text-left rounded-[8px] shadow-md bg-[#ffffff] px-6 py-10'>
                     <img src="./invois-lock.png" alt="" className='w-12 h-12 sm:w-auto sm:h-auto mb-4' />
                      
                      
                    <p className='text-[#000] text-xl sm:text-2xl leading-[30px] font-bold'>Track and Secure Business Transactions in Real-Time</p>
                    <p className='text-[#1E1E1E] text-sm mt-2'>Our platform enables business partners to track transactions in real time with complete transparency, ensuring that once a transaction is initiated, it remains immutable and secure. By leveraging advanced technology, we provide an unalterable record of every transaction, giving all parties the confidence that no changes can be made after initiation. This not only enhances trust but also streamlines auditing and compliance processes, as every transaction is fully traceable and permanently recorded.</p>
                  </div>
                  <div className='text-left rounded-[8px] shadow-md bg-[#ffffff] px-6 py-10'>
                   <img src="./invois-lock.png" alt="" className='w-12 h-12 sm:w-auto sm:h-auto mb-4' />
                    <p className='text-[#000] text-xl sm:text-2xl leading-[30px] font-bold'>Verify Seller Reliability with Onchain Transaction History</p>
                    <p className='text-[#1E1E1E] text-sm mt-2'>Customers can easily view the past activities of our sellers directly on the blockchain, without needing to request their transaction history. By checking these records onchain, customers can verify the reliability and trustworthiness of sellers, ensuring they make informed decisions based on transparent and unchangeable data</p>
                </div>
                <div className='text-left rounded-[8px] shadow-md bg-[#ffffff] px-6 py-10'>
                   <img src="./invois-lock.png" alt="" className='w-12 h-12 sm:w-auto sm:h-auto mb-4' />
                    <p className='text-[#000] text-xl sm:text-2xl leading-[30px] font-bold'>Secure Blockchain Integration</p>
                    <p className='text-[#1E1E1E] text-sm mt-2'>We  ease  freelancers and business owners burdens by enabling them to effortlessly create invoices that are securely stored on the blockchain. Our platform ensures that every invoice is immutable and transparent, providing secure, tamper-proof records that can be tracked and verified in real time.</p>
                </div>
            
            </div>
        </div>
    </div>
  );
};

export default Jumbotron;
