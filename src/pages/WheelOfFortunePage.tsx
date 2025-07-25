import React, { useState } from 'react';
import { WheelSegment } from '../types/wheel';
import WheelContainer from '../components/WheelContainer';
import ControlPanel from '../components/ControlPanel';
import SEO from '../components/SEO';
import { wheelTemplates } from '../data/wheelTemplates';

const WheelOfFortunePage: React.FC = () => {
  const [segments, setSegments] = useState<WheelSegment[]>([
    { id: '1', text: 'It is certain', color: '#2bab5e', weight: 1 },
    { id: '2', text: 'Reply hazy, try again', color: '#f8fff5', weight: 1 },
    { id: '3', text: 'As I see it, yes', color: '#f2c054', weight: 1 },
    { id: '4', text: "Don't count on it", color: '#fffcf5', weight: 1 },
    { id: '5', text: 'It is decidedly so', color: '#5c85c7', weight: 1 },
    { id: '6', text: 'Ask again later', color: '#f5fffe', weight: 1 },
    { id: '7', text: 'Most likely', color: '#db4d4d', weight: 1 },
    { id: '8', text: 'My reply is no', color: '#fff7f5', weight: 1 },
    { id: '9', text: 'Without a doubt', color: '#2bab5e', weight: 1 },
    { id: '10', text: 'Better not tell you now', color: '#f8fff5', weight: 1 },
    { id: '11', text: 'Outlook good', color: '#f2c054', weight: 1 },
    { id: '12', text: 'My sources say no', color: '#fffcf5', weight: 1 },
    { id: '13', text: 'Yes - definitely', color: '#5c85c7', weight: 1 },
    { id: '14', text: 'Cannot predict now', color: '#f5fffe', weight: 1 },
    { id: '15', text: 'Probably, yes', color: '#db4d4d', weight: 1 },
    { id: '16', text: 'Outlook not so good', color: '#fff7f5', weight: 1 },
    { id: '17', text: 'You may rely on it', color: '#2bab5e', weight: 1 },
    { id: '18', text: 'Concentrate & ask again', color: '#f8fff5', weight: 1 },
    { id: '19', text: 'Signs point to yes', color: '#f2c054', weight: 1 },
    { id: '20', text: 'Very doubtful', color: '#fffcf5', weight: 1 }
  ]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('the-wheel-of-fortune');
  const [faqOpenIndex, setFaqOpenIndex] = useState(-1);
  const template = wheelTemplates.find(t => t.id === 'the-wheel-of-fortune');

  return (
    <>
      <SEO 
        title="Wheel of Fortune | Spin for Your Lucky Result | Spin the Wheels"
        description="Test your luck! Spin the Wheel of Fortune for excitement, suspense, and prizes. Add a classic game show twist to your next party or gathering."
        keywords="wheel of fortune, fortune wheel, luck spinner, game show wheel, party games, fortune teller, lucky wheel"
        canonical="/the-wheel-of-fortune"
      />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="animated-bg"></div>
        <main className="relative z-10">
          <section className="py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-6 px-4">
                  Wheel of Fortune
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                  Embrace the magic of chance! Let our mystical wheel reveal answers and guide your path with its timeless wisdom.
                </p>
              </div>
              <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-2">
                  <WheelContainer
                    segments={segments}
                    onSpin={() => {}}
                    isSpinning={isSpinning}
                    setIsSpinning={setIsSpinning}
                    title="Wheel of Fortune"
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
                  Fortune Favors the Bold
                </h2>
                <p className="text-lg text-gray-600">
                  Your journey into destiny begins
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    🎯
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Seek Guidance</h3>
                  <p className="text-gray-600">Focus on your question and let the mystical wheel reveal insights through its collection of thoughtful responses</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    ⭐
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Trust the Spin</h3>
                  <p className="text-gray-600">Watch as the wheel turns with anticipation, each spin bringing you closer to clarity and understanding</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    🌟
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Find Answers</h3>
                  <p className="text-gray-600">Receive wisdom and guidance from our carefully crafted responses, designed to illuminate your path forward</p>
                </div>
              </div>
            </div>
          </section>

          {/* Perfect For Section */}
          <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Perfect for Every Seeker
                </h2>
                <p className="text-lg text-gray-600">
                  Making decisions magical
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">🎲</div>
                  <h3 className="text-xl font-semibold mb-3">Party Games</h3>
                  <p className="text-gray-600">Transform gatherings into memorable events with an interactive fortune telling experience everyone can enjoy</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">🔮</div>
                  <h3 className="text-xl font-semibold mb-3">Daily Guidance</h3>
                  <p className="text-gray-600">Start your day with insight and direction, letting the wheel guide your choices and decisions</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">✨</div>
                  <h3 className="text-xl font-semibold mb-3">Fun Decisions</h3>
                  <p className="text-gray-600">Add an element of mystical charm to your choice making process with our engaging fortune wheel</p>
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
                  Everything you need to know about seeking fortune
                </p>
              </div>
              {/* Professional Engaging Accordion FAQ */}
              {(() => {
                const faqs = [
                  {
                    question: '🎯 How do I use the fortune wheel?',
                    answer: 'Think of your question, focus your intention, and spin the wheel to receive guidance from our collection of mystical responses'
                  },
                  {
                    question: '⭐ Are the answers reliable?',
                    answer: 'The wheel provides thoughtful guidance to help you reflect on decisions, but remember to use your own judgment too'
                  },
                  {
                    question: '🌟 Can I customize responses?',
                    answer: 'Yes! Add your own answers or modify existing ones to create a personalized fortune telling experience'
                  },
                  {
                    question: '🎲 Perfect for parties?',
                    answer: 'Absolutely! The wheel adds excitement and mystical fun to any gathering, creating memorable moments of shared discovery'
                  },
                  {
                    question: '✨ How often should I consult it?',
                    answer: 'Use the wheel whenever you seek guidance, but remember to reflect on each answer before spinning again'
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

export default WheelOfFortunePage; 