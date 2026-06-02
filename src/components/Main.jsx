import React from 'react'
import { FaDumbbell } from 'react-icons/fa'

const Main = () => {
  return (
    <div>
        
        <div className='flex justify-between p-3 m-4'>
            <h4 className='text-xl'>Recent Workout</h4>
            <button className='text-gray-500  hover:text-black '>View all</button>
        </div>
        
        <div>
             <FaDumbbell /> 
            <div className='flex'>
                <h4>Lower body pressure</h4>
                <div className='flex'>
                 <p>Yesterday</p>
                 <p>. 42 Mins . 320 Kcal</p>
                </div>
               
            </div>
        </div>
        </div>
  )
}

export default Main