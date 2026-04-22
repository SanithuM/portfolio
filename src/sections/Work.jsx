import { projects } from '../data/projects';
import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2, Code2 } from "lucide-react";
import { 
  SiReact, SiTailwindcss, SiVite, 
  SiFastapi, SiPostgresql, SiMongodb 
} from "react-icons/si";

const getTagIcon = (tag) => {
  const t = tag.toLowerCase();
  if (t.includes('react')) return SiReact;
  if (t.includes('tailwind')) return SiTailwindcss;
  if (t.includes('vite')) return SiVite;
  if (t.includes('fastapi')) return SiFastapi;
  if (t.includes('postgres')) return SiPostgresql;
  if (t.includes('mern')) return SiMongodb; // Representing MERN with MongoDB
  return Code2; // fallback
};

const Work = () => {
  return (
    <section id="work" className="py-24 border-t border-brand/5">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-sm uppercase tracking-[0.3em] text-muted font-bold mb-4 flex items-center gap-2">
          <FolderGit2 className="w-4 h-4" />
          Selected Projects
        </h2>
      </motion.div>

      {/* Projects List */}
      <div className="space-y-32">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id} 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            
            {/* Project Image - Takes up 7 columns */}
            <div className="md:col-span-7 overflow-hidden bg-muted/5 aspect-video flex items-center justify-center relative">
              <div className="absolute inset-0 bg-brand/5 z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
              <motion.img 
                src={project.image} 
                alt={project.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Project Info - Takes up 5 columns */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex gap-2 flex-wrap">
                {project.tags.map(tag => {
                  const Icon = getTagIcon(tag);
                  return (
                    <span key={tag} className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider px-2 py-1 bg-brand/5 text-muted hover:bg-brand hover:text-surface transition-colors cursor-default">
                      <Icon className="w-3 h-3" />
                      {tag}
                    </span>
                  );
                })}
              </div>
              
              <h3 className="text-3xl font-bold tracking-tight">{project.title}</h3>
              <p className="text-muted leading-relaxed">
                {project.description}
              </p>
              
              <div className="pt-4">
                <a 
                  href={project.link}
                  className="text-sm font-bold uppercase tracking-widest relative inline-flex items-center gap-1 group/link hover:text-muted transition-colors"
                >
                  View Case Study
                  <ArrowUpRight className="w-4 h-4 opacity-0 -ml-2 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all duration-300" />
                  <span className="absolute -bottom-1 left-0 w-4 h-[1px] bg-brand group-hover/link:w-full group-hover/link:bg-muted transition-all duration-300"></span>
                </a>
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;