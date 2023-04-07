import React, { Component } from 'react'
import { Outlet } from 'react-router';

//React icons
import {FiSearch} from 'react-icons/fi';

//Components
import CarBox from './CarBox';


class DisplayAllCars extends Component {
  render() {
    return (
        <div className='w-full h-full flex gap-5 pt-[8%] pb-[2%] pr-[1%] relative overflow-hidden'>
          <form className="w-[20%] flex items-center absolute right-5 top-5">
            <FiSearch className='absolute left-2' />
            <input className='w-full px-8 py-2 bg-transparent border-b-2 border-gray-100/20 outline-none focus:border-red-500' type="text" placeholder='Search' />
          </form>
          <div className='w-[50%] h-full flex flex-col gap-5 overflow-y-auto'>
            <CarBox />
            <CarBox />
            <CarBox />
            <CarBox />
            <CarBox />
            <CarBox />
          </div>
          <Outlet />
        </div>
    )
  }
}
export default DisplayAllCars;