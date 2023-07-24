import React, { useState, useRef, useEffect } from 'react'
import { useNavigate  } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import axios from 'axios';

// Components
import InvoiceHeader from './InvoiceHeader';
import InvoiceDescription from './InvoiceDescription';
import InvoiceFooter from './InvoiceFooter';

// React Spinner
import { ThreeDots } from 'react-loader-spinner';

// React icons
import {FiPrinter} from 'react-icons/fi';

// Pics

function Invoice({idUser, idCar, pickUpValue, returnValue, cityValue, phoneNumberValue, authorized}) {
  const [carLoading, setCarLoading] = useState(false);
  const [userLoading, setUserLoading] = useState(false);
  const [wordingLoading, setWordingLoading] = useState(false);

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
          setCarLoading(true);
          const response = await axios.get(`http://127.0.0.1:8000/api/Voiture/${id}`);
          setIdModele(response.data.voiture.id_modele);
          setPrix(response.data.voiture.prix_jour);
          setCarLoading(false);
        }catch(error){
          console.log(error);
          setCarLoading(false);
        }
      }
      fetchCar(idCar);

      // fetch user data
      const fetchUser = async(id) => {
        try{
          setUserLoading(true);
          const response = await axios.get(`http://127.0.0.1:8000/api/Utilisateur/${id}`);
          setNom(response.data.message.nom);
          setPrenom(response.data.message.prenom);
          setEmail(response.data.message.email);
          setUserLoading(false);
        }catch(error){
          console.log(error);
          setUserLoading(false);
        }
      }
      fetchUser(idUser);
    }
  }, [idCar, idUser, idModele, authorized, navigate, carWording]);

  useEffect(() => {
    // Find car wording
    const fetchCarWording = async (id) => {
      try {
        setWordingLoading(true);
        const response = await axios.get(`http://127.0.0.1:8000/api/Modele/${id}`);
        setCarWording(response.data.result);
        setWordingLoading(false);
      } catch (error) {
        console.log(error);
        setWordingLoading(false);
      }
    };
  
    if (idModele) {
      fetchCarWording(idModele);
    }
  }, [idModele]);
    return (
      <div className='w-full h-full relative overflow-auto'>
        <div ref={componentRef} className='w-full h-full bg-white relative overflow-auto'>
          {
            carLoading && userLoading && wordingLoading ?
            (
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
              <div className='min-w-full min-h-[100vh] bg-white text-slate-500 flex flex-col items-center justify-between px-20 py-[2%] overflow-x-auto'>
                <InvoiceHeader nom={nom} prenom={prenom} email={email} city={cityValue} phoneNumber={phoneNumberValue} />
                <InvoiceDescription idCar={idCar} carWording={carWording} price={prix} pickUp={pickUpValue} Return={returnValue} />
                <InvoiceFooter price={prix} pickUp={pickUpValue} Return={returnValue} />
              </div>
            )
          }
          
        </div>
          <ReactToPrint
            trigger={() => {
              return (<button className='absolute bottom-[5%] left-[50%] w-12 h-12 flex justify-center items-center rounded-full cursor-pointer bg-red-500/80 hover:bg-red-500/60 duration-300'><FiPrinter className='md:text-xl text-lg' /></button>);
            } }
            content={() => componentRef.current}
            documentTitle='Invoice'
          />
      </div>
    )
}

export default Invoice;