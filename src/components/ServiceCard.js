import React from 'react';

const ServiceCard = ({
  icon = (
    <svg className="w-14 h-14 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 10h.01M15 10h.01M9 14h.01M15 14h.01M19 18h.01"></path>
    </svg>
  ),
  title = "Servicio Increíble",
  description = "Una descripción que te dejará con la boca abierta sobre lo que podemos hacer por ti. ¡Prepárate para el cambio!"
}) => {
  return (
    <div className="relative bg-gradient-to-br from-yellow-300 to-orange-400 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 hover:rotate-2 border-4 border-white group overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-0 transition-opacity duration-300"></div>
      <div className="mb-6 p-5 bg-gradient-to-br from-red-500 to-pink-600 rounded-full shadow-xl transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-3xl font-extrabold text-gray-900 mb-4 drop-shadow-md">{title}</h3>
      <p className="text-gray-800 leading-relaxed text-lg">{description}</p>
      <span className="absolute bottom-3 right-3 text-4xl opacity-70 group-hover:opacity-100 transition-opacity duration-300">🌟</span>
    </div>
  );
};

export default ServiceCard;