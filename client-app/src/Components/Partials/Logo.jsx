import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// React icons
import {RiSteeringFill} from 'react-icons/ri';


class Logo extends Component {
  render() {
    return (
      <div>
        <span><Link className='w-full md:text-lg text-sm text-white md:flex md:flex-row justify-center items-center flex-col gap-2 text-center' to="/"><RiSteeringFill className='text-red-500 text-lg w-full md:w-5' />Car Rental</Link></span>
      </div>
    )
  }
}
export default Logo;