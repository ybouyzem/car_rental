import React, { useEffect, useState } from 'react';
import axios from 'axios';

//React icons

//Components
import HistoryPiece from './HistoryPiece';

//Pics
import EmptyPic from '../Pics/empty.png';


function History({idUser}) {
    // fetching the history || we are serching for the car id & the order id => the result set in 'results' as array
    const [results, setResults] = useState('');
    useEffect(() => {
        fetchHistory(idUser);
    }, [idUser])

    const fetchHistory = async(id) => {
        try{
            const response = await axios.get(`http://127.0.0.1:8000/api/Client/${id}`);
            setResults(response.data.results);
        }catch(error){
            console.log(error);
        }
    }

    if(results.length === 0) {
        return(
            <div className='w-[80%] h-[40%] bg-slate-100/20 flex flex-col items-center justify-between shadow-black shadow-2xl py-[2%]'>
                {/* Title */}
                <div>
                    <span className='text-3xl font-extrabold'>Recent Rents</span>
                </div>
                {/* Description */}
                <div>
                    <span className='text-sm text-gray-200'>Your history is empty.</span>
                </div>
                <div className='h-[50%]'>
                    <img src={EmptyPic} alt="" className='h-full' />
                </div>
            </div>
        )
    }else {
        return (
            <div className='w-[80%] h-[40%] bg-slate-100/20 flex flex-col items-center justify-between shadow-black shadow-2xl py-[2%] gap-5'>
                {/* Title */}
                <div>
                    <span className='text-3xl font-extrabold'>Recent Rents</span>
                </div>
                {/* Histoy Content */}
                <div className='w-full flex flex-col px-[1%] overflow-y-auto'>
                    {/* Pieces */}
                    {
                        results.map((row, key) => {
                            return <HistoryPiece key={key} carId={row.VoitureId} orderId={row.ReservationId} />
                        })
                    }
                </div>
            </div>
        )
    }
  
}
export default History;