import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsGallery = ({
  heading = "Nuestros Proyectos Recientes 🛠️", // Puedes ajustar el título
  projects = [
    {
      imageSrc: "/images/projects/bon_shower.jpg", // ¡Ruta a tu imagen!
      title: "Instalación de Ducha Premium",
      description: "Transformación elegante con un sistema de ducha moderno y funcional."
    },
    {
      imageSrc: "/images/projects/shower_b.jpg", // ¡Ruta a tu imagen!
      title: "Ducha Contemporánea",
      description: "Diseño minimalista y materiales de alta calidad para un espacio relajante."
    },
    {
      imageSrc: "/images/projects/shower_w.jpg", // ¡Ruta a tu imagen!
      title: "Remodelación de Baño Completa",
      description: "Desde la fontanería hasta los acabados, un baño renovado con estilo."
    },
    {
      imageSrc: "/images/projects/tub.jpg", // ¡Ruta a tu imagen!
      title: "Instalación de Tina en un Día",
      description: "Disfrute de una nueva tina de lujo instalada rápidamente y sin complicaciones."
    },
    // ¡AGREGA MÁS OBJETOS DE PROYECTO AQUÍ para cada una de tus fotos que hayas copiado!
    // Ejemplo si tienes más fotos:
    // {
    //   imageSrc: "/images/projects/otra_foto.jpg",
    //   title: "Título de Otro Proyecto",
    //   description: "Descripción de otro de tus trabajos destacados."
    // },
  ]
}) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;