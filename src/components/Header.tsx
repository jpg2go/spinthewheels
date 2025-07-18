import React, { useState } from 'react';
import { Menu, X, RotateCcw, Share2, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white border-b border-gray-100 sticky top-0 shadow-lg backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 md:h-24">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <RotateCcw className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl md:text-3xl font-bold text-gray-900">
              SpintheSpinner
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors font-semibold text-lg">
              Features
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors font-semibold text-lg">
              About
            </a>
            <div className="flex items-center space-x-5">
              <button className="flex items-center space-x-2 px-5 py-3 text-gray-600 hover:text-gray-900 border border-gray-300 rounded-xl hover:border-gray-400 transition-colors font-semibold">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
              <button className="flex items-center space-x-2 px-5 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-colors font-semibold shadow-lg">
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-100">
            <nav className="space-y-5">
              <a href="#features" className="block text-gray-600 hover:text-gray-900 transition-colors font-semibold text-lg">
                Features
              </a>
              <a href="#about" className="block text-gray-600 hover:text-gray-900 transition-colors font-semibold text-lg">
                About
              </a>
              <div className="pt-5 space-y-4">
                <button className="w-full flex items-center justify-center space-x-2 px-5 py-3 text-gray-600 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors font-semibold">
                  <Share2 className="w-4 h-4" />
                  <span>Share Wheel</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 px-5 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-colors font-semibold shadow-lg">
                  <Download className="w-4 h-4" />
                  <span>Export Wheel</span>
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