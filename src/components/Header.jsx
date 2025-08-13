import React, { useState, useRef, useEffect } from 'react';
import Karthick from '../logo/Karthick.jpg';

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="bg-gray-800 text-white p-4 sticky top-0 z-50 w-full">
            <div className="container mx-auto flex items-center justify-between relative w-full">
                {/* Left: Title and Socials */}
                <div className="flex items-center space-x-4">
                    <span className="text-lg font-semibold">Full Stack Developer</span>
                    <a href="https://github.com/KarthickRavi594" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/karthick05/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
                {/* Center: Name */}
                <h1 className="text-xl md:text-2xl font-bold leading-tight text-center">
                    Karthick Ravichandran
                </h1>
                {/* Right: Avatar with Dropdown */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        type="button"
                        className="w-12 h-12 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={() => setShowDropdown((prev) => !prev)}
                        aria-haspopup="true"
                        aria-expanded={showDropdown}
                        aria-label="Open user menu"
                    >
                        <img
                            src={Karthick}
                            alt="Logo"
                            className="w-12 h-12 rounded-full"
                        />
                    </button>
                    {showDropdown && (
                        <div className="absolute right-0 mt-2 w-72 bg-white text-gray-800 rounded-lg shadow-xl py-4 z-50">
                            <div className="px-6 pb-2 border-b border-gray-200">
                                <div className="font-semibold text-base text-gray-900">Karthick Ravichandran</div>
                            </div>
                            <div className="flex items-center px-6 py-3 hover:bg-gray-50 transition">
                                {/* Mail Icon */}
                                <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                    <rect width="20" height="14" x="2" y="5" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                                    <path d="M22 5L12 13 2 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                                <span className="truncate w-full">karthickravi594@gmail.com</span>
                            </div>
                            <div className="flex items-center px-6 py-3 hover:bg-gray-50 transition">
                                {/* Phone Icon */}
                                <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm10-10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 2v2m0 16v2m6-10h-2M4 12H2" />
                                </svg>
                                <span>+91 8778968934</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;