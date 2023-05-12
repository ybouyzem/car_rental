import React, { useState, useRef, useEffect } from 'react'
import { useNavigate  } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import axios from 'axios';

// Components
import InvoiceHeader from './InvoiceHeader';
import InvoiceDescription from './InvoiceDescription';
import InvoiceFooter from './InvoiceFooter';

// React icons
import {FiPrinter} from 'react-icons/fi';

// Pics

function Invoice({idUser, idCar, pickUpValue, returnValue, cityValue, phoneNumberValue, authorized}) {
  // Utilisateur Table
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [prix, setPrix] = useState('');
  const [idModele, setIdModele] = useState('');
  const [carWording, setCarWording] = useState('');

  const componentRef = useRef(null);
  const navigate = useNavigate();
  useEffect(()=>{
    if(!authorized){
      navigate('/');
    } else {
      // fetch car data
      const fetchCar = async(id) => {
        try{
          const response = await axios.get(`http://127.0.0.1:8000/api/Voiture/${id}`);
          setIdModele(response.data.voiture.id_modele);
          setPrix(response.data.voiture.prix_jour);
        }catch(error){
          console.log(error);
        }
      }
      fetchCar(idCar);

      // fetch user data
      const fetchUser = async(id) => {
        try{
          const response = await axios.get(`http://127.0.0.1:8000/api/Utilisateur/${id}`);
          setNom(response.data.message.nom);
          setPrenom(response.data.message.prenom);
          setEmail(response.data.message.email);
        }catch(error){
          console.log(error);
        }
      }
      fetchUser(idUser);
    }
  }, [idCar, idUser, idModele, authorized, navigate, carWording]);

  useEffect(() => {
    // Find car wording
    const fetchCarWording = async (id) => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/Modele/${id}`);
        setCarWording(response.data.result);
      } catch (error) {
        console.log(error);
      }
    };
  
    if (idModele) {
      fetchCarWording(idModele);
    }
  }, [idModele]);
  console.log(idModele);
  console.log(carWording);
    return (
      <div className='w-full h-full relative overflow-auto'>
        <div ref={componentRef} className='w-full h-full bg-white text-slate-500 flex flex-col items-center justify-between px-20 py-[2%]'>
            <InvoiceHeader nom={nom} prenom={prenom} email={email} city={cityValue} phoneNumber={phoneNumberValue} />
            <InvoiceDescription idCar={idCar} carWording={carWording} price={prix} pickUp={pickUpValue} Return={returnValue} />
            <InvoiceFooter price={prix} pickUp={pickUpValue} Return={returnValue} />
        </div>
        <ReactToPrint
          trigger={() => {
            return (<button className='absolute bottom-[5%] left-[50%] w-12 h-12 flex justify-center items-center rounded-full cursor-pointer bg-red-500/80 hover:bg-red-500/60 duration-300'><FiPrinter className='text-xl' /></button>);
          } }
          content={() => componentRef.current}
          documentTitle='Invoice'
        />
      </div>
    )
}

export default Invoice;