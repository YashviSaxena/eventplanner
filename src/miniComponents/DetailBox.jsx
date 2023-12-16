import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

const DetailBox = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div>
      <ul
        id="detailbox"
        className='flex justify-center text-center items-center absolute top-96 bg-white py-3 px-6 rounded-md'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <li className='mr-4 cursor-pointer'>Name</li>
        <li className='mr-4 cursor-pointer'>Phone</li>
        <li className='mr-4 cursor-pointer relative'>
          Occasion <MdKeyboardArrowDown className="inline-block" />

          {isDropdownOpen && (
            <div className="absolute top-full left-0 bg-gray-200 shadow-md p-2 mt-5 ">
              {/* Your dropdown menu content goes here */}
              <ul className='w-48'>
                <li className=' hover:bg-gray-300 p-1'>Engagement</li>
                <li className=' hover:bg-gray-300 p-1'>Wedding</li>
                <li className=' hover:bg-gray-300 p-1'>Coorporate Event</li>
                <li className=' hover:bg-gray-300 p-1'>Social Event</li>
                <li className=' hover:bg-gray-300 p-1'>Birthday Party</li>
              </ul>
            </div>
          )}
        </li>
        <li className='bg-black cursor-pointer text-white font-medium px-7 py-3 text-xs rounded-md'>Submit</li>
      </ul>
    </div>
  );
};

export default DetailBox;
