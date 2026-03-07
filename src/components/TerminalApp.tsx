import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface CommandLog {
    command: string;
    output: React.ReactNode;
}

const TerminalApp: React.FC = () => {
    const [input, setInput] = useState('');
    const [logs, setLogs] = useState<CommandLog[]>([
        {
            command: 'sys info',
            output: (
                <span className="text-gray-400">
                    PANDA_OS v1.0.0 (Cybersecurity Edition)<br />
                    Type 'help' to see a list of available commands.
                </span>
            )
        }
    ]);
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [logs]);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = input.trim().toLowerCase();

        if (!cmd) return;

        let output: React.ReactNode = '';

        switch (cmd) {
            case 'help':
                output = (
                    <ul className="text-cyber-blue list-none ml-4 space-y-1">
                        <li><strong className="text-neon-green">help</strong>     - Shows this list of commands</li>
                        <li><strong className="text-neon-green">about</strong>    - Prints specialized about me info</li>
                        <li><strong className="text-neon-green">skills</strong>   - Lists technical skills</li>
                        <li><strong className="text-neon-green">projects</strong> - Shows prominent projects</li>
                        <li><strong className="text-neon-green">contact</strong>  - Returns contact information</li>
                        <li><strong className="text-neon-green">github</strong>   - Displays GitHub link</li>
                        <li><strong className="text-neon-green">resume</strong>   - Provides resume download link</li>
                        <li><strong className="text-neon-green">clear</strong>    - Clears the terminal output</li>
                    </ul>
                );
                break;
            case 'about':
                output = "Aditya Panda: Cybersecurity Enthusiast | ML Developer | CSE (AIML) Student at GIET University. Actively seeking internships.";
                break;
            case 'skills':
                output = "Programming: C, C++, Java, Python | Cyber: Network, Linux, Ethical Hacking | ML: NumPy, Pandas, Scikit-Learn";
                break;
            case 'projects':
                output = "1. Social Media Fake Account Detection\n2. PhishScanner\n3. PassForge (Ongoing)";
                break;
            case 'contact':
                output = "Email: adityaponda2020@gmail.com | Phone: 7846985364";
                break;
            case 'github':
                output = <a href="https://github.com/adityaponda" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">github.com/adityaponda</a>;
                break;
            case 'resume':
                output = <a href="/Aditya_Panda_Resume.pdf" download className="underline hover:text-white">Click here to download Aditya_Panda_Resume.pdf</a>;
                break;
            case 'clear':
                setLogs([]);
                setInput('');
                return;
            case 'sudo':
                output = <span className="text-red-500">Nice try! This incident will be reported.</span>;
                break;
            default:
                output = <span className="text-red-400">Command not found: '{cmd}'. Type 'help' for available commands.</span>;
        }

        setLogs(prev => [...prev, { command: input, output }]);
        setInput('');
    };

    return (
        <section id="terminal" className="py-20 flex flex-col justify-center min-h-[80vh]">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-white tracking-wider flex items-center gap-3">
                    <TerminalIcon className="text-neon-green" />
                    Interactive Terminal<span className="text-neon-green blink">_</span>
                </h2>
            </div>

            <div
                className="glassmorphism rounded-md overflow-hidden border border-neon-green/30 w-full max-w-4xl shadow-[0_0_20px_rgba(0,255,159,0.1)]"
                onClick={() => inputRef.current?.focus()}
            >
                {/* Terminal Header */}
                <div className="bg-black/80 px-4 py-2 flex items-center gap-2 border-b border-neon-green/20">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-2 text-xs text-gray-400 font-fira tracking-widest">root@panda_sec:~</span>
                </div>

                {/* Terminal Body */}
                <div className="p-4 h-96 overflow-y-auto font-mono text-sm md:text-base terminal-scrollbar">
                    {logs.map((log, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex gap-2 text-neon-green">
                                <span className="text-cyber-blue font-bold">root@panda_sec:~$</span>
                                <span>{log.command}</span>
                            </div>
                            <div className="mt-1 text-gray-300 ml-4 whitespace-pre-wrap">
                                {log.output}
                            </div>
                        </div>
                    ))}

                    <form onSubmit={handleCommand} className="flex gap-2 text-neon-green">
                        <span className="text-cyber-blue font-bold">root@panda_sec:~$</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="bg-transparent outline-none flex-grow text-white"
                            spellCheck="false"
                            autoComplete="off"
                        />
                    </form>
                    <div ref={bottomRef} />
                </div>
            </div>
        </section>
    );
};

export default TerminalApp;
