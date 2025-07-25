import React, { useEffect, useState } from 'react';
import { WheelSegment, SpinResult } from '../types/wheel';

interface SpinWheelProps {
  segments: WheelSegment[];
  isSpinning: boolean;
  lastResult: SpinResult | null;
}

const SpinWheel: React.FC<SpinWheelProps> = ({ segments, isSpinning }) => {
  const [rotation, setRotation] = useState(0);
  const [wheelSize, setWheelSize] = useState(480);
  const centerX = wheelSize / 2;
  const centerY = wheelSize / 2;
  const radius = wheelSize / 2 - 20;

  useEffect(() => {
    const updateWheelSize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) { // sm breakpoint
        setWheelSize(280);
      } else if (screenWidth < 768) { // md breakpoint
        setWheelSize(360);
      } else {
        setWheelSize(480);
      }
    };

    updateWheelSize();
    window.addEventListener('resize', updateWheelSize);
    return () => window.removeEventListener('resize', updateWheelSize);
  }, []);

  useEffect(() => {
    if (isSpinning) {
      // Generate random rotation (multiple full rotations + random angle)
      const spins = 8 + Math.random() * 8; // 8-16 full rotations
      const finalAngle = Math.random() * 360;
      const totalRotation = rotation + (spins * 360) + finalAngle;
      setRotation(totalRotation);
    }
  }, [isSpinning, rotation]);

  if (segments.length === 0) {
    return (
      <div 
        className="rounded-full border-2 sm:border-4 border-gray-300 border-dashed bg-gray-50 flex items-center justify-center"
        style={{ width: wheelSize, height: wheelSize }}
      >
        <div className="text-center">
          <div className="text-2xl sm:text-4xl mb-2">🎡</div>
          <p className="text-xs sm:text-sm text-gray-500 font-medium px-4">Add segments to create your wheel</p>
        </div>
      </div>
    );
  }

  const anglePerSegment = 360 / segments.length;

  const createSegmentPath = (index: number): string => {
    const startAngle = (index * anglePerSegment - 90) * (Math.PI / 180);
    const endAngle = ((index + 1) * anglePerSegment - 90) * (Math.PI / 180);
    
    const x1 = centerX + radius * Math.cos(startAngle);
    const y1 = centerY + radius * Math.sin(startAngle);
    const x2 = centerX + radius * Math.cos(endAngle);
    const y2 = centerY + radius * Math.sin(endAngle);
    
    const largeArcFlag = anglePerSegment > 180 ? 1 : 0;
    
    return `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
  };

  const getTextPosition = (index: number) => {
    const angle = (index * anglePerSegment + anglePerSegment / 2 - 90) * (Math.PI / 180);
    const textRadius = radius * 0.7;
    return {
      x: centerX + textRadius * Math.cos(angle),
      y: centerY + textRadius * Math.sin(angle)
    };
  };

  return (
    <div className="relative">
      {/* Pointer */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-red-500 drop-shadow-lg"></div>
      </div>
      
      {/* Wheel */}
      <div 
        className={`relative ${isSpinning ? 'transition-transform duration-[4000ms] ease-out' : ''}`}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <svg 
          width={wheelSize} 
          height={wheelSize} 
          className="drop-shadow-2xl"
        >
          {/* Outer ring */}
          <circle
            cx={centerX}
            cy={centerY}
            r={radius + 5}
            fill="#1f2937"
            className="drop-shadow-lg"
          />
          
          {/* Segments */}
          {segments.map((segment, index) => {
            const textPos = getTextPosition(index);
            const textAngle = index * anglePerSegment + anglePerSegment / 2 - 90;
            let yOffset = 0;
            if (segment.image && (segment.emoji || segment.text)) yOffset = -28;
            else if (segment.image) yOffset = 0;
            else if (segment.emoji && segment.text) yOffset = -18;
            else yOffset = 0;
            return (
              <g key={segment.id}>
                {/* Segment */}
                <path
                  d={createSegmentPath(index)}
                  fill={segment.color}
                  stroke="#ffffff"
                  strokeWidth="2"
                  className="hover:brightness-110 transition-all duration-200"
                />
                {/* Image (if present) */}
                {segment.image && (
                  <image
                    href={segment.image}
                    x={textPos.x - 18}
                    y={textPos.y + yOffset - 18}
                    width="36"
                    height="36"
                    style={{ pointerEvents: 'none' }}
                  />
                )}
                {/* Emoji (if present) */}
                {segment.emoji && (
                  <text
                    x={textPos.x}
                    y={segment.image ? textPos.y + 18 : textPos.y - 18}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="pointer-events-none drop-shadow-sm"
                    fontSize={Math.min(28, anglePerSegment / 4 + 18)}
                    style={{ fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, EmojiOne Color, Android Emoji, sans-serif' }}
                    transform={`rotate(${textAngle > 90 && textAngle < 270 ? textAngle + 180 : textAngle}, ${textPos.x}, ${segment.image ? textPos.y + 18 : textPos.y - 18})`}
                  >
                    {segment.emoji}
                  </text>
                )}
                {/* Text (if present) */}
                {segment.text && (
                  <text
                    x={textPos.x}
                    y={segment.image ? (segment.emoji ? textPos.y + 38 : textPos.y + 18) : (segment.emoji ? textPos.y + 10 : textPos.y)}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-white font-semibold text-sm pointer-events-none drop-shadow-sm"
                    transform={`rotate(${textAngle > 90 && textAngle < 270 ? textAngle + 180 : textAngle}, ${textPos.x}, ${segment.image ? (segment.emoji ? textPos.y + 38 : textPos.y + 18) : (segment.emoji ? textPos.y + 10 : textPos.y)})`}
                    style={{ 
                      fontSize: Math.min(wheelSize < 360 ? 10 : 14, anglePerSegment / 8 + (wheelSize < 360 ? 6 : 8)),
                      textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
                    }}
                  >
                    {segment.text.length > (wheelSize < 360 ? 8 : 12) ? segment.text.substring(0, wheelSize < 360 ? 8 : 12) + '...' : segment.text}
                  </text>
                )}
              </g>
            );
          })}
          
          {/* Center circle */}
          <circle
            cx={centerX}
            cy={centerY}
            r={wheelSize < 360 ? "20" : "30"}
            fill="#ffffff"
            stroke="#4f46e5"
            strokeWidth={wheelSize < 360 ? "2" : "4"}
            className="drop-shadow-lg"
          />
        </svg>
      </div>
    </div>
  );
};

export default SpinWheel;