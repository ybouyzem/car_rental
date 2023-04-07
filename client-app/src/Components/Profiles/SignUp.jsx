import React, { Component } from 'react'
import {Link} from 'react-router-dom'

//React icons
import {BsPerson} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import {MdOutlineAlternateEmail} from 'react-icons/md';
import {RiLockPasswordLine} from 'react-icons/ri';
import {VscRefresh} from 'react-icons/vsc';

//Components
import Logo from '../Partials/Logo';

//Pics
import Pic from '../Pics/roberto-nickson-Yp9FdEqaCdk-unsplash.jpg';


class SignUp extends Component {
  render() {
    return (
      <div className='w-[80%] h-[80%] bg-slate-100/20 flex justify-between shadow-black shadow-2xl'>
        <div className='w-[60%] h-full flex flex-col justify-between items-center py-10'>
          <div className='flex flex-col items-center gap-10'>
            <Logo />
            <span className='text-2xl text-gray-200 font-extrabold'>Create an Account</span>
          </div>
          
          <form action="" className='w-full flex flex-col items-center gap-10 text-sm'>
            {/* Full Name */}
            <div className='w-[70%] flex justify-between gap-5'>
              <div className="flex items-center relative">
                <BsPerson className='absolute left-2 text-lg' />
                <input className='w-full px-8 py-2 bg-slate-100/20 outline-none' type="text" placeholder='First name' required />
              </div>
              <div className="flex items-center relative">
                <CgProfile className='absolute left-2 text-lg' />
                <input className='w-full px-8 py-2 bg-slate-100/20 outline-none' type="text" placeholder='Last name' required />
              </div>
            </div>
            {/* Email */}
            <div className="w-[70%] flex items-center relative">
              <MdOutlineAlternateEmail className='absolute left-2 text-lg' />
              <input className='w-full px-8 py-2 bg-slate-100/20 outline-none' type="email" placeholder='Email' required />
            </div>
            {/* Password */}
            <div className="w-[70%] flex items-center relative">
              <RiLockPasswordLine className='absolute left-2 text-lg' />
              <input className='w-full px-8 py-2 bg-slate-100/20 outline-none' type="password" placeholder='Password' required />
            </div>
            <div className="w-[70%] flex items-center relative">
              <VscRefresh className='absolute left-2 text-lg' />
              <input className='w-full px-8 py-2 bg-slate-100/20 outline-none' type="password" placeholder='Confirm Password' required />
            </div>
            {/* Submit */}
            <div className="w-[70%]">
              <input className='w-full bg-red-500/20 hover:bg-red-600/20 duration-300 py-5 cursor-pointer' type="submit" value="Get Started" />
            </div>
          </form>
          <div>
            <span className='text-sm text-gray-200'>Already have an account? <Link to='/Sign_In' className='text-red-500 relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-red-500 hover:after:w-[80%] after:duration-300'>Log in</Link></span>
          </div>
        </div>
        <div className='h-full'>
          <img src={Pic} alt="" className='max-h-full min-h-full' />
        </div>
      </div>
    )
  }
}
export default SignUp;