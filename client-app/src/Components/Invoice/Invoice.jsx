import React, { useRef } from 'react'
import { redirect } from 'react-router';
import ReactToPrint from 'react-to-print';

// Components
import InvoiceHeader from './InvoiceHeader';
import InvoiceDescription from './InvoiceDescription';
import InvoiceFooter from './InvoiceFooter';

// React icons
import {FiPrinter} from 'react-icons/fi';

// Pics

function Invoice({pickUpValue, returnValue, cityValue, phoneNumberValue, authorized}) {
  const componentRef = useRef(null);
  if(!authorized) redirect("/");
  else {
    return (
      <div className='w-full h-full relative overflow-auto'>
        <div ref={componentRef} className='w-full h-full bg-white text-slate-500 flex flex-col items-center justify-between px-20 py-[2%]'>
            <InvoiceHeader city={cityValue} phoneNumber={phoneNumberValue} />
            <InvoiceDescription pickUp={pickUpValue} Return={returnValue} />
            <InvoiceFooter pickUp={pickUpValue} Return={returnValue} />
        </div>
        <ReactToPrint
          trigger={() => {
            return (<button className='absolute bottom-[5%] left-[50%] w-12 h-12 flex justify-center items-center rounded-full cursor-pointer bg-red-500/80 hover:bg-red-500/60 duration-300'><FiPrinter className='text-xl' /></button>);
          } }
          content={() => componentRef.current}
          documentTitle='Invoice'
        />
      </div>
    )
  }
  
}
export default Invoice;