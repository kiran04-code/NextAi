import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='md:p-8 p-5'>
      <div className='w-full bg-gradient-to-t from-[#060544]  flex flex-col items-center px-6 md:px-12 py-8 md:py-12 rounded-3xl text-white'>
        
        <div className='flex flex-col md:flex-col justify-between items-center w-full gap-6'>
          
 
          <div>
            <h1 className='text-2xl font-bold  text-[#53fff1] '>NextAI </h1>
            <p className='md:text-7xl font-bold mt-1  text-2xl  bg-clip-text text-transparent bg-gradient-to-r from-[#00e0ff] to-[#0047ff]'>Sharpen your skills, ace your interviews</p>
          </div>
          
          {/* Quick Links */}
          <div className='flex bflex-col md:flex-row gap-4 md:gap-8 w-full md:font-semibold'>
            <a href='#home' className='hover:text-gray-300 transition'>Home</a>
            <a href='#topics' className='hover:text-gray-300 transition'>Topics</a>
            <a href='#about' className='hover:text-gray-300 transition'>About</a>
            <a href='#contact' className='hover:text-gray-300 transition'>Contact</a>
          </div>
          
          {/* Social Icons */}
          <div className='flex gap-4 text-lg'>
            <a href='#' className='hover:text-gray-300 transition'><FaFacebookF /></a>
            <a href='#' className='hover:text-gray-300 transition'><FaTwitter /></a>
            <a href='#' className='hover:text-gray-300 transition'><FaLinkedinIn /></a>
            <a href='#' className='hover:text-gray-300 transition'><FaGithub /></a>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className='w-full text-center mt-6 text-sm text-gray-300 border-t border-gray-600 pt-4'>
          &copy; {new Date().getFullYear()} NextAI .@Kiran.dev  All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
