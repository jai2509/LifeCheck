import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              LifeCheck+
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-pink-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-pink-600 transition-colors">How It Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-pink-600 transition-colors">Pricing</a>
            <a href="#testimonials" className="text-gray-600 hover:text-pink-600 transition-colors">Reviews</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-pink-600 transition-colors">Sign In</button>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Start Free Scan
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-pink-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-pink-600 transition-colors">How It Works</a>
              <a href="#pricing" className="text-gray-600 hover:text-pink-600 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-600 hover:text-pink-600 transition-colors">Reviews</a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                <button className="text-gray-600 hover:text-pink-600 transition-colors text-left">Sign In</button>
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all">
                  Start Free Scan
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;