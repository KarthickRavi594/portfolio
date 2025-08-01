import React from 'react';
import Karthick from '../logo/Karthick.jpg';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                {/* Left: Navigation */}
                <div className="flex items-center space-x-4">
                    <span className="text-lg font-semibold">Full Stack Developer</span>
                    {/* Example social icons */}
                    <a href="https://github.com/KarthickRavi594" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/karthick05/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
                {/* Right: Name and Avatar */}
                <div className="flex items-center space-x-4 text-center md:text-left">
                    <h1 className="text-xl md:text-2xl font-bold leading-tight">
                        Karthick <br className="block md:hidden" /> Ravichandran
                    </h1>
                    <img src={Karthick} alt="Logo" className="w-12 h-12 rounded-full" />
                </div>
            </div>
        </header>
    );
};

export default Header;
