import { useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Work from './sections/Work';
import About from './sections/About';
import Contact from './sections/Contact';
// Custom cursor removed — using default OS cursor

function App() {
  return (
    <>
      <div className="relative overflow-x-clip">
        {/* Subtle background gradient blobs */}
        <div className="absolute -z-10 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-96 h-96 rounded-full opacity-28 blur-3xl bg-linear-to-trrom-indigo-400 via-purple-400 to-pink-400 bg-blob-animation"></div>
        <div className="absolute -z-10 right-0 bottom-0 transform translate-x-1/4 translate-y-1/4 w-80 h-80 rounded-full opacity-22 blur-3xl bg-linear-to-r from-rose-300 via-orange-300 to-yellow-200 bg-blob-animation-delayed"></div>
        <div className="absolute -z-20 left-8 bottom-20 w-60 h-60 rounded-full opacity-18 blur-3xl bg-linear-to-br from-lime-200 via-emerald-200 to-teal-200 bg-blob-animation-slow"></div>
        <div className="absolute -z-20 right-16 top-40 w-44 h-44 rounded-full opacity-16 blur-3xl bg-linear-to-br from-cyan-100 via-sky-200 to-indigo-200 bg-blob-animation-slower"></div>

        <main className="max-w-5xl mx-auto px-6 py-12">
          <Navbar />
          <Hero />
          <Work />
          <About />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;