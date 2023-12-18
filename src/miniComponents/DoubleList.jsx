import {useState, useEffect} from 'react'
import image from '../assets/birthday.jpg'

const DoubleList = () => {

  return (
    <div className=' w-screen'>
        <div className='flex justify-end mr-20 overflow-hidden'>
        <div
          className='flex transition-transform ease-in-out'
          style={{ transform: `translateY(${listsContainerTransform}%)` }}
        >
            <ul className='mr-2'>
                <li className='w-52 bg-gray-200 p-3 rounded-md mb-2'>
                    <div className='flex justify-start items-center mb-3 '>
                    <img src={image} alt="" className='w-10 h-10 rounded-full mr-2' />
                    <p className='text-xs'>Yashvi Saxena</p>
                    </div>
                    <p className='text-sm mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus dolorum incidunt consequstiae doloribus in.</p>
                    <p className='text-xs'>Date:20 Nov,23</p>
                </li>

                <li className='w-52 bg-gray-200 p-3 rounded-md mb-2'>
                    <div className='flex justify-start items-center mb-3 '>
                    <img src={image} alt="" className='w-10 h-10 rounded-full mr-2' />
                    <p className='text-xs'>Yashvi Saxena</p>
                    </div>
                    <p className='text-sm mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus dolorum incidunt consequstiae doloribus in.</p>
                    <p className='text-xs'>Date:20 Nov,23</p>
                </li>

                <li className='w-52 bg-gray-200 p-3 rounded-md mb-2'>
                    <div className='flex justify-start items-center mb-3 '>
                    <img src={image} alt="" className='w-10 h-10 rounded-full mr-2' />
                    <p className='text-xs'>Yashvi Saxena</p>
                    </div>
                    <p className='text-sm mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus dolorum incidunt consequstiae doloribus in.</p>
                    <p className='text-xs'>Date:20 Nov,23</p>
                </li>
                
            </ul>

            {/* second */}

            <ul>
                <li className='w-52 bg-gray-200 p-3 rounded-md mb-2'>
                    <div className='flex justify-start items-center mb-3 '>
                    <img src={image} alt="" className='w-10 h-10 rounded-full mr-2' />
                    <p className='text-xs'>Yashvi Saxena</p>
                    </div>
                    <p className='text-sm mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus dolorum incidunt consequstiae doloribus in.</p>
                    <p className='text-xs'>Date:20 Nov,23</p>
                </li>

                <li className='w-52 bg-gray-200 p-3 rounded-md mb-2'>
                    <div className='flex justify-start items-center mb-3 '>
                    <img src={image} alt="" className='w-10 h-10 rounded-full mr-2' />
                    <p className='text-xs'>Yashvi Saxena</p>
                    </div>
                    <p className='text-sm mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus dolorum incidunt consequstiae doloribus in.</p>
                    <p className='text-xs'>Date:20 Nov,23</p>
                </li>

                <li className='w-52 bg-gray-200 p-3 rounded-md mb-2'>
                    <div className='flex justify-start items-center mb-3 '>
                    <img src={image} alt="" className='w-10 h-10 rounded-full mr-2' />
                    <p className='text-xs'>Yashvi Saxena</p>
                    </div>
                    <p className='text-sm mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus dolorum incidunt consequstiae doloribus in.</p>
                    <p className='text-xs'>Date:20 Nov,23</p>
                </li>
                
            </ul>
        </div>
        </div>
    </div>
  )
}

export default DoubleList


