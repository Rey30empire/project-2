import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ProjectsGallery from './components/ProjectsGallery';
import FAQSection from './components/FAQSection';
import ContactForm from './components/ContactForm';
import LayoutFooter from './components/LayoutFooter';

function App() {
  const [currentPage, setCurrentPage] = useState('inicio'); // State to manage current page

  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#services' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Preguntas', href: '#faq' },
    { name: 'Contacto', href: '#contact' },
  ];

  // Simple navigation logic (for demonstration, in a real app you'd use a router)
  const handleNavClick = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
    // In a real app, you might scroll to section or change route
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
 <LayoutHeader
        title="TopNotch Remodeling LLC" // <--- Aquí pones el título exacto que quieres que aparezca
        navItems={navItems.map(item => ({ ...item, onClick: (e) => handleNavClick(e, item.name.toLowerCase()) }))}
      />
      <main>
        {currentPage === 'inicio' && <HeroSection />}
        {currentPage === 'servicios' && <ServicesSection />}
        {currentPage === 'testimonios' && <TestimonialsSection />}
        {currentPage === 'proyectos' && <ProjectsGallery />}
        {currentPage === 'preguntas' && <FAQSection />}
        {currentPage === 'contacto' && <ContactForm />}
      </main>
      <LayoutFooter />
    </div>
  );
}

export default App;

// DONE