/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
'use client'
import React, {useState, useEffect}  from 'react'
import { nanoid } from 'nanoid';
import { useReadContract, useAccount, useWriteContract, useConnect } from 'wagmi';
import {Contract_ABI } from "../contract/contractAbi";
import { liskSepolia, lisk } from 'viem/chains';
import { injected } from 'wagmi/connectors';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const contactAddress = '0x7066989818c88cD1e533d22519c381c6e21Ed487';
export default function CreateInvoice() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [date, setDate] = useState("");
  const [payMeth, setPayMeth] = useState("");
  const [payType, setPayType] = useState("");
  const [itemm, setItemm] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [isActive, setIsActive] = useState("create");
  const [items, setItems] = useState([{ id: 1 }]);
  const [invoiceId, setInvoiceId] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const { address, isConnected } = useAccount();
  const [buyerAddress, setBuyerAddress] = useState('');
  const [goods, setGoods] = useState(['']);
  const [customerName, setCustomerName] = useState('');
  const [totalAmt, setTotalAmt] = useState('');
  const [tokenAddress, setTokenAddress] = useState('');
  const { connectAsync, connectors } = useConnect();

  const { writeContract, writeContractAsync } = useWriteContract();
  const createInvoiceFunction = async () => {
    try {
      if (address) {
        await connectAsync({chainId:liskSepolia.id, connector:injected()})
      }
      const result =  writeContractAsync({
        address: contactAddress,
        abi: Contract_ABI,
        functionName: 'createInvoice',
        args: ['0xB5ADB29C608CFbfA5D6BB216cCC80eCBd76A45F1', goods, Number(qty) * Number(price), '0x8a21CF9Ba08Ae709D64Cb25AfAA951183EC9FF6D'],
      });
      console.log('New invoice created:', result);
    } catch (error) {
      console.error('Error creating invoice:', error);
    }
  };

useEffect(() => {
  const newInvoiceId = `IVS${nanoid()}`; // Prefix with "IVS-"
  setInvoiceId(newInvoiceId);
}, []);

  // Insert the new row before this "Add more items" div
  const addNewRow = () => {
    setItems([...items, { id: items.length + 1 }]);
  };
  const handlePreviewClick = () => {
    setIsActive("claim");
    setShowPreview(!showPreview);
  };

  const handleDownload = () => {
    const input = document.getElementById('invoice-preview');
    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgProps= pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save("invoice.pdf");
      });
    } else {
      console.error('Invoice preview element not found');
      alert('Please preview the invoice before downloading.');
    }
  };

 
  return (
    <div className='px-4 sm:px-20 bg-white pb-20'>
      {!showPreview ? (
        <>
          <div className='mb-8 sm:mb-16'>
            <p className='text-[#000] font-bold mb-4 sm:mb-8'>Invoice details</p>
            <div className=' flex flex-row'>
              <form className=''>
                <div className='flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 w-full sm:w-[80vw]'>
                  <div className="w-full mb-4 sm:mb-0">
                    <label htmlFor="customer-name" className="block text-sm font-medium leading-6 text-[#101928]">
                      Customer Name
                    </label>
                    <div className="mt-2">
                      <select
                        id="customer-name"
                        name="customer-name"
                        autoComplete="customer-name"
                        className="block w-full bg-[#F0F2F5] rounded-md border-0 p-[8.1px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setName(e.target.value)} value={name}
                      >
                        <option>AbdulKabir</option>
                        <option>Roheemah</option>
                        <option>Bashir</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-full mb-4 sm:mb-0">
                    <label htmlFor="Invoice" className="block text-sm font-medium leading-6 text-[#101928]">
                      InvoiceID
                    </label>
                    <div className="mt-2">
                      <input
                        id="Invoice"
                        name="Invoice"
                        type="text"
                        value={invoiceId}
                        readOnly 
                        autoComplete="address-level1"
                        className="block w-full bg-[#F0F2F5] rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setId(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    <label htmlFor="date" className="block text-sm font-medium leading-6 text-[#101928]">
                      Date
                    </label>
                    <div className="mt-2">
                      <input
                        id="date"
                        name="date"
                        type="date"
                        autoComplete="date"
                        className="block w-full bg-[#F0F2F5] rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                      />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 w-full sm:w-[80vw] mt-4 sm:mt-8'>
                  <div className="w-full mb-4 sm:mb-0">
                    <label htmlFor="payment-method" className="block text-sm font-medium leading-6 text-[#101928]">
                      Payment Method
                    </label>
                    <div className="mt-2">
                      <select
                        id="payment-method"
                        name="payment-method"
                        autoComplete="payment-method"
                        className="block w-full bg-[#F0F2F5] rounded-md border-0 p-[8.1px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setPayMeth(e.target.value)} value={payMeth}
                      >
                        <option>LiskSepolia</option>
                        <option>Lisk</option>
                        <option>Base</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full">
                    <label htmlFor="recieve-payment-in" className="block text-sm font-medium leading-6 text-[#101928]">
                      Recieve Payment in
                    </label>
                    <div className="mt-2">
                      <select
                        id="recieve-payment-in"
                        name="recieve-payment-in"
                        autoComplete="recieve-payment-in"
                        className="block w-full bg-[#F0F2F5] rounded-md border-0 p-[8.1px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setPayType(e.target.value)} value={payType}
                      >
                        <option>LSK</option>
                        <option>ETH</option>
                        <option>USDC</option>
                        <option>USD</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
            <div className='w-full sm:w-auto'>
              <p className='text-[#000] font-bold mb-4 sm:mb-8'>Items</p>
              <form className=''>
                <div className='flex items-center justify-start gap-4 w-full sm:w-[65vw]'>
                  <div className="w-full">
                    <label htmlFor="customer-name" className="text-center block text-sm font-medium leading-6 text-[#101928]">
                      Items
                    </label>
                    <div className="mt-2">
                      <input
                        id="Invoice"
                        name="Invoice"
                        type="text"
                        placeholder='Auto'
                        autoComplete="address-level1"
                        className="block w-full bg-[#F0F2F5] rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setItemm(e.target.value)} value={itemm}
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    <label htmlFor="Invoice" className="text-center block text-sm font-medium leading-6 text-[#101928]">
                      QTY
                    </label>
                    <div className="mt-2 relative">
                      <input
                        id="qty"
                        name="qty"
                        type="text"
                        placeholder='Auto'
                        autoComplete="address-level1"
                        className="block w-full bg-[#F0F2F5] rounded-md border-0 p-1.5 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setQty(e.target.value)} value={qty}
                      />
                      <img 
                        src="./invois-plus.svg" 
                        alt="" 
                        className="absolute right-2 top-1/2 transform -translate-y-1 cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    <label htmlFor="Price" className="text-center block text-sm font-medium leading-6 text-[#101928]">
                      Price
                    </label>
                    <div className="mt-2">
                      <input
                        id="Price"
                        name="Price"
                        type="text"
                        placeholder='Auto'
                        autoComplete="Price"
                        className="block w-full bg-[#F0F2F5] rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setPrice(e.target.value)} value={price}
                      />
                    </div>
                  </div>
                </div>
                {items.map((item) => (
                  <div key={item.id} className='flex items-center justify-start gap-4 w-full sm:w-[65vw] mt-4'>
                    <div className="w-full">
                      <div className="mt-2">
                        <input
                          id="Invoice"
                          name="Invoice"
                          type="text"
                          placeholder='Auto'
                          autoComplete="address-level1"
                          className="block w-full bg-[#F0F2F5] rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="w-full">
                      <div className="mt-2 relative">
                        <input
                          id="qty"
                          name="qty"
                          type="text"
                          placeholder='Auto'
                          autoComplete="address-level1"
                          className="block w-full bg-[#F0F2F5] rounded-md border-0 p-1.5 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <img 
                          src="./invois-plus.svg" 
                          alt="" 
                          className="absolute right-2 top-1/2 transform -translate-y-1 cursor-pointer"
                        />
                      </div>
                    </div>

                    <div className="w-full">
                      <div className="mt-2">
                        <input
                          id="Price"
                          name="Price"
                          type="text"
                          placeholder='Auto'
                          autoComplete="Price"
                          className="block w-full bg-[#F0F2F5] rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </form>
              <div 
                className='flex items-center justify-start gap-4 mt-6 cursor-pointer pb-6'
                onClick={addNewRow}
              >
                <img src="./invois-roundplus.svg" alt="" />
                <p className='text-[#428777]'>Add more items</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div id="invoice-preview" className="mt-8 py-16 px-10 border rounded-lg shadow-lg bg-white">
          <h2 className="text-2xl font-bold mb-4">Invoice Preview</h2>
          <div className="mb-4">
            <p className='mt-4'><strong>Customer Name:</strong> {name}</p>
            <p className='mt-4'><strong>Invoice ID:</strong> {id}</p>
            <p className='mt-4'><strong>Date:</strong> {date}</p>
            <p className='mt-4'><strong>Payment Method:</strong> {payMeth}</p>
            <p className='mt-4'><strong>Receive Payment in:</strong> {payType}</p>
          </div>
          <table className="w-full my-16 border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3 border-b-2 border-gray-300 font-semibold">Item Desc.</th>
                <th className="text-left p-3 border-b-2 border-gray-300 font-semibold">Qty</th>
                <th className="text-left p-3 border-b-2 border-gray-300 font-semibold">Rate</th>
                <th className="text-left p-3 border-b-2 border-gray-300 font-semibold">Amount</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 border-b border-gray-200">{itemm}</td>
                  <td className="p-3 border-b border-gray-200">{qty}</td>
                  <td className="p-3 border-b border-gray-200">{price}</td>
                  <td className="p-3 border-b border-gray-200">{Number(qty) * Number(price)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-between">
            <div>
              <p className='text-[24px]'>Terms & Conditions</p>
              <p>Please pay within 15 days of receiving this invoice.</p>
            </div>
            <div>
              <div className="flex items-center justify-between gap-20 mb-4">
                <p>Sub Total:</p>
                <p>200 InvoisX3434</p>
              </div>
              <div className="flex items-center justify-between gap-20 mb-4">
                <p>Total:</p>
                <p>200 InvoisX3434</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='w-full'>
        <div className='flex flex-wrap items-start justify-start gap-4 pt-4 sm:pt-10'>
          <button 
            className={`flex items-center justify-center cursor-pointer gap-2 w-full sm:w-[calc(50%-8px)] md:w-[calc(33.33%-11px)] lg:w-[12vw] px-4 py-2 transition-all duration-300 ease-in-out ${isActive === "create" ? 'bg-[#428777] text-white' : 'bg-[#E8F4F1] text-[#428777] hover:bg-[#428777] hover:text-white'}`} 
            onClick={() => {
              setIsActive("create");
              createInvoiceFunction();

            }
            }
          >
            <img src={isActive === "create" || isActive === "create:hover" ? "./invois-tabIcon-white.svg" : "./invois-tabIcon.svg"} alt="" className="transition-all duration-300 ease-in-out" />
            <p>Save</p>
          </button>
          <button 
            className={`flex items-center justify-center cursor-pointer gap-2 w-full sm:w-[calc(50%-8px)] md:w-[calc(33.33%-11px)] lg:w-[12vw] px-4 py-2 transition-all duration-300 ease-in-out ${isActive === "claim" ? 'bg-[#428777] text-white' : 'bg-[#E8F4F1] text-[#428777] hover:bg-[#428777] hover:text-white'}`} 
            onClick={handlePreviewClick}
          >
            <img src={isActive === "claim" || isActive === "claim:hover" ? "./invois-tabIcon-white.svg" : "./invois-tabIcon.svg"} alt="" className="transition-all duration-300 ease-in-out" />
            <p>{showPreview ? "Back" : "Preview"}</p>
          </button>
          <button 
            className={`flex items-center justify-center cursor-pointer gap-2 w-full sm:w-[calc(50%-8px)] md:w-[calc(33.33%-11px)] lg:w-[12vw] px-4 py-2 transition-all duration-300 ease-in-out ${isActive === "list" ? 'bg-[#428777] text-white' : 'bg-[#E8F4F1] text-[#428777] hover:bg-[#428777] hover:text-white'}`} 
            onClick={handleDownload}
          >
            <img src={isActive === "list" || isActive === "list:hover" ? "./invois-tabIcon-white.svg" : "./invois-tabIcon.svg"} alt="" className="transition-all duration-300 ease-in-out" />
            <p>Download</p>
          </button>
          <button 
            className={`flex items-center justify-center cursor-pointer gap-2 w-full sm:w-[calc(50%-8px)] md:w-[calc(33.33%-11px)] lg:w-[12vw] px-4 py-2 transition-all duration-300 ease-in-out ${isActive === "history" ? 'bg-[#428777] text-white' : 'bg-[#E8F4F1] text-[#428777] hover:bg-[#428777] hover:text-white'}`} 
            onClick={() => setIsActive("history")}
          >
            <img src={isActive === "history" || isActive === "history:hover" ? "./invois-tabIcon-white.svg" : "./invois-tabIcon.svg"} alt="" className="transition-all duration-300 ease-in-out" />
            <p>Send</p>
          </button>
          {/* <button 
            className={`flex items-center justify-center cursor-pointer gap-2 w-full sm:w-[calc(50%-8px)] md:w-[calc(33.33%-11px)] lg:w-[12vw] px-4 py-2 transition-all duration-300 ease-in-out ${isActive === "print" ? 'bg-[#428777] text-white' : 'bg-[#E8F4F1] text-[#428777] hover:bg-[#428777] hover:text-white'}`} 
            onClick={() => setIsActive("print")}
          >
            <img src={isActive === "print" || isActive === "print:hover" ? "./invois-tabIcon-white.svg" : "./invois-tabIcon.svg"} alt="" className="transition-all duration-300 ease-in-out" />
            <p>Print</p>
          </button> */}
        </div>
      </div>
    </div>
  );
}
