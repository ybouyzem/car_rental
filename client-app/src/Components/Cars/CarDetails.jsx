import React from 'react'

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


//Pics
import PicTest from '../Pics/vecteezy_modern-car-isolated-on-transparent-background-3d-rendering_19763446_683.png';

function CarDetails({authorized}) {
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
    function OpenDescription(){
        var desc = document.getElementById("Description");
        desc.style.opacity = 1;
        desc.style.zIndex = 10;
        desc.style.scale = 1;
    };
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
    return (
      <div className='w-[50%] h-full flex flex-col justify-between items-center py-[2%] relative'>
        {/* Picture */}
        <div className='w-[50%]'>
            <img className='w-full' src={PicTest} alt="" />
        </div>
        {/* Features */}
        <div className='w-[50%] flex justify-between text-sm'>
            <div className='flex flex-col gap-5'>
                <div className='flex items-center gap-1'><BsPerson className='text-lg' /><span>4 Seats</span></div>
                <div className='flex items-center gap-1'><TbGasStation className='text-lg' /><span>Essence</span></div>
            </div>
            <div className='flex flex-col gap-5'>
                <div className='flex items-center gap-1'><GiGearStick className='text-lg' /><span>Manual</span></div>
                <button onClick={OpenDescription} className='flex items-center gap-1'><TbFileDescription className='text-lg' /><span>View More</span></button>
            </div>
        </div>
        {/* Price */}
        <div className='w-[50%] flex flex-col items-end'>
            <div><span className='text-sm text-gray-200'>Price for <span className='text-red-500'>24 hours</span> :</span></div>
            <div><span className='text-xl font-bold'>MAD <span className='text-red-500'>600.00DH</span></span></div>
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
                <p className='text-sm text-gray-200 leading-6'>Conçu et développé dans les installations de SEAT à Martorell (Barcelone) et produit à Wolfsburg (Allemagne), ce véhicule marque le troisième volet de l’offensive produits SUV de la marque. La nouveau modèle phare de SEAT permettra à l’entreprise de conquérir de nouveaux clients, renforcera l’image de marque. Elle tire son nom de la ville méditerranéenne de Tarragone, un centre historique et culturel qui bénéficie d’une architecture impressionnante tout en gardant un esprit jeune et aventureux. Le nom Tarraco a été choisi par vote ouvert à tous sur Internet #SEATseekingName, et auquel plus de 140 000 passionnés ont participé durant la phase finale.</p>
            </div>
        </div>

        {/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
        {/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
        {/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
        
        {/* Form */}
        <div id='form' className='absolute left-0 top-0 w-full h-full bg-white/80 px-[4%] pt-[10%] pb-5 opacity-0 -z-10 duration-300 overflow-y-auto'>
            <button className='absolute right-5 top-5 text-lg cursor-pointer' onClick={Close}><TfiClose className='text-black' /></button> 
            <form action='' className='w-full h-full flex flex-col justify-between gap-5 text-black'>

                {/* Date & Time */}
                <div className='w-full flex items-center justify-between gap-5'>
                    <div className='w-[50%] flex flex-col'>
                        <label className='font-extrabold' htmlFor="">Pick-up</label>
                        <input className='bg-transparent border-red-500/60 border-b-2 outline-none' type="datetime-local" />
                    </div>
                    <div className='w-[50%] flex flex-col'>
                        <label className='font-extrabold' htmlFor="">Return</label>
                        <input className='bg-transparent border-red-500/60 border-b-2 outline-none' type="datetime-local" />
                    </div>
                </div>
                
                <div className='w-full flex gap-5'>
                    {/* Location */}
                    <div className='w-[50%] flex items-center relative'>
                        <IoLocationOutline className='absolute left-2 text-lg text-red-500' />
                        <select className='w-full px-8 py-2 bg-transparent border-red-500/60 border-b-2 outline-none appearance-none' name="" id="">
                            <option selected disabled>Choose your location</option>
                            <option value="">Béni Mellal</option>
                            <option value="">Casa blanca</option>
                            <option value="">Rabat</option>
                            <option value="">Agadir</option>
                            <option value="">Tanger</option>
                            <option value="">Other</option>
                        </select>
                    </div>
                    {/* Phone Number */}
                    <div className='w-[50%] flex items-center relative'>
                        <BsPhone className='absolute left-2 text-lg text-red-500' />
                        <input className='w-full px-8 py-2 bg-transparent border-red-500/60 border-b-2 placeholder:text-black outline-none' type="number" placeholder="Phone Number" required />
                    </div>
                </div>
                
                <div className='w-full flex gap-5'>
                    {/* License Number */}
                    <div className='w-[50%] flex items-center relative'>
                        <TbLicense className='absolute left-2 text-lg text-red-500' />
                        <input className='w-full px-8 py-2 bg-transparent border-red-500/60 border-b-2 placeholder:text-black outline-none' type="number" placeholder="License Number" required />
                    </div>

                    {/* Nationality */}
                    <div className='w-[50%] flex items-center relative'>
                        <AiOutlineIdcard className='absolute left-2 text-lg text-red-500' />
                        <select className='w-full px-8 py-2 bg-transparent border-red-500/60 border-b-2 outline-none appearance-none' name="" id="">
                            <option selected disabled>Choose your nationality</option>
                            <option value="">Morocco</option>
                            <option value="">France</option>
                            <option value="">Spain</option>
                            <option value="">Portugal</option>
                            <option value="">Other</option>
                        </select>
                    </div>
                </div>
                {/* Passport Number */}
                <div className='w-full flex items-center relative'>
                    <GiPassport className='absolute left-2 text-lg text-red-500' />
                    <input className='w-full px-8 py-2 bg-transparent border-red-500/60 border-b-2 placeholder:text-black outline-none' placeholder="Passport Number" type="number" required />
                </div>

                {/* Checkout */}
                <div className='w-full flex justify-center'>
                    <input className='w-full bg-black/80 hover:bg-black/70 text-white duration-300 py-5 cursor-pointer' type="submit" name="" id="" value="Order now" />
                </div>
            </form>
        </div>
        {/* Sign in warning */}
        <div id="signInWarning" className='w-[40%] h-[30%] absolute right-0 bottom-0 bg-red-500/80 rounded-xl flex flex-col items-center justify-center py-2 opacity-0 -z-10 duration-300'>
            <IoWarningOutline className='text-5xl text-yellow-400' />
            <div className='w-full py-2 px-5 text-center'>
                <span className='text-sm'>You can not do any operation now! Please Log into your account first.</span>
            </div>
            <button className='text-black' onClick={Close}>Got it</button>
        </div>
      </div>
    )
}
export default CarDetails;