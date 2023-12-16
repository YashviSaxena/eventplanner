import React from "react";
import Navbar from "./Navbar";
import { MdArrowOutward } from "react-icons/md";
import DetailBox from "../miniComponents/detailBox";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://i.pinimg.com/564x/08/f1/5d/08f15dea4cf9016b1d8406fb8295c9ae.jpg")',
      }}
    >
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <Navbar />
      <h1 className="text-5xl font-semibold absolute text-white top-48 left-28 right-28 text-center">
        We create <span className="text-orange-400">EVENTS</span> full of <span className="text-orange-400">happiness</span>
      </h1>
      <h2 className="text-3xl absolute text-white top-64 left-28 right-28 text-center">And we do <span className="text-orange-300">THAT</span> pretty well.</h2>
      <h3 className="text-l max-w-3xl absolute text-white top-72 mt-4 left-80 right-80 text-center">
      Book us for offline events: marriages, engagements, parties, get-togethers, you name it. We've got you covered.
      <span className="text-orange-300 underline" >
        Check our past events<MdArrowOutward className="inline-block"/>
      </span>
    </h3>
    <DetailBox/>

    </div>
  );
};

export default Hero;
