import React from 'react';

function HeroSection({ isLightMode }) {
  return (
    <div className={`h-screen flex items-center justify-center text-center ${isLightMode ? "bg-white text-teal-800" : "bg-black text-white"}`}>
      <h1 className="text-5xl font-bold animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-800">
        DEVCONNECT
        <br />
        <h2 className='text-2xl font-sans text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-700'>Welcome Aboard</h2>
      </h1>
    </div>
  );
}

export default HeroSection;
