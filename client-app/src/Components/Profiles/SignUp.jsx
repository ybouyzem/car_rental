import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

//Axios
import axios from "axios";

// React Spinner
import { ThreeDots } from 'react-loader-spinner';

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


function SignUp() {
  const [loading, setLoading] = useState(false);

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Forbid reloading the page.
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(handleFirstName() && handleLastName() && handleEmail() && handleConfirmPassword()){
      var status = document.getElementById('messageStatus'),
      content = document.getElementById('messageContent');

      // checking if the email already used
      const checkEmail = async (email) => {
        try {
          setLoading(true);
          const response = await axios.get(`http://127.0.0.1:8000/api/Utilisateur/${email}`);
          if(response.data.message === 'Not Found'){
            const formData = new FormData();
            formData.append('nom', nom);
            formData.append('prenom', prenom);
            formData.append('email', email.toLowerCase());
            formData.append('password', password);
            
            await axios.post('http://127.0.0.1:8000/api/Utilisateur', formData)
            .then(({data})=>{
              console.log(data.message);
              setLoading(false);
              redirectToVerifieEmailPage();
            }).catch(({response})=>{
              setLoading(false);
              if (response.status === 422) {
                console.log(response.data.errors);
              } else {
                console.log(response.data.message);
              }
              content.textContent = 'Error... Some troubles happened in database! Please try later';
              status.style.display = 'flex';
              setTimeout(()=>{
                status.style.display = 'none';
              }, 2000);
            });
          }else{
            setLoading(false);
            content.textContent = 'Email already used! Please choose another email';
            status.style.display = 'flex';
            setTimeout(()=>{
              status.style.display = 'none';
            }, 2000);
          }
        } catch (error) {
            setLoading(false);
            content.textContent = error;
            status.style.display = 'flex';
            setTimeout(()=>{
              status.style.display = 'none';
            }, 2000);
        }
      };
      checkEmail(email.toLowerCase());
    }
  }
  

  //Redirecting to the home.
  let navigate = useNavigate();
  const redirectToVerifieEmailPage = () => {
    navigate("/Verifie_email");
  }
  // checking first name
  const handleFirstName = () =>{
    var status = true;
    var firstNameMsg = document.getElementById("firstNameMsg");
    var firstName = document.getElementById("firstName");
    if(firstName.value === ''){
      status = false;
      firstNameMsg.style.display = "flex";
    }else{
      firstNameMsg.style.display = "none";
      setPrenom(firstName.value);
    } 
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
    }else{
      lastNameMsg.style.display = "none";
      setNom(lastName.value);
    } 
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
    }else{
      emailMsg.style.display = "none";
      setEmail(email.value);
    } 
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
      setPassword(password.value);
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
      <div className='w-[60%] h-full flex flex-col justify-between items-center py-10 relative'>
        <div id='messageStatus' className='w-full absolute top-0 py-5 bg-red-500/40 justify-center items-center duration-300 hidden'>
            <span id='messageContent' className='text-sm'></span>
        </div>
        <div className='flex flex-col items-center gap-10'>
          <Logo />
          <span className='text-2xl text-gray-200 font-extrabold'>Create an Account</span>
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
            <form action="" className='w-full flex flex-col items-center gap-10 text-sm overflow-y-auto' onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className='w-[70%] flex justify-between gap-5'>
                {/* First Name */}
                <div className="flex flex-col">
                  <div className="flex items-center relative">
                    <BsPerson className='absolute left-2 text-lg' />
                    <input className='w-full px-8 py-2 bg-slate-100/20 outline-none' type="text" placeholder='First name' id='firstName' name='prenom' onChange={handleFirstName} required />
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
                    <input className='w-full px-8 py-2 bg-slate-100/20 outline-none' type="text" placeholder='Last name' id="lastName" name='nom' onChange={handleLastName} required />
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
                  <input className='w-full px-8 py-2 bg-slate-100/20 outline-none' type="email" placeholder='Email' id="email" name='email' onChange={handleEmail} required />
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
                  <input className='w-full px-8 py-2 bg-slate-100/20 outline-none' type="password" placeholder='Password' min="8" id='password' name='password' onChange={handlePassword} required />
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
          )
        }

        
        <div>
          <span className='text-sm text-gray-200'>Already have an account? <Link to='/Sign_In' className='text-red-500 relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-red-500 hover:after:w-[80%] after:duration-300'>Log in</Link></span>
        </div>
      </div>
      <div className='h-full w-[40%]'>
        <img src={Pic} alt="" className='w-full max-h-full min-h-full' />
      </div>
    </div>
  )
}
export default SignUp;