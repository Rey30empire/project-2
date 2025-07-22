import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import LayoutFooter from './components/LayoutFooter';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ProjectsGallery from './components/ProjectsGallery';
import FAQSection from './components/FAQSection';
import ContactForm from './components/ContactForm';
import './styles.css'; // Asegúrate de que la importación CSS esté correcta

function App() {
  // Aquí definimos los ítems de navegación, ahora con IDs para el desplazamiento
  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#services' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Preguntas Frecuentes', href: '#faq' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <div className="App">
      {/* El LayoutHeader ahora solo recibe los navItems, el navegador maneja el desplazamiento */}
      <LayoutHeader
        title="Remodelación de primera categoría LLC" // Título de la cabecera
        navItems={navItems}
      />

      {/* Main content area */}
      <main>
        {/* Todas las secciones se renderizan una debajo de la otra, envueltas en un div con su ID */}
        <div id="home"><HeroSection /></div>
        <div id="services"><ServicesSection /></div>
        <div id="testimonials"><TestimonialsSection /></div>
        <div id="projects"><ProjectsGallery /></div>
        <div id="faq"><FAQSection /></div>
        <div id="contact"><ContactForm /></div>
      </main>

      {/* El LayoutFooter recibe el nombre de la compañía */}
      <LayoutFooter companyName="Remodelación de primera categoría LLC" /> {/* Nombre de la compañía en el pie de página */}
    </div>
  );
}

export default App;