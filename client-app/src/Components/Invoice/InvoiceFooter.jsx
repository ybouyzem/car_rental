import React from 'react'

// Components

// React icons

// Pics

function InvoiceFooter({price, pickUp, Return}) {
  // Calcul hours
  const hoursBetweenTwoDates = (pickUpDate, returnDate) => {
    const date1 = new Date(pickUpDate),
    date2 = new Date(returnDate),
    pickUpTime = date1.getTime(),
    returnTime = date2.getTime();

    const hours = Math.abs(returnTime - pickUpTime) / 3600000;
    return hours;
  }
  // Calcul Total 
  const total = (subTotal, hours) => {
    return (parseFloat((subTotal/24) * hours).toFixed(2));
  }
  return (
    <div className='w-full flex justify-between'>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col'>
          <span className='text-black font-extrabold'>Payment Method</span>
          <span className='text-sm'>Manual</span>
        </div>
        <div>
          <span className='font-Fasthand text-5xl text-red-500'>Thanks !</span>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='flex items-end gap-2 p-2'>
          <span className='font-extrabold text-black'>SubTotal</span>
          <span className='text-sm'>{price} MAD</span>
        </div>
        <div className='flex items-end gap-2 p-2'>
          <span className='font-extrabold text-black'>Hours</span>
          <span className='text-sm'>{hoursBetweenTwoDates(Return, pickUp)} hours</span>
        </div>
        <div className='w-full h-[1px] bg-slate-500 mt-2 mb-2'></div>
        <div className='flex items-end bg-slate-200 gap-2 p-2'>
          <span className='font-extrabold text-black'>Total</span>
          <span className='text-sm'>{total(price, hoursBetweenTwoDates(Return, pickUp))} MAD</span>
        </div>
      </div>
    </div>
  )
}
export default InvoiceFooter;