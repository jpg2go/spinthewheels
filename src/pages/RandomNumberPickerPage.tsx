import React, { useState } from 'react';
import { WheelSegment } from '../types/wheel';
import WheelContainer from '../components/WheelContainer';
import ControlPanel from '../components/ControlPanel';
import SEO from '../components/SEO';
import { wheelTemplates } from '../data/wheelTemplates';

const RandomNumberPickerPage: React.FC = () => {
  const [segments, setSegments] = useState<WheelSegment[]>(() => {
    const segments = [];
    for (let i = 1; i <= 100; i++) {
      segments.push({ id: `${i}`, text: `${i}`, color: i % 2 === 0 ? '#6366f1' : '#f59e0b', weight: 1 });
    }
    return segments;
  });
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('random-number-picker');
  const [faqOpenIndex, setFaqOpenIndex] = useState(-1);
  const template = wheelTemplates.find(t => t.id === 'random-number-picker');

  return (
    <>
      <SEO 
        title="Number Picker | Spin for a Random Number | Spin the Wheels"
        description="Need a random number? Spin the Random Number Picker for games, raffles, or quick decisions. Pick from 1-100 with every spin!"
        keywords="random number picker, number generator, random picker, number wheel, random selection, lottery numbers, raffle picker"
        canonical="/random-number-picker"
      />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="animated-bg"></div>
        <main className="relative z-10">
          <section className="py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-6 px-4">
                  Random Number Picker
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                  Need a number on the spot? Spin the Random Number Picker and watch as chance chooses for you. Great for games, raffles, or settling those little debates that pop up every day.
                </p>
              </div>
              <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-2">
                  <WheelContainer
                    segments={segments}
                    onSpin={() => {}}
                    isSpinning={isSpinning}
                    setIsSpinning={setIsSpinning}
                    title="Random Number Picker"
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
                  Numbers Made Simple
                </h2>
                <p className="text-lg text-gray-600">
                  Your numerical adventure begins
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    🎲
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Set Your Range</h3>
                  <p className="text-gray-600">Customize your number range to match your needs, whether picking from a small set or exploring larger numerical possibilities</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    ⭐
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Spin to Select</h3>
                  <p className="text-gray-600">Watch as the wheel spins through numbers with perfect randomness, ensuring fair and unbiased selection every time</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    🎯
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Get Results</h3>
                  <p className="text-gray-600">Receive your randomly selected number instantly, perfect for quick decisions or organized selection processes</p>
                </div>
              </div>
            </div>
          </section>

          {/* Perfect For Section */}
          <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Perfect for Every Pick
                </h2>
                <p className="text-lg text-gray-600">
                  Making selection effortless
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">🎰</div>
                  <h3 className="text-xl font-semibold mb-3">Raffles & Draws</h3>
                  <p className="text-gray-600">Select winning numbers for raffles and prize draws with complete fairness and transparency for all participants</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-xl font-semibold mb-3">Educational Fun</h3>
                  <p className="text-gray-600">Transform math lessons and classroom activities into engaging experiences with random number challenges</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">🎮</div>
                  <h3 className="text-xl font-semibold mb-3">Game Decisions</h3>
                  <p className="text-gray-600">Add excitement to board games and party activities with quick and unbiased number selections</p>
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
                  Everything you need to know about random number selection
                </p>
              </div>
              <div className="space-y-5">
                <div className={`transition-all duration-300 rounded-2xl shadow-lg bg-gradient-to-br from-white via-indigo-50 to-purple-50 border border-gray-100 group ${faqOpenIndex === 0 ? 'ring-2 ring-indigo-400' : ''}`}>
                  <button
                    className={`w-full flex items-center justify-between px-7 py-6 text-left rounded-2xl focus:outline-none transition-colors duration-200 ${faqOpenIndex === 0 ? 'text-indigo-800 font-extrabold' : 'text-gray-900 font-bold'} group-hover:bg-indigo-50/40 hover:bg-indigo-50/60`}
                    onClick={() => setFaqOpenIndex(faqOpenIndex === 0 ? -1 : 0)}
                  >
                    <h3 className="text-lg md:text-xl flex-1 font-semibold">🎲 How random are the numbers?</h3>
                    <span className={`ml-6 flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-300 shadow ${faqOpenIndex === 0 ? 'bg-indigo-500 border-indigo-500 text-white scale-110' : 'bg-white border-indigo-200 text-indigo-500 scale-100'}`}>
                      {faqOpenIndex === 0 ? (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      ) : (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="11" y1="5" x2="11" y2="17" /><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      )}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out px-7 ${faqOpenIndex === 0 ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">Our wheel uses a sophisticated random algorithm to ensure completely fair and unbiased number selection every time</p>
                  </div>
                </div>

                <div className={`transition-all duration-300 rounded-2xl shadow-lg bg-gradient-to-br from-white via-indigo-50 to-purple-50 border border-gray-100 group ${faqOpenIndex === 1 ? 'ring-2 ring-indigo-400' : ''}`}>
                  <button
                    className={`w-full flex items-center justify-between px-7 py-6 text-left rounded-2xl focus:outline-none transition-colors duration-200 ${faqOpenIndex === 1 ? 'text-indigo-800 font-extrabold' : 'text-gray-900 font-bold'} group-hover:bg-indigo-50/40 hover:bg-indigo-50/60`}
                    onClick={() => setFaqOpenIndex(faqOpenIndex === 1 ? -1 : 1)}
                  >
                    <h3 className="text-lg md:text-xl flex-1 font-semibold">⭐ Can I customize the range?</h3>
                    <span className={`ml-6 flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-300 shadow ${faqOpenIndex === 1 ? 'bg-indigo-500 border-indigo-500 text-white scale-110' : 'bg-white border-indigo-200 text-indigo-500 scale-100'}`}>
                      {faqOpenIndex === 1 ? (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      ) : (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="11" y1="5" x2="11" y2="17" /><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      )}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out px-7 ${faqOpenIndex === 1 ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">Yes! Adjust the number range to match your specific needs, whether you need numbers from 1-10 or 1-1000</p>
                  </div>
                </div>

                <div className={`transition-all duration-300 rounded-2xl shadow-lg bg-gradient-to-br from-white via-indigo-50 to-purple-50 border border-gray-100 group ${faqOpenIndex === 2 ? 'ring-2 ring-indigo-400' : ''}`}>
                  <button
                    className={`w-full flex items-center justify-between px-7 py-6 text-left rounded-2xl focus:outline-none transition-colors duration-200 ${faqOpenIndex === 2 ? 'text-indigo-800 font-extrabold' : 'text-gray-900 font-bold'} group-hover:bg-indigo-50/40 hover:bg-indigo-50/60`}
                    onClick={() => setFaqOpenIndex(faqOpenIndex === 2 ? -1 : 2)}
                  >
                    <h3 className="text-lg md:text-xl flex-1 font-semibold">🎯 Perfect for raffles?</h3>
                    <span className={`ml-6 flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-300 shadow ${faqOpenIndex === 2 ? 'bg-indigo-500 border-indigo-500 text-white scale-110' : 'bg-white border-indigo-200 text-indigo-500 scale-100'}`}>
                      {faqOpenIndex === 2 ? (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      ) : (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="11" y1="5" x2="11" y2="17" /><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      )}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out px-7 ${faqOpenIndex === 2 ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">Absolutely! The wheel provides transparent and fair selection, making it ideal for raffles and prize draws</p>
                  </div>
                </div>

                <div className={`transition-all duration-300 rounded-2xl shadow-lg bg-gradient-to-br from-white via-indigo-50 to-purple-50 border border-gray-100 group ${faqOpenIndex === 3 ? 'ring-2 ring-indigo-400' : ''}`}>
                  <button
                    className={`w-full flex items-center justify-between px-7 py-6 text-left rounded-2xl focus:outline-none transition-colors duration-200 ${faqOpenIndex === 3 ? 'text-indigo-800 font-extrabold' : 'text-gray-900 font-bold'} group-hover:bg-indigo-50/40 hover:bg-indigo-50/60`}
                    onClick={() => setFaqOpenIndex(faqOpenIndex === 3 ? -1 : 3)}
                  >
                    <h3 className="text-lg md:text-xl flex-1 font-semibold">🎰 Can I exclude numbers?</h3>
                    <span className={`ml-6 flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-300 shadow ${faqOpenIndex === 3 ? 'bg-indigo-500 border-indigo-500 text-white scale-110' : 'bg-white border-indigo-200 text-indigo-500 scale-100'}`}>
                      {faqOpenIndex === 3 ? (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      ) : (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="11" y1="5" x2="11" y2="17" /><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      )}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out px-7 ${faqOpenIndex === 3 ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">Yes, you can remove any numbers you don't want in the selection pool, customizing the wheel to your exact requirements</p>
                  </div>
                </div>

                <div className={`transition-all duration-300 rounded-2xl shadow-lg bg-gradient-to-br from-white via-indigo-50 to-purple-50 border border-gray-100 group ${faqOpenIndex === 4 ? 'ring-2 ring-indigo-400' : ''}`}>
                  <button
                    className={`w-full flex items-center justify-between px-7 py-6 text-left rounded-2xl focus:outline-none transition-colors duration-200 ${faqOpenIndex === 4 ? 'text-indigo-800 font-extrabold' : 'text-gray-900 font-bold'} group-hover:bg-indigo-50/40 hover:bg-indigo-50/60`}
                    onClick={() => setFaqOpenIndex(faqOpenIndex === 4 ? -1 : 4)}
                  >
                    <h3 className="text-lg md:text-xl flex-1 font-semibold">📚 Good for education?</h3>
                    <span className={`ml-6 flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-300 shadow ${faqOpenIndex === 4 ? 'bg-indigo-500 border-indigo-500 text-white scale-110' : 'bg-white border-indigo-200 text-indigo-500 scale-100'}`}>
                      {faqOpenIndex === 4 ? (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      ) : (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="11" y1="5" x2="11" y2="17" /><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      )}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out px-7 ${faqOpenIndex === 4 ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">Perfect for math games, classroom activities, and educational exercises that require random number generation</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default RandomNumberPickerPage; 