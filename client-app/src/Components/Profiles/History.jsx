import React from 'react'

//React icons

//Components
import HistoryPiece from './HistoryPiece';

//Pics
import EmptyPic from '../Pics/empty.png';


function History() {
    if(true) {
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
                    <HistoryPiece />
                    <HistoryPiece />
                    <HistoryPiece />
                    <HistoryPiece />
                </div>
            </div>
        )
    }
  
}
export default History;