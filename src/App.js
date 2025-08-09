import React from 'react';
import LayoutHeader from './components/LayoutHeader';
import LayoutFooter from './components/LayoutFooter';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ProjectsGallery from './components/ProjectsGallery'; // Asegúrate de que este import esté
import FAQSection from './components/FAQSection';
import ContactForm from './components/ContactForm';
import './styles.css'; // Asegúrate de que la importación CSS esté correcta

function App() {
  // Aquí definimos los ítems de navegación.
  // YA NO NECESITAMOS 'useState' para 'currentPage'
  // YA NO NECESITAMOS 'handleNavClick'
  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#services' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Proyectos', href: '#projects' }, // Este te llevará a la galería
    { name: 'Preguntas Frecuentes', href: '#faq' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <div className="App"> {/* Usamos un className más genérico, puedes ajustarlo si quieres */}
      <LayoutHeader
        title="Remodelación de primera categoría LLC" // Título de la cabecera
        navItems={navItems} // Pasamos los navItems directamente
      />

      <main>
        {/* AHORA, TODAS LAS SECCIONES SE RENDERIZAN AQUÍ, UNA DEBAJO DE LA OTRA. */}
        {/* Cada div con un ID permite que la navegación se desplace a esa sección. */}
        <div id="home"><HeroSection /></div>
        <div id="services"><ServicesSection /></div>
        <div id="testimonials"><TestimonialsSection /></div>
        <div id="projects"><ProjectsGallery /></div> {/* <-- ¡Aquí está tu galería! */}
        <div id="faq"><FAQSection /></div>
        <div id="contact"><ContactForm /></div>
      </main>

      <LayoutFooter companyName="Remodelación de primera categoría LLC" />
    </div>
  );
}

export default App;