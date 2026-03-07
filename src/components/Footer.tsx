import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="border-t border-neon-green/20 glassmorphism py-6 text-center text-xs text-neon-green/70">
            <p>&copy; {new Date().getFullYear()} Aditya Panda. Built with React & TailwindCSS.</p>
            <p className="mt-2 text-cyber-blue/50">SYSTEM_STATUS: SECURE // PORT: 443 // UPTIME: {Math.floor(Math.random() * 99999)}s</p>
        </footer>
    );
};

export default Footer;
