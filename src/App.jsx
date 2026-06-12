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
        <div className="absolute -z-10 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-[500px] h-[500px] rounded-full opacity-35 blur-[100px] bg-linear-to-tr from-indigo-600 via-purple-600 to-pink-500 bg-blob-animation"></div>
        <div className="absolute -z-10 right-0 bottom-0 transform translate-x-1/4 translate-y-1/4 w-96 h-96 rounded-full opacity-25 blur-[100px] bg-linear-to-r from-rose-500 via-purple-500 to-indigo-500 bg-blob-animation-delayed"></div>
        <div className="absolute -z-20 left-8 bottom-20 w-80 h-80 rounded-full opacity-20 blur-[100px] bg-linear-to-br from-indigo-500 via-emerald-500 to-teal-500 bg-blob-animation-slow"></div>
        <div className="absolute -z-20 right-16 top-40 w-60 h-60 rounded-full opacity-20 blur-[100px] bg-linear-to-br from-cyan-500 via-sky-500 to-indigo-500 bg-blob-animation-slower"></div>

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