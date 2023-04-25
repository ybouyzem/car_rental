import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

//React icons
import {BsPerson} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import {MdOutlineAlternateEmail} from 'react-icons/md';
import {RiLockPasswordLine} from 'react-icons/ri';
import {VscRefresh} from 'react-icons/vsc';
import {BiMessageRoundedError} from 'react-icons/bi';

//Components
import Logo from '../Partials/Logo';

//Pics
import Pic from '../Pics/roberto-nickson-Yp9FdEqaCdk-unsplash.jpg';


function SignUp({onLogin}) {
  //Forbid reloading the page.
  const handleSubmit = (event) => {
    event.preventDefault();
    redirectToProfile();
  }

  //Redirecting to the profile.
  let navigate = useNavigate();
  const redirectToProfile = () => {
    if(handleFirstName() && handleLastName() && handleEmail() && handleConfirmPassword()){
      onLogin();
      navigate("/");
    }
  }
  // checking first name
  const handleFirstName = () =>{
    var status = true;
    var firstNameMsg = document.getElementById("firstNameMsg");
    var firstName = document.getElementById("firstName");
    if(firstName.value === ''){
      status = false;
      firstNameMsg.style.display = "flex";
    }else firstNameMsg.style.display = "none";
    return status;
  }
  // checking last name
  const handleLastName = () =>{
    var status = true;
    var lastNameMsg = document.getElementById("lastNameMsg");
    var lastName = document.getElementById("lastName");
    if(lastName.value === ''){
      status = false;
      lastNameMsg.style.display = "flex";
    }else lastNameMsg.style.display = "none";
    return status;
  }
  // checking email
  const handleEmail = () =>{
    var status = true;
    var emailMsg = document.getElementById('emailMsg');
    var email = document.getElementById('email');
    let syntaxe = /^[a-zA-z0-9._-]+@[a-z0-9.-_]{2,}\.[a-z]{2,3}$/;
    let valeur = (syntaxe.test(email.value))? true: false;
    if(email.value === '' || !valeur){
      status = false;
      emailMsg.style.display = "flex";
    }else emailMsg.style.display = "none";
    return status;
  }
  // checking password
  const handlePassword = () => {
    var status = true;
    var passMsg = document.getElementById('passMsg');
    var password = document.getElementById('password');
    if(password.value === '' || (password.value.length < 8)){
      status = false;
      passMsg.style.display = "flex";
    }else{
      passMsg.style.display = "none";
    } 
    return status;
  }
  // checking confirm password
  const handleConfirmPassword = () => {
    var status = true;
    var confirmPassMsg = document.getElementById('confirmPassMsg');
    var confirmPassword = document.getElementById('confirmPassword');
    var password = document.getElementById('password');
    if(handlePassword() && confirmPassword.value === password.value){
      confirmPassMsg.style.display = "none";
    }else{
      status = false;
      confirmPassMsg.style.display = "flex";
    } 
    return status;
  }
  return (
    <div className='w-[80%] h-[80%] bg-slate-100/20 flex justify-between shadow-black shadow-2xl'>
      <div className='w-[60%] h-full flex flex-col justify-between items-center py-10'>
        <div className='flex flex-col items-center gap-10'>
          <Logo />
          <span className='text-2xl text-gray-200 font-extrabold'>Create an Account</span>
        </div>
        
        <form action="" className='w-full flex flex-col items-center gap-10 text-sm overflow-y-auto' onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className='w-[70%] flex justify-between gap-5'>
            {/* First Name */}
            <div className="flex flex-col">
              <div className="flex items-center relative">
                <BsPerson className='absolute left-2 text-lg' />
                <input className='w-full px-8 py-2 bg-slate-100/20 outline-none' type="text" placeholder='First name' id='firstName' onChange={handleFirstName} required />
              </div>
              {/* First Name error */}
              <div id='firstNameMsg' className='w-full items-center gap-2 text-red-500 hidden'>
                <BiMessageRoundedError className='text-xl' />
                <span className='text-xs'>First Name is required</span>
              </div>
            </div>
            {/* Last Name */}
            <div className="flex flex-col">
              <div className="flex items-center relative">
                <CgProfile className='absolute left-2 text-lg' />
                <input className='w-full px-8 py-2 bg-slate-100/20 outline-none' type="text" placeholder='Last name' id="lastName" onChange={handleLastName} required />
              </div>
              {/* Last Name error */}
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
              <input className='w-full px-8 py-2 bg-slate-100/20 outline-none' type="email" placeholder='Email' id="email" onChange={handleEmail} required />
            </div>
            {/* Email error */}
            <div id='emailMsg' className='w-full items-center gap-2 text-red-500 hidden'>
              <BiMessageRoundedError className='text-xl' />
              <span className='text-xs'>Invalid email / ex: xxxxxx@yyyy.zzz</span>
            </div>
          </div>
          {/* Password */}
          <div className="w-[70%] flex flex-col">
            <div className="w-full flex items-center relative">
              <RiLockPasswordLine className='absolute left-2 text-lg' />
              <input className='w-full px-8 py-2 bg-slate-100/20 outline-none' type="password" placeholder='Password' min="8" id='password' onChange={handlePassword} required />
            </div>
            {/* Password error */}
            <div id='passMsg' className='w-full items-center gap-2 text-red-500 hidden'>
              <BiMessageRoundedError className='text-xl' />
              <span className='text-xs'>Should be 8 characters long at least</span>
            </div>
          </div>
          {/* Confirm Password */}
          <div className="w-[70%] flex flex-col">
            <div className='w-full flex items-center relative'>
              <VscRefresh className='absolute left-2 text-lg' />
              <input className='w-full px-8 py-2 bg-slate-100/20 outline-none' type="password" placeholder='Confirm Password' min="8" id='confirmPassword' onChange={handleConfirmPassword} required />
            </div>
            {/* Confirm Password error */}
            <div id='confirmPassMsg' className='w-full items-center gap-2 text-red-500 hidden'>
              <BiMessageRoundedError className='text-xl' />
              <span className='text-xs'>There is a mistake in password!! Please check again</span>
            </div>
          </div>
          {/* Submit */}
          <div className="w-[70%]">
            <input className='w-full bg-red-500/20 hover:bg-red-600/20 duration-300 py-5 cursor-pointer' type="submit" value="Get Started" />
          </div>
        </form>
        <div>
          <span className='text-sm text-gray-200'>Already have an account? <Link to='/Sign_In' className='text-red-500 relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-red-500 hover:after:w-[80%] after:duration-300'>Log in</Link></span>
        </div>
      </div>
      <div className='h-full'>
        <img src={Pic} alt="" className='max-h-full min-h-full' />
      </div>
    </div>
  )
}
export default SignUp;