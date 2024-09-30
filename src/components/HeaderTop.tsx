 import React from 'react'
 import { FaFacebook ,FaTwitterSquare,FaInstagram, FaLinkedin } from "react-icons/fa";
 
 const HeaderTop = () => {
   return (
    
     <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex justify-between gap-1">
            <div className="bg-gray-200 rounded-md p-[6px] text-[14px] cursor-pointer hover:bg-pink-300">
            <FaFacebook />
            </div>
            <div className="bg-gray-200 rounded-md p-[6px] text-[14px] cursor-pointer hover:bg-pink-300">
            <FaTwitterSquare/>
            </div>
            <div className="bg-gray-200 rounded-md p-[6px] text-[14px] cursor-pointer hover:bg-pink-300">
            <FaInstagram />
            </div>
            <div className="bg-gray-200 rounded-md p-[6px] text-[14px] cursor-pointer hover:bg-pink-300">
            < FaLinkedin  />
            </div>
            </div>
            <div className='text-gray-500 text-[12px]'>
              <b>Free Shipping</b>This week order over PKR-15000
            </div>
            <div className='flex gap-4'>
              <select className='text-gray-500 text-[12px] w-[70px]'
              name="currency"
              id="currency">
                <option value="USD $">USD $</option>
                <option value="EUR $">EUR</option>
                <option value="PKR">PKR</option>
       </select>
       <select className='text-gray-500 text-[12px] w-[80px]'
              name="language"
              id="language">
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="Urdu">Urdu</option>
       </select>
       
       
            </div>
    </div>
      </div>
       </div>
       
   )
 }
 
 export default HeaderTop