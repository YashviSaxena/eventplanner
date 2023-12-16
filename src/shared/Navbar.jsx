import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-around items-center h-16 text-cente text-sm absolute top-0 left-0 right-0 bg-transparent p-4 text-white'>
      <ul>
        <li>
          <Link to="/">Logo</Link>
        </li>
      </ul>
      <ul className='flex items-center'>
        <li className='mr-5'>
          <Link to="/" className='text-orange-300'>Home</Link>
        </li>
        <li className='mr-5'>
          <Link to="/about">About</Link>
        </li>
        <li className='mr-5'>
          <Link to="/services">Services</Link>
        </li>
        <li className='mr-5'>
          <Link to="/testimonials">Testimonials</Link>
        </li>
        <li className='mr-5'>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/whatsapp" className='bg-white rounded-full text-black px-6 py-2 text-sm font-semibold'>Let's Chat</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
