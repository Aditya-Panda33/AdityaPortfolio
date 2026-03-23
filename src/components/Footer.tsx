import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="border-t border-neon-green/20 glassmorphism py-4 text-center text-[10px] sm:text-xs font-mono text-neon-green/30 hover:text-neon-green/70 transition-colors">
            <a href="/warning" className="uppercase tracking-widest cursor-pointer">
                Want to know more about me : Click here
            </a>
        </footer>
    );
};

export default Footer;
