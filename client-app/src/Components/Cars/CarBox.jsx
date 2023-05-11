import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

// React icons
import {BsPerson} from 'react-icons/bs';
import {GiGearStick} from 'react-icons/gi';
import {TbGasStation} from 'react-icons/tb';
import {RiSearchEyeLine} from 'react-icons/ri';

//Pics

function CarBox ({handleVehicule, id, id_modele, image, seats, carburant, vitesse}) {
    // Modele Table
    const [libelleModele, setLibelleModele] = useState('');
    // Marque Table
    const [idMarque, setIdMarque] = useState('');
    const [libelleMarque, setLibelleMarque] = useState('');
    // || Combine the three tables (Voiture, Modele, Marque) to get the full name's car ||

    // Find name's car
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Fetch Modele data
          const modeleResponse = await axios.get(`http://127.0.0.1:8000/api/Modele/${id_modele}`);
          setIdMarque(modeleResponse.data.modele.id_marque);
          setLibelleModele(modeleResponse.data.modele.libelle);
    
          // Fetch Marque data
          const marqueResponse = await axios.get(`http://127.0.0.1:8000/api/Marque/${idMarque}`);
          setLibelleMarque(marqueResponse.data.marque.libelle);
        } catch (error) {
          console.log(error);
        }
      };
    
      fetchData();
    }, [id_modele, idMarque]);


  return (
    <div className='w-full min-h-[30vh] max-h-[20vh] bg-slate-100/20 rounded-tl-2xl flex p-[2%]'>

      {/* Picture */}
      <div className='h-full w-[30%] flex justify-center items-center'>
          <img src={image} alt="Not Found" />
      </div>

      <div className='h-full w-[70%] flex flex-col justify-between py-[2%] px-[5%]'>
          {/* Title */}
          <div className='w-full '>
              <span className='font-bold text-lg relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-[40%] after:h-1 after:bg-red-500'>{libelleMarque} {libelleModele}</span>
          </div>
          {/* Description */}
          <div className='w-[70%] flex justify-between text-sm'>
              <div className='flex flex-col gap-5'>
                  <div className='flex items-center gap-1'><BsPerson className='text-lg' /><span>{seats} Seats</span></div>
                  <div className='flex items-center gap-1'><TbGasStation className='text-lg' /><span>{carburant}</span></div>
              </div>
              <div className='flex flex-col gap-5'>
                  <div className='flex items-center gap-1'><GiGearStick className='text-lg' /><span>{vitesse}</span></div>
              </div>
          </div>
          <div className='w-full flex justify-end'>
              <Link onClick={()=>{handleVehicule(id)}} className='flex items-center text-sm gap-1 hover:text-red-500 duration-300 relative after:content-[""] after:absolute after:bottom-0 left-0 after:w-0 after:h-0.5 after:bg-red-500 hover:after:w-[70%] after:duration-300' to="/Display_Cars/Car_Details">See <RiSearchEyeLine className='text-lg' /></Link>
          </div>

      </div>
    </div>
  )
}
export default CarBox;