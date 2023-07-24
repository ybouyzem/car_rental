import React from 'react';
import {Link} from 'react-router-dom';

// React icons
import {BsPerson} from 'react-icons/bs';
import {GiGearStick} from 'react-icons/gi';
import {TbGasStation} from 'react-icons/tb';
import {RiSearchEyeLine} from 'react-icons/ri';

//Pics

function CarBox ({handleVehicule, carId, libelleMarque, libelleModele, image, seats, carburant, vitesse}) {

  return (
    <div className='w-full md:min-h-[30vh] min-h-[20vh] bg-slate-100/20 md:rounded-tl-2xl rounded-tl-lg flex p-[2%] overflow-y-auto'>

      {/* Picture */}
      <div className='h-full w-[30%] flex justify-center items-center'>
          <img src={image} alt="Not Found" loading='lazy' />
      </div>

      <div className='h-full w-[70%] flex flex-col justify-between md:py-[2%] py-[1%] md:px-[5%] px-[2%]'>
          {/* Title */}
          <div className='w-full'>
              <span className='font-bold md:text-lg sm:text-sm text-xs relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-[40%] md:after:h-1 after:h-[2px] after:bg-red-500'>{libelleMarque} {libelleModele}</span>
          </div>
          {/* Description */}
          <div className='sm:w-[70%] w-[90%] flex justify-between md:text-sm text-xs'>
              <div className='flex flex-col gap-5'>
                  <div className='flex items-center gap-1'><BsPerson className='sm:text-lg text-sm' /><span>{seats} Seats</span></div>
                  <div className='flex items-center gap-1'><TbGasStation className='sm:text-lg text-sm' /><span>{carburant}</span></div>
              </div>
              <div className='flex flex-col gap-5'>
                  <div className='flex items-center gap-1'><GiGearStick className='sm:text-lg text-sm' /><span>{vitesse}</span></div>
              </div>
          </div>
          <div className='w-full flex justify-end'>
              <Link onClick={()=>{handleVehicule(carId)}} className='flex items-center md:text-sm text-xs gap-1 hover:text-red-500 duration-300 relative after:content-[""] after:absolute after:bottom-0 left-0 after:w-0 after:h-0.5 after:bg-red-500 hover:after:w-[70%] after:duration-300' to="/Display_Cars/Car_Details">See <RiSearchEyeLine className='md:text-lg text-sm' /></Link>
          </div>
      </div>
    </div>
  )
}
export default CarBox;