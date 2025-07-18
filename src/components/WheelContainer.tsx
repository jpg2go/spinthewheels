import React, { useRef, useEffect, useState } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';
import { WheelSegment, SpinResult } from '../types/wheel';
import SpinWheel from './SpinWheel';
import spinMusic from '../assets/spin-music.mp3';
import applause from '../assets/applause.mp3';

interface WheelContainerProps {
  segments: WheelSegment[];
  onSpin: (result: SpinResult) => void;
  isSpinning: boolean;
  setIsSpinning: (spinning: boolean) => void;
}

const WheelContainer: React.FC<WheelContainerProps> = ({
  segments,
  onSpin,
  isSpinning,
  setIsSpinning
}) => {
  const [lastResult, setLastResult] = useState<SpinResult | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const spinMusicRef = useRef<HTMLAudioElement | null>(null);
  const applauseRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio context for spin sound (using web audio API for compatibility)
    const createSpinSound = () => {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      const playSpinSound = () => {
        if (!soundEnabled) return;
        
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
      };

      return playSpinSound;
    };

    audioRef.current = createSpinSound as unknown as HTMLAudioElement;
  }, [soundEnabled]);

  const handleSpin = () => {
    if (isSpinning || segments.length === 0) return;

    setIsSpinning(true);

    // Play spin music
    if (spinMusicRef.current && soundEnabled) {
      spinMusicRef.current.currentTime = 0;
      spinMusicRef.current.volume = 0.5;
      spinMusicRef.current.play();
    }

    // Play sound (legacy beep)
    if (audioRef.current && soundEnabled) {
      try {
        (audioRef.current as unknown as () => void)();
      } catch (error) {
        console.log('Audio playback failed:', error);
      }
    }

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
      // Play applause
      if (applauseRef.current && soundEnabled) {
        applauseRef.current.currentTime = 0;
        applauseRef.current.volume = 0.7;
        applauseRef.current.play();
      }
    }, spinDuration);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200/50 h-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Your Custom Spinner
        </h2>
        <p className="text-gray-600">
          {segments.length === 0 
            ? 'Add segments to get started'
            : `${segments.length} segments ready to spin`
          }
        </p>
      </div>

      {/* Wheel */}
      <div className="flex justify-center mb-8">
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
                      w-16 h-16 bg-white rounded-full shadow-lg border-4 border-indigo-600
                      flex items-center justify-center hover:scale-110 transition-transform
                      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                      z-10"
          >
            <Play className={`w-6 h-6 text-indigo-600 ${isSpinning ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center space-x-4 mb-6">
        <button
          onClick={handleSpin}
          disabled={isSpinning || segments.length === 0}
          className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white 
                    rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 
                    transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                    transform hover:scale-105 active:scale-95"
        >
          {isSpinning ? 'Spinning...' : 'Spin the Spinner'}
        </button>
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
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
      </div>

      {/* Last Result */}
      {lastResult && (
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200/50">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              🎉 Winner!
            </h3>
            <div className="flex items-center justify-center space-x-3 mb-2">
              <div 
                className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                style={{ backgroundColor: lastResult.segment.color }}
              ></div>
              <span className="text-xl font-bold text-gray-900">
                {lastResult.segment.text}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Spun at {lastResult.timestamp.toLocaleTimeString()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WheelContainer;