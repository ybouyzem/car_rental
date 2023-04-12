import React, { Component } from 'react'

//Components
import Logo from '../Partials/Logo';

//React icons
import {BsPinMap} from 'react-icons/bs';
import {BsPhoneVibrate} from 'react-icons/bs';
import {TfiEmail} from 'react-icons/tfi';

class ContactDetails extends Component {
  render() {
    return (
      <div className='w-[100%] bg-slate-100/20 flex justify-between shadow-black shadow-2xl'>
        <div className='w-[50%] h-full flex flex-col justify-between items-center py-10 gap-16'>
            <div className='flex flex-col items-center gap-10'>
              <Logo />
              <span className='text-2xl text-gray-200 font-extrabold'>Contact details</span>
            </div>
            <div className='w-full flex flex-col items-center gap-10 text-sm'>
            {/* Address */}
            <div className="w-[50%] flex flex-col items-center gap-4">
                <BsPinMap className='text-2xl text-red-500' />
                <span className='text-center'>Complexe universitaire Mghila PB: 591.Béni-Mellal.</span>
            </div>
            {/* Address */}
            <div className="w-[50%] flex flex-col items-center gap-4">
                <BsPhoneVibrate className='text-2xl text-red-500' />
                <ul>
                  <li><a className='duration-300 hover:text-red-500' href="tel:+212620429392">(+212) 620 42 93 92</a></li>
                  <li><a className='duration-300 hover:text-red-500' href="tel:+212622538418">(+212) 622 53 84 18</a></li>
                </ul>
            </div>
            {/* Address */}
            <div className="w-[50%] flex flex-col items-center gap-4">
                <TfiEmail className='text-2xl text-red-500' />
                <ul>
                  <li><a className='duration-300 hover:text-red-500' href="mailto:alahyane900@gmail.com">alahyane.yo@gmail.com</a></li>
                  <li><a className='duration-300 hover:text-red-500' href="mailto:alpha0110@hotmail.com">alpha0110@hotmail.com</a></li>
                </ul>
            </div>
            </div>
        </div>

        <div className='w-[50%] h-full'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26956.884658898685!2d-6.334645561417132!3d32.37599058109489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda385b063df23b5%3A0xe3f866349d17b14c!2sE.S.T%20beni%20mellal!5e0!3m2!1sen!2sma!4v1678565575764!5m2!1sen!2sma" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    )
  }
}
export default ContactDetails;