import React from 'react'
const Card = ({ imageSrc, title, description }) => {
  return (
    <div className='w-64 h-96 bg-orange-100 flex flex-col justify-center items-center mt-10 mr- ml-2 rounded-lg'>
      <img src={imageSrc} alt="" className='w-72 h-60 object-cover p-2 '/>
      <h1 className='mt-3 mb-2 font-bold'>{title}</h1>
      <p className='w-52 text-center text-sm mb-5 font-medium'>{description}</p>
    </div>
  );
};

export default Card



// https://in.pinterest.com/pin/638174209680238168/