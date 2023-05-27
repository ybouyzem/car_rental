import React from 'react';

//Components

//Pics
import mailbox from '../Pics/mailbox.png';

 function Verifie_email() {
    return (
        <div className='w-[50%] h-[40%] bg-slate-100/20 shadow-black shadow-2xl flex flex-col items-center gap-2 py-[2%] overflow-auto'>
            <img src={mailbox} alt="" className='w-[20%]' />
            <span className='text-xl capitalize font-extrabold'>Please Verifie your email</span>
            <div className='w-[70%] mt-3'>
                <p className="text-center text-sm leading-6">
                    Thank you for signing up! We have sent a verification link to your email address. Please check your inbox and click on the link to verify your email. 
                </p>
            </div>
        </div>
    )
}
export default Verifie_email;