import React from 'react';
import { RotateCcw, Heart, Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <RotateCcw className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold text-gray-900">
                SpintheSpinner
              </span>
            </div>
            <p className="text-gray-600 mb-8 max-w-md text-lg leading-relaxed">
              Create, spin, and decide. SpintheSpinner makes every choice fun and easy. Use it for games, meetings, or whenever you need a little randomness in your day.
            </p>
            <div className="flex space-x-5">
              <a 
                href="#" 
                className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors text-gray-600 shadow-sm"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors text-gray-600 shadow-sm"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors text-gray-600 shadow-sm"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-900">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-lg">
                  Features
                </a>
              </li>
              <li>
                <a href="#templates" className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-lg">
                  Templates
                </a>
              </li>
              <li>
                <a href="#help" className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-lg">
                  Help & Support
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-lg">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-900">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a href="#tutorial" className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-lg">
                  Tutorial
                </a>
              </li>
              <li>
                <a href="#examples" className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-lg">
                  Examples
                </a>
              </li>
              <li>
                <a href="#api" className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-lg">
                  API Docs
                </a>
              </li>
              <li>
                <a href="#community" className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-lg">
                  Community
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-600 mb-6 md:mb-0 text-lg">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>by the SpintheWheels team</span>
          </div>
          <div className="text-gray-600 text-lg">
            © 2025 SpintheSpinner. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;