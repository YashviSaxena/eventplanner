import React from 'react'
import pimg1 from '../assets/img01.jpg'
import pimg2 from '../assets/img02.jpg'
import pimg3 from '../assets/img03.jpg'
import pimg4 from '../assets/img04.jpg'
import pimg5 from '../assets/img05.jpg'

const Portfolio = () => {
  return (
    <div className='w-screen h-screen'>
        <h1 className='text-center mt-10 text-5xl font-medium'>Porfolio</h1>
    <div className='flex justify-center items-center mt-10'>
        <div><img src={pimg1} alt="" className='h-56 w-56 rounded-full absolute -translate-x-80 z-0 '/></div>
        <div><img src={pimg2} alt="" className='h-64 w-64 rounded-full absolute -translate-x-40 z-10 '/></div>
        <div><img src={pimg3} alt="" className='h-72 w-72 rounded-full relative z-20'/></div>
        <div><img src={pimg4} alt="" className='h-64 w-64 rounded-full  absolute -translate-x-40 z-10'/></div>
        <div><img src={pimg5} alt="" className='h-56 w-56 rounded-full  absolute translate-x-12 z-0'/></div>
    </div>
    </div>
  )
}

export default Portfolio