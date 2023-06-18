import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router';
import axios from 'axios';

// React Spinner
import { ThreeDots } from 'react-loader-spinner';

//React icons
import {FiSearch} from 'react-icons/fi';
import {AiOutlineArrowRight} from 'react-icons/ai';

//Components
import CarBox from './CarBox';

//Pics
import EmptyPic from '../Pics/empty.png';


function DisplayAllCars({handleVehicule}) {
  const [loading, setLoading] = useState(false);
  // Filters
  const [searchCar, setSearchCar] = useState('');
  // extract all vehiculs
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 10;

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://127.0.0.1:8000/api/Voiture?page=${currentPage}&perPage=${carsPerPage}&search=${searchCar}`);
        setCars(response.data.voitures.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    fetchCars();
  }, [currentPage, searchCar]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchCar]);

  var emptyResult;

  if(cars.length === 0){
    emptyResult = (
      <div className='w-full h-[40%] flex flex-col items-center py-[2%] gap-10'>
          {/* Title */}
          <div>
              <span className='text-xl font-extrabold'>No Available Cars</span>
          </div>
          <div className='h-[80%]'>
              <img src={EmptyPic} alt="" className='h-full' />
          </div>
      </div>
    )
  }

  return (
      <div className='w-full h-full flex gap-5 pt-[8%] pb-[2%] pr-[1%] relative overflow-hidden'>
        <form className="w-[20%] flex items-center absolute right-5 top-5" onSubmit={(e)=>e.preventDefault()}>
          <FiSearch className='absolute left-2' />
          <input className='w-full px-8 py-2 bg-transparent border-b-2 border-gray-100/20 outline-none focus:border-red-500' type="text" placeholder='Search...' name='search' value={searchCar} onChange={(e)=>setSearchCar(e.target.value)} />
        </form>
        <div className='w-[50%] h-full flex flex-col gap-5'>
          <div className='w-full flex justify-between items-center gap-5'>
              <button onClick={previousPage} disabled={currentPage === 1} className='p-[3%] rounded-full bg-red-500/20 hover:bg-red-600/20 duration-300 cursor-pointer z-10'><AiOutlineArrowRight className='text-xl rotate-180' /></button>
              <button onClick={nextPage} className='p-[3%] rounded-full bg-red-500/20 hover:bg-red-600/20 duration-300 cursor-pointer z-10'><AiOutlineArrowRight className='text-xl' /></button>
          </div>
          <div className='w-full h-full flex flex-col gap-5 overflow-y-auto relative'>
            {
              loading ? 
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
                <div className='w-full h-full flex flex-col gap-5 overflow-y-auto'>
                  {
                    cars.map((row, key) => {
                      return (
                        <CarBox key={key} handleVehicule={handleVehicule} carId={row.id} libelleMarque={row.marque_libelle} libelleModele={row.modele_libelle} image={'http://localhost:8000/cars_pics/'+row.image} seats={row.nombre_places} carburant={row.carburant} vitesse={row.boîte_vitesse}  />
                      )
                    })
                  }
                  {emptyResult}
                </div>
              )
            }
            
            
          </div>
        </div>
        <Outlet />
      </div>
  )
}
export default DisplayAllCars;