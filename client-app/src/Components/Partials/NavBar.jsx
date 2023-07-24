import React, { useState } from 'react';
import axios from 'axios';

//Components
import Logo from './Logo';

//React icons
import {AiOutlineHome} from 'react-icons/ai';
import {IoCarSportOutline} from 'react-icons/io5';
import {TbMessageCircle} from 'react-icons/tb';
import {AiOutlineUserAdd} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import {Link} from 'react-router-dom';


function NavBar({isLoggedIn, idUser}) {
  var [nom, setNom] = useState('');
  var [prenom, setPrenom] = useState('');

  var nav = [
    {icon: <AiOutlineHome className='md:text-2xl text-lg' />, navigate: "/"},
    {icon: <IoCarSportOutline className='md:text-2xl text-lg' />, navigate: "/Display_Cars"},
    {icon: <TbMessageCircle className='md:text-2xl text-lg' />, navigate: "/Contact"},
  ];
  if(isLoggedIn){
    // extract user data
    const userData = async (id) => {
      try{
        const response = await axios.get(`http://127.0.0.1:8000/api/Utilisateur/${id}`)
        setNom(response.data.message.nom);
        setPrenom(response.data.message.prenom);
      }catch(error){
        console.log(error);
      }
    }
    userData(idUser);

    nav.push ({icon: `${nom.charAt(0).toUpperCase()}${prenom.charAt(0).toUpperCase()}`, navigate: "/Profile"});
  }else{
    nav.push({icon: <AiOutlineUserAdd className='md:text-2xl text-lg' />, navigate: "/Sign_Up"},
             {icon: <CgProfile className='md:text-2xl text-lg' />, navigate: "/Sign_In"});
  }
  
  const myNav = nav.map((item, key) => {
    return(
      <li key={key}><Link className='md:w-12 md:h-12 w-10 h-10 flex justify-center items-center bg-slate-100/20 rounded-full cursor-pointer hover:bg-red-500/20 hover:text-red-500 duration-300' to={item.navigate}>{item.icon}</Link></li>
    )
  });
  return (
    <header className='w-full h-full flex flex-col justify-between items-center'>
      <Logo />
      <nav className='flex flex-col justify-center items-center'>
        <ul className='flex flex-col md:gap-10 gap-5 text-white text-xs md:text-sm'>
          {myNav}
        </ul>
      </nav>
    </header>
  )
}
export default NavBar;