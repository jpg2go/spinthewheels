import React, { useRef, useEffect, useState } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';
import { WheelSegment, SpinResult } from '../types/wheel';
import SpinWheel from './SpinWheel';
import WinnerModal from './WinnerModal';
import spinMusic from '../assets/spin-music.mp3';
import applause from '../assets/applause.mp3';
import customSound from '../../sounds/sound.mp3';
import spinSound from '../../sounds/spin.mp3';
import confetti from 'canvas-confetti';

interface WheelContainerProps {
  segments: WheelSegment[];
  onSpin: (result: SpinResult) => void;
  isSpinning: boolean;
  setIsSpinning: (spinning: boolean) => void;
  title?: string;
}

const WheelContainer: React.FC<WheelContainerProps> = ({
  segments,
  onSpin,
  isSpinning,
  setIsSpinning,
  title
}) => {
  const [lastResult, setLastResult] = useState<SpinResult | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showWinnerModal, setShowWinnerModal] = useState(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const spinMusicRef = useRef<HTMLAudioElement | null>(null);
  const applauseRef = useRef<HTMLAudioElement | null>(null);
  const customSoundRef = useRef<HTMLAudioElement | null>(null);
  const spinSoundRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio context on first user interaction
  useEffect(() => {
    const initAudio = () => {
      if (!audioContext) {
        try {
          const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
          setAudioContext(ctx);
        } catch (error) {
          console.log('Audio context creation failed:', error);
        }
      }
    };

    // Initialize on any user interaction
    const handleUserInteraction = () => {
      initAudio();
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, [audioContext]);





  const playAudioFile = (audioRef: React.RefObject<HTMLAudioElement>, volume: number = 0.5) => {
    if (!soundEnabled || !audioRef.current) return;
    
    try {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = volume;
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('Audio file playback failed:', error);
        });
      }
    } catch (error) {
      console.log('Audio file playback failed:', error);
    }
  };

  const handleSpin = () => {
    if (isSpinning || segments.length === 0) return;

    setIsSpinning(true);

    // Play spin music
    playAudioFile(spinMusicRef, 0.5);

    // Play custom spin sound
    playAudioFile(spinSoundRef, 0.6);

    // Simulate spin duration
    const spinDuration = 3000 + Math.random() * 2000; // 3-5 seconds

    setTimeout(() => {
      // Select random segment based on weights
      const totalWeight = segments.reduce((sum, segment) => sum + segment.weight, 0);
      let random = Math.random() * totalWeight;

      let selectedSegment = segments[0];
      for (const segment of segments) {
        random -= segment.weight;
        if (random <= 0) {
          selectedSegment = segment;
          break;
        }
      }

      const result: SpinResult = {
        id: Date.now().toString(),
        segment: selectedSegment,
        timestamp: new Date(),
        spinDuration
      };

      setLastResult(result);
      setIsSpinning(false);
      onSpin(result);

      // Stop spin music
      if (spinMusicRef.current) {
        spinMusicRef.current.pause();
        spinMusicRef.current.currentTime = 0;
      }
      
      // Show winner modal
      setShowWinnerModal(true);
      
      // Play custom completion sound
      playAudioFile(customSoundRef, 0.8);
      
      // Play applause
      playAudioFile(applauseRef, 0.7);
      
      // Trigger confetti animation
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
        
        // Second burst after a delay
        setTimeout(() => {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 }
          });
        }, 300);
      }
    }, spinDuration);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border border-gray-200/50 h-full">
      <div className="text-center mb-6 lg:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          {title || "Your Custom Wheel"}
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          {segments.length === 0 
            ? 'Add segments to get started'
            : `${segments.length} segments ready to spin`
          }
        </p>
      </div>

      {/* Wheel */}
      <div className="flex justify-center mb-6 lg:mb-8">
        <div className="relative">
          <SpinWheel 
            segments={segments} 
            isSpinning={isSpinning}
            lastResult={lastResult}
          />
          
          {/* Center Spin Button */}
          <button
            onClick={handleSpin}
            disabled={isSpinning || segments.length === 0}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full shadow-lg border-2 sm:border-4 border-indigo-600
                      flex items-center justify-center hover:scale-110 transition-transform
                      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                      z-10"
          >
            <Play className={`w-4 h-4 sm:w-6 sm:h-6 text-indigo-600 ${isSpinning ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-6">
        <button
          onClick={handleSpin}
          disabled={isSpinning || segments.length === 0}
          className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white 
                    rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 text-sm sm:text-base
                    transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                    transform hover:scale-105 active:scale-95"
        >
          {isSpinning ? 'Spinning...' : 'Spin the Wheel'}
        </button>
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors flex-shrink-0"
          title={soundEnabled ? 'Disable sound' : 'Enable sound'}
        >
          {soundEnabled ? (
            <Volume2 className="w-5 h-5 text-gray-700" />
          ) : (
            <VolumeX className="w-5 h-5 text-gray-700" />
          )}
        </button>
        {/* Hidden audio elements */}
        <audio ref={spinMusicRef} src={spinMusic} preload="auto" />
        <audio ref={applauseRef} src={applause} preload="auto" />
        <audio ref={customSoundRef} src={customSound} preload="auto" />
        <audio ref={spinSoundRef} src={spinSound} preload="auto" />
      </div>

      {/* Last Result */}
      {lastResult && (
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 sm:p-6 border border-green-200/50">
          <div className="text-center">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              🎉 Winner!
            </h3>
            <div className="flex items-center justify-center space-x-3 mb-2">
              <div 
                className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                style={{ backgroundColor: lastResult.segment.color }}
              ></div>
              <span className="text-lg sm:text-xl font-bold text-gray-900">
                {lastResult.segment.text}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              Spun at {lastResult.timestamp.toLocaleTimeString()}
            </p>
          </div>
        </div>
      )}
      
      {/* Winner Modal */}
      <WinnerModal
        isOpen={showWinnerModal}
        onClose={() => setShowWinnerModal(false)}
        winner={lastResult?.segment || null}
      />
    </div>
  );
};

export default WheelContainer;