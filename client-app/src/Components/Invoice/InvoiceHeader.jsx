import React from 'react'

// Components

// React icons
import {RiSteeringFill} from 'react-icons/ri';

// Pics

function InvoiceHeader({city, phoneNumber}) {
  return (
    <div className='w-full flex flex-col gap-10'>
        {/* Logo */}
        <div>
            <span className='text-2xl text-black flex items-center gap-2 font-extrabold'><RiSteeringFill className='text-red-500 text-3xl' />Car Rental</span>
        </div>
        {/* Transmitter and Receiver */}
        <div className='w-full flex justify-between gap-10'>
            {/* Transmitter */}
            <div className='flex flex-col gap-2'>
                <span className='font-extrabold text-black'>From</span>
                <div className='flex gap-2 text-sm'>
                    <span>Address:</span>
                    <span>Campus universitaire M'ghila BP:591, Beni-Mellal 23000</span>
                </div>
                <div className='flex gap-2 text-sm'>
                    <span>Phone:</span>
                    <span>(+212) 620 42 93 92</span>
                </div>
                <div className='flex gap-2 text-sm'>
                    <span>Email:</span>
                    <span>Alahyane.yo@gmail.com</span>
                </div>
            </div>
            {/* Receiver */}
            <div className='flex flex-col gap-2'>
                <span className='font-extrabold text-black'>To</span>
                <div className='flex gap-2 text-sm'>
                    <span>Name:</span>
                    <span>Bouyzem Younes</span>
                </div>
                <div className='flex gap-2 text-sm'>
                    <span>City:</span>
                    <span>{city}</span>
                </div>
                <div className='flex gap-2 text-sm'>
                    <span>Phone:</span>
                    <span>{phoneNumber}</span>
                </div>
                <div className='flex gap-2 text-sm'>
                    <span>Email:</span>
                    <span>alpha0110@hotmail.com</span>
                </div>
            </div>
        </div>
        {/* Invoide id & date */}
        <div className='flex gap-2 items-end'>
            <span className='font-extrabold text-black'>Invoice Number:</span>
            <span className='text-sm'>56432163535</span>
        </div>
    </div>
  )
}
export default InvoiceHeader;