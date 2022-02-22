import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'



function Footer() {
  return (
    <div className='bg-theme w-screen flex justify-center'>
       <div className='md:w-full w-1/2'>
       <div className='bg-theme p-10 font-pop text-center'>
         <p className='text-gray-50'>Designed and Developed By </p>
         <div className='flex text-white w-full justify-between'>
           <FaInstagram/>
           <FaYoutube/>
           <FaGithub/>
           <FaLinkedin/>
         </div>
         <p className='text-gray-50'>Obi .B. Uzozie</p>
       </div>
       </div>
    </div>
  )
}

export default Footer