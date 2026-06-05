import React from 'react'
import boxdata from "./data/boxData"
import gymInfo from './data/boxData'
import { FaLightbulb,  } from 'react-icons/fa'
const Box = () => {
  return (
    <div>
        <div className=' mb-2 p-4 grid lg:grid-cols-4'>
            {gymInfo.map((boxData) => (
              <div key={boxData.id} className='w-[300px] h-[150px] bg-gray-200 rounded-2xl'>
            <div className='flex justify-between'>
            <p><boxData.icon/></p>
            <h4>{boxData.title}</h4>  
           </div>           
           <div>
            <h4>{boxData.value}</h4>
            <p>{boxData.subtitle}</p>
             <p>{boxData.progress}</p>
           </div>
            
          </div>  
            ) )}
          
        </div>
    </div>
  )
}

export default Box