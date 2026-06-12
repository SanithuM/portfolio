import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navRef = useRef(null);

    // A slight background shadow/blur when scrolling down
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useGSAP(() => {
        gsap.from(navRef.current, {
            y: -100,
            opacity: 0,
            duration: 0.8,
            ease: "power4.out"
        });
    }, { scope: navRef });

    const navLinks = [
        { name: "Work", href: "#work" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <nav 
            ref={navRef}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled ? 'bg-surface/60 backdrop-blur-xl border-b border-brand/10 py-4 shadow-lg shadow-indigo-500/5' : 'bg-transparent py-8'
            }`}
        >
            <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
                {/* Logo or Name */}
                <a
                    href="#"
                    className="text-lg font-bold tracking-tighter bg-white bg-clip-text text-transparent hover:brightness-110 transition-all duration-300"
                >
                    S. MALHIRU
                </a>

                {/* Desktop Links */}
                <div className="flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted hover:text-accent transition-colors uppercase tracking-widest relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}

                    {/* Status Indicator */}
                    <div className="hidden md:flex items-center gap-2 pl-4 border-l border-brand/10">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 duration-1000"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-muted font-medium">Available</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;