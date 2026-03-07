import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MatrixRain from './MatrixRain';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="relative min-h-screen flex flex-col pt-16 font-mono">
            <MatrixRain />
            <Navbar />
            <main className="flex-grow z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
