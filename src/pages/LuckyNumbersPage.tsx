import React, { useState } from 'react';
import { WheelSegment } from '../types/wheel';
import WheelContainer from '../components/WheelContainer';
import ControlPanel from '../components/ControlPanel';
import SEO from '../components/SEO';
import { wheelTemplates } from '../data/wheelTemplates';

const LuckyNumbersPage: React.FC = () => {
  const [segments, setSegments] = useState<WheelSegment[]>([
    { id: '1', text: '1', color: '#EF4444', weight: 1 },
    { id: '2', text: '2', color: '#F97316', weight: 1 },
    { id: '3', text: '3', color: '#EAB308', weight: 1 },
    { id: '4', text: '4', color: '#22C55E', weight: 1 },
    { id: '5', text: '5', color: '#14B8A6', weight: 1 },
    { id: '6', text: '6', color: '#3B82F6', weight: 1 },
    { id: '7', text: '7', color: '#6366F1', weight: 1 },
    { id: '8', text: '8', color: '#8B5CF6', weight: 1 },
    { id: '9', text: '9', color: '#EC4899', weight: 1 },
    { id: '10', text: '10', color: '#6B7280', weight: 1 }
  ]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('lucky-numbers');
  const [faqOpenIndex, setFaqOpenIndex] = useState(-1);
  const template = wheelTemplates.find(t => t.id === 'lucky-numbers');

  return (
    <>
      <SEO 
        title="Lucky Numbers Wheel | Random Number Generator | Spin the Wheels"
        description="Feeling lucky? Spin the Lucky Numbers Wheel for random numbers in games, raffles, lotteries, or daily inspiration. Perfect for classrooms and fun!"
        keywords="lucky numbers wheel, random number generator, lottery numbers, raffle picker, classroom number generator, number selector"
        canonical="/lucky-numbers"
      />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="animated-bg"></div>
        <main className="relative z-10">
          <section className="py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-6 px-4">
                  Lucky Numbers Wheel
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                  Let luck be your guide! Spin the wheel to discover your lucky numbers and add an element of chance to your games, raffles, or daily decisions.
                </p>
              </div>
              <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-2">
                  <WheelContainer
                    segments={segments}
                    onSpin={() => {}}
                    isSpinning={isSpinning}
                    setIsSpinning={setIsSpinning}
                    title="Lucky Numbers Wheel"
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
                  Discover Your Lucky Numbers
                </h2>
                <p className="text-lg text-gray-600">
                  Let chance guide your choices
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    🎲
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Set Your Range</h3>
                  <p className="text-gray-600">Customize your number pool by selecting the perfect range for your needs, from small groups to large number sequences</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    🌟
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Trust in Luck</h3>
                  <p className="text-gray-600">Watch as the wheel spins through your chosen numbers, building excitement until it reveals your special lucky number</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    ✨
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Feel the Magic</h3>
                  <p className="text-gray-600">Embrace the thrill of random selection as each spin brings new possibilities and potentially lucky outcomes your way</p>
                </div>
              </div>
            </div>
          </section>

          {/* Perfect For Section */}
          <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Lucky Moments Everywhere
                </h2>
                <p className="text-lg text-gray-600">
                  Find fortune in every spin
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">🎮</div>
                  <h3 className="text-xl font-semibold mb-3">Game Time Fun</h3>
                  <p className="text-gray-600">Add excitement to board games, card games, or party activities by using random numbers to determine moves or special rules</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold mb-3">Raffle Excitement</h3>
                  <p className="text-gray-600">Make prize drawings and giveaways more engaging by selecting winning numbers with flair and building anticipation</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-xl font-semibold mb-3">Learning Adventures</h3>
                  <p className="text-gray-600">Transform math lessons and classroom activities into engaging experiences with random number challenges and games</p>
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
                  Everything you need to know about finding your lucky numbers
                </p>
              </div>
              {/* Professional Engaging Accordion FAQ */}
              {(() => {
                const faqs = [
                  {
                    question: '🎲 How random are the numbers?',
                    answer: 'Our wheel uses advanced randomization algorithms to ensure completely fair and unbiased number selection every time you spin'
                  },
                  {
                    question: '🌟 Can I customize the number range?',
                    answer: 'Absolutely! Adjust the range to match your needs, whether you need numbers for a small raffle or a large lottery style selection'
                  },
                  {
                    question: '✨ What makes these numbers lucky?',
                    answer: 'The element of chance combined with your intention makes each number special, perfect for those moments when you need a touch of luck'
                  },
                  {
                    question: '🎯 Can I save my lucky numbers?',
                    answer: 'Keep track of your special numbers by saving your results, perfect for creating your own collection of meaningful lucky numbers'
                  },
                  {
                    question: '🎮 How can I use this for games?',
                    answer: 'Create custom number ranges for different games, use multiple spins for combinations, or let the wheel decide game parameters'
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

export default LuckyNumbersPage; 