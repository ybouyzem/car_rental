import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

//React icons
import {MdOutlineModeEditOutline} from 'react-icons/md';
import {GiConfirmed} from 'react-icons/gi';
import {IoLogOutOutline} from 'react-icons/io5';
import {TfiClose} from 'react-icons/tfi';
import {BiMessageRoundedError} from 'react-icons/bi';
import {AiOutlineCloudUpload} from 'react-icons/ai';
import {TbSend} from 'react-icons/tb';

//Pics
// import ProfilePic from '../Pics/photo profile.jpg';

function ProfileData({onLogout, idUser, nom, prenom, email, pic}) {
    const navigate = useNavigate();
    const loggedOut = () => {
        onLogout();
        navigate("/");
    }

    //opening & closing the reset password's div
    const [picture, setPicture] = useState(null);
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
        pic.className = "w-[40%] h-full flex flex-col justify-center items-center duration-300 gap-5";
        data.className = "w-[60%] h-full flex flex-col justify-center gap-5 duration-300";
        oldPassword.value = '';
        newPassword.value = '';
        confirmNewPassword.value = '';
        errMsgOld.style.display = 'none';
        errMsgNew.style.display = 'none';
        errMsgConfirmNew.style.display = 'none';
    }

    //opening & closing the picture's div
    const openPicture = () =>{
        var component = document.getElementById('Picture'),
        pic = document.getElementById('profilePic'),
        data = document.getElementById('profileData');
        component.style.display = 'flex';
        component.style.opacity = 1;
        component.style.scale = 1;
        component.style.zIndex = 10;
        pic.className += " blur-sm";
        data.className += " blur-sm";
    }
    
    const closePicture = () =>{
        var component = document.getElementById('Picture'),
        pic = document.getElementById('profilePic'),
        data = document.getElementById('profileData');
        component.style.opacity = 0;
        component.style.scale = 0;
        component.style.zIndex = -10;
        pic.className = "w-[40%] h-full flex flex-col justify-center items-center duration-300 gap-5";
        data.className = "w-[60%] h-full flex flex-col justify-center gap-5 duration-300";
    }

    const uploadPicture = (e) => {
        setPicture(e.target.files[0]);
    }

    const handleSubmitPicture = async(e) => {
        e.preventDefault();
        console.log(picture);
        const formData = new FormData(); 
        if(picture){
            var messageContent = document.getElementById('MessageContent'),
            messageContentSpan = document.getElementById('MessageContentSpan');
            formData.append('_method', 'PATCH');
            formData.append('photo', picture);
            try{
                const response = await axios.post(`http://127.0.0.1:8000/api/Utilisateur/${idUser}`, formData, {
                    headers: {
                    'Content-Type': 'multipart/form-data'
                    }
                });
                console.log(response.data.message);
                closePicture();
                messageContentSpan.textContent = 'Picture has been changed successfully';
                messageContent.style.backgroundColor = 'rgb(34 197 94 / 0.5)';
                messageContent.style.display = 'flex';
                setTimeout(() => {
                    messageContent.style.display = 'none';
                }, 2000);
            }catch(error){
                console.log(error);
                closeResetPassword();
                messageContentSpan.textContent = error;
                messageContent.style.backgroundColor = 'rgb(239 68 68 / 0.4)';
                messageContent.style.display = 'flex';
                setTimeout(() => {
                    messageContent.style.display = 'none';
                }, 2000);
            }
        }
    }
    //-------------------------------------------

    // handle old password
    const handleOldPassword = () => {
        var status = true,
        oldPassword = document.getElementById('OldPassword'),
        errMsg = document.getElementById('oldPasswordMsg');
        const checkPassword = async(email, password) => {
            try{
                const response = await axios.get(`http://127.0.0.1:8000/api/Utilisateur/${email}`, { params: { password: password } });
                if(response.data.message === 'Invalid password'){
                    status = false;
                    errMsg.style.display = 'flex';
                }else{
                    errMsg.style.display = 'none';
                }
            }catch(error){
                console.log(error);
            }
        }
        checkPassword(email, oldPassword.value);
        return status;
    }

    // handle new password
    const handleNewPassword = () => {
        var status = true,
        oldPassword = document.getElementById('OldPassword'),
        newPassword = document.getElementById('NewPassword'),
        errMsg = document.getElementById('newPasswordMsg'),
        span = document.getElementById('newPasswordMsgSpan');
        if(newPassword.value.length < 8){
            status = false;
            span.textContent = 'Should be 8 characters long at least';
            errMsg.style.display = 'flex';
        }else if(newPassword.value === oldPassword.value){
            status = false;
            span.textContent = 'The new password should not be the same as the old password';
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
        messageContentSpan = document.getElementById('MessageContentSpan'),
        newPassword = document.getElementById('NewPassword');

        e.preventDefault();
        if(handleOldPassword() && handleNewPassword && handleConfirmNewPassword()){
            // updating password value
            const updatePassword = async (id, password) => {
                try {
                    const response = await axios.patch(`http://127.0.0.1:8000/api/Utilisateur/${id}`, {
                        password: password
                    });
            
                    console.log(response.data.message); // "User updated successfully"
                    closeResetPassword();
                    messageContentSpan.textContent = 'Password has been changed successfully';
                    messageContent.style.backgroundColor = 'rgb(34 197 94 / 0.5)';
                    messageContent.style.display = 'flex';
                    setTimeout(() => {
                        messageContent.style.display = 'none';
                    }, 2000);
                } catch (error) {
                    closeResetPassword();
                    messageContentSpan.textContent = error;
                    messageContent.style.backgroundColor = 'rgb(239 68 68 / 0.4)';
                    messageContent.style.display = 'flex';
                    setTimeout(() => {
                        messageContent.style.display = 'none';
                    }, 2000);
                }
            };
            updatePassword(idUser, newPassword.value);
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
        messageContentSpan = document.getElementById('MessageContentSpan'),
        firstName = document.getElementById('FirstName');
        if(handleFirstName()){
            // updating first name value
            const updateFirstName = async (id, prenom) => {
                try {
                    const response = await axios.patch(`http://127.0.0.1:8000/api/Utilisateur/${id}`, {
                        prenom: prenom
                    });
            
                    console.log(response.data.message); // "User updated successfully"
                    messageContentSpan.textContent = 'First name has been changed successfully';
                    messageContent.style.backgroundColor = 'rgb(34 197 94 / 0.5)';
                    messageContent.style.display = 'flex';
                    setTimeout(() => {
                        messageContent.style.display = 'none';
                    }, 2000);
                } catch (error) {
                    messageContentSpan.textContent = error;
                    messageContent.style.backgroundColor = 'rgb(239 68 68 / 0.4)';
                    messageContent.style.display = 'flex';
                    setTimeout(() => {
                        messageContent.style.display = 'none';
                    }, 2000);
                }
            };
            updateFirstName(idUser, firstName.value);
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
        messageContentSpan = document.getElementById('MessageContentSpan'),
        lastName = document.getElementById('LastName');
        if(handleLastName()){
            // updating last name value
            const updateLastName = async (id, nom) => {
                try {
                    const response = await axios.patch(`http://127.0.0.1:8000/api/Utilisateur/${id}`, {
                        nom: nom
                    });
            
                    console.log(response.data.message); // "User updated successfully"
                    messageContentSpan.textContent = 'Last name has been changed successfully';
                    messageContent.style.backgroundColor = 'rgb(34 197 94 / 0.5)';
                    messageContent.style.display = 'flex';
                    setTimeout(() => {
                        messageContent.style.display = 'none';
                    }, 2000);
                } catch (error) {
                    messageContentSpan.textContent = error;
                    messageContent.style.backgroundColor = 'rgb(239 68 68 / 0.4)';
                    messageContent.style.display = 'flex';
                    setTimeout(() => {
                        messageContent.style.display = 'none';
                    }, 2000);
                }
            };
            updateLastName(idUser, lastName.value);
            
        }
    }

  return (
    <div className='w-[80%] h-[40%] bg-slate-100/20 flex justify-between shadow-black shadow-2xl relative overflow-hidden'>
        {/* Alert Message */}
        <div id='MessageContent' className='w-full absolute top-0 left-[50%] -translate-x-[50%] py-5 justify-center items-center duration-300 hidden'>
            <span id='MessageContentSpan' className='text-sm'></span>
        </div>
        
        {/* Profile Photo */}
        <div id='profilePic' className='w-[40%] h-full flex flex-col justify-center items-center duration-300 gap-5'>
            <div className='w-[180px] h-[180px] rounded-full flex justify-center items-center  overflow-hidden'>
                <img src={pic} alt="" className='w-full h-full object-cover'/>
            </div>
            <button onClick={openPicture} className='w-9 h-9 flex justify-center items-center bg-slate-100/20 rounded-full cursor-pointer hover:bg-red-500/20 hover:text-red-500 duration-300 text-xl'><AiOutlineCloudUpload /></button>
        </div>

        {/* Profile Data */}
        <div id='profileData' className='w-[60%] h-full flex flex-col justify-center gap-5 duration-300'>
            {/* Name */}
            <div className='w-full flex items-end gap-5'>
                <span className='font-bold'>Last Name :</span>
                <form className="w-[50%] flex items-center gap-2" onSubmit={handleSubmitLastName}>
                    <input className='w-full text-sm bg-transparent placeholder:text-white outline-none' type='text' placeholder={nom} id='LastName' readOnly={readOnlyLastName} onBlur={handleBlurLastName} onChange={handleLastName}  required />
                    <label htmlFor="LastName" className='cursor-pointer' onClick={handleClickLastName}><MdOutlineModeEditOutline className='text-red-500' /></label>
                    <button type="submit"><GiConfirmed className='text-green-500' /></button>
                </form>
            </div>
            <div className='w-full flex items-end gap-5'>
                <span className='font-bold'>First Name :</span>
                <form className="w-[50%] flex items-center gap-2" onSubmit={handleSubmitFirstName}>
                    <input className='w-full text-sm bg-transparent placeholder:text-white outline-none' type='text' placeholder={prenom} id='FirstName' readOnly={readOnlyFirstName} onBlur={handleBlurFirstName} onChange={handleFirstName} required />
                    <label htmlFor="FirstName" className='cursor-pointer' onClick={handleClickFirstName}><MdOutlineModeEditOutline className='text-red-500' /></label>
                    <button type="submit"><GiConfirmed className='text-green-500' /></button>
                </form>
            </div>
            {/* Email */}
            <div className='w-full flex items-end gap-5'>
                <span className='font-bold'>Email :</span>
                <span className='text-sm'>{email}</span>
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
        <div id='Picture' className='absolute w-[50%] h-full top-0 left-[50%] -translate-x-[50%] bg-slate-500/80 flex-col justify-center items-center gap-5 opacity-0 -z-10 hidden'>
            <button onClick={closePicture}><TfiClose className='absolute right-5 top-5' /></button>
            <div className='w-[180px] h-[180px] rounded-full flex justify-center items-center overflow-hidden'>
                <img src={pic} alt="" className='w-full h-full object-cover'/>
            </div>
            <form action="" method='POST' className='w-[80%] flex items-center' onSubmit={handleSubmitPicture} encType="multipart/form-data">
                <input className='text-sm' type="file" name="photo" id="" onChange={uploadPicture} />
                <button className='text-sm flex justify-center items-center gap-1 bg-slate-600/40 rounded-md p-2 hover:bg-red-500/40 duration-300'>Upload <TbSend className='text-lg'/></button>
            </form>
        </div>
    </div>
  )
}
export default ProfileData;