import React, {useState} from 'react';
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



function App() {
  // Check the account status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogIn = () => {
    setIsLoggedIn(true);
  }
  const handleLogOut = () => {
    setIsLoggedIn(false);
  }

  return (
    <BrowserRouter>
        <div className='w-full h-[100vh] bg-gradient-to-r from-gray-900 to-gray-800 flex font-Poppins text-white selection:bg-red-400/80 selection:text-white'>
          <div className='min-w-[15%] h-full flex flex-col items-center justify-between py-10'>
              <NavBar isLoggedIn={isLoggedIn} />
          </div>
          <div className='min-w-[85%] flex justify-center items-center overflow-hidden'>
            <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route path='/Display_Cars' element={<DisplayAllCars />}>
                <Route path='Car_Details' element={<CarDetails authorized={isLoggedIn} />}></Route>
              </Route>
              <Route path='/Contact' element={<Contact />}></Route>
              <Route path='/Sign_Up' element={<SignUp onLogin={handleLogIn} />}></Route>
              <Route path='/Sign_In' element={<SignIn onLogin={handleLogIn} />}></Route>
              <Route path='/Profile' element={<Profile onLogout={handleLogOut} authorized={isLoggedIn} />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
