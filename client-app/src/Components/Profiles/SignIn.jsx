import React, { useState } from 'react';             
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

// React Spinners
import { ThreeDots } from 'react-loader-spinner';
import {TailSpin} from 'react-loader-spinner';

//React icons
import {MdOutlineAlternateEmail} from 'react-icons/md';
import {RiLockPasswordLine} from 'react-icons/ri';
import {BiMessageRoundedError} from 'react-icons/bi';
import {BsArrowLeftShort} from 'react-icons/bs';

//Components
import Logo from '../Partials/Logo';

//Pics
import Pic from '../Pics/olav-tvedt--oVaYMgBMbs-unsplash.jpg';
import forgotPasswordPic from '../Pics/forgotPassword.png';



function SignIn ({onLogin, saveIdUser}){
  const [loading, setLoading] = useState(false);
  const [loadingResetPassword, setLoadingResetPassword] = useState(false);

  //Those variables for sign in
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Those variables if the user forgot his password
  const [forgotPassword, setForgotPassword] = useState(false);
  const [emailResetPassword, setEmailResetPassword] = useState('');
  const [checkEmailResetPassword, setCheckEmailResetPassword] = useState(false);
  const [emailErrorMessageVisible, setEmailErrorMessageVisible] = useState(false);

  //Forbid reloading the page + checking user's data.
  const handleSubmit = (event) => {
    event.preventDefault();
    if(checkEmail() && checkPassword()){
      let syntaxe = /^[a-zA-z0-9._-]+@admin.com$/;
      let valeur = (syntaxe.test(email))? true: false;
      var status = document.getElementById('messageStatus');
      var content = document.getElementById('messageContent');
      // checking if the email belongs to admin or to user
      if(valeur){
        // if email belongs to admin
        const checkAdmin = async (email, password) => {
          try{
            setLoading(true);
            const response = await axios.get(`http://127.0.0.1:8000/api/Admin/${email}`, {params: {password: password}});
            setLoading(false);
            if(response.data.message === 'Not Found'){
              content.textContent = 'Email or password not correct! Please check again';
            }else{
              window.location.href = response.data.url;
            }
          }catch(error){
            setLoading(false);
            content.textContent = error;
          }
          status.style.backgroundColor = 'rgb(239 68 68 / 0.4)';
          status.style.display = 'flex';
          setTimeout(() => {
              status.style.display = 'none';
          }, 2000);
        }
        checkAdmin(email.toLowerCase(), password);
      }else{
        // if email belongs to user
        // checking data in the database
        const checkEmail = async (email, password) => {
          try {
            setLoading(true);
            const response = await axios.get(`http://127.0.0.1:8000/api/Utilisateur/${email}`, { params: { password: password } });
            setLoading(false);
            if(response.data.message === 'Not Found'){
              content.textContent = 'Email not existed! Please check again';
            }else if(response.data.message === 'Invalid password'){
              content.textContent = 'Password incorrect! try again';
            }else if(response.data.message === 'Not verified'){
              content.textContent = 'Email Not verified yet! Please check you inbox';
            }else{
              saveIdUser(response.data.message.id);
              redirectToHome();
            }
          } catch (error) {
            setLoading(false);
            content.textContent = error;
          }
          status.style.display = 'flex';
          status.style.backgroundColor = 'rgb(239 68 68 / 0.4)';
          setTimeout(() => {
              status.style.display = 'none';
          }, 2000);
        };
        
        checkEmail(email.toLowerCase(), password);
      }
      
      
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

  // blurBG
  const blurBG = () => {
    const picBg = document.getElementById('bgImage'),
    bgContent = document.getElementById('bgContent');
    picBg.className += " blur-sm";
    bgContent.className += " blur-sm";
  }

  const unBlurBG = () => {
    const picBg = document.getElementById('bgImage'),
    bgContent = document.getElementById('bgContent');
    picBg.className = "h-full w-[40%] duration-300";
    bgContent.className = "w-[60%] h-full flex flex-col justify-between items-center py-10 relative duration-300";
  }


  // handle reseting password
  const handleSubmitResetPassword = async(e) => {
    e.preventDefault();
    setCheckEmailResetPassword(true);
    const response = await axios.get(`http://127.0.0.1:8000/api/Utilisateur/${emailResetPassword}`);
    setCheckEmailResetPassword(false);
    if(response.data.message === 'Not Found'){
      setEmailErrorMessageVisible(true);
      setTimeout(() => {
        setEmailErrorMessageVisible(false);
      }, 2000);
    }else{
      var status = document.getElementById('messageStatus'),
      content = document.getElementById('messageContent');
      try{
        setLoadingResetPassword(true);
        const response = await axios.post(`http://127.0.0.1:8000/api/resetPassword`, {email: emailResetPassword});
        console.log(response.data.message);
        content.textContent = 'We have sent a password reset link to your email address. Please check your inbox to proceed with resetting your password!'
        status.style.backgroundColor = 'rgb(34 197 94 / 0.5)';
        setLoadingResetPassword(false);
        setForgotPassword(false);
        unBlurBG();
        status.style.display = 'flex';
        setTimeout(() => {
            status.style.display = 'none';
        }, 6000);
      }catch(error){
        console.log(error);
        content.textContent = 'Some issues occurred during the processing of your request! Please try again later.';
        status.style.backgroundColor = 'rgb(239 68 68 / 0.4)';
        setLoadingResetPassword(false);
        setForgotPassword(false);
        unBlurBG();
        status.style.display = 'flex';
        setTimeout(() => {
            status.style.display = 'none';
        }, 6000);
      }
      
    }
  }

  
  return (
    <div className='w-[80%] h-[80%] bg-slate-100/20 flex justify-between shadow-black shadow-2xl relative'>
      <div id='bgImage' className='h-full w-[40%] duration-300'>
        <img src={Pic} alt="" className='max-h-full min-h-full w-full' />
      </div>
      <div id='bgContent' className='w-[60%] h-full flex flex-col justify-between items-center py-10 relative duration-300'>
        <div id='messageStatus' className='w-full absolute top-0 py-5 justify-center items-center duration-300 px-[2%] text-center hidden'>
            <span id='messageContent' className='text-sm'></span>
        </div>
        <div className='flex flex-col items-center gap-10'>
          <Logo />
          <span className='text-2xl text-gray-200 font-extrabold'>Fill out the information</span>
        </div>

        {
          loading ? (
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
                {/* forgotten password */}
                <div id='' className='w-full mt-3'>
                  <span onClick={() => {setForgotPassword(true); blurBG()}} className='text-xs cursor-pointer text-gray-200 relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-gray-200 hover:after:w-[80%] after:duration-300'>Forgot your password?</span>
                </div>
              </div>
              {/* Submit */}
              <div className="w-[70%]">
                <input className='w-full bg-red-500/20 hover:bg-red-600/20 duration-300 py-5 cursor-pointer' type="submit" value="Log In" />
              </div>
            </form>
          )
        }

        <div>
          <span className='text-sm text-gray-200'>Don't have an account? <Link to='/Sign_Up' className='text-red-500 relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-red-500 hover:after:w-[80%] after:duration-300'>Sign up</Link></span>
        </div>
      </div>
      {forgotPassword && 
        <div className='w-[50%] h-[65%] bg-slate-500/80 absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] shadow-black shadow-2xl py-[2%]'>
          {loadingResetPassword ? (
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
              <div className='w-full h-full flex flex-col justify-center items-center gap-5 overflow-auto'>
                <img src={forgotPasswordPic} alt="" className='w-[30%]' />
                <div className='w-[80%]'>
                    <span className="text-xs text-justify">Please enter the email address associated with your account and we'll send you a link to reset you password.</span>
                </div>
                <form action="" className='w-[80%] flex flex-col gap-3' onSubmit={handleSubmitResetPassword}>
                  {/* Email */}
                  <div className="w-full flex items-center relative">
                    <MdOutlineAlternateEmail className='absolute left-2 text-lg text-red-500' />
                    <input className='w-full px-8 py-2 bg-slate-50 outline-none text-slate-500 text-sm' type="email" placeholder='Email' id='' onChange={(e) => {setEmailResetPassword(e.target.value)}} required />
                  </div>
                  {/* Email Error */}
                  {
                    checkEmailResetPassword ? (
                        <div className='mt-1'>
                          <TailSpin
                              height="20"
                              width="20"
                              color="#EF4444"
                              ariaLabel="tail-spin-loading"
                              radius="2"
                              wrapperStyle={{}}
                              wrapperClass=""
                              visible={true}
                          />
                      </div>
                    ) : (
                      <div
                          style={{ display: emailErrorMessageVisible ? 'flex' : 'none' }}
                          className='w-full items-center gap-2 text-red-500'
                        >
                          <BiMessageRoundedError className='text-xl text-red-500' />
                          <span className='text-xs'>This email is not existe</span>
                      </div>
                    )
                  }
                  {/* Submit */}
                  <input className='p-[3%] bg-red-500/40 cursor-pointer hover:bg-red-500/30 duration-300 text-sm' type="submit" value='Send link' />
                </form>
                <button onClick={() => {setForgotPassword(false); unBlurBG()}} className='text-xs flex items-center'><BsArrowLeftShort className='text-lg' /> Go back to login</button>
              </div>
            )
          }
        </div>
      }
    </div>
  )
}

export default SignIn;
