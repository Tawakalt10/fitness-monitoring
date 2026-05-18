import React from 'react'
import { FaPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
        <nav className='fixed w-full flex justify-between items-center  backdrop-blur-lg  bg-olive-100 h-15'>  
        <div className='flex items-center  m-4 '>
             <h4 className='mr-4 uppercase text-sm '>Kinetic. </h4>
           <div className=''>
              <a href="#" className='p-2 font-bold'>Dashboard</a>
            <a href="#" className='p-2 text-gray-500'>Libary</a>
            <a href="#" className='p-2  text-gray-500'>Story</a>
           </div>
          
        </div>
    
      
        <button className='flex items-center bg-lime-400  mr-5 rounded-2xl w-35 text-sm'>
            <span className='p-2'>  <FaPlus/> </span>
          Start Workout
        </button>

          </nav>
    </div>
  )
}

export default Navbar