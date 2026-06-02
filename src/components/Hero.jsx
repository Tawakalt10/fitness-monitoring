import React from 'react'
import ActivityChart from './Charts/ActivityChart'
import CaloriesChart from './Charts/BarChart'
import WeightChart from './Charts/LineChart'

const Hero = () => {
  return (
    <div>
    <h4 className="text-2xl font-medium mt-8 mx-10"> Good morning, Alex</h4>
    <p className='mx-10 text-gray-600  mt-2'>You are 340 calories away from your daily goal.Keep
        <br /> the momentum from yesterday's heavy lifting session.
    </p>

    <ActivityChart />

    <div className='charts-container grid grid-cols-2 p-2'  > 
    <CaloriesChart />
    <WeightChart />
    </div>
     
    </div>
  )
}

export default Hero