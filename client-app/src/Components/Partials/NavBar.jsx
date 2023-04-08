import React, { Component } from 'react';

//Components
import Logo from './Logo';

//React icons
import {AiOutlineHome} from 'react-icons/ai';
import {IoCarSportOutline} from 'react-icons/io5';
import {TbMessageCircle} from 'react-icons/tb';
import {AiOutlineUserAdd} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import {Link} from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header className='w-full h-full flex flex-col justify-between items-center'>
        <Logo />
        <nav className='flex flex-col justify-center items-center'>
          <ul className='flex flex-col gap-10 text-white text-2xl'>
              <li><Link className='w-12 h-12 flex justify-center items-center bg-slate-100/20 rounded-full cursor-pointer hover:bg-red-500/20 hover:text-red-500 duration-300' to="/"><AiOutlineHome /></Link></li>
              <li><Link className='w-12 h-12 flex justify-center items-center bg-slate-100/20 rounded-full cursor-pointer hover:bg-red-500/20 hover:text-red-500 duration-300' to="/Display_Cars"><IoCarSportOutline /></Link></li>
              <li><Link className='w-12 h-12 flex justify-center items-center bg-slate-100/20 rounded-full cursor-pointer hover:bg-red-500/20 hover:text-red-500 duration-300' to="/Contact"><TbMessageCircle /></Link></li>
              {/* <li><Link className='w-12 h-12 flex justify-center items-center bg-slate-100/20 rounded-full cursor-pointer hover:bg-red-500/20 hover:text-red-500 duration-300' to="/Sign_Up"><AiOutlineUserAdd /></Link></li> */}
              <li><Link className='w-12 h-12 flex justify-center items-center bg-slate-100/20 rounded-full cursor-pointer hover:bg-red-500/20 hover:text-red-500 duration-300' to="/Profile"><CgProfile /></Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}
export default NavBar;