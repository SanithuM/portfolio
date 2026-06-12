import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".hero-item", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power4.out",
      delay: 0.3
    });
  }, { scope: containerRef });

  return (
    <section id="hero" className="min-h-[80vh] flex flex-col justify-center pt-20">
      <div
        ref={containerRef}
        className="space-y-6 max-w-3xl"
      >
        {/* Subtle Greeting */}
        <p
          className="hero-item text-sm uppercase tracking-[0.2em] text-muted font-medium"
        >
          Based in Sri Lanka
        </p>

        {/* Main Headline */}
        <h1
          className="hero-item text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1]"
        >
          Engineering <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-300 bg-clip-text text-transparent underline decoration-indigo-500/30 underline-offset-8 tracking-normal">performance</span> driven web experiences.
        </h1>

        {/* Sub-headline / Context */}
        <p
          className="hero-item text-lg md:text-xl text-muted leading-relaxed max-w-2xl"
        >
          I am a Full-stack Developer dedicated to building efficient, maintainable applications across the entire stack.
          By leveraging modern frameworks and database architectures, I create
          functional ecosystems that solve real-world problems.
        </p>
        
        {/* CTA Buttons */}
        <div className="hero-item flex gap-6 pt-4">
          <a
            href="#work"
            className="px-8 py-3 bg-brand text-surface text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-white active:scale-95 transition-all duration-300 rounded-sm shadow-lg shadow-indigo-500/10"
          >
            View Work
          </a>
          <a
            href="./portfolio/assets/resume.pdf"
            target="_blank"
            className="px-8 py-3 border border-brand/20 text-sm font-bold uppercase tracking-widest hover:bg-accent hover:border-accent hover:text-white active:scale-95 transition-all duration-300 rounded-sm"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;