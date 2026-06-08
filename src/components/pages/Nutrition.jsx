import React from 'react'
import nutritionData from "../data/nutritionData.js"
import foodInfo from '../data/nutritionData.js'
// import gymInfo from './data/boxData'


const Nutrition = () => {
  return (
    <div>
        <div className='grid lg:grid-cols-2 md:grid-cols-1'>
  <div className='w-[80%]  ml-4 mr-4 h-60 mb-4 bg-gray-200  p-1.5 rounded-2xl'>
         <div className=' mt-2 mx-4 flex justify-between'>
         <h4 className=' uppercase text-sm text-gray-500 font-bold'> Nutrition today</h4>
         <p className='text-gray-500  text-sm font-bold'>1,840 / 2,400 kcal</p>
         </div>
     <div className='  flex justify-between  mx-3'>
       
        {foodInfo.foodClasses.map((nutritionData) => (
            
       
        <div key={nutritionData.id}>
            <div className='flex  mt-4 '>
             <h4 className='text-gray-500 font-bold'>{nutritionData.title}</h4>
            <p className='text-gray-400 mx-10 my-1 text-[11px]'>{nutritionData.percentage}</p> 
           
            </div>

            <div className='flex'>
                <h4>{nutritionData.value1}</h4>
                <h4>{nutritionData.value2}</h4>
            </div>
          <p className=' my-4 w-[70%] h-1.5 bg-black rounded-2xl'></p>
        </div>

           ))}
     </div>

   </div>

   <div className=' w-[20%] h-40 bg-gray-200'>

   </div>

   </div>
    </div>
  )
}

export default Nutrition