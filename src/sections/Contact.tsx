import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { SiTryhackme } from 'react-icons/si';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 min-h-[50vh] flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl w-full mx-auto"
            >
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wider inline-block border-b-2 border-neon-green pb-2">
                        Initiate_Handshake()<span className="text-neon-green blink">_</span>
                    </h2>
                    <p className="text-gray-400 mt-6 font-mono max-w-2xl mx-auto">
                        My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <a href="mailto:adityaponda2020@gmail.com" className="glassmorphism p-6 flex items-center gap-6 group hover:border-neon-green/60 transition-colors border border-neon-green/20 rounded-sm">
                        <div className="p-4 bg-neon-green/10 rounded-full group-hover:bg-neon-green/20 transition-colors">
                            <Mail className="text-neon-green" size={28} />
                        </div>
                        <div>
                            <p className="font-bold text-white tracking-wide">adityaponda2020@gmail.com</p>
                        </div>
                    </a>

                    <a id="tryhackme" href="https://tryhackme.com/p/ponda" target="_blank" rel="noopener noreferrer" className="glassmorphism p-6 flex items-center gap-6 group hover:border-red-500/60 transition-colors border border-red-500/20 rounded-sm">
                        <div className="p-4 bg-red-500/10 rounded-full group-hover:bg-red-500/20 transition-colors">
                            <SiTryhackme className="text-red-500" size={28} />
                        </div>
                        <div>
                            <p className="font-bold text-white tracking-wide">TRYHACKME</p>
                        </div>
                    </a>

                    <a id="github" href="https://github.com/Aditya-Panda33" target="_blank" rel="noopener noreferrer" className="glassmorphism p-6 flex items-center gap-6 group hover:border-purple-400/60 transition-colors border border-purple-400/20 rounded-sm">
                        <div className="p-4 bg-purple-400/10 rounded-full group-hover:bg-purple-400/20 transition-colors">
                            <Github className="text-purple-400" size={28} />
                        </div>
                        <div>
                            <p className="font-bold text-white tracking-wide">GITHUB</p>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/adityapanda33/" target="_blank" rel="noopener noreferrer" className="glassmorphism p-6 flex items-center gap-6 group hover:border-blue-500/60 transition-colors border border-blue-500/20 rounded-sm">
                        <div className="p-4 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors">
                            <Linkedin className="text-blue-500" size={28} />
                        </div>
                        <div>
                            <p className="font-bold text-white tracking-wide">LINKEDIN</p>
                        </div>
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
