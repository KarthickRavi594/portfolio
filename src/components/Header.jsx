import React from 'react';
import Karthick from '../logo/Karthick.jpg';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                {/* Left: Navigation */}
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#about" className="hover:text-gray-400">About</a></li>
                        <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
                    </ul>
                </nav>

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
