import React, { useState } from 'react';
import { WheelSegment } from '../types/wheel';
import WheelContainer from '../components/WheelContainer';
import ControlPanel from '../components/ControlPanel';
import SEO from '../components/SEO';
import { wheelTemplates } from '../data/wheelTemplates';

const RandomLetterPickerPage: React.FC = () => {
  const [segments, setSegments] = useState<WheelSegment[]>([
    { id: '1', text: 'A', color: '#EF4444', weight: 1 },
    { id: '2', text: 'B', color: '#F97316', weight: 1 },
    { id: '3', text: 'C', color: '#EAB308', weight: 1 },
    { id: '4', text: 'D', color: '#22C55E', weight: 1 },
    { id: '5', text: 'E', color: '#14B8A6', weight: 1 },
    { id: '6', text: 'F', color: '#3B82F6', weight: 1 },
    { id: '7', text: 'G', color: '#6366F1', weight: 1 },
    { id: '8', text: 'H', color: '#8B5CF6', weight: 1 },
    { id: '9', text: 'I', color: '#EC4899', weight: 1 },
    { id: '10', text: 'J', color: '#F59E0B', weight: 1 },
    { id: '11', text: 'K', color: '#10B981', weight: 1 },
    { id: '12', text: 'L', color: '#6B7280', weight: 1 },
    { id: '13', text: 'M', color: '#EF4444', weight: 1 },
    { id: '14', text: 'N', color: '#F97316', weight: 1 },
    { id: '15', text: 'O', color: '#EAB308', weight: 1 },
    { id: '16', text: 'P', color: '#22C55E', weight: 1 },
    { id: '17', text: 'Q', color: '#14B8A6', weight: 1 },
    { id: '18', text: 'R', color: '#3B82F6', weight: 1 },
    { id: '19', text: 'S', color: '#6366F1', weight: 1 },
    { id: '20', text: 'T', color: '#8B5CF6', weight: 1 },
    { id: '21', text: 'U', color: '#EC4899', weight: 1 },
    { id: '22', text: 'V', color: '#F59E0B', weight: 1 },
    { id: '23', text: 'W', color: '#10B981', weight: 1 },
    { id: '24', text: 'X', color: '#6B7280', weight: 1 },
    { id: '25', text: 'Y', color: '#EF4444', weight: 1 },
    { id: '26', text: 'Z', color: '#F97316', weight: 1 }
  ]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('random-letter-picker');
  const [faqOpenIndex, setFaqOpenIndex] = useState(-1);
  const template = wheelTemplates.find(t => t.id === 'random-letter-picker');

  return (
    <>
      <SEO 
        title="Random Letter Picker | Alphabet Spinner | Spin the Wheels"
        description="Need a random letter? Spin the Random Letter Picker Wheel for games, learning, or creative prompts. Great for classrooms, word games, and fun activities!"
        keywords="random letter picker, alphabet wheel, letter spinner, word games, classroom activities, educational games, creative writing"
        canonical="/random-letter-picker"
      />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="animated-bg"></div>
        <main className="relative z-10">
          <section className="py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-6 px-4">
                  Random Letter Picker
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                  Discover the magic of letters! Spin our colorful wheel to randomly select letters for games, learning, and creative inspiration.
                </p>
              </div>
              <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-2">
                  <WheelContainer
                    segments={segments}
                    onSpin={() => {}}
                    isSpinning={isSpinning}
                    setIsSpinning={setIsSpinning}
                    title="Random Letter Picker"
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
                  Letters Made Lively
                </h2>
                <p className="text-lg text-gray-600">
                  Your alphabetical adventure begins
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    📝
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Spark Creativity</h3>
                  <p className="text-gray-600">Start exciting word games and writing challenges with randomly selected letters that inspire imagination and learning</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    ⭐
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Learn Playfully</h3>
                  <p className="text-gray-600">Transform alphabet learning into an engaging experience with our interactive wheel, perfect for educational activities</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    🌟
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Create Games</h3>
                  <p className="text-gray-600">Design unique word challenges and letter based activities that engage players and encourage vocabulary development</p>
                </div>
              </div>
            </div>
          </section>

          {/* Perfect For Section */}
          <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Perfect for Every Activity
                </h2>
                <p className="text-lg text-gray-600">
                  Making letters fun for everyone
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">🎓</div>
                  <h3 className="text-xl font-semibold mb-3">Classroom Fun</h3>
                  <p className="text-gray-600">Engage students with interactive alphabet activities and educational games that make learning enjoyable</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">✍️</div>
                  <h3 className="text-xl font-semibold mb-3">Writing Prompts</h3>
                  <p className="text-gray-600">Generate creative writing challenges by using random letters as story starters or character name inspirations</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">🎲</div>
                  <h3 className="text-xl font-semibold mb-3">Game Night</h3>
                  <p className="text-gray-600">Add excitement to word games and party activities with random letter challenges that everyone can enjoy</p>
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
                  Everything you need to know about random letter selection
                </p>
              </div>
              {/* Professional Engaging Accordion FAQ */}
              {(() => {
                const faqs = [
                  {
                    question: '📝 How do I use the letter picker?',
                    answer: 'Simply spin the wheel and use the randomly selected letter for your game, activity, or creative challenge. Perfect for starting words or phrases'
                  },
                  {
                    question: '⭐ Can I customize the letters?',
                    answer: 'Yes! Adjust the available letters to match your specific needs, whether for educational purposes or specialized word games'
                  },
                  {
                    question: '🌟 What makes this picker special?',
                    answer: 'Our wheel combines visual engagement with randomization, making letter selection more exciting than traditional methods'
                  },
                  {
                    question: '🎓 Perfect for teaching?',
                    answer: 'Absolutely! Use it for alphabet learning, vocabulary building, and interactive classroom activities that keep students engaged'
                  },
                  {
                    question: '🎲 Need game ideas?',
                    answer: 'Try categories (find items starting with the letter), word chains, or creative writing challenges using your selected letters'
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

export default RandomLetterPickerPage; 