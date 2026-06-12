import { useRef } from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/yourusername', icon: FaGithub },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: FaLinkedin },
    { name: 'Email', href: 'mailto:your.email@example.com', icon: Mail },
  ];

  useGSAP(() => {
    gsap.from(".contact-content", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".contact-content",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="contact" className="py-32 border-t border-brand/5">
      <div
        className="contact-content flex flex-col items-center text-center space-y-12"
      >

        {/* The Big Call to Action */}
        <div className="space-y-4">
          <h2 className="text-sm uppercase tracking-[0.4em] text-muted font-bold flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" />
            Get in touch
          </h2>
          <a
            href="mailto:your.email@example.com"
            className="block text-4xl md:text-6xl font-bold tracking-tighter hover:text-accent transition-colors duration-300 relative group"
          >
            Let's build something <br /> together.
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent transition-all duration-500 group-hover:w-full"></span>
          </a>
        </div>

        {/* Professional Links */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 pt-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] relative group hover:text-accent hover:-translate-y-1 transition-all duration-300"
            >
              <link.icon className="w-4 h-4" />
              {link.name}
              <ArrowUpRight className="w-3 h-3 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-accent" />
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Footer Note */}
        <div className="pt-20">
          <p className="text-[10px] uppercase tracking-widest text-muted/50">
            © 2026 S. Malhiru. Designed & Built in Sri Lanka.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;