import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

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
                            <h3 className="text-sm text-gray-400 font-mono mb-1">EMAIL</h3>
                            <p className="font-bold text-white tracking-wide">adityaponda2020@gmail.com</p>
                        </div>
                    </a>

                    <a href="tel:7846985364" className="glassmorphism p-6 flex items-center gap-6 group hover:border-cyber-blue/60 transition-colors border border-cyber-blue/20 rounded-sm">
                        <div className="p-4 bg-cyber-blue/10 rounded-full group-hover:bg-cyber-blue/20 transition-colors">
                            <Phone className="text-cyber-blue" size={28} />
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-400 font-mono mb-1">PHONE</h3>
                            <p className="font-bold text-white tracking-wide">+91 78469 85364</p>
                        </div>
                    </a>

                    <a id="github" href="https://github.com/adityaponda" target="_blank" rel="noopener noreferrer" className="glassmorphism p-6 flex items-center gap-6 group hover:border-purple-400/60 transition-colors border border-purple-400/20 rounded-sm">
                        <div className="p-4 bg-purple-400/10 rounded-full group-hover:bg-purple-400/20 transition-colors">
                            <Github className="text-purple-400" size={28} />
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-400 font-mono mb-1">GITHUB</h3>
                            <p className="font-bold text-white tracking-wide">github.com/adityaponda</p>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/aditya-panda-04048b321/" target="_blank" rel="noopener noreferrer" className="glassmorphism p-6 flex items-center gap-6 group hover:border-blue-500/60 transition-colors border border-blue-500/20 rounded-sm">
                        <div className="p-4 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors">
                            <Linkedin className="text-blue-500" size={28} />
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-400 font-mono mb-1">LINKEDIN</h3>
                            <p className="font-bold text-white tracking-wide flex flex-col md:block">
                                <span>aditya-panda-</span>
                                <span>04048b321</span>
                            </p>
                        </div>
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
