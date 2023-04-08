import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// React icons
import {RiSteeringFill} from 'react-icons/ri';


class Logo extends Component {
  render() {
    return (
      <div>
        <span><Link className='text-lg text-white flex items-center gap-2' to="/"><RiSteeringFill className='text-red-500' />Car Rental</Link></span>
      </div>
    )
  }
}
export default Logo;