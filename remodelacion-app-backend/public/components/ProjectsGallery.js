"use client";

import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const ProjectsGallery = ({
  heading = "Nuestros Proyectos Recientes 🛠️",
  projects: initialProjects = [
    {
      imageSrc: "/assets/gallery/showers/ceramic.jpg",
      title: "Ducha de Azulejo Cerámico",
      description: "Instalación de ducha con azulejo cerámico y detalles modernos.",
      category: "Terminado"
    },
    {
      imageSrc: "/assets/gallery/showers/modern-with-shower-base.jpg",
      title: "Ducha Moderna con Base",
      description: "Remodelación completa de ducha con base prefabricada y acabados elegantes.",
      category: "Terminado"
    },
    {
      imageSrc: "/assets/gallery/showers/modern-with-shower-base-2.jpg",
      title: "Ducha de Mármol Contemporánea",
      description: "Diseño minimalista con paneles de mármol y grifería de alta calidad.",
      category: "Terminado"
    },
    {
      imageSrc: "/assets/gallery/showers/shower-tile.jpg",
      title: "Instalación de Azulejo para Ducha",
      description: "Detalle del trabajo de azulejo en la zona de la ducha, con acabados limpios y profesionales.",
      category: "Terminado"
    },
    {
      imageSrc: "/assets/gallery/showers/shower-with-beige-marble.jpg",
      title: "Ducha de Mármol Beige",
      description: "Instalación de ducha con mármol beige y acentos de cromo para un look elegante.",
      category: "Terminado"
    },
    {
      imageSrc: "/assets/gallery/showers/white-shower-with-chrome-fixtures.jpg",
      title: "Ducha Blanca con Accesorios Cromados",
      description: "Transformación de baño con una ducha luminosa y acabados cromados modernos.",
      category: "Terminado"
    },
    {
      imageSrc: "/assets/gallery/tubs/bathtub-with-jets.jpg",
      title: "Tina con Jets",
      description: "Instalación de bañera con sistema de jets de masaje para una experiencia de hidroterapia.",
      category: "Terminado"
    },
    {
      imageSrc: "/assets/gallery/tubs/modern.jpg",
      title: "Remodelación Moderna de Baño",
      description: "Remodelación moderna de baño con tina y acabados de alta calidad.",
      category: "Terminado"
    },
    {
      imageSrc: "/assets/gallery/tubs/bathtub-walkin-with-chrome-fixtures.jpg",
      title: "Tina Walk-In con Accesorios Cromados",
      description: "Instalación de tina walk-in con accesorios cromados, barras de seguridad y asiento.",
      category: "Terminado"
    },
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