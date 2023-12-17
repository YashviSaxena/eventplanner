import React from 'react'
import { FaPlaceOfWorship } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";
import { SiAntdesign } from "react-icons/si";
import { FaHatCowboy } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { MdAutoFixHigh } from "react-icons/md";
import { PiHandshakeFill } from "react-icons/pi";

const Serve = () => {
  return (
    <div className='w-screen pb-32 bg-black relative opacity-80'>
        <h1 className='text-2xl font-semibold bg-orange-400 w-52 mt-5 ml-10 px-5 py-5 '><span className='text-4xl font-bold'>Our<br/>Services :<br/></span>Experience the ultimate convenience <br/>of hosting <br/> successful events <br/>all in one<br/> spot</h1>
           <ul className='flex justify-center absolute top-20 right-40'>
              <li className='flex flex-col justify-center items-center mr-24'>
                  <FaPlaceOfWorship className='text-orange-400 h-16 w-16'/>
                  <p className='text-orange-400'>Venue Selection</p>
              </li>

              <li className='flex flex-col justify-center items-center mr-24'>
                  <MdFoodBank className='text-orange-400 h-16 w-16'/>
                  <p className='text-orange-400'>Catering Services</p>
              </li>
              
              <li className='flex flex-col justify-center items-center mr-24'>
                  <FaHatCowboy className='text-orange-400 h-16 w-16'/>
                  <p className='text-orange-400'>Entertainment Booking</p>
              </li>

              <li className='flex flex-col justify-center items-center'>
                  <SiAntdesign className='text-orange-400 h-16 w-16'/>
                  <p className='text-orange-400 text-center'>Event Design and <br/>Theming</p>
              </li>            
           </ul>

           <ul className='flex justify-center absolute top-80 right-80'>
              <li className='flex flex-col justify-center items-center mr-24'>
                  <FaMoneyBill className='text-orange-400 h-16 w-16'/>
                  <p className='text-orange-400'>Budget Planning</p>
              </li>

              <li className='flex flex-col justify-center items-center mr-24'>
                  <PiHandshakeFill className='text-orange-400 h-16 w-16'/>
                  <p className='text-orange-400'>RSVP Management</p>
              </li>
              

              <li className='flex flex-col justify-center items-center'>
                  <MdAutoFixHigh className='text-orange-400 h-16 w-16'/>
                  <p className='text-orange-400'>On-site Coordination</p>
              </li>            
           </ul>
     </div>
  )
}

export default Serve