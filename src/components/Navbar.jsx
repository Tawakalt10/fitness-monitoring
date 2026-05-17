import React from 'react'
import { FaPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-between items-center  bg-olive-50 h-15'>  
        <h4>Kinetic.</h4>
    
        <div>
            <a href="#">Dashboard</a>
            <a href="#">Libary</a>
            <a href="#">Story</a>
        </div>
        <button className='flex items-center bg-lime-400  mr-5 '>
            <span className='p-2'>  <FaPlus/> </span>
          Start Workout
        </button>

          </nav>
    </div>
  )
}

export default Navbar