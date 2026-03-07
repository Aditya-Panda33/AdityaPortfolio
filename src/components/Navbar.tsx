import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 w-full glassmorphism z-50 py-4 px-6 flex justify-between items-center border-b border-neon-green/30 text-neon-green">
            <div className="text-xl font-bold tracking-widest hover:text-white transition-colors cursor-pointer text-shadow-neon">
                <span className="text-cyber-blue">&gt;</span> PANDA_SEC<span className="animate-blink">_</span>
            </div>
            <div className="hidden md:flex gap-6 text-sm font-semibold">
                <a href="#about" className="hover:text-cyber-blue transition-colors">./About</a>
                <a href="#skills" className="hover:text-cyber-blue transition-colors">./Skills</a>
                <a href="#projects" className="hover:text-cyber-blue transition-colors">./Projects</a>
                <a href="#terminal" className="hover:text-cyber-blue transition-colors">./Terminal</a>
            </div>
        </nav>
    );
};

export default Navbar;
