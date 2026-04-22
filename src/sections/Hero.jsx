import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section id="hero" className="min-h-[80vh] flex flex-col justify-center pt-20">
      <motion.div 
        className="space-y-6 max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Subtle Greeting */}
        <motion.p 
          variants={itemVariants}
          className="text-sm uppercase tracking-[0.2em] text-muted font-medium"
        >
          Based in Sri Lanka
        </motion.p>

        {/* Main Headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1]"
        >
          Building digital products with <span className="text-muted/50 underline decoration-1 underline-offset-8">intent</span> and precision.
        </motion.h1>

        {/* Sub-headline / Context */}
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl"
        >
          I'm a Full-stack Developer specializing in the MERN stack. 
          Recently finished my final viva and currently crafting scalable web applications 
          like <span className="text-brand font-medium">UniVerse</span> and <span className="text-brand font-medium">Laced</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex gap-6 pt-4">
          <motion.a 
            href="#work" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-brand text-surface text-sm font-bold uppercase tracking-widest hover:opacity-80 transition-opacity"
          >
            View Work
          </motion.a>
          <motion.a 
            href="/assets/resume.pdf" 
            target="_blank"
            whileHover={{ scale: 1.05, backgroundColor: "var(--color-brand)", color: "var(--color-surface)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-brand/20 text-sm font-bold uppercase tracking-widest transition-colors"
          >
            Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;