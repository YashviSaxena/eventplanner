import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";

const DetailBox = () => {
  return (
    <div>
            <ul  id="detailbox" className='flex justify-center text-center items-center absolute top-96 bg-white py-3 px-6 rounded-md'>
                <li className='mr-4 cursor-pointer'>Name</li>
                <li className='mr-4 cursor-pointer'>Phone</li>
                <li className='mr-4 cursor-pointer'>Occassion <MdKeyboardArrowDown className="inline-block"/> </li>
                <li className='bg-black cursor-pointer text-white font-medium px-7 py-3 text-xs rounded-md'>Submit</li>
            </ul>
        </div>
  )
}

export default DetailBox