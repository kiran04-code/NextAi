import React from 'react'
import { FaRobot } from "react-icons/fa";
const Navbar = () => {
  return (
  <div className='w-full py-3  md:p-5'>
   <div className=' px-6  rounded-2xl  bg-transparent'>
     <div className='bg-gradient-to-r  from-[#070641] to-[#060b3b] flex justify-center gap-2  items-center w-35 p-2 rounded-2xl  '>
      <FaRobot className='text-[#53fff1]  text-4xl'/>
      <h1 className='text-xl font-bold  bg-clip-text text-transparent bg-gradient-to-t from-[#00e0ff] to-[#0fb3ff]'>NexaAI</h1>
     </div>
   </div>
  </div>
  )
}

export default Navbar
