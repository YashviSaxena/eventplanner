import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";

const detailBox = () => {
  return (
    <div>
            <ul className='flex justify-center text-center max-w-sm items-center absolute top-96 bg-white p-2 rounded-md'>
                <li className='mr-4'>Name</li>
                <li className='mr-4'>Phone</li>
                <li className='mr-4'>Occassion <MdKeyboardArrowDown className="inline-block"/> </li>
                <li className='bg-black text-white font-medium px-5 py-3 text-xs rounded-md'>Submit</li>
            </ul>
        </div>
  )
}

export default detailBox