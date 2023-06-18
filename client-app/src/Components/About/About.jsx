import React, { Component } from 'react'
import {Link} from 'react-router-dom';

//Components

//React icons
import {RiSteeringFill} from 'react-icons/ri';

//Pics
import Pic from '../Pics/car-png-16828.png';

class About extends Component {
  render() {
    return (
      <div className='min-w-full h-[100vh] flex justify-center items-center'>
          <div className='w-[90%] h-[70%] bg-slate-100/20 flex justify-between shadow-black shadow-2xl'>
            <div className='w-[40%] flex flex-col justify-between items-center p-[3%] gap-10'>
              <div className='w-full flex justify-center'>
                <span className='text-red-500 text-5xl font-extrabold flex justify-center items-center gap-5'><RiSteeringFill className='animate-spin' /><span className='text-white bg-red-500 p-2'>Car Rental</span></span>
              </div>
              <div className='overflow-y-auto'>
                <p className='text-sm leading-7 text-justify'>The rental car business is a thriving industry that provides short-term access to vehicles for customers who need them for various purposes. Whether for business or leisure, rental car businesses offer a convenient way to access a vehicle without the burden of ownership. Customers can choose from a variety of vehicles, from economy cars to luxury vehicles, depending on their needs and budget. In addition.</p>
              </div>
              <div className='w-full flex justify-center items-center'>
                <Link to="/Contact" className='w-[50%] bg-red-500/20 hover:bg-red-600/20 duration-300 py-5 cursor-pointer flex justify-center items-center'>Contact Us</Link>
              </div>
            </div>
            <div className='w-[60%] flex justify-center items-center mix-blend-multiply relative'>
              <div className='before:conte  nt-[""] before:absolute before:left-10 before:top-[40%] before:-z-10 before:w-[350px] before:h-[350px] before:bg-purple-500 before:rounded-full before:opacity-30 before:filter before:blur-2xl'></div>
              <div className='before:content-[""] before:absolute before:right-10 before:top-[40%] before:-z-10 before:w-[350px] before:h-[350px] before:bg-yellow-500 before:rounded-full before:opacity-30 before:filter before:blur-2xl'></div>
              <div className='before:content-[""] before:absolute before:right-[20%] before:bottom-[40%] before:-z-10 before:w-[350px] before:h-[350px] before:bg-sky-500 before:rounded-full before:opacity-30 before:filter before:blur-2xl'></div>
              <img src={Pic} alt="" />
            </div>
          </div>
      </div>
    )
  }
}
export default About;