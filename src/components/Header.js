'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setIsCoursesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsCoursesDropdownOpen(false);
    }, 300); // 300ms delay
    setDropdownTimeout(timeout);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center gap-1">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="https://ik.imagekit.io/hbyj63led/Gemini_Generated_Image_1es3qy1es3qy1es3.png?updatedAt=1760686038384"
                alt="Professional Beauty Academy Logo"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>

            {/* Divider */}
            <div className="h-12 w-px bg-gray-400 mx-2"></div>

            {/* Text */}
            <div className="flex flex-col leading-tight">
              <div className="font-serif font-bold lg:text-[30px] lg:tracking-[3px] sm:tracking-[2px] sm:text-[20px] md:text-lg text-gray-900">
                The Professional
                <br className="block lg:hidden" /> {/* 👈 visible only on small/medium screens */}
                <span className="lg:ml-2">Beauty Academy</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/about" className="text-black hover:text-gray-600 transition-colors font-medium">
              About Us
            </a>
            <div 
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className="text-black hover:text-gray-600 transition-colors font-medium flex items-center"
                onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)}
              >
                Courses
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Courses Dropdown */}
              <div className={`absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 transition-all duration-300 ease-in-out ${
                isCoursesDropdownOpen 
                  ? 'opacity-100 visible transform translate-y-0' 
                  : 'opacity-0 invisible transform -translate-y-2'
              }`}>
                  <div className="py-2">
                    {/* Beautician */}
                    <div className="px-4 py-2">
                      <a href="/beautician" className="block font-semibold text-black text-sm uppercase tracking-wide hover:text-gray-600 transition-colors">
                        Beautician
                      </a>
                      <div className="ml-4 mt-1">
                        <a href="/beautician" className="block py-1 text-gray-600 hover:text-black transition-colors text-sm">
                          Basic Course
                        </a>
                        <a href="/beautician" className="block py-1 text-gray-600 hover:text-black transition-colors text-sm">
                          Advanced Courses
                        </a>
                        <a href="/beautician" className="block py-1 text-gray-600 hover:text-black transition-colors text-sm">
                          Diploma Courses
                        </a>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-100"></div>
                    
                    {/* Nail Art */}
                    <div className="px-4 py-2">
                      <a href="/nail-art" className="block font-semibold text-black text-sm uppercase tracking-wide hover:text-gray-600 transition-colors">
                        Nail Art
                      </a>
                    </div>
                    
                    <div className="border-t border-gray-100"></div>
                    
                    {/* Tattoo */}
                    <div className="px-4 py-2">
                      <a href="/tattoo" className="block font-semibold text-black text-sm uppercase tracking-wide hover:text-gray-600 transition-colors">
                        Tattoo
                      </a>
                    </div>
                    
                    <div className="border-t border-gray-100"></div>
                    
                    {/* Mehendi */}
                    <div className="px-4 py-2">
                      <a href="/mehendi" className="block font-semibold text-black text-sm uppercase tracking-wide hover:text-gray-600 transition-colors">
                        Mehendi
                      </a>
                    </div>
                  </div>
                </div>
            </div>
            <button 
              onClick={() => {
                const enrollSection = document.getElementById('enrollment-form');
                if (enrollSection) {
                  enrollSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-black text-white px-6 py-2 font-medium hover:bg-gray-800 transition-colors btn-primary"
            >
              Enroll Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/about" className="block px-3 py-2 text-black font-medium">About Us</a>
              
              {/* Mobile Courses Dropdown */}
              <div className="px-3 py-2">
                <button 
                  onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)}
                  className="flex items-center justify-between w-full text-black font-medium"
                >
                  Courses
                  <svg className={`h-4 w-4 transition-transform ${isCoursesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isCoursesDropdownOpen && (
                  <div className="mt-2 ml-4 space-y-1">
                    <a href="/beautician" className="block text-sm font-semibold text-gray-700 uppercase tracking-wide hover:text-black transition-colors">Beautician</a>
                    <a href="/beautician" className="block ml-3 py-1 text-gray-600 text-sm hover:text-black transition-colors">Basic Course</a>
                    <a href="/beautician" className="block ml-3 py-1 text-gray-600 text-sm hover:text-black transition-colors">Advanced Courses</a>
                    <a href="/beautician" className="block ml-3 py-1 text-gray-600 text-sm hover:text-black transition-colors">Diploma Courses</a>
                    
                    <a href="/nail-art" className="block py-1 text-gray-700 text-sm font-medium mt-3 hover:text-black transition-colors">Nail Art</a>
                    <a href="/tattoo" className="block py-1 text-gray-700 text-sm font-medium hover:text-black transition-colors">Tattoo</a>
                    <a href="/mehendi" className="block py-1 text-gray-700 text-sm font-medium hover:text-black transition-colors">Mehendi</a>
                  </div>
                )}
              </div>
              
              <button 
                onClick={() => {
                  const enrollSection = document.getElementById('enrollment-form');
                  if (enrollSection) {
                    enrollSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="block w-full text-left px-3 py-2 bg-black text-white font-medium"
              >
                Enroll Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
