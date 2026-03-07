import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 min-h-[70vh] flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center gap-4 mb-8">
                    <Terminal className="text-neon-green" size={32} />
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wider">
                        ./About<span className="text-neon-green blink">_</span>
                    </h2>
                </div>

                <div className="glassmorphism p-8 rounded-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-neon-green/50 group-hover:bg-neon-green transition-colors"></div>

                    <div className="grid md:grid-cols-3 gap-8 text-gray-300 font-mono text-sm md:text-base leading-relaxed">
                        <div className="md:col-span-2 space-y-6">
                            <p>
                                <span className="text-cyber-blue font-bold">Aditya Panda</span> is a Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning at GIET University. I have a strong interests in cybersecurity, ethical hacking, and machine learning based security systems.
                            </p>
                            <p>
                                I enjoy building practical applications that combine machine learning with cybersecurity concepts, such as fake account detection and phishing detection systems.
                            </p>
                            <p className="text-neon-green/80">
                                &gt; Actively seeking opportunities to contribute to real-world systems through internships in machine learning, cybersecurity, and software development.
                            </p>
                        </div>

                        <div className="space-y-4 border-l border-neon-green/20 pl-6">
                            <h3 className="text-white font-bold mb-4 text-lg border-b border-cyber-blue/30 pb-2">Education</h3>

                            <div>
                                <strong className="text-neon-green">B.Tech CSE (AIML)</strong>
                                <p className="text-xs mt-1">GIET University</p>
                                <p className="text-xs text-cyber-blue">2024 &ndash; 2028 | GPA: 7.55</p>
                            </div>

                            <div className="pt-2">
                                <strong className="text-neon-green">Intermediate</strong>
                                <p className="text-xs mt-1">Lakshmipat Singhania Public School</p>
                                <p className="text-xs text-cyber-blue">Completed in 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
