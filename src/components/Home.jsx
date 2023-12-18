import React from 'react'
import Hero from '../shared/Hero'
import Portfolio from '../miniComponents/Portfolio'
import Serve from '../miniComponents/Serve'
import Testimonials from './Testimonials'
import Stats from './Stats'
import Footer from '../shared/Footer'



const Home = () => {
  return (
    <div className='overflow-hidden'>
       <Hero/>
       <Portfolio/>
       <Serve/>
       <Testimonials/>
       <Stats/>
       <Footer/>
    </div>
  )
}

export default Home