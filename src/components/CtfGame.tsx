import React, { useState, useEffect, useRef } from 'react';

const CtfGame: React.FC = () => {
    const [stage, setStage] = useState<'init' | 'rules' | 'q1' | 'q2' | 'q3' | 'victory'>('init');
    const [input, setInput] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [glitchTrigger, setGlitchTrigger] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    // Auto-focus input
    useEffect(() => {
        const handleClick = () => inputRef.current?.focus();
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    // Initial dramatic pause
    useEffect(() => {
        if (stage === 'init') {
            const timer = setTimeout(() => {
                setStage('rules');
            }, 2500);
            return () => clearTimeout(timer);
        }
    }, [stage]);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = input.trim().toLowerCase();
        
        if (!cmd) return;
        setErrorMsg('');

        if (stage === 'rules') {
            if (cmd === 'yes') {
                setStage('q1');
            } else if (cmd === 'no') {
                window.location.href = '/';
            } else {
                setErrorMsg("INVALID RESPONSE. EXPECTED: 'yes' OR 'no'.");
            }
        } else if (stage === 'q1' || stage === 'q2' || stage === 'q3') {
            if (cmd.startsWith("submit_flag ")) {
                const submittedFlag = cmd.replace("submit_flag ", "").trim().toLowerCase();
                
                if (stage === 'q1' && (submittedFlag === "flag<uncrowned_utra_ledgends>" || submittedFlag === "flag<uncrowned_ultra_legends>")) {
                    setStage('q2');
                } else if (stage === 'q2' && submittedFlag === "flag<ninja_slayground>") {
                    setStage('q3');
                } else if (stage === 'q3' && submittedFlag === "flag<cyber_ready>") {
                    setStage('victory');
                } else {
                    setErrorMsg(">>> ERROR: INCORRECT FLAG. THE SYSTEM IS WATCHING YOU. <<<");
                }
            } else if (cmd === 'exit' || cmd === 'quit') {
                 window.location.href = '/';
            } else {
                setErrorMsg("INVALID COMMAND. USE: submit_flag <flag>");
            }
        } else if (stage === 'victory') {
             if (cmd === 'exit' || cmd === 'main') {
                 window.location.href = '/';
             }
        }

        if (errorMsg !== "") {
            setGlitchTrigger(prev => prev + 1);
        }

        setInput('');
    };

    if (stage === 'init') {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center p-4 crt relative">
                <p className="text-red-500 font-mono text-xl md:text-3xl blink tracking-widest uppercase glitch-effect shadow-[0_0_20px_rgba(255,0,0,0.5)]">
                    SYSTEM COMPROMISE DETECTED...
                </p>
            </div>
        );
    }

    return (
        <div className={`min-h-screen bg-black p-4 md:p-12 font-mono text-sm md:text-base flex flex-col justify-between crt relative overflow-hidden ${errorMsg ? 'bg-red-900/10' : ''}`} key={glitchTrigger}>
            <div className="max-w-4xl mx-auto w-full">
                
                {/* Header Section */}
                <div className="mb-12 border-b border-red-500/50 pb-6">
                    <h1 className="text-red-500 text-3xl md:text-5xl font-bold uppercase tracking-widest blink mb-4">
                        &gt;&gt;&gt; THE ABYSS &lt;&lt;&lt;
                    </h1>
                    <p className="text-gray-400">OSINT Gauntlet Protocol: ACTIVE.</p>
                </div>

                {/* Content Section based on Stage */}
                <div className="mb-8 space-y-6">
                    
                    {stage === 'rules' && (
                        <div className="space-y-4 animate-fade-in text-yellow-500">
                             <p className="text-red-500 font-bold text-xl">SYSTEM WARNING: UNKNOWN PROTOCOL INITIATED.</p>
                             <p>You have entered the OSINT Gauntlet. There is no turning back.</p>
                             
                             <div className="mt-8">
                                <p className="font-bold underline mb-2">RULES OF ENGAGEMENT:</p>
                                <ul className="list-disc ml-6 space-y-2">
                                    <li>Use any type of AI or tool you need.</li>
                                    <li>Replace all spaces in your answers with underscores '_'.</li>
                                    <li>If you need to emergency abort, type: <span className="text-red-500">exit</span></li>
                                    <li>Submit answers in the format: <span className="text-neon-green">submit_flag {"<answer>"}</span></li>
                                </ul>
                            </div>

                             <p className="mt-8 text-xl blink animate-pulse">ARE YOU SURE YOU WANT TO PLAY A GAME? (yes/no)</p>
                        </div>
                    )}

                    {stage === 'q1' && (
                        <div className="space-y-4 animate-fade-in">
                            <p className="text-neon-green font-bold">&gt;&gt;&gt; INITIALIZATION COMPLETE. ACCESS GRANTED TO STAGE 1. &lt;&lt;&lt;</p>
                            <p className="text-cyber-blue font-bold text-xl">QUESTION 1/3:</p>
                            <p className="text-gray-300 text-lg typewriter">What is the name of my 10th batch?</p>
                            <p className="text-gray-500 text-sm mt-4 border border-gray-800 p-3 bg-gray-900/50 inline-block shadow-[0_0_10px_rgba(0,255,159,0.1)]">
                                HINT: Visual highlights fade, but digital stories remain. Seek the un-crowned kings in my captured moments.
                            </p>
                        </div>
                    )}

                    {stage === 'q2' && (
                        <div className="space-y-4 animate-fade-in">
                            <p className="text-neon-green font-bold">&gt;&gt;&gt; FLAG 1 ACCEPTED. ACCESS GRANTED TO STAGE 2. &lt;&lt;&lt;</p>
                            <p className="text-cyber-blue font-bold text-xl">QUESTION 2/3:</p>
                            <p className="text-gray-300 text-lg typewriter" style={{ animationDelay: '0.1s' }}>What is the name of the coding competition I participated in?</p>
                            <p className="text-gray-500 text-sm mt-4 border border-gray-800 p-3 bg-gray-900/50 inline-block shadow-[0_0_10px_rgba(0,255,159,0.1)]">
                                HINT: Professionals build networks, ninjas slay bugs. Search my history of connections and careers.
                            </p>
                        </div>
                    )}

                    {stage === 'q3' && (
                        <div className="space-y-4 animate-fade-in">
                            <p className="text-neon-green font-bold">&gt;&gt;&gt; FLAG 2 ACCEPTED. ACCESS GRANTED TO FINAL STAGE. &lt;&lt;&lt;</p>
                            <p className="text-cyber-blue font-bold text-xl">QUESTION 3/3:</p>
                            <p className="text-gray-300 text-lg typewriter" style={{ animationDelay: '0.1s' }}>What is the rarest badge I am owning in the cybersecurity learning path?</p>
                            <p className="text-gray-500 text-sm mt-4 border border-gray-800 p-3 bg-gray-900/50 inline-block shadow-[0_0_10px_rgba(0,255,159,0.1)]">
                                HINT: The dark web requires preparation. A rare 8.6% anomaly proves you are ready inside the hacker training rooms.
                            </p>
                        </div>
                    )}

                    {stage === 'victory' && (
                        <div className="space-y-4 animate-fade-in border border-neon-green p-8 bg-neon-green/10">
                            <p className="font-bold text-2xl md:text-4xl text-neon-green blink mb-4">
                                &gt;&gt;&gt; SYSTEM OVERRIDE COMPLETE: ALL FLAGS CAPTURED &lt;&lt;&lt;
                            </p>
                            <p className="text-white text-lg">Congratulations, Hacker. You have successfully navigated the OSINT Gauntlet.</p>
                            <p className="text-gray-400">Your reconnaissance skills are formidable.</p>
                            
                            <p className="mt-8 text-cyber-blue animate-pulse">Type 'exit' or 'main' to return to safe airspace.</p>
                        </div>
                    )}

                    {errorMsg && (
                        <div className="text-red-500 font-bold mt-4 animate-bounce">
                            {errorMsg}
                        </div>
                    )}

                </div>

            </div>

            {/* Input Section */}
            {stage !== 'victory' && (
                <div className="max-w-4xl mx-auto w-full mt-auto pt-8">
                    <form onSubmit={handleCommand} className="flex gap-3 text-neon-green w-full border-t border-gray-800 pt-6">
                        <span className="text-red-500 font-bold">root@abyss:~$</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="bg-transparent outline-none flex-grow text-white w-full"
                            spellCheck="false"
                            autoComplete="off"
                            autoFocus
                        />
                    </form>
                </div>
            )}
            {stage === 'victory' && (
                <div className="max-w-4xl mx-auto w-full mt-auto pt-8">
                    <form onSubmit={handleCommand} className="flex gap-3 text-neon-green w-full border-t border-gray-800 pt-6">
                        <span className="text-neon-green font-bold">root@override:~$</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="bg-transparent outline-none flex-grow text-white w-full"
                            spellCheck="false"
                            autoComplete="off"
                            autoFocus
                        />
                    </form>
                </div>
            )}
            
            {/* Embedded styles for extreme hacker aesthetics */}
            <style dangerouslySetInnerHTML={{__html: `
                .crt::before {
                    content: " ";
                    display: block;
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
                    z-index: 2;
                    background-size: 100% 2px, 3px 100%;
                    pointer-events: none;
                }
                .crt::after {
                    content: " ";
                    display: block;
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    background: rgba(0, 255, 159, 0.03);
                    z-index: 2;
                    pointer-events: none;
                    animation: flicker 0.15s infinite;
                }
                @keyframes flicker {
                    0% { opacity: 0.95; }
                    5% { opacity: 0.85; }
                    10% { opacity: 0.95; }
                    15% { opacity: 1; }
                    100% { opacity: 1; }
                }
                .typewriter {
                    overflow: hidden;
                    white-space: nowrap;
                    margin: 0;
                    letter-spacing: .15em;
                    animation: typing 1.5s steps(40, end);
                }
                @keyframes typing {
                    from { width: 0 }
                    to { width: 100% }
                }
                .glitch-effect {
                    animation: glitch-anim 0.3s cubic-bezier(.25, .46, .45, .94) both infinite;
                }
                @keyframes glitch-anim {
                    0% { transform: translate(0) }
                    20% { transform: translate(-2px, 2px) }
                    40% { transform: translate(-2px, -2px) }
                    60% { transform: translate(2px, 2px) }
                    80% { transform: translate(2px, -2px) }
                    100% { transform: translate(0) }
                }
            `}} />
        </div>
    );
};

export default CtfGame;
