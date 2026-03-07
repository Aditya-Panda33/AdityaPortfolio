import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Download, FolderOpen, Github } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="min-h-[90vh] flex flex-col justify-center relative">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-4xl"
            >
                <div className="mb-4 inline-block px-3 py-1 border border-neon-green/30 bg-neon-green/10 rounded-sm text-neon-green text-sm">
                    Status: ACTIVE_USER
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                    Aditya Panda
                </h1>

                <h2 className="text-xl md:text-3xl font-semibold text-cyber-blue mb-6 h-12">
                    <TypeAnimation
                        sequence={[
                            'Ethical Hacking',
                            2000,
                            'Machine Learning',
                            2000,
                            'Cybersecurity',
                            2000,
                            'Python Development',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="font-mono text-neon-green text-shadow-sm"
                    />
                </h2>

                <p className="text-lg text-gray-400 mb-8 max-w-2xl font-mono leading-relaxed">
                    Cybersecurity Enthusiast & Machine Learning Developer. <br />
                    Building secure intelligent systems through cybersecurity and AI/ML.
                </p>

                <div className="flex flex-wrap gap-4">
                    <a href="/Aditya_Panda_Resume.pdf" download className="group relative px-6 py-3 font-mono font-bold text-black bg-neon-green hover:bg-white transition-all overflow-hidden flex items-center gap-2 rounded-sm clip-path-slant hover:shadow-[0_0_20px_rgba(0,255,159,0.5)]">
                        <Download size={18} />
                        <span className="relative z-10">Download_Resume</span>
                    </a>

                    <a href="#projects" className="group relative px-6 py-3 font-mono font-bold text-neon-green border border-neon-green hover:bg-neon-green/10 transition-all flex items-center gap-2 rounded-sm">
                        <FolderOpen size={18} className="group-hover:scale-110 transition-transform" />
                        <span>View_Projects</span>
                    </a>

                    <a href="#github" className="group relative px-6 py-3 font-mono font-bold text-cyber-blue border border-cyber-blue hover:bg-cyber-blue/10 transition-all flex items-center gap-2 rounded-sm">
                        <Github size={18} className="group-hover:scale-110 transition-transform" />
                        <span>GitHub</span>
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
