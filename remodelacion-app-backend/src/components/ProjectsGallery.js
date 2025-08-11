"use client";

import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const ProjectsGallery = ({
  heading = "Nuestros Proyectos Recientes 🛠️",
  projects: initialProjects = [
    {
      imageSrc: "/images/projects/shower_b.jpg",
      title: "Remodelación de Baño (Antes)",
      description: "Vista del área de la ducha antes de la transformación. Muros y tuberías expuestas.",
      category: "En Progreso"
    },
    {
      imageSrc: "/images/projects/shower_w.jpg",
      title: "Instalación de Ducha para Movilidad",
      description: "Resultado final con asiento, barras de seguridad y altura ADA. ¡Funcional y accesible!",
      category: "Terminado"
    },
    {
      imageSrc: "/images/projects/bon_shower.jpg",
      title: "Ducha Premium con Mampara",
      description: "Transformación elegante con un sistema de ducha moderno, mampara de vidrio y nichos integrados.",
      category: "Terminado"
    },
    {
      imageSrc: "/images/projects/tub (2).jpg",
      title: "Tina Walk-in de Hidromasaje (Acceso)",
      description: "Vista de la tina con puerta para un acceso seguro y fácil. Ideal para personas con movilidad limitada.",
      category: "Terminado"
    },
    {
      imageSrc: "/images/projects/tub3.jpg",
      title: "Tina de Hidroterapia con Iluminación",
      description: "Instalación de una tina de lujo con jets de agua, iluminación y puerta de acceso.",
      category: "Terminado"
    },
    {
      imageSrc: "/images/projects/tub.jpg",
      title: "Tina de Hidroterapia en Acción",
      description: "Detalle de la tina con el sistema de burbujas y luces de color encendidas para una experiencia relajante.",
      category: "Terminado"
    },
    {
      imageSrc: "/images/projects/shower.jpg",
      title: "Detalle de Acabados de Ducha",
      description: "Muestra de los acabados de alta calidad con asiento plegable y grifería moderna.",
      category: "Terminado"
    },
    // Añade más proyectos aquí. Puedes agregar una categoría "En Progreso" si tienes
    /*
    {
      imageSrc: "/images/projects/otra_imagen_progreso.jpg",
      title: "Proyecto en Curso (En Progreso)",
      description: "Vista de un trabajo en progreso, mostrando el cuidado en los detalles.",
      category: "En Progreso"
    },
    */
  ]
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentTitle, setCurrentTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const openLightbox = (image, title) => {
    setCurrentImage(image);
    setCurrentTitle(title);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentImage('');
    setCurrentTitle('');
  };

  const filteredProjects = selectedCategory === 'Todos'
    ? initialProjects
    : initialProjects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">{heading}</h2>
        
        {/* Aquí están los botones de filtro que querías */}
        <div className="flex justify-center space-x-4 mb-12">
          <button
            onClick={() => setSelectedCategory('Todos')}
            className={`px-6 py-3 rounded-full text-lg font-semibold transition-colors duration-300 ${selectedCategory === 'Todos' ? 'bg-purple-600 text-white shadow-lg' : 'bg-white text-gray-800 hover:bg-gray-200'}`}
          >
            Todos
          </button>
          <button
            onClick={() => setSelectedCategory('Terminado')}
            className={`px-6 py-3 rounded-full text-lg font-semibold transition-colors duration-300 ${selectedCategory === 'Terminado' ? 'bg-purple-600 text-white shadow-lg' : 'bg-white text-gray-800 hover:bg-gray-200'}`}
          >
            Trabajo Terminado
          </button>
          <button
            onClick={() => setSelectedCategory('En Progreso')}
            className={`px-6 py-3 rounded-full text-lg font-semibold transition-colors duration-300 ${selectedCategory === 'En Progreso' ? 'bg-purple-600 text-white shadow-lg' : 'bg-white text-gray-800 hover:bg-gray-200'}`}
          >
            En Progreso
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <div key={index} onClick={() => openLightbox(project.imageSrc, project.title)} className="cursor-pointer">
              <ProjectCard
                imageSrc={project.imageSrc}
                title={project.title}
                description={project.description}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-[90vh] mx-auto" onClick={e => e.stopPropagation()}>
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-4xl font-bold p-2 bg-gray-800 rounded-full hover:bg-red-600 transition-colors duration-300 z-50"
            >
              &times;
            </button>
            <img
              src={currentImage}
              alt={currentTitle}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            {currentTitle && (
              <p className="text-white text-center mt-4 text-xl font-semibold">{currentTitle}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsGallery;