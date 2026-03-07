import React, { useState } from 'react';
import Layout from './components/Layout';
import HackerSplash from './components/HackerSplash';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import TerminalApp from './components/TerminalApp';

function App() {
    const [showSplash, setShowSplash] = useState(true);

    const handleSplashComplete = () => {
        setShowSplash(false);
    };

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
