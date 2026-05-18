import React from 'react'
import ActivityChart from './Charts/ActivityChart'

const Hero = () => {
  return (
    <div>
    <h4>Good morning, Alex</h4>
    <p>You are 340 calories away from your daily goal.Keep
        <br /> the momentum from yesterday's heavy lifting session.
    </p>

    <ActivityChart />
    </div>
  )
}

export default Hero