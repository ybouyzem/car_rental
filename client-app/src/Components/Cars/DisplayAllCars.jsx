import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router';
import axios from 'axios';

//React icons
import {FiSearch} from 'react-icons/fi';
import {AiOutlineArrowRight} from 'react-icons/ai';

//Components
import CarBox from './CarBox';


function DisplayAllCars({handleVehicule}) {
  // extract all vehiculs
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 10;

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/Voiture?page=${currentPage}&perPage=${carsPerPage}`);
        setCars(response.data.voitures.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCars();
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
      <div className='w-full h-full flex gap-5 pt-[8%] pb-[2%] pr-[1%] relative overflow-hidden'>
        <form className="w-[20%] flex items-center absolute right-5 top-5">
          <FiSearch className='absolute left-2' />
          <input className='w-full px-8 py-2 bg-transparent border-b-2 border-gray-100/20 outline-none focus:border-red-500' type="text" placeholder='Search' />
        </form>
        <div className='w-[50%] h-full flex flex-col gap-5'>
          <div className='w-full flex justify-between items-center gap-5'>
              <button onClick={previousPage} disabled={currentPage === 1} className='p-[3%] rounded-full bg-red-500/20 hover:bg-red-600/20 duration-300 cursor-pointer z-10'><AiOutlineArrowRight className='text-xl rotate-180' /></button>
              <button onClick={nextPage} className='p-[3%] rounded-full bg-red-500/20 hover:bg-red-600/20 duration-300 cursor-pointer z-10'><AiOutlineArrowRight className='text-xl' /></button>
          </div>
          <div className='w-full h-full flex flex-col gap-5 overflow-y-auto'>
            {
              cars.map((row, key) => {
                return (
                  <CarBox key={key} handleVehicule={handleVehicule} carId={row.id} id_modele={row.id_modele} image={'http://localhost:8000/cars_pics/'+row.image} seats={row.nombre_places} carburant={row.carburant} vitesse={row.boîte_vitesse}  />
                )
              })
            }
          </div>
        </div>
        <Outlet />
      </div>
  )
}
export default DisplayAllCars;