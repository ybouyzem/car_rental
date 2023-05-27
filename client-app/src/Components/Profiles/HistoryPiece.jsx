import React, { useState, useEffect } from 'react';
import axios from 'axios';

// React Spinner
import { ThreeDots } from 'react-loader-spinner';

// React icons
import {BsPerson} from 'react-icons/bs';
import {TbGasStation} from 'react-icons/tb';
import {GiGearStick} from 'react-icons/gi';
import {AiOutlineArrowRight} from 'react-icons/ai';

// Components

// Pics
// import PicTest from '../Pics/vecteezy_modern-car-isolated-on-transparent-background-3d-rendering_19763446_683.png';

function HistoryPiece({carId, orderId}) {
    const [carLoading, setCarLoading] = useState(false);
    const [orderLoading, setOrderLoading] = useState(false);
    const [wordingLoading, setWordingLoading] = useState(false);

    const [car, setCar] = useState([]);
    const [order, setOrder] = useState([]);
    const [carWording, setCarWording] = useState('');

    useEffect(() => {
        fetchCar(carId);
    }, [carId]);

    const fetchCar = async(id) => {
        setCarLoading(true);
        const response = await axios.get(`http://127.0.0.1:8000/api/Voiture/${id}`);
        setCar(response.data.voiture);
        setCarLoading(false);
    }

    useEffect(() => {
        fetchOrder(orderId);
    }, [orderId]);

    const fetchOrder = async(id) => {
        setOrderLoading(true);
        const response = await axios.get(`http://127.0.0.1:8000/api/Reservation/${id}`);
        setOrder(response.data.order);
        setOrderLoading(false);
    }

    useEffect(() => {
        fetchCarWording(car.id_modele)
    }, [car.id_modele]);

    const fetchCarWording = async(id) => {
        try{
          setWordingLoading(true);
          const response = await axios.get(`http://127.0.0.1:8000/api/Modele/${id}`);
          setCarWording(response.data.result);
          setWordingLoading(false);
        }catch(error){
          console.log(error);
          setWordingLoading(false);
        }
      }

    const [carName, setCarName] = useState('');
    useEffect(() => {
        if (carWording !== null) {
          setCarName(carWording.libelleMarque + ' ' + carWording.libelleModele);
        }
    }, [carWording]);

    if(carLoading && orderLoading && wordingLoading){
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
    }else {
        return (
            <div className='w-full flex justify-around items-center border-t-2 border-slate-500 border-solid py-2'>
                {/* Pic */}
                <div className='w-[20%]'>
                    <img className='w-full' src={'http://localhost:8000/cars_pics/'+car.image} alt="Not Found"  />
                </div>
                {/* Descritption */}
                <div className='w-[25%] flex flex-col gap-3'>
                    <div className='w-full'>
                        <span className='font-bold text-lgs'>{carName}</span>
                    </div>
                    <div className='w-[80%] flex justify-between text-sm'>
                        <div className='flex flex-col gap-5'>
                            <div className='flex items-center gap-1'><BsPerson className='text-lg' /><span>{car.nombre_places} Seats</span></div>
                            <div className='flex items-center gap-1'><TbGasStation className='text-lg' /><span>{car.carburant}</span></div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div className='flex items-center gap-1'><GiGearStick className='text-lg' /><span>{car.boîte_vitesse}</span></div>
                        </div>
                    </div>
                </div>
                {/* Pick up & return */}
                <div className='text-sm flex flex-col items-center gap-3'>
                    <div>
                        <span>{order.location}</span>
                    </div>
                    <AiOutlineArrowRight className='text-red-500 text-xl rotate-90' />
                    <div>
                        <span>{order.retour}</span>
                    </div>
                </div>
                {/* Price */}
                <div>
                    <div>
                        <span>Price<sub>/24h</sub></span>
                    </div>
                    <div>
                        <span className='text-sm text-red-500 font-extrabold'>{car.prix_jour} MAD</span>
                    </div>
                </div>
            </div>
        )
    }

  
}
export default HistoryPiece;