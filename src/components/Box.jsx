import React from 'react'
import boxdata from "./data/boxData"
import gymInfo from './data/boxData'
import { FaLightbulb,  } from 'react-icons/fa'
import Nutrition from './pages/Nutrition'
import PersonalDetails from './pages/PersonalDetails'
const Box = () => {
  return (
    <div>
        <div className=' md:pl-8 mb-2 p-4 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
            {gymInfo.map((boxData) => (
              <div key={boxData.id} className='w-[300px] h-[150px] mb-4   bg-gray-100 rounded-2xl hover:scale-97 '>
            <div className='flex justify-between mt-4'>
            <p className='mx-6 ext-3xl mx-4     bg-gray-300  p-1.5 rounded-2xl'><boxData.icon/></p>
            <h4 className='mx-8 text-[10px]  text-gray-500  uppercase'>{boxData.title}</h4>  
           </div>           
           <div className='mx-6'>
            <h4 className='font-semibold  mt-4'>{boxData.value}</h4>
            <p className='text-[13px] text-gray-600 '>{boxData.subtitle}</p>
             {/* <p>{boxData.progress}</p> */}
            <p className=' my-4 w-[70%] h-1.5 bg-lime-400 rounded-2xl'></p>
           </div>
             
          </div>  
            ) )}
          
        </div>

        <Nutrition />
        <PersonalDetails />
    </div>
  )
}

export default Box