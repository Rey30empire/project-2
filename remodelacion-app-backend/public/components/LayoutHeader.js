import React from 'react';

const LayoutHeader = ({ title = "TopNotch Remodeling LLC", navItems = [] }) => {
  return (
    <header className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center shadow-2xl relative z-10">
      <div className="text-3xl font-extrabold tracking-wider drop-shadow-lg">
        {title} ✨
      </div>
      <nav className="hidden md:flex space-x-8">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            onClick={item.onClick}
            className="relative text-xl font-bold px-4 py-2 rounded-full transition-all duration-300 hover:bg-white hover:text-purple-600 transform hover:scale-105 shadow-md group"
          >
            {item.name}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        ))}
      </nav>
      <button className="md:hidden p-2 rounded-full text-white bg-purple-700 hover:bg-purple-800 transition-colors shadow-lg">
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </header>
  );
};

export default LayoutHeader;