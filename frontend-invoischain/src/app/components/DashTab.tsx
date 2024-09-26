/* eslint-disable @next/next/no-img-element */
'use client'
import React, {useState} from 'react';
import CreateInvoice from './CreateInvoice';
import Claim from './Claim';
import InvoiceList from './InvoiceList';
import CreateCustomer from './CreateCustomer';

export default function DashTab() {
    const [isActive, setIsActive] = useState("create");
    return (
        <div className='bg-white min-h-screen'>
            <div className='flex flex-wrap items-center justify-center gap-4 py-6 sm:py-10 mb-6 sm:mb-10 sticky top-0 bg-white z-10'>
                <div className={`flex items-center justify-center cursor-pointer gap-2 w-full sm:w-auto sm:min-w-[10vw] px-4 py-2 ${isActive === "create" ? 'bg-[#428777]' : 'bg-transparent'} transition-all duration-300 ease-in-out`} onClick={() => setIsActive("create")}>
                   <img src={isActive === "create" ? "./invois-tabIcon-white.svg" : "./invois-tabIcon.svg"} alt="" className="transition-all duration-300 ease-in-out" />
                    <p className={`${isActive === "create" ? 'text-white' : 'text-[#428777]'} transition-all duration-300 ease-in-out`}>Create invoice</p>
                </div>
                <div className={`flex items-center justify-center cursor-pointer gap-2 w-full sm:w-auto sm:min-w-[10vw] px-4 py-2 ${isActive === "claim" ? 'bg-[#428777]' : 'bg-transparent'} transition-all duration-300 ease-in-out`} onClick={() => setIsActive("claim")}>
                   <img src={isActive === "claim" ? "./invois-tabIcon-white.svg" : "./invois-tabIcon.svg"} alt="" className="transition-all duration-300 ease-in-out" />
                    <p className={`${isActive === "claim" ? 'text-white' : 'text-[#428777]'} transition-all duration-300 ease-in-out`}>Claim</p>
                </div>
                <div className={`flex items-center justify-center cursor-pointer gap-2 w-full sm:w-auto sm:min-w-[10vw] px-4 py-2 ${isActive === "createCustomer" ? 'bg-[#428777]' : 'bg-transparent'} transition-all duration-300 ease-in-out`} onClick={() => setIsActive("createCustomer")}>
                   <img src={isActive === "createCustomer" ? "./invois-tabIcon-white.svg" : "./invois-tabIcon.svg"} alt="" className="transition-all duration-300 ease-in-out" />
                    <p className={`${isActive === "createCustomer" ? 'text-white' : 'text-[#428777]'} transition-all duration-300 ease-in-out`}>CreateCustomer</p>
                </div>
                <div className={`flex items-center justify-center cursor-pointer gap-2 w-full sm:w-auto sm:min-w-[10vw] px-4 py-2 ${isActive === "list" ? 'bg-[#428777]' : 'bg-transparent'} transition-all duration-300 ease-in-out`} onClick={() => setIsActive("list")}>
                   <img src={isActive === "list" ? "./invois-tabIcon-white.svg" : "./invois-tabIcon.svg"} alt="" className="transition-all duration-300 ease-in-out" />
                    <p className={`${isActive === "list" ? 'text-white' : 'text-[#428777]'} transition-all duration-300 ease-in-out`}>Invoice list</p>
                </div>
                <div className={`flex items-center justify-center cursor-pointer gap-2 w-full sm:w-auto sm:min-w-[10vw] px-4 py-2 ${isActive === "history" ? 'bg-[#428777]' : 'bg-transparent'} transition-all duration-300 ease-in-out`} onClick={() => setIsActive("history")}>
                   <img src={isActive === "history" ? "./invois-tabIcon-white.svg" : "./invois-tabIcon.svg"} alt="" className="transition-all duration-300 ease-in-out" />
                    <p className={`${isActive === "history" ? 'text-white' : 'text-[#428777]'} transition-all duration-300 ease-in-out`}>Claim history</p>
                </div>
             
            </div>

            <div className="transition-opacity duration-300 ease-in-out px-4 sm:px-0">
                {isActive === "create" && (
                    <div className="animate-fadeIn">
                        <CreateInvoice />
                    </div>
                )}
                
                {isActive === "claim" && (
                    <div className="animate-fadeIn">
                        <Claim />
                    </div>
                )}
                   {isActive === "createCustomer" && (
                    <div className="animate-fadeIn">

                   <form>   <CreateCustomer setIsActive={setIsActive} /></form> 
                    </div>
                )}
                {isActive === "list" && (
                    <div className="animate-fadeIn">
                        <InvoiceList />
                    </div>
                )}
                {isActive === "history" && (
                    <div className="animate-fadeIn">
                        {/* Content for Claim history tab */}
                    </div>
                )}
             
             
            </div>
        </div>
    );
}
