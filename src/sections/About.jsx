import { motion } from "framer-motion";
import { User, Code2 } from "lucide-react";
import { 
  SiReact, SiVite, SiTailwindcss, SiRedux, SiFramer,
  SiNodedotjs, SiExpress, SiFastapi, SiMongodb,
  SiGit, SiPostman, SiVercel, SiDocker
} from "react-icons/si";

const About = () => {
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
        { name: "Vercel", icon: SiVercel }, 
        { name: "Docker", icon: SiDocker }
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section id="about" className="py-24 border-t border-brand/5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Left Side: Bio */}
        <motion.div 
          className="md:col-span-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-sm uppercase tracking-[0.3em] text-muted font-bold mb-8 flex items-center gap-2">
            <User className="w-4 h-4" />
            About
          </motion.h2>
          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <motion.p variants={itemVariants}>
              I am a Full-stack Developer based in Sri Lanka, currently completing my final year in software engineering. My focus lies in building clean, performant, and user-centric web applications.
            </motion.p>
            <motion.p variants={itemVariants}>
              With a strong foundation in the <span className="text-brand">MERN stack</span> and experience in <span className="text-brand">FastAPI</span>, I enjoy solving complex architectural challenges—from implementing custom server fallback logic to engineering seamless e-commerce experiences.
            </motion.p>
            <motion.p variants={itemVariants}>
              Beyond coding, I am committed to writing maintainable, scalable code and staying updated with the latest industry standards in web performance and UI/UX design.
            </motion.p>
          </div>
        </motion.div>

        {/* Right Side: Skills Grid */}
        <motion.div 
          className="md:col-span-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-sm uppercase tracking-[0.3em] text-muted font-bold mb-8 flex items-center gap-2">
            <Code2 className="w-4 h-4" />
            Technical Stack
          </motion.h2>
          <div className="grid grid-cols-1 gap-8">
            {skills.map((group) => (
              <motion.div key={group.category} variants={itemVariants}>
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand mb-3">
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <motion.li 
                      key={item.name} 
                      whileHover={{ scale: 1.05, backgroundColor: "var(--color-brand)", color: "var(--color-surface)" }}
                      className="flex items-center gap-2 text-sm border border-brand/10 px-3 py-1 rounded-sm text-muted transition-colors cursor-default"
                    >
                      <item.icon className="w-3 h-3" style={{ color: getItemColor(item.name) }} />
                      {item.name}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;