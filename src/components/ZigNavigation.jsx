import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const ZigNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center px-12 py-6">
        <div className="flex-1 me-8">
          <img src="/api/placeholder/120/40?text=THE+ZIG+GROUP&bgcolor=black&textcolor=white" alt="THE ZIG GROUP" className="h-10" />
        </div>
        <div className="flex-[2] flex justify-center gap-12">
          <a href="/about.html" className="hover:text-orange-500 font-light ms-8">ABOUT US</a>
          <a href="/customer-stories.html" className="hover:text-orange-500 font-light">CUSTOMER STORIES</a>
          <a href="/blog.html" className="hover:text-orange-500 font-light">BLOG</a>
          <a href="/careers.html" className="hover:text-orange-500 font-light me-8">WE ARE HIRING!</a>
        </div>
        <div className="flex-1 flex justify-end">
          <button className="bg-orange-500 px-8 py-3 rounded hover:bg-orange-600 font-light whitespace-nowrap text-base sm:text-lg">
            CONTACT US
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between px-6 py-4">
          <img src="/api/placeholder/120/40?text=THE+ZIG+GROUP&bgcolor=black&textcolor=white" alt="THE ZIG GROUP" className="h-8" />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black z-50 pt-20">
            <div className="flex flex-col items-center space-y-8">
              <a href="/about.html" className="text-xl hover:text-orange-500 font-light">ABOUT US</a>
              <a href="/customer-stories.html" className="text-xl hover:text-orange-500 font-light">CUSTOMER STORIES</a>
              <a href="/blog.html" className="text-xl hover:text-orange-500 font-light">BLOG</a>
              <a href="/careers.html" className="text-xl hover:text-orange-500 font-light">WE ARE HIRING!</a>
              <button className="bg-orange-500 px-8 py-3 rounded hover:bg-orange-600 font-light mt-4">
                CONTACT US
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default ZigNavigation;