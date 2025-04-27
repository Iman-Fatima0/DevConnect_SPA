import React from 'react';

function AboutUs({ isLightMode }) {
  return (
    <section className="py-20 px-6 flex flex-col items-center justify-center relative">
      <div className={`bg-white/10 backdrop-blur-md border border-teal-400/30 rounded-2xl p-10 max-w-4xl text-center shadow-lg ${isLightMode ? "bg-teal-100" : "bg-gray-900"}`}>
        <p className="text-lg text-gray-300 leading-relaxed">
          We are a cutting-edge software company focused on developing world-class solutions for businesses globally. Our passion for innovation drives us to build high-performance software that truly makes a difference.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
