import React, { useState } from 'react';
import { WheelSegment } from '../types/wheel';
import WheelContainer from '../components/WheelContainer';
import ControlPanel from '../components/ControlPanel';
import SEO from '../components/SEO';
import { wheelTemplates } from '../data/wheelTemplates';

const RandomDirectionPage: React.FC = () => {
  const [segments, setSegments] = useState<WheelSegment[]>([
    { id: '1', text: 'North', color: '#EF4444', weight: 1, emoji: '⬆️' },
    { id: '2', text: 'South', color: '#22C55E', weight: 1, emoji: '⬇️' },
    { id: '3', text: 'East', color: '#3B82F6', weight: 1, emoji: '➡️' },
    { id: '4', text: 'West', color: '#8B5CF6', weight: 1, emoji: '⬅️' },
    { id: '5', text: 'Northeast', color: '#F97316', weight: 1, emoji: '↗️' },
    { id: '6', text: 'Northwest', color: '#EC4899', weight: 1, emoji: '↖️' },
    { id: '7', text: 'Southeast', color: '#14B8A6', weight: 1, emoji: '↘️' },
    { id: '8', text: 'Southwest', color: '#F59E0B', weight: 1, emoji: '↙️' }
  ]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('random-direction');
  const [faqOpenIndex, setFaqOpenIndex] = useState(-1);
  const template = wheelTemplates.find(t => t.id === 'random-direction');

  return (
    <>
      <SEO 
        title="Random Direction | Compass Spinner | Spin the Wheels"
        description="Feeling adventurous? Spin the Random Direction Wheel to pick north, south, east, or west. Great for travel, games, or spontaneous exploration!"
        keywords="random direction, compass wheel, direction picker, exploration tool, adventure spinner, navigation wheel, cardinal directions"
        canonical="/random-direction"
      />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="animated-bg"></div>
        <main className="relative z-10">
          <section className="py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-6 px-4">
                  Random Direction Wheel
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                  Chart your next adventure! Let our wheel guide you to unexpected destinations and exciting new paths to explore.
                </p>
              </div>
              <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-2">
                  <WheelContainer
                    segments={segments}
                    onSpin={() => {}}
                    isSpinning={isSpinning}
                    setIsSpinning={setIsSpinning}
                    title="Random Direction"
                  />
                </div>
                <div className="space-y-4 lg:space-y-6">
                  <ControlPanel
                    segments={segments}
                    onAddSegment={(text, color) => setSegments(prev => [...prev, { id: Date.now().toString(), text, color, weight: 1 }])}
                    onUpdateSegment={(id, updates) => setSegments(prev => prev.map(s => s.id === id ? { ...s, ...updates } : s))}
                    onDeleteSegment={id => setSegments(prev => prev.filter(s => s.id !== id))}
                    setSegments={setSegments}
                    selectedTemplate={selectedTemplate}
                    setSelectedTemplate={setSelectedTemplate}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-16 bg-white/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Navigate with Joy
                </h2>
                <p className="text-lg text-gray-600">
                  Your journey of discovery begins
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    🧭
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Choose Direction</h3>
                  <p className="text-gray-600">Let fate guide your path with our comprehensive direction wheel, offering eight cardinal and intercardinal points to explore</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    ⭐
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Find Adventure</h3>
                  <p className="text-gray-600">Transform ordinary walks and trips into exciting journeys of discovery by following the wheel's spontaneous suggestions</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    🌟
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Create Stories</h3>
                  <p className="text-gray-600">Build unique experiences and memorable moments by letting random directions guide you to unexpected discoveries</p>
                </div>
              </div>
            </div>
          </section>

          {/* Perfect For Section */}
          <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Perfect for Every Explorer
                </h2>
                <p className="text-lg text-gray-600">
                  Making navigation exciting
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">🚶</div>
                  <h3 className="text-xl font-semibold mb-3">Urban Explorers</h3>
                  <p className="text-gray-600">Discover hidden gems in your city by following random directions to uncover new neighborhoods and local treasures</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">🎮</div>
                  <h3 className="text-xl font-semibold mb-3">Game Masters</h3>
                  <p className="text-gray-600">Add excitement to role playing games and board games with random directional challenges and movement rules</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">📸</div>
                  <h3 className="text-xl font-semibold mb-3">Photo Walks</h3>
                  <p className="text-gray-600">Create unique photography adventures by letting the wheel guide you to new perspectives and shooting locations</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs Section */}
          <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  FAQs
                </h2>
                <p className="text-base text-gray-500">
                  Everything you need to know about random direction exploration
                </p>
              </div>
              {/* Professional Engaging Accordion FAQ */}
              {(() => {
                const faqs = [
                  {
                    question: '🧭 How do I use the direction wheel?',
                    answer: 'Simply spin the wheel and follow the direction it lands on, whether for a walk, game movement, or creative exploration activity'
                  },
                  {
                    question: '⭐ Are all directions included?',
                    answer: 'Yes! Our wheel features all eight main compass directions including cardinal (N,S,E,W) and intercardinal (NE,NW,SE,SW) points'
                  },
                  {
                    question: '🌟 Why use random directions?',
                    answer: 'Random directions add spontaneity and adventure to activities, helping you discover new places and experiences you might otherwise miss'
                  },
                  {
                    question: '🎮 Perfect for games?',
                    answer: 'Absolutely! Use it for board games, RPGs, outdoor treasure hunts, or any activity needing directional movement choices'
                  },
                  {
                    question: '📸 Can I customize directions?',
                    answer: 'You can adjust the available directions to match your needs, whether for specific game rules or exploration boundaries'
                  }
                ];
                return (
                  <div className="space-y-5">
                    {faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className={`transition-all duration-300 rounded-2xl shadow-lg bg-gradient-to-br from-white via-indigo-50 to-purple-50 border border-gray-100 group ${faqOpenIndex === idx ? 'ring-2 ring-indigo-400' : ''}`}
                      >
                        <button
                          className={`w-full flex items-center justify-between px-7 py-6 text-left rounded-2xl focus:outline-none transition-colors duration-200 ${faqOpenIndex === idx ? 'text-indigo-800 font-extrabold' : 'text-gray-900 font-bold'} group-hover:bg-indigo-50/40 hover:bg-indigo-50/60`}
                          onClick={() => setFaqOpenIndex(faqOpenIndex === idx ? -1 : idx)}
                          aria-expanded={faqOpenIndex === idx}
                          aria-controls={`faq-panel-${idx}`}
                        >
                          <h3 className="text-lg md:text-xl flex-1 font-semibold">{faq.question}</h3>
                          <span className={`ml-6 flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-300 shadow ${faqOpenIndex === idx ? 'bg-indigo-500 border-indigo-500 text-white scale-110' : 'bg-white border-indigo-200 text-indigo-500 scale-100'}`}
                          >
                            {faqOpenIndex === idx ? (
                              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="11" x2="17" y2="11" /></svg>
                            ) : (
                              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="11" y1="5" x2="11" y2="17" /><line x1="5" y1="11" x2="17" y2="11" /></svg>
                            )}
                          </span>
                        </button>
                        <div
                          id={`faq-panel-${idx}`}
                          className={`overflow-hidden transition-all duration-500 ease-in-out px-7 ${faqOpenIndex === idx ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                          style={{
                            transitionProperty: 'max-height, opacity, padding',
                          }}
                        >
                          <div className={`pl-4 border-l-4 transition-all duration-300 ${faqOpenIndex === idx ? 'border-indigo-400 bg-indigo-50/40' : 'border-transparent'}`}>
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })()}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default RandomDirectionPage; 