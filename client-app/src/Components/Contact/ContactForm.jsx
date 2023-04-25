import React from 'react'

//Components
import Logo from '../Partials/Logo';

//React icons
import {BsPerson} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import {MdOutlineAlternateEmail} from 'react-icons/md';
import {BsTelephone} from 'react-icons/bs';
import {BiMessageRounded} from 'react-icons/bi';
import {FiSend} from 'react-icons/fi';
import {BiMessageRoundedError} from 'react-icons/bi';

//Pics
import Pic from '../Pics/dmitry-novikov-dowzTvFVT3M-unsplash.jpg';

function ContactForm() {
    // handle first name
    const handleFirstName = () => {
        var status = true;
        var input = document.getElementById('FirstName');
        var errMsg = document.getElementById('firstNameMsg');
        if(input.value === ''){
            status = false;
            errMsg.style.display = 'flex';
        }else errMsg.style.display = 'none';
        return status;
    }

    // handle last name
    const handleLastName = () => {
        var status = true;
        var input = document.getElementById('LastName');
        var errMsg = document.getElementById('lastNameMsg');
        if(input.value === ''){
            status = false;
            errMsg.style.display = 'flex';
        }else errMsg.style.display = 'none';
        return status;
    }

    //handle email
    const handleEmail = () =>{
        var status = true;
        var email = document.getElementById('Email');
        var errMsg = document.getElementById('emailMsg');
        let syntaxe = /^[a-zA-z0-9._-]+@[a-z0-9.-_]{2,}\.[a-z]{2,3}$/;
        let valeur = (syntaxe.test(email.value))? true: false;
        if(email.value === '' || !valeur){
          status = false;
          errMsg.style.display = "flex";
        }else errMsg.style.display = "none";
        return status;
    }

    //handle phone number
    const handlePhoneNumber = () => {
        var status = true;
        var phone = document.getElementById('PhoneNumber');
        var errMsg = document.getElementById('phoneNumberMsg');
        let syntaxe = /^(\(\+)[0-9]{3}[)] [0-9]+$/;
        let valeur = (syntaxe.test(phone.value))? true: false;
        if(phone.value === '' || !valeur){
          status = false;
          errMsg.style.display = "flex";
        }else errMsg.style.display = "none";
        return status;
    }

    //handle message area
    const handleMessageArea = () =>{
        var status = true;
        var msg = document.getElementById('Message');
        var errMsg = document.getElementById('msgAreaMsg');
        if(msg.value.length < 3){
          status = false;
          errMsg.style.display = "flex";
        }else errMsg.style.display = "none";
        return status;
    }

    //Forbid reloading the page. && showing the response
    const handleSubmit = (event) => {
        event.preventDefault();
        if(handleFirstName() && handleLastName() && handleEmail() && handlePhoneNumber() && handleMessageArea()){
            var status = document.getElementById('messageStatus');
            var content = document.getElementById('messageContent');
            if(false){ 
                content.textContent = 'Success! Message sent successfully';
                status.style.backgroundColor = 'rgb(34 197 94 / 0.5)';
            }else{
                content.textContent = 'Error... Some troubles happened, Please try again';
                status.style.backgroundColor = 'rgb(239 68 68 / 0.5)';
            }
            status.style.display = 'flex';
            setTimeout(() => {
                status.style.display = 'none';
            }, 2000);
        };
    }
    return (
      <div className='w-[100%] h-[80vh] bg-slate-100/20 flex justify-between shadow-black shadow-2xl'>
        <div className='h-full w-[40%]'>
            <img src={Pic} alt="" className='w-full max-h-full min-h-full' />
        </div>
        <div className='w-[60%] h-full flex flex-col justify-between items-center py-10 gap-5 relative'>
            <div id='messageStatus' className='w-full absolute top-0 py-5  justify-center items-center duration-300 hidden'>
                <span id='messageContent' className='text-sm'></span>
            </div>
            <div className='flex flex-col items-center gap-10'>
                <Logo />
                <span className='text-2xl text-gray-200 font-extrabold'>Feel free to get in touch</span>
            </div>
            
            <form action="" className='w-full flex flex-col items-center gap-10 text-sm overflow-y-auto' onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className='w-[70%] flex justify-between gap-5'>
                    {/* First Name */}
                    <div>
                        <div className="flex items-center relative">
                            <BsPerson className='absolute left-2 text-lg' />
                            <input className='w-full px-8 py-2 bg-slate-100/20 outline-none' type="text" placeholder='First name' id='FirstName' name='FirstName' onChange={handleFirstName} required />
                        </div>
                        {/* First name error */}
                        <div id='firstNameMsg' className='w-full items-center gap-2 text-red-500 hidden'>
                            <BiMessageRoundedError className='text-xl' />
                            <span className='text-xs'>First Name is required</span>
                        </div>
                    </div>
                    {/* Last Name */}
                    <div>
                        <div className="flex items-center relative">
                            <CgProfile className='absolute left-2 text-lg' />
                            <input className='w-full px-8 py-2 bg-slate-100/20 outline-none' type="text" placeholder='Last name' id='LastName' name='LastName' onChange={handleLastName} required />
                        </div>
                        {/* Last name error */}
                        <div id='lastNameMsg' className='w-full items-center gap-2 text-red-500 hidden'>
                            <BiMessageRoundedError className='text-xl' />
                            <span className='text-xs'>Last Name is required</span>
                        </div>
                    </div>
                </div>
                {/* Email */}
                <div className="w-[70%] flex flex-col">
                    <div className='w-full flex items-center relative'>
                        <MdOutlineAlternateEmail className='absolute left-2 text-lg' />
                        <input className='w-full px-8 py-2 bg-slate-100/20 outline-none' type="email" placeholder='Email' id='Email' name='Email' onChange={handleEmail} required />
                    </div>
                    {/* Email error */}
                    <div id='emailMsg' className='w-full items-center gap-2 text-red-500 hidden'>
                        <BiMessageRoundedError className='text-xl' />
                        <span className='text-xs'>Invalid email / ex: xxxxxx@yyyy.zzz</span>
                    </div>
                </div>
                {/* Phone number */}
                <div className="w-[70%] flex flex-col">
                    <div className='w-full flex items-center relative'>
                        <BsTelephone className='absolute left-2 text-lg' />
                        <input className='w-full px-8 py-2 bg-slate-100/20 outline-none' type="tel" placeholder='Phone number' id='PhoneNumber' name='PhoneNumber' onChange={handlePhoneNumber} required />
                    </div>
                    {/* Phone Number error */}
                    <div id='phoneNumberMsg' className='w-full items-center gap-2 text-red-500 hidden'>
                        <BiMessageRoundedError className='text-xl' />
                        <span className='text-xs'>Phone Number should not contain any text letters / ex: (+212) 620429392</span>
                    </div>
                </div>
                {/* Message Area */}
                <div className="w-[70%] flex flex-col">
                    <div className='w-full flex items-center relative'>
                        <BiMessageRounded className='absolute left-2 text-lg' />
                        <textarea className='w-full px-8 py-2 bg-slate-100/20 outline-none' name="Message" id="Message" cols="30" rows="1" placeholder='Type your Message here...' onChange={handleMessageArea} required></textarea>
                    </div>
                    {/* Message area error */}
                    <div id='msgAreaMsg' className='w-full items-center gap-2 text-red-500 hidden'>
                        <BiMessageRoundedError className='text-xl' />
                        <span className='text-xs'>Text should contain 3 characters long at least</span>
                    </div>
                </div>
                {/* Submit */}
                <div className="w-[70%]">
                    <button className='w-full bg-red-500/20 hover:bg-red-600/20 duration-300 py-5 cursor-pointer flex items-center justify-center gap-1'><span>Contact Us </span><FiSend className='text-lg' /></button>
                </div>
            </form>
        </div>
    </div>
    )
}
export default ContactForm;