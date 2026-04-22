import { useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Work from './sections/Work';
import About from './sections/About';
import Contact from './sections/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <>
      <CustomCursor />
      <main className="max-w-5xl mx-auto px-6">
        <Navbar />
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;