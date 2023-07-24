import React, { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

//Components
import NavBar from './Components/Partials/NavBar';
import Home from './Components/Home/Home';
import DisplayAllCars from './Components/Cars/DisplayAllCars';
import Contact from './Components/Contact/Contact';
import SignUp from './Components/Profiles/SignUp';
import SignIn from './Components/Profiles/SignIn';
import Profile from './Components/Profiles/Profile';
import CarDetails from './Components/Cars/CarDetails';
import Invoice from './Components/Invoice/Invoice';
import Verifie_email from './Components/Verification/Verifie_email';
import ResetPassword from './Components/User/ResetPassword';



function App() {
  // Check the account status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogIn = () => {
    setIsLoggedIn(true);
  }
  const handleLogOut = () => {
    setIsLoggedIn(false);
  }

  //saving the id of the user
  const [idUser, setIdUser] = useState('');
  const handleIdUser = ($id) => {
    setIdUser($id);
  }

  // to know the vehicule clicked on
  const [idCar, setIdCar] = useState('');
  const handleVehicule = (id) => {
    setIdCar(id);
  }

  // Filling out the invoice with data
  const [pickUp, setPickUp] = useState('');
  const [Return, setReturn] = useState('');
  const [city, setCity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  //set pick up value
  function setPickUpValue(e){
    setPickUp(e);
  }

  //set return value
  function setReturnValue(e){
    setReturn(e);
  }

  //set city value
  function setCityValue(e){
    setCity(e);
  }

  //set phone number value
  function setPhoneNumberValue(e){
    setPhoneNumber(e);
  }

  return (
    <BrowserRouter>
        <div className='w-full h-[100vh] bg-gradient-to-r from-gray-900 to-gray-800 flex font-Poppins text-white selection:bg-red-400/80 selection:text-white'>
          <div className='md:min-w-[15%] min-w-[10%] h-full flex flex-col items-center justify-between md:py-10 py-5 px-6 text-center'>
              <NavBar isLoggedIn={isLoggedIn} idUser={idUser} />
          </div>
          <div className='min-w-[85%] h-[100vh] flex justify-center items-center overflow-hidden'>
            <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route path='/Display_Cars' element={<DisplayAllCars handleVehicule={handleVehicule} />}>
                <Route path='Car_Details' element={<CarDetails idCar={idCar} idUser={idUser} onPickUp={setPickUpValue} onReturn={setReturnValue} onCity={setCityValue} onPhoneNumber={setPhoneNumberValue} authorized={isLoggedIn} />}></Route>
              </Route>
              <Route path='/Contact' element={<Contact />}></Route>
              <Route path='/Sign_Up' element={<SignUp />}></Route>
              <Route path='/Sign_In' element={<SignIn onLogin={handleLogIn} saveIdUser={handleIdUser} />}></Route>
              <Route path='/Profile' element={<Profile onLogout={handleLogOut} idUser={idUser} authorized={isLoggedIn} />}></Route>
              <Route path='/Invoice' element={<Invoice idUser={idUser} idCar={idCar} pickUpValue={pickUp} returnValue={Return} cityValue={city} phoneNumberValue={phoneNumber} authorized={isLoggedIn} />}></Route>
              <Route path='/Verifie_email' element={<Verifie_email />}></Route>
              <Route path='/ResetPassword/:idUser' element={<ResetPassword />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
