import { projects } from '../data/projects';
import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2, Code2, ArrowLeft, ArrowRight } from "lucide-react";
import { 
  SiReact, SiTailwindcss, SiVite, 
  SiFastapi, SiPostgresql, SiMongodb, 
  SiExpress, SiNodedotjs
} from "react-icons/si";

const getTagIcon = (tag) => {
  const t = tag.toLowerCase();
  if (t.includes('react')) return SiReact;
  if (t.includes('tailwind')) return SiTailwindcss;
  if (t.includes('vite')) return SiVite;
  if (t.includes('fastapi')) return SiFastapi;
  if (t.includes('postgres')) return SiPostgresql;
  if (t.includes('mongodb')) return SiMongodb;
  if (t.includes('express')) return SiExpress;
  if (t.includes('node')) return SiNodedotjs;
  return Code2; // fallback
};

const TAG_COLORS = {
  react: '#61DAFB',
  tailwind: '#06B6D4',
  vite: '#646CFF',
  fastapi: '#009688',
  postgres: '#336791',
  mongodb: '#47A248',
  express: '#000000',
  node: '#339933'
};

const getTagColor = (tag) => {
  const t = tag.toLowerCase();
  for (const key of Object.keys(TAG_COLORS)) {
    if (t.includes(key)) return TAG_COLORS[key];
  }
  return undefined;
};

import { useRef } from 'react';

const Work = () => {
  const scrollRef = useRef(null);
  const scroll = (dir = 1) => {
    const container = scrollRef.current;
    if (!container) return;
    const children = Array.from(container.children);
    if (!children.length) return;

    const scrollLeft = container.scrollLeft;
    const containerCenter = scrollLeft + container.clientWidth / 2;

    // find the child that is currently centered (or nearest)
    let currentIndex = children.findIndex((child) => {
      const start = child.offsetLeft;
      const end = start + child.clientWidth;
      return containerCenter >= start && containerCenter < end;
    });

    if (currentIndex === -1) {
      // fallback: choose nearest by offsetLeft
      let minDiff = Infinity;
      children.forEach((child, i) => {
        const diff = Math.abs(child.offsetLeft - scrollLeft);
        if (diff < minDiff) {
          minDiff = diff;
          currentIndex = i;
        }
      });
    }

    const targetIndex = Math.max(0, Math.min(children.length - 1, currentIndex + dir));
    const target = children[targetIndex];
    if (!target) return;

    container.scrollTo({ left: target.offsetLeft, behavior: 'smooth' });
  };

  return (
    <section id="work" className="py-24 border-t border-brand/5">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-sm uppercase tracking-[0.3em] text-muted font-bold flex items-center gap-2">
            <FolderGit2 className="w-4 h-4" />
            Projects
          </h2>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous project"
              onClick={() => scroll(-1)}
              className="p-2 rounded-full bg-black hover:opacity-90 transition-colors cursor-pointer z-30"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>

            <button
              type="button"
              aria-label="Next project"
              onClick={() => scroll(1)}
              className="p-2 rounded-full bg-black hover:opacity-90 transition-colors cursor-pointer z-30"
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Projects List - horizontal carousel */}
      <div className="relative">
        <div ref={scrollRef} className="flex gap-8 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth py-4 px-4 md:px-0">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="min-w-full flex-shrink-0 snap-center"
            >
              <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center px-4">

                {/* Project Image - Takes up 6 columns */}
                <div className="md:col-span-6 overflow-hidden bg-muted/5 aspect-video flex items-center justify-center relative rounded-md border border-gray-200">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                </div>

                {/* Project Info - Takes up 6 columns */}
                <div className="md:col-span-6 space-y-4">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map(tag => {
                      const Icon = getTagIcon(tag);
                      return (
                        <span key={tag} className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider px-2 py-1 bg-brand/5 text-muted hover:bg-brand hover:text-surface transition-colors cursor-default">
                          <Icon className="w-3 h-3" style={{ color: getTagColor(tag) }} />
                          {tag}
                        </span>
                      );
                    })}
                  </div>

                  <h3 className="text-3xl font-bold tracking-tight">{project.title}</h3>
                  <p className="text-muted leading-relaxed">{project.description}</p>

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

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;