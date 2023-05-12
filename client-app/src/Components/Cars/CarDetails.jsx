import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//React icons
import {BsPerson} from 'react-icons/bs';
import {GiGearStick} from 'react-icons/gi';
import {TbGasStation} from 'react-icons/tb';
import {TbFileDescription} from 'react-icons/tb';
import {TfiClose} from 'react-icons/tfi';
import {BsPhone} from 'react-icons/bs';
import {TbLicense} from 'react-icons/tb';
import {GiPassport} from 'react-icons/gi';
import {AiOutlineIdcard} from 'react-icons/ai';
import {IoLocationOutline} from 'react-icons/io5';
import {IoWarningOutline} from 'react-icons/io5';
import {BiMessageRoundedError} from 'react-icons/bi';


//Pics

function CarDetails({idCar, idUser, onPickUp, onReturn, onCity, onPhoneNumber, authorized}) {
    // extract car's data selected
    var [image, setImage] = useState('');
    var [seats, setSeats] = useState('');
    var [carburant, setCarburant] = useState('');
    var [vitesse, setVitesse] = useState('');
    var [description, setDescription] = useState('');
    var [price, setPrice] = useState('');

    
    useEffect(() => {
        var fetchCar = async(id) => {
            try{
                const response = await axios.get(`http://127.0.0.1:8000/api/Voiture/${id}`);
                setImage(response.data.voiture.image);
                setSeats(response.data.voiture.nombre_places);
                setCarburant(response.data.voiture.carburant);
                setVitesse(response.data.voiture.boîte_vitesse);
                setDescription(response.data.voiture.description);
                setPrice(response.data.voiture.prix_jour);
            }catch(error){
                console.log(error);
            }
        }
        fetchCar(idCar);
      }, [idCar]);

    // closing some divs
    function Close(){
        // Description
        var desc = document.getElementById("Description");
        desc.style.opacity = 0;
        desc.style.zIndex = -10;
        desc.style.scale = 0;
        // form
        var form = document.getElementById("form");
        form.style.opacity = 0;
        form.style.zIndex = -10;
        form.style.scale = 0;
        // Warning
        var warning = document.getElementById("signInWarning");
        warning.style.opacity = 0;
        warning.style.zIndex = -10;
        warning.style.scale = 0;
    };

    // the description of a car
    function OpenDescription(){
        var desc = document.getElementById("Description");
        desc.style.opacity = 1;
        desc.style.zIndex = 10;
        desc.style.scale = 1;
    };

    // open the checkout form
    function OpenCheckout(){
        var form = document.getElementById("form");
        var warning = document.getElementById("signInWarning");
        if(authorized){
            form.style.opacity = 1;
            form.style.zIndex = 10;
            form.style.scale = 1;
        }else{
            warning.style.opacity = 1;
            warning.style.zIndex = 10;
            warning.style.scale = 1;
        }
    };

    //Redirection to invoice
    let navigate = useNavigate();
    function RedirectToInvoice(){
        navigate("/Invoice");
    }

    //Forbid reloading the page.
    const handleSubmit = async(event) => {
        event.preventDefault();
        if(authorized){
            const isValid = handlePickUp() && handleReturn() && handleLocation() && handlePhoneNumber() && handleLicenseNumber() && handleNationality();
            if(isValid){
                try {
                    // Insert client data
                    var formData1 = new FormData();
                    formData1.append('id_utilisateur', idUser);
                    formData1.append('nationalite', nationality);
                    formData1.append('ville', location);
                    formData1.append('numero_telephone', phoneNumber);
                    formData1.append('numero_permis', licenseNumber);
                    if(passportNumber !== ''){
                        formData1.append('numero_passport', passportNumber);
                    }
              
                    const { data: clientData } = await axios.post('http://127.0.0.1:8000/api/Client', formData1);
                    console.log(clientData.message);
                    
                    // Get client ID
                    const clientId = clientData.client.id; 

                    // Insert order data
                    var formData2 = new FormData();
                    formData2.append('id_voiture', idCar);
                    formData2.append('id_client', clientId);
                    formData2.append('location', date_pickUp);
                    formData2.append('retour', date_return);

                    const { data: orderData } = await axios.post('http://127.0.0.1:8000/api/Reservation', formData2);
                    console.log(orderData.message);

                    RedirectToInvoice();
                } catch (error) {
                    console.log(error);
                }
            }
        }else {
            return;
        }
        
    }

    // ---------------------------------------
    // ---------------------------------------
    // ---------------------------------------

    const [date_pickUp, setDatePickUp] = useState(''),
    [date_return, setDateReturn] = useState(''),
    [location, setLocation] = useState(''),
    [phoneNumber, setPhoneNumber] = useState(''),
    [licenseNumber, setLicenseNumber] = useState(''),
    [nationality, setNationality] = useState(''),
    [passportNumber, setPassportNumber] = useState('');


    // handle Location
    const handleLocation = () => {
        var status = true;
        var location = document.getElementById("Location");
        var errMsg = document.getElementById("ErrorLocation");
        if(location.value === "none"){
            status = false;
            errMsg.style.display = "flex";
        }else{
            errMsg.style.display = "none";
            onCity(location.value);
            setLocation(location.value);
        }
        return status;
    }

    // handle Phone Number
    const handlePhoneNumber = () => {
        var status = true;
        var Phone = document.getElementById('PhoneNumber');
        var errMsg = document.getElementById('ErrorPhoneNumber');
        let syntaxe = /^(\(\+)[0-9]{3}[)] [0-9]+$/;
        let valeur = (syntaxe.test(Phone.value))? true: false;
        if(Phone.value === '' || !valeur){
            status = false;
            errMsg.style.display = "flex";
        }else{
            errMsg.style.display = "none";
            onPhoneNumber(Phone.value);
            setPhoneNumber(Phone.value);
        }
        return status;
    }

    // handle License Number
    const handleLicenseNumber = () => {
        var status = true;
        var License = document.getElementById('LicenseNumber');
        var errMsg = document.getElementById('ErrorLicenseNumber');
        if(License.value === ''){
            status = false;
            errMsg.style.display = "flex";
        }else{
            errMsg.style.display = "none";
            setLicenseNumber(License.value);
        }
        return status;
    }

    // handle Nationality
    const handleNationality = () => {
        var status = true;
        var nationality = document.getElementById("Nationality");
        var errMsg = document.getElementById("ErrorNationality");

        var passDiv = document.getElementById("PassportDiv");
        var passport = document.getElementById('PassportNumber');
        if(nationality.value === "none"){
            status = false;
            errMsg.style.display = "flex";
        }else{
            if(nationality.value === 'Morocco'){
                passDiv.style.display = "none";
                passport.required = false;
            }else{
                passport.required = true;
                passDiv.style.display = "flex";
            }
            errMsg.style.display = "none";
            setNationality(nationality.value);
        }
        return status;
    }

    // handle Passport Number
    const handlePassportNumber = () => {
        var status = true;
        var passport = document.getElementById('PassportNumber');
        var errMsg = document.getElementById('ErrorPassport');
        if(passport.value === ''){
            status = false;
            errMsg.style.display = "flex";
        }else{
            errMsg.style.display = "none";
            setPassportNumber(passport.value);
        }
        return status;
    }

    // handle Pick up
    const handlePickUp = () => {
        var status = true;
        var errMsg = document.getElementById('ErrorPickUp');
        if(!checkPickUp()){
            status = false;
            errMsg.style.display = "flex";
        }else{
            errMsg.style.display = "none";
            onPickUp(document.getElementById('PickUp').value);
            setDatePickUp(document.getElementById('PickUp').value);
        }
        return status;
    }

    // checking Pick up date
    // Pick up date must be superior than today's date

    const checkPickUp = () => {
        var status = false;
        const today = new Date(),
        pickUpDate = new Date(document.getElementById('PickUp').value),
        pickUpTime = pickUpDate.getTime();
        if(pickUpTime >= today){
            if(document.getElementById('Return').value !== ''){
                const returnDate = new Date(document.getElementById('Return').value);
                let returnTime = returnDate.getTime();
                if(((returnTime - pickUpTime) / 3600000) >= 1) status = true;
                else status = false;
            }else{
                status = true;
            }
        } 
        return status;
    }
    
    // handle Return
    const handleReturn = () => {
        var status = true;
        var errMsg = document.getElementById('ErrorReturn');
        if(!checkReturn()){
            status = false;
            errMsg.style.display = "flex";
        }else{
            errMsg.style.display = "none";
            onReturn(document.getElementById('Return').value);
            setDateReturn(document.getElementById('Return').value);
        }
        return status;
    }

    // checking Return date
    // the difference between the return date & pick up date must be superior than 1 hour at least
    const checkReturn = () => {
        var status = false;
        const date1 = new Date(document.getElementById('PickUp').value),
        date2 = new Date(document.getElementById('Return').value),
        pickUpTime = date1.getTime(),
        returnTime = date2.getTime(),
        hours = (returnTime - pickUpTime) / 3600000;
        if(hours >= 1) status = true;
        return status;
    }

    return (
      <div className='w-[50%] h-full flex flex-col justify-between items-center py-[2%] relative'>
        {/* Picture */}
        <div className='w-[50%] h-[40%] flex justify-center items-center'>
            <img className='w-full' src={'http://localhost:8000/cars_pics/'+image} alt="Not Found" />
        </div>
        {/* Features */}
        <div className='w-[50%] flex justify-between text-sm'>
            <div className='flex flex-col gap-5'>
                <div className='flex items-center gap-1'><BsPerson className='text-lg' /><span>{seats} Seats</span></div>
                <div className='flex items-center gap-1'><TbGasStation className='text-lg' /><span>{carburant}</span></div>
            </div>
            <div className='flex flex-col gap-5'>
                <div className='flex items-center gap-1'><GiGearStick className='text-lg' /><span>{vitesse}</span></div>
                <button onClick={OpenDescription} className='flex items-center gap-1'><TbFileDescription className='text-lg' /><span>View More</span></button>
            </div>
        </div>
        {/* Price */}
        <div className='w-[50%] flex flex-col items-end'>
            <div><span className='text-sm text-gray-200'>Price for <span className='text-red-500'>24 hours</span> :</span></div>
            <div><span className='text-xl font-bold'>MAD <span className='text-red-500'>{price}</span></span></div>
        </div>
        {/* Button Checkout */}
        <button className='w-[70%] bg-red-500/20 hover:bg-red-600/20 duration-300 py-5 cursor-pointer' onClick={OpenCheckout}>Checkout</button>
        {/* Description */}
        <div id='Description' className='absolute left-0 top-0 w-full h-full bg-black/80 flex flex-col justify-end gap-5 px-[4%] py-[10%] opacity-0 -z-10 duration-300'>
            <button className='absolute right-5 top-5 text-lg cursor-pointer' onClick={Close}><TfiClose /></button> 
            <div>
                <span className='text-2xl font-extrabold'>Description :</span>
            </div>
            <div className='overflow-y-auto'>
                <p className='text-sm text-gray-200 leading-6'>{description}</p>
            </div>
        </div>

        {/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
        {/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
        {/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
        
        {/* Form */}
        <div id='form' className='absolute left-0 top-0 w-full h-full bg-white/80 px-[4%] pt-[10%] pb-5 opacity-0 -z-10 duration-300 overflow-y-auto'>
            <button className='absolute right-5 top-5 text-lg cursor-pointer' onClick={Close}><TfiClose className='text-black' /></button> 
            <form action='' className='w-full h-full flex flex-col justify-between gap-5 text-black' onSubmit={handleSubmit}>

                {/* Date & Time */}
                <div className='w-full flex items-center justify-between gap-5'>
                    {/* Pick-up */}
                    <div className='w-[50%] flex flex-col'>
                        <div className='w-full flex flex-col'>
                            <label className='font-extrabold' htmlFor="">Pick-up</label>
                            <input className='bg-transparent border-red-500/60 border-b-2 outline-none' type="datetime-local" name='PickUp' id='PickUp' onChange={handlePickUp} required />
                        </div>
                        {/* Error Message */}
                        <div id='ErrorPickUp' className='w-full text-red-500 items-center gap-2 hidden'>
                            <BiMessageRoundedError className='text-xl' />
                            <span className='text-xs'>Should enter date superior than today's date</span>
                        </div>
                    </div>
                    {/* Return */}
                    <div className='w-[50%] flex flex-col'>
                        <div className='w-full flex flex-col'>
                            <label className='font-extrabold' htmlFor="">Return</label>
                            <input className='bg-transparent border-red-500/60 border-b-2 outline-none' type="datetime-local" name='Return' id='Return' onChange={handleReturn} required/>
                        </div>
                        {/* Error Message */}
                        <div id='ErrorReturn' className='w-full text-red-500 items-center gap-2 hidden'>
                            <BiMessageRoundedError className='text-xl' />
                            <span className='text-xs'>Should enter date superior than pick up's date</span>
                        </div>
                    </div>
                </div>
                
                <div className='w-full flex gap-5'>
                    {/* Location */}
                    <div className='w-[50%] flex flex-col'>
                        <div className='w-full flex items-center relative'>
                            <IoLocationOutline className='absolute left-2 text-lg text-red-500' />
                            <select defaultValue="none" className='w-full px-8 py-2 bg-transparent border-red-500/60 border-b-2 outline-none appearance-none' name="Location" id="Location" onChange={handleLocation} required>
                                <option value="none" disabled>Choose your location</option>
                                <option value="Béni Mellal">Béni Mellal</option>
                                <option value="Casa blanca">Casa blanca</option>
                                <option value="Rabat">Rabat</option>
                                <option value="Agadir">Agadir</option>
                                <option value="Tanger">Tanger</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        {/* Error Message */}
                        <div id="ErrorLocation" className='w-full text-red-500 items-center gap-2 hidden'>
                            <BiMessageRoundedError className='text-xl' />
                            <span className='text-xs'>Location required</span>
                        </div>
                    </div>
                    {/* Phone Number */}
                    <div className='w-[50%] flex flex-col'>
                        <div className='w-full flex items-center relative'>
                            <BsPhone className='absolute left-2 text-lg text-red-500' />
                            <input className='w-full px-8 py-2 bg-transparent border-red-500/60 border-b-2 placeholder:text-black outline-none appearance-none' type="tel" placeholder="Phone Number" id='PhoneNumber' name='PhoneNumber' onChange={handlePhoneNumber} min="0" required />
                        </div>
                        {/* Error Message */}
                        <div id='ErrorPhoneNumber' className='w-full text-red-500 items-center gap-2 hidden'>
                            <BiMessageRoundedError className='text-xl' />  
                            <span className='text-xs'>Phone Number should not contain any text letters / ex: (+212) 620429392</span>
                        </div>
                    </div>
                </div>
                
                <div className='w-full flex gap-5'>
                    {/* License Number */}
                    <div className='w-[50%] flex flex-col'>
                        <div className='w-full flex items-center relative'>
                            <TbLicense className='absolute left-2 text-lg text-red-500' />
                            <input className='w-full px-8 py-2 bg-transparent border-red-500/60 border-b-2 placeholder:text-black outline-none' type="text" placeholder="License Number" id='LicenseNumber' name='LicenseNumber' onChange={handleLicenseNumber} required />
                        </div>
                        {/* Error Message */}
                        <div id='ErrorLicenseNumber' className='w-full text-red-500 items-center gap-2 hidden'>
                            <BiMessageRoundedError className='text-xl' />
                            <span className='text-xs'>License number required</span>
                        </div>
                    </div>

                    {/* Nationality */}
                    <div className='w-[50%] flex flex-col'>
                        <div className='w-full flex items-center relative'>
                            <AiOutlineIdcard className='absolute left-2 text-lg text-red-500' />
                            <select defaultValue="none"  className='w-full px-8 py-2 bg-transparent border-red-500/60 border-b-2 outline-none appearance-none' name="Nationality" id="Nationality" onChange={handleNationality}>
                                <option value="none" disabled>Choose your nationality</option>
                                <option value="Morocco">Morocco</option>
                                <option value="France">France</option>
                                <option value="Spain">Spain</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        {/* Error Message */}
                        <div id='ErrorNationality' className='w-full text-red-500 items-center gap-2 hidden'>
                            <BiMessageRoundedError className='text-xl' />
                            <span className='text-xs'>Country required</span>
                        </div>
                    </div>
                </div>
                {/* Passport Number */}
                <div id='PassportDiv' className='w-full flex-col hidden'>
                    <div className='w-full flex items-center relative'>
                        <GiPassport className='absolute left-2 text-lg text-red-500' />
                        <input className='w-full px-8 py-2 bg-transparent border-red-500/60 border-b-2 placeholder:text-black outline-none' placeholder="Passport Number" type="text" id='PassportNumber' name='PassportNumber' onChange={handlePassportNumber} />
                    </div>
                    {/* Error Message */}
                    <div id='ErrorPassport' className='w-full text-red-500 items-center gap-2 hidden'>
                        <BiMessageRoundedError className='text-xl' />
                        <span className='text-xs'>Passport number required</span>
                    </div>
                </div>

                {/* Checkout */}
                <div className='w-full flex justify-center'>
                    <input className='w-full bg-black/80 hover:bg-black/70 text-white duration-300 py-5 cursor-pointer' type="submit" name="" id="" value="Order now" />
                </div>
            </form>
        </div>
        {/* Sign in warning */}
        <div id="signInWarning" className='w-[40%] h-[30%] absolute right-0 bottom-0 bg-slate-500/80 rounded-xl flex flex-col items-center justify-center py-2 opacity-0 -z-10 duration-300'>
            <IoWarningOutline className='text-5xl text-yellow-400' />
            <div className='w-full py-2 px-5 text-center'>
                <span className='text-sm'>You can not do any operation without account! Please Log into your account first.</span>
            </div>
            <button className='text-black relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-black hover:after:w-[80%] after:duration-300' onClick={Close}>Got it</button>
        </div>
      </div>
    )
}
export default CarDetails;