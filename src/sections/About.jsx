import { useRef } from "react";
import { User, Code2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { 
  SiReact, SiVite, SiTailwindcss, SiRedux, SiFramer,
  SiNodedotjs, SiExpress, SiFastapi, SiMongodb,
  SiGit, SiPostman, SiVercel, SiDocker,
  SiRender,
  SiVscodium,
  SiFigma
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const skills = [
    { 
      category: "Frontend", 
      items: [
        { name: "React.js", icon: SiReact }, 
        { name: "Vite", icon: SiVite }, 
        { name: "Tailwind CSS", icon: SiTailwindcss }, 
        { name: "Redux", icon: SiRedux }, 
        { name: "Framer Motion", icon: SiFramer }
      ] 
    },
    { 
      category: "Backend", 
      items: [
        { name: "Node.js", icon: SiNodedotjs }, 
        { name: "Express", icon: SiExpress }, 
        { name: "FastAPI", icon: SiFastapi }, 
        { name: "MongoDB", icon: SiMongodb }
      ] 
    },
    { 
      category: "Tools", 
      items: [
        { name: "Git", icon: SiGit }, 
        { name: "Postman", icon: SiPostman }, 
        { name: "Render", icon: SiRender }, 
        { name: "Figma", icon: SiFigma }
      ] 
    },
  ];

  const ICON_COLORS = {
    react: '#61DAFB',
    vite: '#646CFF',
    'tailwind css': '#06B6D4',
    tailwind: '#06B6D4',
    redux: '#764ABC',
    'framer motion': '#0055FF',
    'node.js': '#43853d',
    node: '#43853d',
    express: '#000000',
    fastapi: '#009688',
    mongodb: '#47A248',
    git: '#F05032',
    postman: '#FF6C37',
    vercel: '#000000',
    docker: '#2496ED',
    postgres: '#336791',
  };

  const getItemColor = (name) => {
    const n = name.toLowerCase();
    for (const key of Object.keys(ICON_COLORS)) {
      if (n.includes(key)) return ICON_COLORS[key];
    }
    return undefined;
  };

  useGSAP(() => {
    // Bio staggering
    gsap.from(".about-bio-item", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".about-grid",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });

    // Skills staggering
    gsap.from(".about-skills-item", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".about-grid",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="about" className="py-24 border-t border-brand/5">
      <div className="about-grid grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Left Side: Bio */}
        <div className="md:col-span-7">
          <h2 className="about-bio-item text-sm uppercase tracking-[0.3em] text-muted font-bold mb-8 flex items-center gap-2">
            <User className="w-4 h-4" />
            About
          </h2>
          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p className="about-bio-item">
              I am a Full-stack Developer based in Sri Lanka, currently completing my final year in software engineering. My focus lies in building clean, performant, and user-centric web applications.
            </p>
            <p className="about-bio-item">
              With a strong foundation in the <span className="text-accent font-semibold">MERN stack</span> and experience in <span className="text-accent font-semibold">FastAPI</span>, I enjoy solving complex architectural challenges—from implementing custom server fallback logic to engineering seamless e-commerce experiences.
            </p>
            <p className="about-bio-item">
              Beyond coding, I am committed to writing maintainable, scalable code and staying updated with the latest industry standards in web performance and UI/UX design.
            </p>
          </div>
        </div>

        {/* Right Side: Skills Grid */}
        <div className="md:col-span-5">
          <h2 className="about-skills-item text-sm uppercase tracking-[0.3em] text-muted font-bold mb-8 flex items-center gap-2">
            <Code2 className="w-4 h-4" />
            Technical Stack
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {skills.map((group) => (
              <div key={group.category} className="about-skills-item">
                <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li 
                      key={item.name} 
                      className="flex items-center gap-2 text-sm border border-brand/10 hover:border-accent px-3 py-1 rounded-sm text-muted hover:scale-105 hover:bg-accent hover:text-white transition-all duration-300 cursor-default"
                    >
                      <item.icon className="w-3 h-3" style={{ color: getItemColor(item.name) }} />
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;