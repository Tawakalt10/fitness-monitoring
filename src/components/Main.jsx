import React from 'react'
import { FaArrowDown, FaDumbbell, FaHeart, FaPause, } from 'react-icons/fa'
import { FaCircle } from "react-icons/fa";

const Main = () => {
  return (
    <div>
        
        <div className='flex justify-between p-3 m-4 mt-8'>
            <h4 className='text-xl'>Recent Workout</h4>
            <button className='text-gray-500  hover:text-black '>View all</button>
        </div>
        
        <div className='flex  mx-10 lg:w-[60%] h-20 pb-4 mb-4 bg-gray-100 rounded-2xl'>
             < FaDumbbell  className='text-3xl mx-4 my-3 bg-gray-300  p-1.5 rounded-2xl'/> 
             <FaArrowDown/>
            <div className='p-3 mx-10'>
                <h4 className='mx-2'>Lower body pressure</h4>
                <div className='flex pt-2  text-gray-500 text-sm'>
                 <p className='mx-2'> Yesterday</p>
                 <p className='mx-2' > . 42 Mins  </p>
                 <p className='mx-2'> .  320 Kcal</p>
                </div>
            
        
            </div>
        </div>

         <div className='flex  mx-10 lg:w-[60%] h-20 pb-4 mb-4 bg-gray-100 rounded-2xl'>
             <FaPause className='text-3xl  mx-4 my-3 bg-gray-300  p-1.5 rounded-2xl'/> 
            <div className='p-3 mx-10'>
                <h4 className='mx-2'> AMRAP Conditioning</h4>
                <div className='flex pt-2  text-gray-500 text-sm'>
                 <p className='mx-2'>  2 days ago</p>
                 <p className='mx-2' > . 25 mins  </p>
                 <p className='mx-2'> .  410 Kcal</p>
                </div>
            
        
            </div>
        </div>

         <div className='flex  mx-10 lg:w-[60%] h-20 pb-4 mb-4 bg-gray-100 rounded-2xl'>
             < FaHeart className='text-3xl mx-4 my-3 text-g bg-gray-300  p-1.5 rounded-2xl'/> 
            <div className='p-3 mx-10'>
                <h4 className='mx-2'>Zone 2 Recovery Run</h4>
                <div className='flex pt-2  text-gray-500 text-sm'>
                 <p className='mx-2'> 3 days ago</p>
                 <p className='mx-2' > . 48 mins   </p>
                 <p className='mx-2'> .  380 Kcal</p>
                </div>
            
        
            </div>
        </div>

        <div className='grid grid-cols-2 p-3  '>
          <img src="/images/main-img-1.jpg" alt="gym image" className= ' opacity-80 hover:opacity-100 hover:scale-x-102' />
          <img src="/images/main-img-2.jpg" alt="gym image" className= 'opacity-80 hover:opacity-100 hover:scale-x-102' />
        </div>
        </div>
  )
}

export default Main