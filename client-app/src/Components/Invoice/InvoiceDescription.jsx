import React from 'react'

// Components

// React icons

// Pics

function InvoiceDescription({pickUp, Return}) {
    var Description = [
        {data: "15478"},
        {data: "Car Model 1954"},
        {data: pickUp},
        {data: Return},
        {data: "600.00 MAD"},
    ];
    const MyData = Description.map(item => {
        return (
            <td className='text-sm px-5 py-4 max-w-[150px]'>{item.data}</td>
        )
    });
  return (
    <table className='w-full text-center'>
        <thead>
            <tr className='text-black font-extrabold'>
                <th className="py-4">Car ID</th>
                <th className="py-4">Model</th>
                <th className="py-4">Pick up</th>
                <th className="py-4">Return</th>
                <th className="py-4">Price/24h</th>
            </tr>
        </thead>
        <tbody className='w-full'>
            <tr className='w-full border-y-2 divide-slate-800 border-solid'>
                {MyData}
            </tr>
        </tbody>
    </table>
  )
}
export default InvoiceDescription;