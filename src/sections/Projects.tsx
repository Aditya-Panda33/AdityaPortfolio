import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, CheckCircle2, CircleDashed } from 'lucide-react';

const Projects: React.FC = () => {
    const projects = [
        {
            title: "Social Media Fake Account Detection",
            status: "COMPLETED",
            desc: "A machine learning model designed to detect fraudulent or fake social media accounts. The system analyzes attributes such as follower count, following, and post activity to determine whether an account is likely fake.",
            tech: ["Python", "Machine Learning", "Data preprocessing", "Scikit-learn"]
        },
        {
            title: "PhishScanner",
            status: "COMPLETED",
            desc: "A web-based interface that detects whether an email or message is phishing. Users input the message and the model classifies it based on detection of phishing keywords and patterns.",
            tech: ["Python", "Machine Learning", "Text processing"]
        },
        {
            title: "PassForge",
            status: "COMPLETED",
            desc: "A password generator and password strength analyzer. It generates strong passwords and evaluates existing passwords to determine whether they are strong or weak.",
            tech: ["Python", "Security logic"]
        }
    ];

    return (
        <section id="projects" className="py-20 min-h-screen flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wider flex items-center gap-4">
                        <FolderGit2 className="text-neon-green" size={38} />
                        ./Projects<span className="text-neon-green blink">_</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 + 0.2 }}
                            className="glassmorphism border border-cyber-blue/20 hover:border-cyber-blue/60 hover:shadow-[0_0_15px_rgba(0,217,255,0.15)] transition-all p-6 rounded-sm flex flex-col h-full relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-150 transition-transform duration-500 pointer-events-none">
                                <FolderGit2 size={120} className="text-cyber-blue" />
                            </div>

                            <div className="flex justify-between items-start mb-4 z-10">
                                <h3 className="text-xl font-bold text-cyber-blue w-[80%]">{project.title}</h3>
                                <div title={project.status} className="mt-1">
                                    {project.status === 'COMPLETED' ? (
                                        <CheckCircle2 size={18} className="text-neon-green" />
                                    ) : (
                                        <CircleDashed size={18} className="text-yellow-400 animate-spin-slow" />
                                    )}
                                </div>
                            </div>

                            <div className="flex-grow z-10">
                                <p className="text-gray-300 text-sm font-mono leading-relaxed mb-6">
                                    {project.desc}
                                </p>
                            </div>

                            <div className="z-10 mt-auto pt-4 border-t border-cyber-blue/20">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-mono text-neon-green/80 bg-neon-green/10 px-2 py-1 rounded-sm">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
