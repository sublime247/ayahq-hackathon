
import dayjs from "dayjs";
import { IInvoice, IItemDescription } from "../../constants/Invoice";
import React from "react";

type Props = {
  data: IInvoice;
  // data: any
};

export function PdfPreview({ data }: Props) {
  return (
      <>
          
          <div className='px-10 sm:px-20 bg-white flex item-center justify-center'>
          <div className='mb-8 sm:mb-16'>
      <div className="border-[1px] max-w-5xl  flex flex-center bg-green items-center align-center ">
      
     
        <div>
          <div className="text-xs leading-6 h-6 mt-6 mb-4">
            <div className="w-[40%] inline-block text-xs float-left pt-2 pr-4">
           
            </div>
            <div className="w-[60%] inline-block text-xs float-right bg-lightBlue rounded-s-full">
              <div className="w-[50%] float-right leading-6">
                invoice: {data.invoiceNumber}
              </div>
              <div className="w-[50%] float-right leading-6 pl-3">
                Date {dayjs(data.createDate).format("DD/MM/YYYY")}
              </div>
            </div>
          </div>
          <div className="inline-block">
            <div className="w-[60%] px-8 text-[8px]">
              <p className="text-xs">Invoice to:</p>
              <p>{data.payerName}</p>
              <p>{data.payerAddress}</p>
           
            </div>
          </div>
          <div className="mt-[30px] px-5 text-[10px] px-5 py-3 text-[10px]">
          <div className="w-full bg-primary inline-block text-background rounded-full p-2">

          <div className="w-[50%] float-left pl-4">Item Description</div>
<div className="w-[10%] float-left text-center px-1">Qty</div>
<div className="w-[20%] float-left text-center px-1">Rate</div>
<div className="w-[20%] float-left text-right pr-4">Amount</div>

            </div>
            {data.items.map((item: IItemDescription, index: number) => {
              return (
                <div className="w-full inline-block" key={index} >
                  <div className="w-[50%] float-left pl-10">
                    {item.description}
                  </div>
                  <div className="w-[10%] float-left text-center">
                    {item.quantity}
                  </div>
                  <div className="w-[20%] float-left text-center">
                    {item.price} {data.tokenSymbol}
                  </div>
                  <div className="w-[20%] float-left text-center">
                    {item.price}
                  </div>
                  
                </div>
              );
            })}
          </div>
          <div className="mt-[100px] px-5">
            <div className="w-full inline-block">
              <div className="w-[50%] float-left text-[10px]">
                <p className="text-xs">Terms & Conditions</p>
                <p>Please pay within 15 days of receiving this invoice.</p>
                <p>Due {dayjs(data.dueDate).format("DD/MM/YYYY")}</p>
              </div>
              <div className="w-[50%] float-left">
                <div>
                  <div className="w-full inline-block text-xs">
                    <div className="w-[50%] float-left text-right">
                      Sub Total
                    </div>
                    <div className="w-[50%] float-left text-right pr-2">
                      {data.subTotal} {data.tokenSymbol}
                    </div>
                  </div>
                  <div className="w-full inline-block text-xs">
                    <div className="w-[50%] float-left text-right">Total</div>
                    <div className="w-[50%] float-left text-right pr-2">
                      {data.total} {data.tokenSymbol}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="w-full">

          </div>
        </div>
              </div>
              </div>
              </div>
              
    </>
  );
}
