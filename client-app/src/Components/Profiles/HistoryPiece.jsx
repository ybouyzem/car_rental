import React from 'react'

// React icons
import {BsPerson} from 'react-icons/bs';
import {TbGasStation} from 'react-icons/tb';
import {GiGearStick} from 'react-icons/gi';
import {AiOutlineArrowRight} from 'react-icons/ai';

// Components

// Pics
import PicTest from '../Pics/vecteezy_modern-car-isolated-on-transparent-background-3d-rendering_19763446_683.png';

function HistoryPiece() {
  return (
    <div className='w-full flex justify-around items-center border-t-2 border-slate-500 border-solid py-2'>
        {/* Pic */}
        <div className='w-[20%]'>
            <img className='w-full' src={PicTest} alt=""  />
        </div>
        {/* Descritption */}
        <div className='w-[25%] flex flex-col gap-3'>
            <div className='w-full'>
                <span className='font-bold text-lgs'>Car Model 1954</span>
            </div>
            <div className='w-[80%] flex justify-between text-sm'>
                <div className='flex flex-col gap-5'>
                    <div className='flex items-center gap-1'><BsPerson className='text-lg' /><span>4 Seats</span></div>
                    <div className='flex items-center gap-1'><TbGasStation className='text-lg' /><span>Essence</span></div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='flex items-center gap-1'><GiGearStick className='text-lg' /><span>Manual</span></div>
                </div>
            </div>
        </div>
        {/* Pick up & return */}
        <div className='text-sm flex flex-col items-center gap-3'>
            <div>
                <span>2023/04/19T15:30</span>
            </div>
            <AiOutlineArrowRight className='text-red-500 text-xl rotate-90' />
            <div>
                <span>2023/04/20T15:30</span>
            </div>
        </div>
        {/* Price */}
        <div>
            <div>
                <span>Price<sub>/24h</sub></span>
            </div>
            <div>
                <span className='text-sm text-red-500 font-extrabold'>600.00 MAD</span>
            </div>
        </div>
    </div>
  )
}
export default HistoryPiece;