"use client";

import Lottie from "lottie-react";
import { AiOutlineSearch } from "react-icons/ai";
import heroAnimationJson from "../../../public/lotties/hero-animation.json";
import backgroundImg from "../../../public/assets/img/herobg.jpg";

const Hero = () => {
  return (
    <div
      className="hero-container bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImg.src})` }}
    >
      <div className="max-w-7xl py-[50px] lg:py-[50px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-between h-full px-4">
        {/* LEFT  */}
        <div className="flex flex-col gap-[24px]">
          <p className="font-medium text-center sm:text-start">
            <span className="bg-[#F52366] rounded-full text-white rounded-4xl p-1 w-[65px] px-3 mr-2">
              New
            </span>
            We ve raised $6million!
          </p>

          <h2 className="text-[#1A0B49] text-center sm:text-start font-semibold text-[35px] sm:text-[45px] lg:text-[65px] leading-[50px] lg:leading-[72px]">
            Elevating brand <br /> strategy with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f72fa] to-[#37B7FC]">
              BuilderX Products
            </span>
          </h2>

          <p className="text-[#6B7280] text-center sm:text-start font-medium text-[18px]">
            Download free & premium PHP Scripts, WordPress Theme, flutter app,
            UI, UX design HTML, bootstrap template, & graphic assets for your
            project.
          </p>

          <div className="flex items-center mx-auto sm:mx-0 p-1 bg-white rounded-[8px] shadow-md overflow-hidden w-full max-w-lg">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="flex-grow px-3 sm:px-4 py-3 text-sm sm:text-base text-gray-600 placeholder-gray-400 focus:outline-none"
            />

            <button className="flex items-center gap-2 bg-[#4f72fa] hover:bg-opacity-90 text-white px-3 py-3 sm:px-5 sm:py-4 rounded-[6px] transition-all duration-200">
              <AiOutlineSearch className="text-lg sm:text-xl" />
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>
        </div>

        {/* RIGHT : just single image */}
        <div className="flex items-center justify-center mt-20 lg:mt-0">
          <Lottie
            animationData={heroAnimationJson}
            loop={true}
            className="max-w-[600px] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
