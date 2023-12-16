import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from './shared/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';  // Import the Contact component

const App = () => {
  return (
    <Router>
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='/services' element={<Services />} />
         <Route path='/testimonials' element={<Testimonials />} />
         <Route path='/gallery' element={<Gallery />} />
         <Route path='/contact' element={<Contact />} />
       </Routes>
    </Router>
  );
};

export default App;
