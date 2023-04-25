import React from 'react'
import { redirect } from 'react-router-dom';

//React icons

//Components
import ProfileData from './ProfileData';
import History from './History';

//Pics


function Profile ({ authorized, onLogout }) {

  if(!authorized) redirect("/Sign_In");
  else {
    return (
      <div className='h-full w-full flex flex-col justify-center items-center gap-10'>
        <ProfileData onLogout={onLogout} />
        <History />
      </div>
    )
  }
}
export default Profile;