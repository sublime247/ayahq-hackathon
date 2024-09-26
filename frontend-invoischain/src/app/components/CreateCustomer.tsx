/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

'use client'
import React, { useState } from 'react'
import { config } from "./../../../next.config.mjs"
import { useReadContract, useAccount, useWriteContract, useConnect } from 'wagmi';
import { Contract_ABI } from "../contract/contractAbi";
import { arbitrumSepolia, liskSepolia } from 'viem/chains';
import { injected } from 'wagmi/connectors';

const contactAddress = '0x7066989818c88cD1e533d22519c381c6e21Ed487';
export default function CreateCustomer({ setIsActive }: { setIsActive: (isActive: string) => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [phone, setPhone] = useState("");
  const [wallet, setWallet] = useState("");
  const { address, isConnected } = useAccount();
  const { connectAsync } = useConnect();
  const { writeContractAsync } = useWriteContract();
  const createCustomerFunction = async () => {
    try {
      if (address) {
        await connectAsync({chainId: liskSepolia.id, connector:injected()})
      }
        const result = writeContractAsync({
          address: contactAddress,
          abi: Contract_ABI,
          functionName: 'createCustomer',
          args: [name, email, organization, phone,wallet],
            

          
        });
        console.log('New invoice created:', result);
      setIsActive("createCustomer");
    } catch (error) {
      console.error('Error creating invoice:', error);
    }
  };



  
  return (
    
    <div className='px-4 sm:px-20 bg-white flex justify-center items-start min-h-screen'>
      <div className='w-full max-w-md border border-gray-300 rounded-lg p-6 shadow-md'>
        <div className='mb-8'>
          <p className='text-2xl font-bold text-green mb-4 sm:mb-8'>Customer Details</p>
          <div className='flex flex-col'>
            <form className=''>
              <div className='flex flex-col items-start justify-start gap-4 w-full'>
                <div className="w-full mb-4">
                  <label htmlFor="customer-name" className="block text-sm font-medium leading-6 text-[#101928]">
                    Customer Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                    
                      placeholder='name'
                      autoComplete="name"
                      className="block w-full bg-[#F0F2F5] rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="w-full mb-4">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-[#101928]">
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder='email'
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    
                      className="block w-full bg-[#F0F2F5] rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="w-full mb-4">
                  <label htmlFor="organization" className="block text-sm font-medium leading-6 text-[#101928]">
                    Organization
                  </label>
                  <div className="mt-2">
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder='organization'
                      autoComplete="organization"
                      className="block w-full bg-[#F0F2F5] rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="w-full mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium leading-6 text-[#101928]">
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder='phone number'
                      autoComplete="tel"
                      className="block w-full bg-[#F0F2F5] rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="w-full mb-4">
                  <label htmlFor="walletaddress" className="block text-sm font-medium leading-6 text-[#101928]">
                    Wallet Address
                  </label>
                  <div className="mt-2">
                    <input
                      id="walletaddress"
                      name="walletaddress"
                      type="text"
                      value={wallet}
                      onChange={(e) => setWallet(e.target.value)}
                      placeholder='wallet address'
                      autoComplete="off"
                      className="block w-full bg-[#F0F2F5] rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                  <button 
                 type='button'
                  className="bg-green w-full px-4 py-2 rounded-md text-white"
                  onClick={() => {
                    console.log("createCustomerFunction")
                    createCustomerFunction();
                    // setIsActive("createCustomer");
                  }}
                >
                  Create User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}
