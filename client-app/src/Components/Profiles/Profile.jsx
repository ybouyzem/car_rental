import React from 'react'
import { redirect, useNavigate } from 'react-router-dom';

//React icons
import {MdOutlineModeEditOutline} from 'react-icons/md';
import {GiConfirmed} from 'react-icons/gi';
import {IoLogOutOutline} from 'react-icons/io5';

//Components

//Pics
import ProfilePic from '../Pics/profile.png';
import EmptyPic from '../Pics/empty.png';



function Profile ({ authorized, onLogout }) {
  const navigate = useNavigate();
  const loggedOut = () => {
    onLogout();
    navigate("/");
  }
  if(!authorized) redirect("/Sign_In");
  else {
    return (
      <div className='h-full w-full flex flex-col justify-center items-center gap-10'>
        {/* Profile */}
        <div className='w-[80%] h-[40%] bg-slate-100/20 flex justify-between shadow-black shadow-2xl'>
          {/* Profile Photo */}
          <div className='w-[40%] h-full flex justify-center items-center'>
            <img src={ProfilePic} alt="" className='w-[50%]' />
          </div>
  
          {/* Profile Data */}
          <div className='w-[60%] h-full flex flex-col justify-center gap-5'>
            {/* Name */}
            <div className='w-full flex items-end gap-5'>
              <span className='font-bold'>Nom :</span>
              <form className="w-[50%] flex items-center gap-2">
                <input className='w-full text-sm bg-transparent placeholder:text-white outline-none' type='text' placeholder='Alahyane' id='LastName' />
                <label htmlFor="LastName" className='cursor-pointer'><MdOutlineModeEditOutline className='text-red-500' /></label>
                <button type="submit"><GiConfirmed className='text-green-500' /></button>
              </form>
            </div>
            <div className='w-full flex items-end gap-5'>
              <span className='font-bold'>Prenom :</span>
              <form className="w-[50%] flex items-center gap-2">
                <input className='w-full text-sm bg-transparent placeholder:text-white outline-none' type='text' placeholder='YouSsef' id='FirstName' />
                <label htmlFor="FirstName" className='cursor-pointer'><MdOutlineModeEditOutline className='text-red-500' /></label>
                <button type="submit"><GiConfirmed className='text-green-500' /></button>
              </form>
            </div>
            {/* Email */}
            <div className='w-full flex items-end gap-5'>
              <span className='font-bold'>Email :</span>
              <form className="w-[50%] flex items-center gap-2">
                <input className='w-full text-sm bg-transparent placeholder:text-white outline-none' type='email' placeholder='Alahyane.yo@gmail.com' id='Email' />
                <label htmlFor="Email" className='cursor-pointer'><MdOutlineModeEditOutline className='text-red-500' /></label>
                <button type="submit"><GiConfirmed className='text-green-500' /></button>
              </form>
            </div>
            {/* Password */}
            <div className='w-full flex items-end gap-5'>
              <span className='font-bold'>Password :</span>
              <form className="w-[50%] flex items-center gap-2">
                <input className='w-full text-sm bg-transparent placeholder:text-white outline-none' type='password' placeholder='********' id='Password' />
                <label htmlFor="Password" className='cursor-pointer'><MdOutlineModeEditOutline className='text-red-500' /></label>
                <button type="submit"><GiConfirmed className='text-green-500' /></button>
              </form>
            </div>
            {/* Log out */}
            <div className='w-full flex items-center gap-5'>
              <span className='font-bold'>Log out :</span>
              <button onClick={loggedOut}><IoLogOutOutline className='text-2xl text-red-500' /></button>
            </div>
          </div>
        </div>
        {/* --------------------------------------------------------------------------------
        --------------------------------------------------------------------------------
        -------------------------------------------------------------------------------- */}
        {/* History */}
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
      </div>
    )
  }
}
export default Profile;