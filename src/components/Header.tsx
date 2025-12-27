import React from 'react';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
    return (
        <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {/* Placeholder for Logo if image is not available, using text for now or simple SVG */}
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                        B
                    </div>
                    <span className="text-xl font-bold tracking-tight text-primary">BYTE STRATEGY</span>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <a href="#" className="text-secondary hover:text-primary font-medium transition-colors">Features</a>
                    <a href="#" className="text-secondary hover:text-primary font-medium transition-colors">Testimonials</a>
                    <a href="#" className="text-secondary hover:text-primary font-medium transition-colors">Pricing</a>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <button className="text-primary font-semibold hover:text-primary/80 transition-colors">
                        Sign In
                    </button>
                    <button className="bg-primary text-white px-5 py-2.5 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg">
                        Get Started
                    </button>
                </div>

                <button className="md:hidden text-secondary p-2">
                    <Menu className="w-6 h-6" />
                </button>
            </div>
        </header>
    );
};

export default Header;
