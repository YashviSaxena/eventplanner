import React from 'react'
import Hero from '../shared/Hero'
import Portfolio from '../miniComponents/Portfolio'
import Serve from '../miniComponents/Serve'
import Testimonials from './Testimonials'



const Home = () => {
  return (
    <div className='overflow-hidden'>
       <Hero/>
       <Portfolio/>
       <Serve/>
       <Testimonials/>
    </div>
  )
}

export default Home