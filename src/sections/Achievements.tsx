import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, FileText, Download } from 'lucide-react';

const Achievements: React.FC = () => {
    return (
        <section id="achievements" className="py-20 flex flex-col justify-center">
            <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-white tracking-wider flex items-center gap-3">
                            <Trophy className="text-yellow-400" />
                            Achievements<span className="text-neon-green blink">_</span>
                        </h2>
                    </div>

                    <div className="glassmorphism p-8 border border-yellow-400/30 rounded-sm relative group overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-400/10 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>

                        <h3 className="text-2xl font-bold text-yellow-400 mb-2">Jury Award</h3>
                        <p className="text-white font-bold tracking-wide mb-4">GIET University</p>

                        <p className="text-gray-300 font-mono leading-relaxed mt-4 border-l-2 border-yellow-400/50 pl-4">
                            Received the Jury Award at <strong className="text-white">Srujanathon</strong> during the tech fest <strong className="text-white">Srujan 4.0</strong> for technical innovation.
                        </p>
                    </div>

                    <div className="glassmorphism p-8 border border-neon-green/30 rounded-sm relative group overflow-hidden mt-8">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-neon-green/10 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-neon-green mb-1">Technical Co-Lead</h3>
                                <p className="text-white font-bold tracking-wide">Cyber Security Club, GIET University</p>
                            </div>
                        </div>

                        <p className="text-gray-300 font-mono leading-relaxed mt-4 border-l-2 border-neon-green/50 pl-4">
                            Technical Co-Lead at the Cyber Security Club, GIET University — leading technical initiatives, cybersecurity projects, and CTF challenges.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-white tracking-wider flex items-center gap-3">
                            <FileText className="text-cyber-blue" />
                            Resume<span className="text-neon-green blink">_</span>
                        </h2>
                    </div>

                    <div className="glassmorphism p-8 border border-cyber-blue/30 rounded-sm flex flex-col justify-between h-[calc(100%-4rem)]">
                        <div>
                            <p className="text-gray-300 font-mono leading-relaxed mb-6">
                                Download my complete resume for a detailed overview of my experience, skills, and academic background.
                            </p>

                            <div className="bg-black/40 p-4 border border-dark rounded-sm flex items-center gap-4 mb-8">
                                <FileText className="text-neon-green" size={32} />
                                <div>
                                    <h4 className="font-bold text-white">Aditya_Panda_Resume.pdf</h4>
                                    <p className="text-xs text-cyber-blue font-mono">PDF Document // ~120KB</p>
                                </div>
                            </div>
                        </div>

                        <a href="/Aditya_Panda_Resume.pdf" download className="group relative w-full px-6 py-4 font-mono font-bold text-black bg-cyber-blue hover:bg-white transition-all overflow-hidden flex items-center justify-center gap-3 rounded-sm">
                            <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                            <span className="relative z-10 text-lg">INITIALIZE_DOWNLOAD</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;
