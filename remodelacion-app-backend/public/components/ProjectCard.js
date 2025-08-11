import React from 'react';

const ProjectCard = ({
  imageSrc = "https://via.placeholder.com/600x400",
  title = "Proyecto Asombroso",
  description = "Una descripción que te hará querer remodelar tu casa ahora mismo. ¡Resultados que hablan por sí solos!"
}) => {
  return (
    <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-3xl border-4 border-blue-300 group">
      <img src={imageSrc} alt={title} className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" />
      <div className="p-6 bg-gradient-to-br from-blue-100 to-purple-100">
        <h3 className="text-3xl font-extrabold text-gray-900 mb-3 drop-shadow-md">{title}</h3>
        <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
      </div>
      <span className="absolute top-3 right-3 text-4xl opacity-70 group-hover:opacity-100 transition-opacity duration-300">🛠️</span>
    </div>
  );
};

export default ProjectCard;