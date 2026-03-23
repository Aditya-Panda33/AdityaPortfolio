import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import HackerSplash from './components/HackerSplash';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import TerminalApp from './components/TerminalApp';
import Warning from './components/Warning';
import CtfGame from './components/CtfGame';

function App() {
    const [showSplash, setShowSplash] = useState(true);
    const [isWarningPage, setIsWarningPage] = useState(false);
    const [isCtfPage, setIsCtfPage] = useState(false);

    useEffect(() => {
        if (window.location.pathname === '/warning') {
            setIsWarningPage(true);
            setShowSplash(false);
        } else if (window.location.pathname === '/ctf') {
            setIsCtfPage(true);
            setShowSplash(false);
        }
    }, []);

    const handleSplashComplete = () => {
        setShowSplash(false);
    };

    if (isWarningPage) {
        return <Warning />;
    }

    if (isCtfPage) {
        return <CtfGame />;
    }

    return (
        <>
            {showSplash ? (
                <HackerSplash onComplete={handleSplashComplete} />
            ) : (
                <Layout>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Achievements />
                    <TerminalApp />
                    <Contact />
                </Layout>
            )}
        </>
    );
}

export default App;