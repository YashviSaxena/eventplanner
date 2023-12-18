import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger';

const Stats = () => {

   const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
        <div className='bg-black w-full h-72 flex justify-around items-center'>
            <div className='bg-opacity-20 backdrop-filter backdrop-blur-lg p-8 rounded-lg bg-orange-300 w-48'>
                <h1 className='text-center'>
                    {counterOn &&  <CountUp start={0} end={100} duration={2} delay={0} className='text-white text-3xl font-bolds'/>}
                    <span className='text-3xl text-bold text-white'>+</span>
                    <p className='text-center text-white text-sm'>Events Entertained</p>
                </h1>
            </div>
            <div className='bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-lg bg-orange-300 w-48'>
                 <h1 className='text-center'>
                 {counterOn &&  <CountUp start={0} end={100} duration={2} delay={0} className='text-white text-3xl font-bold'/>}
                 <span className='text-3xl text-bold text-white'>+</span>
                 <p className='text-center text-white text-sm'>Events Entertained</p>
                </h1>
            </div>
            <div className='bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-lg bg-orange-300 w-48'>
                <h1 className='text-center'>
                {counterOn &&  <CountUp start={0} end={100} duration={2} delay={0} className='text-white text-3xl font-bold'/>}
                <span className='text-3xl text-bold text-white'>+</span>
                <p className='text-center text-white text-sm'>Events Entertained</p>
                </h1>
            </div>
            <div className='bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-lg bg-orange-300 w-48'>
                <h1 className='text-center'>
                {counterOn &&  <CountUp start={0} end={100} duration={2} delay={0} className='text-white text-3xl font-bold'/>}
                    <span className='text-3xl text-bold text-white'>+</span>
                    <p className='text-center text-white text-sm'>Events Entertained</p>
                </h1>
            </div>
        </div>
    </ScrollTrigger>
    
  )
}

export default Stats