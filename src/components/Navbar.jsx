import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Adds a slight background shadow/blur when scrolling down
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "Work", href: "#work" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <motion.nav 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled ? 'bg-surface/80 backdrop-blur-xl border-b border-brand/5 py-4' : 'bg-transparent py-8'
            }`}
        >
            <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
                {/* Logo or Name */}
                <a
                    href="#"
                    className="text-lg font-bold tracking-tighter hover:opacity-50 transition-opacity"
                >
                    S. MALHIRU
                </a>

                {/* Desktop Links */}
                <div className="flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted hover:text-brand transition-colors uppercase tracking-widest relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}

                    {/* Status Indicator */}
                    <div className="hidden md:flex items-center gap-2 pl-4 border-l border-brand/10">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-40 duration-1000"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-muted font-medium">Available</span>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;