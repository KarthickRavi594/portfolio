import React from 'react';
import Karthick from '../logo/Karthick.jpg'
const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left: Navigation */}
                <nav className="flex-1">
                    <ul className="flex space-x-4">
                        <li><a href="#about" className="hover:text-gray-400">About</a></li>
                        <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
                    </ul>
                </nav>
                {/* Right: Name and Logo */}
                <div className="flex items-center space-x-4">
                    <h1 className="text-2xl font-bold">Karthick Ravichandran</h1>
                    <img src={Karthick} alt="Logo" className="w-12 h-12 rounded-full" />
                </div>
            </div>
        </header>
    );
};

export default Header;