import React from 'react';

const Warning: React.FC = () => {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
            <div className="border border-red-500/30 p-8 max-w-2xl text-center glassmorphism bg-black/80 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50 animate-pulse"></div>
                
                <h1 className="text-4xl md:text-6xl font-black text-red-500 mb-6 tracking-widest uppercase blink">
                    WARNING
                </h1>
                
                <p className="text-xl md:text-2xl text-red-400 font-mono mb-8 leading-relaxed">
                    You might have got hacked. Do not believe these types of links.
                </p>
                
                <div className="text-red-500/50 font-mono text-sm mb-8 space-y-2">
                    <p>＞ SYSTEM COMPROMISE DETECTED_</p>
                    <p>＞ UNAUTHORIZED ACCESS BLOCKED_</p>
                </div>
                
                <a href="/" className="inline-block px-6 py-3 border border-red-500/50 text-red-500 hover:bg-red-500/10 hover:border-red-500 font-mono transition-colors">
                    [ Return to Safety ]
                </a>
            </div>
        </div>
    );
};

export default Warning;
