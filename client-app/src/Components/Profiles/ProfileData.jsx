import React, { useState } from 'react'
import { useNavigate } from 'react-router';

//React icons
import {MdOutlineModeEditOutline} from 'react-icons/md';
import {GiConfirmed} from 'react-icons/gi';
import {IoLogOutOutline} from 'react-icons/io5';
import {TfiClose} from 'react-icons/tfi';
import {BiMessageRoundedError} from 'react-icons/bi';

//Pics
import ProfilePic from '../Pics/profile.png';

function ProfileData({onLogout}) {
    const navigate = useNavigate();
    const loggedOut = () => {
        onLogout();
        navigate("/");
    }

    //opening & closing the reset password's div
    const openResetPassword = () =>{
        var component = document.getElementById('re-setPassword'),
        pic = document.getElementById('profilePic'),
        data = document.getElementById('profileData');
        component.style.opacity = 1;
        component.style.scale = 1;
        component.style.zIndex = 10;
        pic.className += " blur-sm";
        data.className += " blur-sm";
    }
    
    const closeResetPassword = () =>{
        var component = document.getElementById('re-setPassword'),
        pic = document.getElementById('profilePic'),
        data = document.getElementById('profileData'),
        oldPassword = document.getElementById('OldPassword'),
        newPassword = document.getElementById('NewPassword'),
        confirmNewPassword = document.getElementById('ConfirmNewPassword'),
        errMsgOld = document.getElementById('oldPasswordMsg'),
        errMsgNew = document.getElementById('newPasswordMsg'),
        errMsgConfirmNew = document.getElementById('confirmNewPasswordMsg');
        component.style.opacity = 0;
        component.style.scale = 0;
        component.style.zIndex = -10;
        pic.className = "w-[40%] h-full flex justify-center items-center duration-300";
        data.className = "w-[60%] h-full flex flex-col justify-center gap-5 duration-300";
        oldPassword.value = '';
        newPassword.value = '';
        confirmNewPassword.value = '';
        errMsgOld.style.display = 'none';
        errMsgNew.style.display = 'none';
        errMsgConfirmNew.style.display = 'none';
    }
    //-------------------------------------------

    // handle old password
    const handleOldPassword = () => {
        var status = true,
        oldPassword = document.getElementById('OldPassword'),
        errMsg = document.getElementById('oldPasswordMsg');
        if(oldPassword.value !== 'adminadmin'){
            status = false;
            errMsg.style.display = 'flex';
        }else errMsg.style.display = 'none';
        return status;
    }

    // handle new password
    const handleNewPassword = () => {
        var status = true,
        newPassword = document.getElementById('NewPassword'),
        errMsg = document.getElementById('newPasswordMsg'),
        span = document.getElementById('newPasswordMsgSpan');
        if(newPassword.value.length < 8){
            status = false;
            span.textContent = 'Should be 8 characters long at least';
            errMsg.style.display = 'flex';
        }else if(newPassword.value === 'adminadmin'){
            status = false;
            span.textContent = 'New password must be different than old password';
            errMsg.style.display = 'flex';
        }else errMsg.style.display = 'none';
        return status;
    }

    // handle confirm new password
    const handleConfirmNewPassword = () => {
        var status = true,
        confirmNewPassword = document.getElementById('ConfirmNewPassword'),
        newPassword = document.getElementById('NewPassword'),
        errMsg = document.getElementById('confirmNewPasswordMsg');
        if(!handleNewPassword() || (newPassword.value !== confirmNewPassword.value)){
            status = false;
            errMsg.style.display = 'flex';
        }else errMsg.style.display = 'none';
        return status;
    }

    // handle handle submit reset password & showing the response
    const handleSubmitResetPassword = (e) => {
        var messageContent = document.getElementById('MessageContent'),
        messageContentSpan = document.getElementById('MessageContentSpan');
        messageContentSpan.textContent = 'Password has been changed successfully';
        e.preventDefault();
        if(handleOldPassword() && handleNewPassword && handleConfirmNewPassword()){
            closeResetPassword();
            messageContent.style.display = 'flex';
            setTimeout(() => {
                messageContent.style.display = 'none';
            }, 2000);
        } 
    }
    //-------------------------------------------

    const [readOnlyFirstName, setReadOnlyFirstName] = useState(true);

    function handleBlurFirstName() {
        setReadOnlyFirstName(true);
    }

    function handleClickFirstName() {
        setReadOnlyFirstName(false);
    }

    // handle first name
    const handleFirstName = () =>{
        var input = document.getElementById('FirstName');
        if(input.value === ''){
            return false;
        }else return true;
    }


    // handle handle submit reset password
    const handleSubmitFirstName = (e) => {
        e.preventDefault();
        var messageContent = document.getElementById('MessageContent'),
        messageContentSpan = document.getElementById('MessageContentSpan');
        messageContentSpan.textContent = 'First name has been changed successfully';
        if(handleFirstName()){
            messageContent.style.display = 'flex';
            setTimeout(() => {
                messageContent.style.display = 'none';
            }, 2000);
        }
    }

    //-------------------------------------------

    const [readOnlyLastName, setReadOnlyLastName] = useState(true);

    function handleBlurLastName() {
        setReadOnlyLastName(true);
    }

    function handleClickLastName() {
        setReadOnlyLastName(false);
    }

    // handle last name
    const handleLastName = () => {
        var input = document.getElementById('LastName');
        if(input.value === ''){
            return false;
        }else return true;
    }

    // handle handle submit reset password
    const handleSubmitLastName = (e) => {
        e.preventDefault(); 
        var messageContent = document.getElementById('MessageContent'),
        messageContentSpan = document.getElementById('MessageContentSpan');
        messageContentSpan.textContent = 'Last name has been changed successfully';
        if(handleLastName()){
            messageContent.style.display = 'flex';
            setTimeout(() => {
                messageContent.style.display = 'none';
            }, 2000);
        }
    }

  return (
    <div className='w-[80%] h-[40%] bg-slate-100/20 flex justify-between shadow-black shadow-2xl relative'>
        {/* Change Password Message */}
        <div id='MessageContent' className='w-full absolute top-0 left-[50%] -translate-x-[50%] py-5 bg-green-500/50 justify-center items-center duration-300 hidden'>
            <span id='MessageContentSpan' className='text-sm'></span>
        </div>
        
        {/* Profile Photo */}
        <div id='profilePic' className='w-[40%] h-full flex justify-center items-center duration-300'>
            <img src={ProfilePic} alt="" className='w-[50%]' />
        </div>

        {/* Profile Data */}
        <div id='profileData' className='w-[60%] h-full flex flex-col justify-center gap-5 duration-300'>
            {/* Name */}
            <div className='w-full flex items-end gap-5'>
                <span className='font-bold'>Last Name :</span>
                <form className="w-[50%] flex items-center gap-2" onSubmit={handleSubmitLastName}>
                    <input className='w-full text-sm bg-transparent placeholder:text-white outline-none' type='text' placeholder='Alahyane' id='LastName' readOnly={readOnlyLastName} onBlur={handleBlurLastName} onChange={handleLastName}  required />
                    <label htmlFor="LastName" className='cursor-pointer' onClick={handleClickLastName}><MdOutlineModeEditOutline className='text-red-500' /></label>
                    <button type="submit"><GiConfirmed className='text-green-500' /></button>
                </form>
            </div>
            <div className='w-full flex items-end gap-5'>
                <span className='font-bold'>First Name :</span>
                <form className="w-[50%] flex items-center gap-2" onSubmit={handleSubmitFirstName}>
                    <input className='w-full text-sm bg-transparent placeholder:text-white outline-none' type='text' placeholder='YouSsef' id='FirstName' readOnly={readOnlyFirstName} onBlur={handleBlurFirstName} onChange={handleFirstName} required />
                    <label htmlFor="FirstName" className='cursor-pointer' onClick={handleClickFirstName}><MdOutlineModeEditOutline className='text-red-500' /></label>
                    <button type="submit"><GiConfirmed className='text-green-500' /></button>
                </form>
            </div>
            {/* Email */}
            <div className='w-full flex items-end gap-5'>
                <span className='font-bold'>Email :</span>
                <span className='text-sm'>Alahyane.yo@gmail.com</span>
            </div>
            {/* Password */}
            <div className='w-full flex items-end gap-5'>
                <span className='font-bold'>Password :</span>
                <span className='text-sm'>********</span>
                <button onClick={openResetPassword}><MdOutlineModeEditOutline className='text-red-500' /></button>
            </div>
            {/* Log out */}
            <div className='w-full flex items-center gap-5'>
                <span className='font-bold'>Log out :</span>
                <button onClick={loggedOut}><IoLogOutOutline className='text-2xl text-red-500' /></button>
            </div>
        </div>
        {/* Re-setting Password */}
        <div id='re-setPassword' className='w-[35%] h-full bg-slate-500/80 absolute top-0 left-[50%] -translate-x-[50%] flex items-center p-[1%] overflow-auto opacity-0 -z-10 duration-300'>
            <button onClick={closeResetPassword}><TfiClose className='absolute right-5 top-5' /></button>
            <form action="" className='w-full flex flex-col gap-5 text-sm' onSubmit={handleSubmitResetPassword}>
                <div className='w-full flex flex-col'>
                    <div className='w-full flex justify-between gap-1'>
                        <span>Old password</span>
                        <input type="password" className='bg-white/40 outline-none' min='8' id='OldPassword' name='OldPassword' onChange={handleOldPassword} required />
                    </div>
                    {/* Error message */}
                    <div id='oldPasswordMsg' className='w-full items-center gap-2 text-red-500 hidden'>
                        <BiMessageRoundedError className='text-xl' />
                        <span className='text-xs'>Incorrect password</span>
                    </div>
                </div>
                <div className='w-full flex flex-col'>
                    <div className='w-full flex justify-between gap-1'>
                        <span>New password</span>
                        <input type="password" className='bg-white/40 outline-none' min='8' id='NewPassword' name='NewPassword' onChange={handleNewPassword} required />
                    </div>
                    {/* Error message */}
                    <div id='newPasswordMsg' className='w-full items-center gap-2 text-red-500 hidden'>
                        <BiMessageRoundedError className='text-xl' />
                        <span id='newPasswordMsgSpan' className='text-xs'></span>
                    </div>
                </div>
                <div className='w-full flex flex-col'>
                    <div className='w-full flex justify-between gap-1'>
                        <span>Confirm password</span>
                        <input type="password" className='bg-white/40 outline-none' min='8' id='ConfirmNewPassword' name='ConfirmNewPassword' onChange={handleConfirmNewPassword} required />
                    </div>
                    {/* Error message */}
                    <div id='confirmNewPasswordMsg' className='w-full items-center gap-2 text-red-500 hidden'>
                        <BiMessageRoundedError className='text-xl' />
                        <span className='text-xs'>There is a mistake in password!! Please check again</span>
                    </div>
                </div>
                <div className='w-full'>
                    <input type="submit" value="Confirm" className='w-full flex justify-center items-center bg-white/40 hover:bg-white/30 duration-300 py-3 cursor-pointer'  />
                </div>
            </form>
        </div>
    </div>
  )
}
export default ProfileData;