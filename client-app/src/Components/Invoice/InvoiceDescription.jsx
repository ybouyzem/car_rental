import React from 'react'

// Components

// React icons

// Pics

function InvoiceDescription({idCar, carWording, price, pickUp, Return}) {
    var Description = [
        {data: idCar},
        {data: carWording? `${carWording.libelleMarque} ${carWording.libelleModele}` : ''},
        {data: pickUp},
        {data: Return},
        {data: price+' MAD' },
    ];
    const MyData = Description.map((item, key) => {
        return (
            <td key={key} className='text-sm px-5 py-4 max-w-[150px]'>{item.data}</td>
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