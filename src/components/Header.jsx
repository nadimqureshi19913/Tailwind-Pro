import React from 'react';
import { FaBars } from "react-icons/fa6";
import { BiLogoMongodb } from "react-icons/bi";

const Header = () => {
  return (
    <div className='flex justify-between items-center lg:flex lg:justify-around w-full ' >
        <div className='flex justify-center items-center gap-2'>
        <BiLogoMongodb className='text-green-500 text-5xl cursor-pointer'/>
     <button className='bg-gradient-to-r text-white from-orange-400 to-red-400 py-2 px-3 rounded-2xl'>Hoster Is Hiring</button>
        </div>

        <ul className='hidden lg:flex justify-between items-center font-lato text-white gap-10'>
          <li>
            <a href="#">Plans</a>
            </li>

            <li>
            <a href="#">Find Domains</a>
            </li>

            <li>
            <a href="#">Why Hoster</a>
            </li>
        </ul>

        <div className='hidden lg:flex justify-center items-center font-lato gap-6'>
          <a className='text-white border-2 border-black  px-4 py-2 rounded' href="#">Sig In</a>
          <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'>Join Waitlist</button>
        </div>
        
        <div>
        <FaBars className='text-2xl cursor-pointer lg:hidden'/>
        </div>
    </div>
  )
}

export default Header