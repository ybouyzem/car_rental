import React from 'react';
import {Link} from 'react-router-dom';

//React icons
import {BsArrowLeftShort} from 'react-icons/bs';

//Components

//Pics
import mailbox from '../Pics/mailbox.png';

 function Verifie_email() {
    return (
        <div className='w-[50%] h-[45%] bg-slate-100/20 shadow-black shadow-2xl flex flex-col items-center justify-between gap-2 py-[2%] overflow-auto'>
            <img src={mailbox} alt="" className='w-[20%]' />
            <span className='text-xl capitalize font-extrabold'>Please Verifie your email</span>
            <div className='w-[70%] mt-3'>
                <p className="text-justify text-sm leading-6">
                    Thank you for signing up! We have sent a verification link to your email address. Please check your inbox and click on the link to verify your email. 
                </p>
            </div>
            <Link className='text-xs flex items-center' to="/"><BsArrowLeftShort className='text-lg' /> Go back to Home</Link>
        </div>
    )
}
export default Verifie_email;