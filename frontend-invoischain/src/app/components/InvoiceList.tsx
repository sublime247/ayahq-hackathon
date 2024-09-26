/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useReadContract } from 'wagmi';
import { Contract_ABI } from "../contract/contractAbi";
import { ethers } from 'ethers';

const contactAddress = '0x960B28170745254fD5F27379B3C58D2D704355DC';

export default function InvoiceList() {
  const { data: invoiceList, isLoading, error } = useReadContract({
    abi: Contract_ABI,
    address: contactAddress,
    functionName: 'generateAllInvoices',
  });
    // console.log(invoiceList);
    console.log(invoiceList);
  // Convert timestamp to human-readable date
  const convertTimestampToDate = (timestamp: unknown) => {
    const date = new Date(Number(timestamp) * 1000); // Convert from seconds to milliseconds
    return date.toLocaleDateString();
  };
  const convertWeiToEther = (amountInWei: { toString: () => ethers.BigNumberish; }) => {
    return ethers.formatEther(amountInWei.toString()); // Convert BigInt to Ether
  };
  if (isLoading) return <div>Loading invoices...</div>;
  if (error) return <div>Error loading invoices: {error.message}</div>;

  return (
    <div className='px-4 sm:px-20'>
      <div className='mt-8 sm:mt-16 overflow-x-auto'>
        <table className="min-w-full bg-white border border-gray-300 shadow-sm rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice Number</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Buyer Address</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Amount</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(invoiceList) && invoiceList.length > 0 ? (
              invoiceList.map((invoice:any, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap border-b border-gray-200">
                    {convertTimestampToDate(invoice.date)}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap border-b border-gray-200">
                    {invoice.invoiceId.toString()}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap border-b border-gray-200">
                    {invoice.buyer}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap border-b border-gray-200">
                    {convertWeiToEther(invoice.amount)}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap border-b border-gray-200">
                    <span
                      className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                        invoice.isPaid ? 'bg-green-500' : 'bg-red-500'
                      } text-white`}
                    >
                      {invoice.isPaid ? 'Paid' : 'Unpaid'}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-4 sm:px-6 py-4 whitespace-nowrap border-b border-gray-200 text-center">
                  No invoices found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* pagination */}
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                <a href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Page <span className="font-medium">1</span> of <span className="font-medium">10</span>
                    </p>
                </div>
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        <a href="#" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                            <span className="sr-only">Previous</span>
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                            <span className="sr-only">Next</span>
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
        </div>
    </div>
  );
}
