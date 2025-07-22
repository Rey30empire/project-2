import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsGallery = ({
  heading = "Our Recent Projects",
  projects = [
    {
      imageSrc: "https://via.placeholder.com/600x400?text=Bathroom+Remodel",
      title: "Modern Bathroom Renovation",
      description: "Complete overhaul of an old bathroom into a sleek, modern space with a new one-day shower installation."
    },
    {
      imageSrc: "https://via.placeholder.com/600x400?text=Kitchen+Update",
      title: "Kitchen Refresh & Handyman Fixes",
      description: "Updated kitchen cabinets, new backsplash, and various handyman repairs to enhance functionality and aesthetics."
    },
    {
      imageSrc: "https://via.placeholder.com/600x400?text=Tub+Installation",
      title: "Luxurious Tub Replacement",
      description: "Seamless one-day installation of a new, luxurious bathtub, transforming the bathing experience."
    },
    {
      imageSrc: "https://via.placeholder.com/600x400?text=Home+Repair",
      title: "Comprehensive Home Repair",
      description: "Addressed multiple repair needs across the home, from leaky faucets to drywall patching, ensuring a well-maintained property."
    }
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

// DONE