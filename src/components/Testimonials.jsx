import React from 'react'
import { IoStar } from "react-icons/io5";
import DoubleList from '../miniComponents/DoubleList';

const Testimonials = () => {

  return (
    <div>
    <div className='flex'>
      <div className='ml-20 mt-10 mb-10'>
          <h3 className='mb-2'>What They Say</h3>
          <p className='text-sm'>Testimonials</p>
          <iframe
        width="500"
        height="300"
        src="https://youtu.be/A859CeMM31U?si=mgRb4J0rma2pU0WC"
        title="YouTube Video Player"
        allowFullScreen
        className='bg-gray-300'
      ></iframe>
      <p className='mt-10 text-sm' style={{width:"500px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi iusto cupiditate, exercitationem ad eos quod! Qui rem, minus labore aperiam quaerat harum voluptatum, tenetur a dolorem debitis laboriosam fugiat veniam!</p>
      <h1 className='mt-5 font-bold text-xl'>Aman Goyal</h1>
      <div className='flex text-yellow-500'>
        <IoStar/>
        <IoStar/>
        <IoStar/>
        <IoStar/>
        <IoStar/>
      </div>
      <p className='text-xs p-2 mt-10 bg-blue-950 text-white w-48 text-center'>Read More Testimonials</p>
      </div>
      <DoubleList/>
    
    </div>
      
    </div>
  )
}

export default Testimonials