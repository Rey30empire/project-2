import React from 'react';

const HeroSection = ({
  heading = "¡Transformamos tu Hogar en un Sueño Hecho Realidad! 🏡✨",
  subheading = "Servicios de handyman expertos, instalación de duchas y tinas en un solo día. ¡Magia en tu espacio!",
  buttonText = "¡Pide tu Presupuesto Gratis! 🚀"
}) => {
  return (
    <section className="relative bg-gradient-to-br from-blue-500 to-teal-400 py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden shadow-inner-xl">
      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8 drop-shadow-2xl animate-bounce-in">
          {heading}
        </h1>
        <p className="text-xl sm:text-2xl text-white mb-12 opacity-90 animate-fade-in-up delay-300">
          {subheading}
        </p>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-bold text-gray-900 rounded-full group bg-gradient-to-br from-lime-400 to-green-500 group-hover:from-lime-400 group-hover:to-green-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 transform transition-all duration-300 hover:scale-110 shadow-2xl">
          <span className="relative px-8 py-4 transition-all ease-out duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
            {buttonText}
          </span>
        </button>
      </div>
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 L 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-blue-300" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;