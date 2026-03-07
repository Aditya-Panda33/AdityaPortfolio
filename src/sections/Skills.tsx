import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ShieldAlert, Cpu, Database, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
    const categories = [
        {
            title: "Programming",
            icon: <Code2 className="text-cyber-blue" />,
            skills: ["C", "C++", "Java", "Python"]
        },
        {
            title: "Cybersecurity",
            icon: <ShieldAlert className="text-red-400" />,
            skills: ["Computer Networks", "Linux", "Ethical Hacking Fundamentals"]
        },
        {
            title: "Machine Learning",
            icon: <Cpu className="text-neon-green" />,
            skills: ["NumPy", "Pandas", "Scikit-Learn"]
        },
        {
            title: "Data Structures",
            icon: <Database className="text-purple-400" />,
            skills: ["C++ DSA"]
        },
        {
            title: "Tools",
            icon: <Wrench className="text-yellow-400" />,
            skills: ["Git", "Jupyter Notebook", "Kali Linux"]
        }
    ];

    return (
        <section id="skills" className="py-20 min-h-[70vh] flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wider flex items-center gap-4">
                        <span className="text-cyber-blue">sudo</span> apt-get install skills<span className="text-neon-green blink">_</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glassmorphism p-6 rounded-sm border border-neon-green/20 hover:border-neon-green/60 transition-colors group"
                        >
                            <div className="flex items-center gap-3 mb-6 border-b border-dark/50 pb-3">
                                {category.icon}
                                <h3 className="font-bold text-white tracking-wide">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-2 py-1 bg-black/50 text-neon-green text-xs font-mono font-semibold border border-neon-green/30 group-hover:border-neon-green/80 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
