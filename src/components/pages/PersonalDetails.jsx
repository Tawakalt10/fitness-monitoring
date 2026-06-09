import React from 'react'
import details from '../data/personalDetailsData'
import { FaTrophy } from "react-icons/fa";
import {FaArrowTrendUp } from "react-icons/fa6";


const PersonalDetails = () => {
  return (
    <div>
        <div className='flex justify-between mt-5 cursor-pointer'>
            <h4 className='mx-5 font-medium'>Personal Records</h4>
            <p className='mx-16 text-gray-400 font-medium'>History</p>
        </div>
        <div>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 mt-6'> {details.map((personalDetailsData) => (

                <div key={personalDetailsData.id} className=' lg:w-[85%] rounded-4xl mx-5 h-35  bg-gray-200 mb-4'> 


                   <div  className='flex justify-between'>
                    <h4>{personalDetailsData.title}</h4>
                    <p><personalDetailsData.icon /></p>                     
                   </div>

                   <div>
                  <h4>{personalDetailsData.value1}</h4>
                  <h4>{personalDetailsData.unit}</h4>
                   </div>
                   <div>
                    <p> <personalDetailsData.icon2 /></p>
                    <p>{personalDetailsData.value2}</p>
                   </div>
                </div>
            ))}

            </div>
        </div>
    </div>
  )
}

export default PersonalDetails