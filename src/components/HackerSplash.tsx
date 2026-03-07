import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HackerSplashProps {
    onComplete: () => void;
}

const HackerSplash: React.FC<HackerSplashProps> = ({ onComplete }) => {
    const [text, setText] = useState('');
    const [showAccessGranted, setShowAccessGranted] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const fullText = "INITIALIZING SECURE CONNECTION...\nESTABLISHING PROTOCOLS...\nBYPASSING MAINFRAME...\nDECRYPTING ASSETS...\n\nACCESS GRANTED.";

    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;

                if (fullText.slice(0, currentIndex).endsWith("ACCESS GRANTED.")) {
                    setShowAccessGranted(true);
                }
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setIsVisible(false);
                    setTimeout(onComplete, 500); // Wait for fade out animation
                }, 1200);
            }
        }, 40);

        return () => clearInterval(typingInterval);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                    className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono p-6"
                >
                    <div className="w-full max-w-2xl text-left">
                        <pre className="text-neon-green text-sm md:text-base whitespace-pre-wrap flex flex-col gap-2">
                            {text}
                            {!showAccessGranted && <span className="animate-blink block w-3 h-5 bg-neon-green mt-1"></span>}
                        </pre>

                        {showAccessGranted && (
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="mt-8 text-center"
                            >
                                <h1 className="text-4xl md:text-6xl font-bold text-neon-green text-shadow-neon tracking-widest">
                                    WELCOME
                                </h1>
                                <p className="text-cyber-blue mt-4">System Online // PANDA_SEC</p>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default HackerSplash;
