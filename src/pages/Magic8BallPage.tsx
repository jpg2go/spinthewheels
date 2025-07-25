import React, { useState } from 'react';
import { WheelSegment } from '../types/wheel';
import WheelContainer from '../components/WheelContainer';
import ControlPanel from '../components/ControlPanel';
import SEO from '../components/SEO';
import { wheelTemplates } from '../data/wheelTemplates';

const Magic8BallPage: React.FC = () => {
  const [segments, setSegments] = useState<WheelSegment[]>([
    { id: '1', text: 'Yes', color: '#4f46e5', weight: 1 },
    { id: '2', text: 'No', color: '#f59e0b', weight: 1 },
    { id: '3', text: 'Maybe', color: '#10b981', weight: 1 },
    { id: '4', text: 'Ask again later', color: '#6366f1', weight: 1 },
    { id: '5', text: 'Definitely', color: '#ef4444', weight: 1 },
    { id: '6', text: 'Unlikely', color: '#8b5cf6', weight: 1 },
    { id: '7', text: 'Cannot predict now', color: '#f5fffe', weight: 1 },
    { id: '8', text: 'Most likely', color: '#db4d4d', weight: 1 }
  ]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('magic-8-ball');
  const [faqOpenIndex, setFaqOpenIndex] = useState(-1);
  const template = wheelTemplates.find(t => t.id === 'magic-8-ball');

  return (
    <>
      <SEO 
        title="Magic 8-Ball | Get Instant Answers Online | Spin the Wheels"
        description="Ask a question and spin the Magic 8-Ball Wheel for playful predictions and advice. Perfect for parties, classrooms, or anyone who loves a little magic!"
        keywords="magic 8 ball, fortune teller, decision maker, prediction wheel, online oracle, mystical answers, digital 8 ball"
        canonical="/magic-8-ball"
      />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="animated-bg"></div>
        <main className="relative z-10">
          <section className="py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-6 px-4">
                  Magic 8-Ball Wheel
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                  Got a burning question? The Magic 8-Ball Wheel delivers playful, mysterious answers with every spin. Ask away and see what the universe has in store for you.
                </p>
              </div>
              <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-2">
                  <WheelContainer
                    segments={segments}
                    onSpin={() => {}}
                    isSpinning={isSpinning}
                    setIsSpinning={setIsSpinning}
                    title="Magic 8-Ball"
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
                  Unlock Your Answers
                </h2>
                <p className="text-lg text-gray-600">
                  Your digital oracle awaits
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    🔮
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Ask Your Question</h3>
                  <p className="text-gray-600">Focus your thoughts and formulate your question clearly, setting the stage for the mystical wheel to reveal its wisdom</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    ⭐
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Seek Your Answer</h3>
                  <p className="text-gray-600">Watch as the wheel spins through possibilities, each rotation bringing you closer to the revelation you seek</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    ✨
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Discover Truth</h3>
                  <p className="text-gray-600">Interpret the wheel's response with an open mind, finding guidance and insight in its mystical messages</p>
                </div>
              </div>
            </div>
          </section>

          {/* Perfect For Section */}
          <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Perfect for Every Question
                </h2>
                <p className="text-lg text-gray-600">
                  Finding clarity in uncertainty
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">🎭</div>
                  <h3 className="text-xl font-semibold mb-3">Social Dilemmas</h3>
                  <p className="text-gray-600">Navigate friendship dynamics and social situations with playful guidance from our digital oracle's perspective</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">💫</div>
                  <h3 className="text-xl font-semibold mb-3">Daily Decisions</h3>
                  <p className="text-gray-600">Transform everyday choices into moments of excitement as you let the mystical wheel guide your daily adventures</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">🌟</div>
                  <h3 className="text-xl font-semibold mb-3">Party Entertainment</h3>
                  <p className="text-gray-600">Create memorable moments at gatherings as friends take turns asking questions and receiving mystical responses</p>
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
                  Everything you need to know about digital divination
                </p>
              </div>
              {/* Professional Engaging Accordion FAQ */}
              {(() => {
                const faqs = [
                  {
                    question: '🔮 How accurate is the Magic 8-Ball Wheel?',
                    answer: 'Like its physical counterpart, our digital wheel provides playful guidance while encouraging you to trust your own judgment'
                  },
                  {
                    question: '⭐ Can I ask multiple questions?',
                    answer: 'Yes! Feel free to ask as many questions as you like, but take a moment to reflect on each answer before moving to the next'
                  },
                  {
                    question: '✨ What types of questions work best?',
                    answer: 'Clear yes/no questions tend to work best, helping the wheel provide more meaningful and applicable responses'
                  },
                  {
                    question: '🎭 Can I customize the answers?',
                    answer: 'Absolutely! Add your own responses or modify existing ones to create a personalized prediction experience'
                  },
                  {
                    question: '💫 Is it suitable for all ages?',
                    answer: 'Yes! Our Magic 8-Ball Wheel is designed to be fun and appropriate for users of all ages, perfect for family entertainment'
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

export default Magic8BallPage; 