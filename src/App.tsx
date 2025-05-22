import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import ProductGallery from './components/ProductGallery';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <ProductGallery />
      <Testimonials />
      <About />
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default App;