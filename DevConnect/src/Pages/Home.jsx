import React from "react";
import AboutUs from "../Components/AboutUs";
import HeroSection from "../Components/HeroSection";

const Home = ({ isLightMode }) => {
  return (
    <div className={`relative min-h-screen ${isLightMode ? "bg-gradient-to-b from-teal-100 via-teal-50 to-teal-200 text-teal-800" : "bg-gradient-to-b from-black via-gray-900 to-black text-white"} overflow-hidden`}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
        <div className="w-[400px] h-[400px] rounded-full border-2 border-teal-400 opacity-30 animate-ping"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full border-2 border-teal-400 opacity-20 animate-pulse"></div>
        <div className="absolute w-[800px] h-[800px] rounded-full border-2 border-teal-400 opacity-10 animate-pulse"></div>
      </div>
      <HeroSection isLightMode={isLightMode} />
      <AboutUs isLightMode={isLightMode} />
    </div>
  );
};

export default Home;
