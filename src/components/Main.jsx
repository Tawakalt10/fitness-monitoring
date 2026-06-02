import React from 'react'
import { FaDumbbell } from 'react-icons/fa'
import { FaCircle } from "react-icons/fa";

const Main = () => {
  return (
    <div>
        
        <div className='flex justify-between p-3 m-4'>
            <h4 className='text-xl'>Recent Workout</h4>
            <button className='text-gray-500  hover:text-black '>View all</button>
        </div>
        
        <div className='flex  mx-10 lg:w-[60%] h-20 pb-4 mb-4 bg-gray-100 rounded-2xl'>
             < FaDumbbell  className='text-2xl mx-4 my-3 '/> 
            <div className='p-3 mx-10'>
                <h4 className='mx-2'>Lower body pressure</h4>
                <div className='flex pt-2  text-gray-500 text-sm'>
                 <p className='mx-2'> Yesterday</p>
                 <p className='mx-2' > . 42 Mins  </p>
                 <p className='mx-2'> .  320 Kcal</p>
                </div>
            
        
            </div>
        </div>
        </div>
  )
}

export default Main