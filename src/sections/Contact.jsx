import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/yourusername', icon: FaGithub },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: FaLinkedin },
    { name: 'Email', href: 'mailto:your.email@example.com', icon: Mail },
  ];

  return (
    <section id="contact" className="py-32 border-t border-brand/5">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center space-y-12"
      >

        {/* The Big Call to Action */}
        <div className="space-y-4">
          <h2 className="text-sm uppercase tracking-[0.4em] text-muted font-bold flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" />
            Get in touch
          </h2>
          <a
            href="mailto:your.email@example.com"
            className="block text-4xl md:text-6xl font-bold tracking-tighter hover:text-muted transition-colors duration-300 relative group"
          >
            Let's build something <br /> together.
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-brand transition-all duration-500 group-hover:w-full"></span>
          </a>
        </div>

        {/* Professional Links */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 pt-8">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] relative group hover:text-muted transition-colors"
            >
              <link.icon className="w-4 h-4" />
              {link.name}
              <ArrowUpRight className="w-3 h-3 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        {/* Footer Note */}
        <div className="pt-20">
          <p className="text-[10px] uppercase tracking-widest text-muted/50">
            © 2026 S. Malhiru. Designed & Built in Sri Lanka.
          </p>
        </div>

      </motion.div>
    </section>
  );
};

export default Contact;