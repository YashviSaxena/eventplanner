import React from 'react'
import Hero from '../shared/Hero'
import Portfolio from '../miniComponents/Portfolio'


const Home = () => {
  return (
    <div className='overflow-hidden'>
       <Hero/>
       <Portfolio/>
    </div>
  )
}

export default Home