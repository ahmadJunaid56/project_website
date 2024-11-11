"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePath, setActivePath] = useState('/'); // Default active link
  const [scrolling, setScrolling] = useState(false); // Track scroll state

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (path) => {
    setActivePath(path); // Set the active path when a link is clicked
    setIsOpen(false); // Close mobile menu after selection
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header className={`bg-white ${scrolling ? 'bg-opacity-70 backdrop-blur-md top-0' : 'bg-opacity-90 top-4'} fixed left-4 right-4 mx-auto max-w-[95%] shadow-md transition-all duration-500 z-50`}>
        <div className="flex justify-between items-center py-4 px-8">
          {/* Logo */}
          <div className="text-2xl font-bold text-green-900">KMI Groups</div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-12"> {/* Evenly spaced links */}
            {['/', '/design-diaries', '/sheets', '/collections', '/contact'].map((path, index) => {
              const labels = ["HOME", "DESIGN DIARIES", "SHEETS", "COLLECTIONS", "CONTACT US"];
              return (
                <Link
                  key={index}
                  href={path}
                  onClick={() => handleLinkClick(path)}
                  className={`${activePath === path
                    ? 'text-green-900 font-semibold border-b-2 border-green-700'
                    : 'text-gray-600'
                    } 
                  relative 
                  hover:text-green-900 
                  after:content-[''] 
                  after:absolute 
                  after:w-full 
                  after:h-[2px] 
                  after:bg-green-700 
                  after:left-0 
                  after:-bottom-1 
                  after:scale-x-0 
                  after:transition-transform 
                  hover:after:scale-x-100`}
                >
                  {labels[index]}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? (
                <FiX className="w-6 h-6 text-gray-600" />
              ) : (
                <FiMenu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md p-4 mt-2 rounded-lg">
            {['/', '/sheets', '/catalog', '/about', '/contact'].map((path, index) => {
              const labels = ["HOME", "SHEETS", "CATALOG", "ABOUT US", "CONTACT US"];
              return (
                <Link
                  key={index}
                  href={path}
                  onClick={() => handleLinkClick(path)}
                  className={`${activePath === path
                    ? 'text-green-900 font-semibold border-b-2 border-green-700'
                    : 'text-gray-600'
                    } block py-2 relative 
                  hover:text-green-900 
                  after:content-[''] 
                  after:absolute 
                  after:w-full 
                  after:h-[2px] 
                  after:bg-green-700 
                  after:left-0 
                  after:-bottom-1 
                  after:scale-x-0 
                  after:transition-transform 
                  hover:after:scale-x-100`}
                >
                  {labels[index]}
                </Link>
              );
            })}
          </div>
        )}
      </header>
    </div>
  );
}
