import React, { Component } from 'react'
import {Link} from 'react-router-dom'

//Components
// import DisplayCarHome from './DisplayCarHome';
//React icons
// import {BsArrowDown} from 'react-icons/bs';
// import {BsArrowUp} from 'react-icons/bs';
import {SiMercedes} from 'react-icons/si';
import {SiFord} from 'react-icons/si';
import {SiLamborghini} from 'react-icons/si';
import {SiToyota} from 'react-icons/si';
import {SiAudi} from 'react-icons/si';
import {SiBmw} from 'react-icons/si';
import {SiHyundai} from 'react-icons/si';
import {SiNissan} from 'react-icons/si';
import {SiChevrolet} from 'react-icons/si';
import {SiJaguar} from 'react-icons/si';
//Top 3 Cars Data
//Pics
// import Pic0 from '../Pics/Top3/vecteezy_modern-car-isolated-on-transparent-background-3d-rendering_19763445_570.png';
// import Pic1 from '../Pics/Top3/vecteezy_modern-car-isolated-on-transparent-background-3d-rendering_19763446_683.png';
// import Pic2 from '../Pics/Top3/vecteezy_modern-car-isolated-on-transparent-background-3d-rendering_19609463_591.png';
import Pic from '../Pics/car-png-39055.png';

export default class DisplayCarsHome extends Component {
  render() {
    // const state = [
    //     {
    //         pic: Pic0
    //     },
    //     {
    //         pic: Pic1
    //     },
    //     {
    //         pic: Pic2
    //     }
    // ];
    // function nextbttn(){
    //     const container = document.getElementById('cars');
    //     container.scrollBy(0,container.scrollHeight/state.length);
    // }
    // function prevbttn(){
    //     const container = document.getElementById('cars');
    //     container.scrollBy(0,-(container.scrollHeight/state.length));
    // }
    return (
      <div className='min-w-full h-full flex flex-col justify-center px-[2%] relative'>
        <div className='w-full h-full flex'>
          <div className='h-full flex flex-col justify-center gap-10'>
            <div>
              <span className='text-7xl font-extrabold capitalized space-x-2 text-white'>Find, book, and rent a car in  <span className='text-red-500'>Béni Mellal...</span></span>
            </div>
            <div>
              <p className='text-xl text-gray-200 leading-7 font-Fasthand'>Welcome to our car rental service, where we provide you with a hassle-free and convenient way to rent a car for all your transportation needs.</p>
            </div>
            <div className='w-[80%] flex gap-5'>
              <Link to="/Display_Cars" className='w-[50%] bg-red-500/20 hover:bg-red-600/20 duration-300 py-5 cursor-pointer flex justify-center items-center'>Rental Car</Link>
              <Link to="/Contact" className='w-[50%] border-2 border-red-500/20 hover:border-red-600/20 duration-300 py-5 cursor-pointer flex justify-center items-center'>Get in touch</Link>
            </div>
          </div>
          <div className='h-full flex items-center'>
            <img src={Pic} alt="" />
          </div>
        </div>
        <div className='w-full flex justify-center gap-10 text-5xl px-[5%] absolute bottom-10 '>
          <SiMercedes />
          <SiFord />
          <SiLamborghini />
          <SiToyota />
          <SiAudi />
          <SiBmw />
          <SiHyundai />
          <SiNissan />
          <SiChevrolet />
          <SiJaguar />
        </div>
        {/* <div className='absolute right-10 bottom-10 flex flex-col gap-4'>
            <div onClick={prevbttn} className='w-12 h-12 flex justify-center items-center bg-slate-100/20 rounded-full cursor-pointer hover:bg-red-500/20 hover:text-red-500 duration-300'><BsArrowUp /></div>
            <div onClick={nextbttn} className='w-12 h-12 flex justify-center items-center bg-slate-100/20 rounded-full cursor-pointer hover:bg-red-500/20 hover:text-red-500 duration-300'><BsArrowDown /></div>
        </div>
        <div id='cars' className='h-full overflow-hidden scroll-smooth'>
            <DisplayCarHome pic={state[0].pic} />
            <DisplayCarHome pic={state[1].pic} />
            <DisplayCarHome pic={state[2].pic} />
        </div> */}
      </div>
    )
  }
}
