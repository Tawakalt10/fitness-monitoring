import React from 'react'
import nutritionData from "../data/nutritionData.js"
import foodInfo from '../data/nutritionData.js'
import { FaPlus } from 'react-icons/fa'
// import gymInfo from './data/boxData'


const Nutrition = () => {
  return (
    <div>
        <div className='grid lg:grid-cols-2  md:grid-cols-1'>
  <div className='lg:w-[800px]  ml-4 mr-4 h-70 mb-4 bg-gray-200  p-1.5 rounded-2xl'>
         <div className=' mt-2 mx-4 flex justify-between'>
         <h4 className=' uppercase text-sm text-gray-500 font-bold'> Nutrition today</h4>
         <p className='text-gray-500  text-sm font-bold'>1,840 / 2,400 kcal</p>
         </div>
     <div className='  flex justify-between pl-4 '>
       
        {foodInfo.foodClasses.map((nutritionData) => (
            
       
        <div key={nutritionData.id}>
            <div className='flex  mt-4 '>
             <h4 className='text-gray-500 font-bold'>{nutritionData.title}</h4>
            <p className='text-gray-400 mx-10 my-1 text-[11px]'>{nutritionData.percentage}</p> 
           
            </div>

            <div className='flex mt-2'>
                <h4 className=''>{nutritionData.value1}</h4>
                <h4 className='my-2 text-[12px] text-gray-500 '>{nutritionData.value2}</h4>
            </div>
          <p className=' my-4 w-[70%] h-1.5 bg-black rounded-2xl'></p>
        </div>

           ))}
     </div>
    
    <div  className='flex justify-between mt-5   '>
         {foodInfo.foodType.map((nutritionData) => (

            <div key={nutritionData.id}  >
            <div className=' mx-8'>
            <p className='text-[11px]  text-gray-500 font-bold'>{nutritionData.time}</p>
            <h4 className='text-[14px] font-medium text-black'>{nutritionData.food}</h4>
            <p className='  text-[12px] text-gray-400 '>{nutritionData.energy}</p>

            </div>
            
            </div>

         ))}

    </div>
   </div>

   <div className=' lg:w-[250px]  rounded-2xl lg:mx-70 h-[30] bg-gray-200 '>
      <div className=' mt-3 flex justify-between text-sm text-gray-500 uppercase'>
        <h4 className='mx-3'>Upcoming</h4>
        <p className=' mx-3'> <FaPlus /></p>
      </div>

      <div className=''>
        <div className='flex p-3'>
            <h4 className='bg-lime-300 rounded-[40%] w-8 pl-2   pt-1.5 pb-1 font-medium text-[12px]'>Tue <br /> 04</h4>
            <div>
                <h4 className='font- texmedium text-sm mx-3'>Upper Rush</h4>
                <p className='mx-3 text-gray-400 text-sm'>06:30 . 55 min</p>
            </div>
        </div>
      </div>

       <div className=''>
        <div className='flex p-3'>
            <h4 className='bg-gray-300 rounded-[40%] w-8 pl-2   pt-1.5 pb-1 font-medium text-[12px] up'>Wed <br /> 04</h4>
            <div>
                <h4 className='font-medium text-sm mx-3'>Lower pull</h4>
                <p className='mx-3 text-gray-400 text-sm'>06:30 . 55 min</p>
            </div>
        </div>
      </div>

       <div className=''>
        <div className='flex p-3'>
            <h4 className='bg-gray-300 rounded-[40%] w-8 pl-2    pt-1.5 pb-1 font-medium text-[12px]'>Thu <br /> 04</h4>
            <div>
                <h4 className='font-medium text-sm mx-3'>Tempo Run</h4>
                <p className='mx-3 text-gray-400 text-sm'>06:30 . 55 min</p>
            </div>
        </div>
      </div>

       <div className=''>
        <div className='flex p-3'>
            <h4 className='bg-gray-300 rounded-[40%] w-8 pl-2   pt-1.5 pb-1 font-medium text-[12px]'>Fri <br /> 04</h4>
            <div>
                <h4 className='font-medium text-sm mx-3'>Mobility</h4>
                <p className='mx-3 text-gray-400 text-sm'>06:30 . 55 min</p>
            </div>
        </div>
      </div>
   </div>

   </div>
    </div>
  )
}

export default Nutrition