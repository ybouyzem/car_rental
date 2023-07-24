import React, { Component } from 'react'

//Components
import DisplayCarsHome from './DisplayCarsHome';
import About from '../About/About';

//React icons
import {AiOutlineArrowRight} from 'react-icons/ai';


class Home extends Component {
  render() {
    function nextbttn(){
      const container = document.getElementById('components');
      container.scrollBy(container.scrollWidth,0);
      const prev = document.getElementById('prev');
      const next = document.getElementById('next');
      prev.style.opacity = 1;
      prev.style.scale = 1;
      next.style.opacity = 0;
      next.style.scale = 0;
    }
    function prevbttn(){
      const container = document.getElementById('components');
      container.scrollBy(-container.scrollWidth,0);
      const prev = document.getElementById('prev');
      const next = document.getElementById('next');
      prev.style.opacity = 0;
      prev.style.scale = 0;
      next.style.opacity = 1;
      next.style.scale = 1;
    }
    return (
      <div className='h-[100vh] w-full relative'>
        <div id='next' onClick={nextbttn} className='absolute right-5 top-5 md:p-[1.5%] p-3 rounded-full bg-red-500/20 hover:bg-red-600/20 duration-300 cursor-pointer z-10'>
            <AiOutlineArrowRight className='md:text-xl text-sm' />
        </div>
        <div id='prev' onClick={prevbttn} className='absolute left-5 top-5 md:p-[1.5%] p-3 rounded-full bg-red-500/20 hover:bg-red-600/20 duration-300 cursor-pointer z-10 opacity-0'>
            <AiOutlineArrowRight className='md:text-xl text-sm rotate-180' />
        </div>
        <div id='components' className='w-full h-full flex overflow-hidden scroll-smooth'>
          <DisplayCarsHome />
          <About />
        </div>
      </div>
    )
  }
}
export default Home;