import React, { useState } from 'react';
import { WheelSegment } from '../types/wheel';
import WheelContainer from '../components/WheelContainer';
import ControlPanel from '../components/ControlPanel';
import SEO from '../components/SEO';
import { wheelTemplates } from '../data/wheelTemplates';

const TwisterWheelPage: React.FC = () => {
  const [segments, setSegments] = useState<WheelSegment[]>([
    { id: '1', text: 'Left Hand Red', color: '#ef4444', weight: 1 },
    { id: '2', text: 'Left Hand Blue', color: '#3b82f6', weight: 1 },
    { id: '3', text: 'Left Hand Green', color: '#10b981', weight: 1 },
    { id: '4', text: 'Left Hand Yellow', color: '#f59e0b', weight: 1 },
    { id: '5', text: 'Right Hand Red', color: '#ef4444', weight: 1 },
    { id: '6', text: 'Right Hand Blue', color: '#3b82f6', weight: 1 },
    { id: '7', text: 'Right Hand Green', color: '#10b981', weight: 1 },
    { id: '8', text: 'Right Hand Yellow', color: '#f59e0b', weight: 1 },
    { id: '9', text: 'Left Foot Red', color: '#ef4444', weight: 1 },
    { id: '10', text: 'Left Foot Blue', color: '#3b82f6', weight: 1 },
    { id: '11', text: 'Left Foot Green', color: '#10b981', weight: 1 },
    { id: '12', text: 'Left Foot Yellow', color: '#f59e0b', weight: 1 },
    { id: '13', text: 'Right Foot Red', color: '#ef4444', weight: 1 },
    { id: '14', text: 'Right Foot Blue', color: '#3b82f6', weight: 1 },
    { id: '15', text: 'Right Foot Green', color: '#10b981', weight: 1 },
    { id: '16', text: 'Right Foot Yellow', color: '#f59e0b', weight: 1 }
  ]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('twister-wheel');
  const [faqOpenIndex, setFaqOpenIndex] = useState(-1);
  const template = wheelTemplates.find(t => t.id === 'twister-wheel');

  return (
    <>
      <SEO 
        title="Twister Wheel | Spin for Your Next Move | Spin the Wheels"
        description="Add a twist to game night! Spin the Twister Wheel for new moves and challenges. Keep everyone on their toes and make your next Twister session extra fun!"
        keywords="twister wheel, party games, physical games, twister moves, game night, family fun, interactive games"
        canonical="/twister-wheel"
      />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="animated-bg"></div>
        <main className="relative z-10">
          <section className="py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-6 px-4">
                  Twister Wheel
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                  Ready for a twist? Give the Twister Wheel a spin and let it pick your next move. Perfect for parties, family nights, or anytime you want to add a little laughter and unpredictability to your game.
                </p>
              </div>
              <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-2">
                  <WheelContainer
                    segments={segments}
                    onSpin={() => {}}
                    isSpinning={isSpinning}
                    setIsSpinning={setIsSpinning}
                    title="Twister Wheel"
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
                  Get Ready to Twist
                </h2>
                <p className="text-lg text-gray-600">
                  Your colorful adventure begins
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    🎯
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Spin for Moves</h3>
                  <p className="text-gray-600">Watch as the wheel determines your next position, combining body parts and colors for exciting twisting challenges</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    🎪
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Follow Along</h3>
                  <p className="text-gray-600">Execute each move with precision and balance, creating an entertaining display of flexibility and coordination</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    🌈
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Stay in Position</h3>
                  <p className="text-gray-600">Maintain your balance while the game progresses, testing your stability and endurance with each new colorful command</p>
                </div>
              </div>
            </div>
          </section>

          {/* Perfect For Section */}
          <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Perfect for Every Gathering
                </h2>
                <p className="text-lg text-gray-600">
                  Making memories colorful
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">🎉</div>
                  <h3 className="text-xl font-semibold mb-3">Party Fun</h3>
                  <p className="text-gray-600">Transform any gathering into an energetic celebration with interactive twisting challenges that bring people together</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
                  <h3 className="text-xl font-semibold mb-3">Family Time</h3>
                  <p className="text-gray-600">Create lasting memories with family game nights filled with laughter, movement, and playful competition</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">🎮</div>
                  <h3 className="text-xl font-semibold mb-3">Game Events</h3>
                  <p className="text-gray-600">Enhance your gaming sessions with physical challenges that combine digital convenience with active entertainment</p>
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
                  Everything you need to know about twisting fun
                </p>
              </div>
              {/* Professional Engaging Accordion FAQ */}
              {(() => {
                const faqs = [
                  {
                    question: '🎯 How many players can participate?',
                    answer: 'The game works best with 2-4 players, but you can modify the rules for larger groups by taking turns or creating teams'
                  },
                  {
                    question: '🎪 Can I customize the moves?',
                    answer: 'Yes! Add your own combinations or modify existing ones to create unique challenges suited to your group\'s skill level'
                  },
                  {
                    question: '🌈 What space is needed?',
                    answer: 'A clear area of approximately 6x8 feet is ideal, with a non slip surface for safe and comfortable gameplay'
                  },
                  {
                    question: '🎉 Suitable for all ages?',
                    answer: 'Absolutely! The game can be adapted for different age groups and physical abilities, making it perfect for mixed family fun'
                  },
                  {
                    question: '🎮 How long should each round last?',
                    answer: 'Typical rounds last 5-10 minutes, but you can adjust the duration based on player stamina and entertainment preferences'
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

export default TwisterWheelPage; 