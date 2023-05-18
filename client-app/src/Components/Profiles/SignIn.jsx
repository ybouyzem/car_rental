import React, { useState } from 'react';             
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

//React icons
import {MdOutlineAlternateEmail} from 'react-icons/md';
import {RiLockPasswordLine} from 'react-icons/ri';
import {BiMessageRoundedError} from 'react-icons/bi';

//Components
import Logo from '../Partials/Logo';

//Pics
import Pic from '../Pics/olav-tvedt--oVaYMgBMbs-unsplash.jpg';



function SignIn ({onLogin, saveIdUser}){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Forbid reloading the page.
  const handleSubmit = (event) => {
    event.preventDefault();
    var errorMsg = document.getElementById('errMsg'),
    errorMsgValue = document.getElementById('errMsgValue');
    if(checkEmail() && checkPassword()){
      // checking data in the database
      const checkEmail = async (email, password) => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/Utilisateur/${email}`, { params: { password: password } });
          if(response.data.message === 'Not Found'){
            errorMsgValue.textContent = 'Email not existed! Please check again';
            errorMsg.style.display = "flex";
            setTimeout(()=>{
              errorMsg.style.display = "none";
            },2000);
          }else if(response.data.message === 'Invalid password'){
            errorMsgValue.textContent = 'Password incorrect! try again';
            errorMsg.style.display = "flex";
            setTimeout(()=>{
              errorMsg.style.display = "none";
            },2000);
          }else if(response.data.message === 'Not verified'){
            errorMsgValue.textContent = 'Email Not verified yet! Please check you inbox';
            errorMsg.style.display = "flex";
            setTimeout(()=>{
              errorMsg.style.display = "none";
            },2000);
          }else{
            saveIdUser(response.data.message.id);
            redirectToHome();
          }
        } catch (error) {
          errorMsgValue.textContent = error;
          errorMsg.style.display = "flex";
          setTimeout(()=>{
            errorMsg.style.display = "none";
          },2000);
        }
      };
      
      checkEmail(email.toLowerCase(), password);
      
    }
  }

  //Redirecting to the profile.
  let navigate = useNavigate();
  const redirectToHome = () => {
      onLogin();
      navigate("/");
  }

  // checking email
  const checkEmail = () => {
    var status = true;
    var email = document.getElementById('Email');
    var emailMsg = document.getElementById('emailMsg');
    let syntaxe = /^[a-zA-z0-9._-]+@[a-z0-9.-_]{2,}\.[a-z]{2,3}$/;
    let valeur = (syntaxe.test(email.value))? true: false;
    if(email.value === '' || !valeur){
      status = false;
      emailMsg.style.display = "flex";
    }else{
      emailMsg.style.display = "none";
      setEmail(email.value);
    } 
    return status;
  }

  // checking password
  const checkPassword = () => {
    var status = true;
    var password = document.getElementById('Password');
    var passMsg = document.getElementById('passMsg');
    if(password.value === '' || (password.value.length < 8)){
      status = false;
      passMsg.style.display = "flex";
    }else{
      passMsg.style.display = "none";
      setPassword(password.value);
    } 
    return status;
  }

  
  return (
    <div className='w-[80%] h-[80%] bg-slate-100/20 flex justify-between shadow-black shadow-2xl'>
      <div className='h-full'>
        <img src={Pic} alt="" className='max-h-full min-h-full' />
      </div>
      <div className='w-[60%] h-full flex flex-col justify-between items-center py-10'>
        <div className='flex flex-col items-center gap-10'>
          <Logo />
          <span className='text-2xl text-gray-200 font-extrabold'>Fill out the information</span>
        </div>
        
        <form action="" className='w-full flex flex-col items-center gap-10 text-sm' onSubmit={handleSubmit}>
          {/* Email */}
          <div className="w-[70%] flex flex-col">
            <div className="w-full flex items-center relative">
              <MdOutlineAlternateEmail className='absolute left-2 text-lg' />
              <input className='w-full px-8 py-2 bg-slate-100/20 outline-none' type="email" placeholder='Email' id='Email' onChange={checkEmail} required />
            </div>
            {/* Email error */}
            <div id='emailMsg' className='w-full items-center gap-2 text-red-500 hidden'>
              <BiMessageRoundedError className='text-xl text-red-500' />
              <span className='text-xs'>Invalid email / ex: xxxxxx@yyyy.zzz</span>
            </div>
          </div>
          {/* Password */}
          <div className="w-[70%] flex flex-col">
            <div className="w-full flex items-center relative">
              <RiLockPasswordLine className='absolute left-2 text-lg' />
              <input className='w-full px-8 py-2 bg-slate-100/20 outline-none' type="password" placeholder='Password' id='Password' onChange={checkPassword} min="8" required />
            </div>
            {/* Password error */}
            <div id='passMsg' className='w-full items-center gap-2 text-red-500 hidden'>
              <BiMessageRoundedError className='text-xl text-red-500' />
              <span className='text-xs'>Invalid Password / 8 characters long at least</span>
            </div>
            {/* error message */}
            <div id='errMsg' className='w-full items-center gap-2 text-red-500 hidden'>
              <BiMessageRoundedError className='text-xl text-red-500' />
              <span id='errMsgValue' className='text-xs'></span>
            </div>
          </div>
          {/* Submit */}
          <div className="w-[70%]">
            <input className='w-full bg-red-500/20 hover:bg-red-600/20 duration-300 py-5 cursor-pointer' type="submit" value="Log In" />
          </div>
        </form>
        <div>
          <span className='text-sm text-gray-200'>Don't have an account? <Link to='/Sign_Up' className='text-red-500 relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-red-500 hover:after:w-[80%] after:duration-300'>Sign up</Link></span>
        </div>
      </div>
    </div>
  )
}

export default SignIn;
