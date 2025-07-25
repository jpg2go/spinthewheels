import React, { useState } from 'react';
import { Menu, X, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
              <RotateCcw className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              SpintheWheels
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              About Us
            </Link>
            <a href="#features" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Features
            </a>
            <Link to="/templates" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Templates
            </Link>

          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200/50">
            <nav className="space-y-4">
              <Link to="/" className="block text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                Home
              </Link>
              <Link to="/about" className="block text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                About Us
              </Link>
              <a href="#features" className="block text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                Features
              </a>
              <Link to="/templates" className="block text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                Templates
              </Link>

            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;