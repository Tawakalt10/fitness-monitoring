import React from 'react'
import fullDetails from '../data/personalDetailsData'
import { FaTrophy } from "react-icons/fa";
import {FaArrowTrendUp } from "react-icons/fa6";


const PersonalDetails = () => {

const bodyComposition = fullDetails.bodyComp.find((item) => item.id === 5);

  return (
    <div>
        <div className='grid lg:grid-cols-2 md:grid-cols-1'>
        
        <div>

           
        <div className='flex justify-between mt-5 cursor-pointer'>
            <h4 className='mx-5 font-medium'>Personal Records</h4>
            <p className='mx-16 text-gray-400 font-medium'>History</p>
        </div>
        <div>
            <div className='grid grid-cols-2  mt-6'  > {fullDetails.details.map((personalDetailsData) => (

                <div key={personalDetailsData.id} className=' lg:w-[90%] rounded-3xl mx-5 h-35  bg-gray-100 mb-4'> 


                   <div  className='flex justify-between mx-4 mt-3 text-gray-600 '>
                    <h4>{personalDetailsData.title}</h4>
                    <p className='text-black'><personalDetailsData.icon /></p>                     
                   </div>

                   <div className='mx-4 flex'>
                  <h4 className='font-medium mt-1 text-[18px]'>{personalDetailsData.value1}</h4>
                  <h4 className='text-gray-500 my-3 text-sm mx-1'>{personalDetailsData.unit}</h4>
                   </div>
                   <div className='mx-4 flex text-[11px]'>
                    <p className='  my-1 mr-1'> <personalDetailsData.icon2 /></p>
                    <p className='font-medium '>{personalDetailsData.value2}</p>
                   </div>
                </div>
            ))}

            </div>
        </div>
        </div>

        
    <div>    

        <div className='flex justify-between mt-5 cursor-pointer'>
            <h4 className='mx-5 font-medium'>Body Composition</h4>
            <p className='mx-16 text-gray-400 font-medium'>Entry</p>
           </div>
        <div className='lg:w-[80%] h-[18rem]  rounded-3xl mt-4 lg:mx-6 bg-gray-100'>
            <div className='flex justify-between'> 
            

           {bodyComposition && (
            <div> 
                <div className='mx-6  flex'>
                  <h4 className='font-medium mt-3 text-[35px]'>{bodyComposition.value1}</h4>
                  <h4 className='text-gray-500 mt-10  text-sm mx-1'>{bodyComposition.unit}</h4>
                   </div>
                   <div className='mx-6 mb-5 flex text-[11px]'>
                     <p className='  my-1 mr-1'> <bodyComposition.icon2 /></p> 
                    <p className='font-medium '>{bodyComposition.value2}</p>
                   </div>
            </div>
           )}

           <div>
            <h4 className='text-gray-400 font-medium mt-10  text-sm mx-4'>Body Fat</h4>
            <p className='mx-4 font-medium'>14.2%</p>
           </div>
            </div>
        </div>
        
        </div>
        </div>
           

        <div>

            <div className='flex justify-between mt-5 cursor-pointer'>
            <h4 className='mx-5 font-medium'>Active Goals</h4>
            <p className='mx-16 text-gray-400 font-medium'>Manage</p>
        </div>
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-1'> {fullDetails.activeGoals.map((personalDetailsData) => (
                <div key={personalDetailsData.id} className='  rounded-3xl  w-[300px] h-[15rem] bg-gray-100'>

                    <h4>{personalDetailsData.title}</h4>
                
                </div>
            ))}

            </div>

        </div>
           </div>
       
    </div>
  )
}

export default PersonalDetails