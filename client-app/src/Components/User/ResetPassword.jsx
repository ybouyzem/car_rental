import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';

import axios from 'axios';

//React icons
import {RiLockPasswordLine} from 'react-icons/ri';
import {BsArrowLeftShort} from 'react-icons/bs';
import {BiMessageRoundedError} from 'react-icons/bi';
import {VscRefresh} from 'react-icons/vsc';

//Components
import Logo from '../Partials/Logo';

//React Spinners
import { ThreeDots } from 'react-loader-spinner';

function ResetPassword() {
    const [loading, setLoading] = useState(false);

    const { idUser } = useParams();
    const [idUserDecrypted, setIdUserDecrypted] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    // Catching the Crypted id user and decipher it
    useEffect(() => {
        const decryptIdUser = async() => {
            try{
                const response = await axios.post('http://127.0.0.1:8000/api/decryptIdUser', { token: idUser });
                if(response.data.message === 'Invalid token'){
                    navigate('/');
                }else{
                    setIdUserDecrypted(response.data.message);
                }
                
            }catch(error){
                console.log(error);
            }
        }

        if(!idUser){
            navigate('/');
        } else {
            decryptIdUser();
        }
    }, [idUser, navigate, idUserDecrypted]);


    // handling the reset password of user
    const handleSubmitResetPassword = async(e) => {
        e.preventDefault();
        if(handleNewPassword() && handleConfirmNewPassword()){
            var status = document.getElementById('MessageContent'),
            content = document.getElementById('MessageContentSpan');
            try {
                setLoading(true);
                const response = await axios.patch(`http://127.0.0.1:8000/api/Utilisateur/${idUserDecrypted}`, {
                    password: password
                });
                console.log(response.data.message); // "User updated successfully"
                content.textContent = 'Your password has been changed successfully';
                status.style.backgroundColor = 'rgb(34 197 94 / 0.5)';
                setLoading(false);
                status.style.display = 'flex';
                setTimeout(() => {
                    status.style.display = 'none';
                }, 2000);
            } catch (error) {
                console.log(error);
                content.textContent = 'Some issues occurred during the processing of your request! Please try again later.';
                status.style.backgroundColor = 'rgb(239 68 68 / 0.4)';
                setLoading(false);
                status.style.display = 'flex';
                setTimeout(() => {
                    status.style.display = 'none';
                }, 6000);
            }
        }
    }

    // handle new password
    const handleNewPassword = () => {
        var status = true,
        newPassword = document.getElementById('Password'),
        errMsg = document.getElementById('passwordMsg');
        if(newPassword.value.length < 8){
            status = false;
            errMsg.style.display = 'flex';
        }else{
            errMsg.style.display = 'none';
        } 

        return status;
    }

    // handle confirm new password
    const handleConfirmNewPassword = () => {
        var status = true,
        confirmNewPassword = document.getElementById('ConfirmPassword'),
        newPassword = document.getElementById('Password'),
        errMsg = document.getElementById('confirmPasswordMsg');
        if(!handleNewPassword() || (newPassword.value !== confirmNewPassword.value)){
            status = false;
            errMsg.style.display = 'flex';
        }else{
            errMsg.style.display = 'none';
            setPassword(confirmNewPassword.value);
        } 
        return status;
    }

    return (
        <div className='w-[40%] h-[60%] bg-slate-100/20 shadow-black shadow-2xl flex flex-col items-center justify-between gap-2 py-[2%] overflow-auto relative'>
            <Logo />
            {/* Alert Message */}
            <div id='MessageContent' className='w-full absolute top-0 py-5 px-[2%] justify-center items-center duration-300 hidden'>
                <span id='MessageContentSpan' className='text-sm text-center'></span>
            </div>
            { loading ? (
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
                    <form action="" className='w-[80%] flex flex-col justify-center items-center gap-7 text-sm' onSubmit={handleSubmitResetPassword}>
                        {/* Title */}
                        <span className='text-xl capitalize font-extrabold'>Reset Password</span>
                        {/* Password */}
                        <div className='w-full'>
                            <div className="w-full flex items-center relative">
                                <RiLockPasswordLine className='absolute left-2 text-lg' />
                                <input className='w-full px-8 py-2 bg-slate-100/20 outline-none' type="password" placeholder='New Password' id='Password' min="8" onChange={handleNewPassword} required />
                            </div>
                            {/* Error message */}
                            <div id='passwordMsg' className='w-full items-center gap-2 text-red-500 hidden'>
                                <BiMessageRoundedError className='text-xl' />
                                <span className='text-xs'>Should be 8 characters long at least</span>
                            </div>
                        </div>
                        
                        {/* Confirm Password */}
                        <div className='w-full'>
                            <div className="w-full flex items-center relative">
                                <VscRefresh className='absolute left-2 text-lg' />
                                <input className='w-full px-8 py-2 bg-slate-100/20 outline-none' type="password" placeholder='Confirm New Password' id='ConfirmPassword' min="8" onChange={handleConfirmNewPassword} required />
                            </div>
                            {/* Error message */}
                            <div id='confirmPasswordMsg' className='w-full items-center gap-2 text-red-500 hidden'>
                                <BiMessageRoundedError className='text-xl' />
                                <span className='text-xs'>There is a mistake in password!! Please check again</span>
                            </div>
                        </div>
                        
                        {/* Submit */}
                        <div className="w-full">
                            <input className='w-full bg-red-500/20 hover:bg-red-600/20 duration-300 py-5 cursor-pointer' type="submit" value="Change Password" />
                        </div>
                    </form>
                )
            }
            
            <Link className='text-xs flex items-center' to="/"><BsArrowLeftShort className='text-lg' /> Go back to Home</Link>
        </div>
    )
}
export default ResetPassword;