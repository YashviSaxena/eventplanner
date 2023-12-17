
import React from 'react'
import cheers from '../assets/cheers.jpg'
import Card from './Card'


const Portfolio = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen relative z-10 '>

        <div className='flex flex-col justify-center items-center mb-5'>
        <h1 className='text-3xl font-semibold'>We Arrange </h1>
        <img src={cheers} alt="" className="w-10 h-10 "/>
        </div>
      
        
        <div className='flex justify-center items-center'>
        <div className=" box w-64 h-64 border-4 border-orange-200 absolute -z-10 left-24 top-32"></div>
    
        <Card
        imageSrc="https://i.pinimg.com/564x/2a/56/ae/2a56aec4f5fa413f5b163878d43131f9.jpg"
        title="Birthdays"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vitae, dignissimos voluptatibus voluptatum ab"
      />
        <Card
        imageSrc="https://i.pinimg.com/564x/03/ea/5a/03ea5acdd617013b9f94ce94cd3c05a0.jpg"
        title="Weddings"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vitae, dignissimos voluptatibus voluptatum ab"
      />
        <Card
        imageSrc="https://i.pinimg.com/564x/ea/0e/38/ea0e388381e83b085e2ce416436a0414.jpg"
        title="Coorporate Events"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vitae, dignissimos voluptatibus voluptatum ab"
      />
        <Card
        imageSrc="https://i.pinimg.com/564x/02/23/ef/0223efc37fc26b7d78265ccce7cdf9fa.jpg"
        title="Social Events"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vitae, dignissimos voluptatibus voluptatum ab"
      />
    </div>
    <div className=" box w-64 h-64 border-4 border-orange-200 absolute -z-10 right-28 bottom-7"></div>
   
    </div>

  )
}

export default Portfolio