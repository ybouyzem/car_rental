import React, { useState } from 'react';
import axios from 'axios';

//Components
import Logo from '../Partials/Logo';

// React Spinner
import { ThreeDots } from 'react-loader-spinner';

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
    const [loading, setLoading] = useState(false);

    const [mailData, setMailData] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNumber: '',
        Message: '',
    })

    // handle first name
    const handleFirstName = () => {
        var status = true;
        var input = document.getElementById('FirstName');
        var errMsg = document.getElementById('firstNameMsg');
        if(input.value === ''){
            status = false;
            errMsg.style.display = 'flex';
        }else{
            errMsg.style.display = 'none';
            mailData.FirstName = input.value;
        } 
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
        }else{
            errMsg.style.display = 'none';
            mailData.LastName = input.value;
        } 
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
        }else{
            errMsg.style.display = "none";
            mailData.Email = email.value;
        } 
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
        }else{
            errMsg.style.display = "none";
            mailData.PhoneNumber = phone.value;
        } 
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
        }else{
            errMsg.style.display = "none";
            mailData.Message = msg.value;
        } 
        return status;
    }

    //Forbid reloading the page. && showing the response
    const handleSubmit = async(event) => {
        event.preventDefault();
        const isValid =handleFirstName() && handleLastName() && handleEmail() && handlePhoneNumber() && handleMessageArea();
        if(isValid){
            var status = document.getElementById('messageStatus');
            var content = document.getElementById('messageContent');

            try {
                setLoading(true);
                const response = await axios.post('http://127.0.0.1:8000/api/sendEmail', mailData);
                console.log(response.data.message);
                
                setMailData({
                  FirstName: '',
                  LastName: '',
                  Email: '',
                  PhoneNumber: '',
                  Message: '',
                });

                setLoading(false);
                content.textContent = 'Success! Message sent successfully';
                status.style.backgroundColor = 'rgb(34 197 94 / 0.5)';
            } catch (error) {
                setLoading(false);
                console.error(error);
                content.textContent = error;
                status.style.backgroundColor = 'rgb(239 68 68 / 0.5)';
            }
            
            status.style.display = 'flex';
            setTimeout(() => {
                status.style.display = 'none';
            }, 2000);
        };
    }

    return (
      <div className='w-full h-[80vh] bg-slate-100/20 flex md:flex-row flex-col justify-between shadow-black md:shadow-2xl shadow-sm'>
        <div className='h-full w-[40%] hidden md:block'>
            <img src={Pic} alt="" className='w-full max-h-full min-h-full' />
        </div>
        <div className='md:w-[60%] w-full h-full flex flex-col justify-between items-center md:py-10 py-5 gap-5 relative'>
            <div id='messageStatus' className='w-full absolute top-0 py-5  justify-center items-center duration-300 hidden'>
                <span id='messageContent' className='text-sm'></span>
            </div>
            <div className='flex flex-col items-center gap-10 text-center'>
                <Logo />
                <span className='md:text-2xl text-lg text-gray-200 font-extrabold'>Feel free to get in touch</span>
            </div>
            
            {
                loading ? 
                (
                    <div className='absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]'>
                        <ThreeDots 
                            height="50" 
                            width="50" 
                            radius="9"
                            color="#EF4444"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />
                    </div>
                ) : (
                    <form action="" className='w-full flex flex-col items-center md:gap-10 gap-5 md:text-sm text-xs overflow-y-auto' onSubmit={handleSubmit}>
                        {/* Full Name */}
                        <div className='md:w-[70%] w-[90%] flex md:flex-row flex-col justify-between gap-5'>
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
                        <div className="md:w-[70%] w-[90%] flex flex-col">
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
                        <div className="md:w-[70%] w-[90%] flex flex-col">
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
                        <div className="md:w-[70%] w-[90%] flex flex-col">
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
                        <div className="md:w-[70%] w-[90%]">
                            <button type='submit' className='w-full bg-red-500/20 hover:bg-red-600/20 duration-300 py-5 cursor-pointer flex items-center justify-center gap-1'><span>Contact Us </span><FiSend className='text-lg' /></button>
                        </div>
                    </form>
                )
            }
        </div>
    </div>
    )
}
export default ContactForm;