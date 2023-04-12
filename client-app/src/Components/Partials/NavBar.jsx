import React from 'react';


//Components
import Logo from './Logo';

//React icons
import {AiOutlineHome} from 'react-icons/ai';
import {IoCarSportOutline} from 'react-icons/io5';
import {TbMessageCircle} from 'react-icons/tb';
import {AiOutlineUserAdd} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import {Link} from 'react-router-dom';

function NavBar({isLoggedIn}) {
  var nav = [
    {icon: <AiOutlineHome />, navigate: "/"},
    {icon: <IoCarSportOutline />, navigate: "/Display_Cars"},
    {icon: <TbMessageCircle />, navigate: "/Contact"},
  ];
  if(isLoggedIn){
    nav.push ({icon: <CgProfile />, navigate: "/Profile"});
  }else{
    nav.push({icon: <AiOutlineUserAdd />, navigate: "/Sign_Up"},
             {icon: <CgProfile />, navigate: "/Sign_In"});
  }
  
  const myNav = nav.map(item => {
    return(
      <li><Link className='w-12 h-12 flex justify-center items-center bg-slate-100/20 rounded-full cursor-pointer hover:bg-red-500/20 hover:text-red-500 duration-300' to={item.navigate}>{item.icon}</Link></li>
    )
  });
  return (
    <header className='w-full h-full flex flex-col justify-between items-center'>
      <Logo />
      <nav className='flex flex-col justify-center items-center'>
        <ul className='flex flex-col gap-10 text-white text-2xl'>
          {myNav}
        </ul>
      </nav>
    </header>
  )
}
export default NavBar;