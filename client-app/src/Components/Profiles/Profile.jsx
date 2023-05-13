import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//React icons

//Components
import ProfileData from './ProfileData';
import History from './History';

//Pics


function Profile ({ authorized, onLogout, idUser }) {

  // extract user data
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const userData = async (id) => {
    try{
      const response = await axios.get(`http://127.0.0.1:8000/api/Utilisateur/${id}`);
      setPrenom(response.data.message.prenom);
      setNom(response.data.message.nom);
      setEmail(response.data.message.email);
    }catch(error){
      console.log(error);
    }
  }
  
  const navigate = useNavigate();
  useEffect(() => {
      if(!authorized){
        navigate('/Sign_In');
      } else {
        userData(idUser);
      }
  }, [idUser, authorized, navigate]);
  
    return (
      <div className='h-full w-full flex flex-col justify-center items-center gap-10'>
        <ProfileData onLogout={onLogout} idUser={idUser} nom={nom} prenom={prenom} email={email} />
        <History idUser={idUser} />
      </div>
    )
}
export default Profile;