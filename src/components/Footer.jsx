import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='mt-25'>
        <p className=' mx-6 lg:mx-3 w-[40%]  my-4 w-[100%] h-[2px]  bg-gray-300 rounded-2xl'></p>
        <div className='flex justify-between  cursor-pointer mb-15 '>
            <div className='mt-3'>
                <h4 className='font-medium text-xl mx-4 '>Kinetic</h4>
                 <p>Engineered for precision performance tracking.</p>
            </div>

            <ul className='flex  text-gray-500 text-[13px] mt-3'>

                <li className='mr-4  hover:text-gray-950'><a href="#">Privacy</a></li>
                <li className='mr-4 hover:text-gray-950'><a href="#">Terms</a></li>
                <li className='mr-4 hover:text-gray-950'> <a href="#">Connect Health</a></li>
                
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Footer