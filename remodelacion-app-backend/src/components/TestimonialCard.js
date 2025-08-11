import React from 'react';

const TestimonialCard = ({
  quote = "¡Esta compañía transformó mi hogar! La calidad del trabajo y la atención al detalle fueron excepcionales. ¡Los recomiendo al 💯!",
  author = "Cliente Feliz",
  location = "Área Local"
}) => {
  return (
    <div className="relative bg-gradient-to-br from-green-300 to-blue-400 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 hover:-rotate-2 border-4 border-white group overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-0 transition-opacity duration-300"></div>
      <p className="text-gray-800 text-xl italic mb-6 drop-shadow-sm">"{quote}"</p>
      <div className="font-extrabold text-gray-900 text-2xl mb-1 drop-shadow-md">{author}</div>
      <div className="text-gray-700 text-lg">{location}</div>
      <span className="absolute top-3 left-3 text-4xl opacity-70 group-hover:opacity-100 transition-opacity duration-300">💖</span>
    </div>
  );
};

export default TestimonialCard;