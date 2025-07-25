import React from 'react';
import { X, Trophy, Sparkles } from 'lucide-react';
import { WheelSegment } from '../types/wheel';

interface WinnerModalProps {
  isOpen: boolean;
  onClose: () => void;
  winner: WheelSegment | null;
}

const WinnerModal: React.FC<WinnerModalProps> = ({ isOpen, onClose, winner }) => {
  if (!isOpen || !winner) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 p-8 relative animate-bounce-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Celebration Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" />
            <Trophy className="w-12 h-12 text-yellow-500" />
            <Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">🎉 Winner! 🎉</h2>
          <p className="text-lg text-gray-600">The wheel has chosen...</p>
        </div>

        {/* Winner Display */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 mb-6 border-2 border-indigo-200">
          <div className="flex items-center justify-center space-x-4">
            <div 
              className="w-8 h-8 rounded-full border-2 border-white shadow-lg"
              style={{ backgroundColor: winner.color }}
            ></div>
            <div className="text-center">
              {winner.emoji && (
                <div className="text-4xl mb-2">{winner.emoji}</div>
              )}
              <div className="text-2xl font-bold text-gray-900">{winner.text}</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
          >
            Awesome!
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
          >
            Close
          </button>
        </div>

        {/* Confetti Animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '0.1s' }}></div>
          <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-0 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '0.7s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default WinnerModal;