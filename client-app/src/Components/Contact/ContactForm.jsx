import React, { Component } from 'react'

//Components
import Logo from '../Partials/Logo';

//React icons
import {BsPerson} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import {MdOutlineAlternateEmail} from 'react-icons/md';
import {BsTelephone} from 'react-icons/bs';
import {BiMessageRounded} from 'react-icons/bi';
import {FiSend} from 'react-icons/fi';

//Pics
import Pic from '../Pics/dmitry-novikov-dowzTvFVT3M-unsplash.jpg';

class ContactForm extends Component {
  render() {
    return (
      <div className='w-[100%] h-[80vh] bg-slate-100/20 flex justify-between shadow-black shadow-2xl'>
        <div className='h-full'>
            <img src={Pic} alt="" className='max-h-full min-h-full' />
        </div>
        <div className='w-[60%] h-full flex flex-col justify-between items-center py-10'>
            <div className='flex flex-col items-center gap-10'>
            <Logo />
            <span className='text-2xl text-gray-200 font-extrabold'>Feel free to get in touch</span>
            </div>
            
            <form action="" className='w-full flex flex-col items-center gap-10 text-sm overflow-y-auto'>
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
                {/* Phone number */}
                <div className="w-[70%] flex items-center relative">
                    <BsTelephone className='absolute left-2 text-lg' />
                    <input className='w-full px-8 py-2 bg-slate-100/20 outline-none' type="tel" placeholder='Phone number' />
                </div>
                <div className="w-[70%] flex items-center relative">
                    <BiMessageRounded className='absolute left-2 text-lg' />
                    <textarea className='w-full px-8 py-2 bg-slate-100/20 outline-none' name="" id="" cols="30" rows="1" placeholder='Type your Message here...'></textarea>
                </div>
                {/* Submit */}
                <div className="w-[70%]">
                    <button className='w-full bg-red-500/20 hover:bg-red-600/20 duration-300 py-5 cursor-pointer flex items-center justify-center gap-1'><span>Contact Us </span><FiSend className='text-lg' /></button>
                </div>
            </form>
        </div>
    </div>
    )
  }
}
export default ContactForm;