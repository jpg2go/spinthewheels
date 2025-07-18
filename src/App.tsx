import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WheelContainer from './components/WheelContainer';
import ControlPanel from './components/ControlPanel';
import { WheelSegment } from './types/wheel';
import { defaultSegments } from './data/defaultSegments';

function App() {
  const [segments, setSegments] = useState<WheelSegment[]>(defaultSegments);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('custom');

  // Load template from localStorage if coming from Wheels page
  useEffect(() => {
    const savedTemplate = localStorage.getItem('selectedTemplate');
    if (savedTemplate) {
      try {
        const template = JSON.parse(savedTemplate);
        setSegments(template.segments);
        setSelectedTemplate(template.id);
        localStorage.removeItem('selectedTemplate'); // Clear after loading
      } catch (error) {
        console.error('Error loading template:', error);
      }
    }
  }, []);

  const handleAddSegment = (text: string, color: string) => {
    const newSegment: WheelSegment = {
      id: Date.now().toString(),
      text,
      color,
      weight: 1
    };
    setSegments(prev => [...prev, newSegment]);
  };

  const handleUpdateSegment = (id: string, updates: Partial<WheelSegment>) => {
    setSegments(prev => prev.map(segment => 
      segment.id === id ? { ...segment, ...updates } : segment
    ));
  };

  const handleDeleteSegment = (id: string) => {
    setSegments(prev => prev.filter(segment => segment.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="animated-bg"></div>
      
      <Header />
      
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={
            <section className="py-12 md:py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
                    Spin the Spinner
                  </h1>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Want to make a decision, pick a winner, or just have some fun? With this free spinning app, you can create your own custom spinners in seconds. No sign-up, no hassle. Just add your options and spin!
                  </p>
                </div>

                {/* Main App Container */}
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Wheel Section */}
                  <div className="lg:col-span-2">
                    <WheelContainer
                      segments={segments}
                      onSpin={() => {}}
                      isSpinning={isSpinning}
                      setIsSpinning={setIsSpinning}
                    />
                  </div>

                  {/* Control Panel */}
                  <div className="space-y-6">
                    <ControlPanel
                      segments={segments}
                      onAddSegment={handleAddSegment}
                      onUpdateSegment={handleUpdateSegment}
                      onDeleteSegment={handleDeleteSegment}
                      setSegments={setSegments}
                      selectedTemplate={selectedTemplate}
                      setSelectedTemplate={setSelectedTemplate}
                    />
                  </div>
                </div>
              </div>
            </section>
          } />
        </Routes>

        {/* How It Works Section */}
        <section className="py-16 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How to Use This Spinning Wheel
              </h2>
              <p className="text-lg text-gray-600">
                Get started in three easy steps—no tech skills required!
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                  🎨
                </div>
                <h3 className="text-lg font-semibold mb-2">Customize Your Wheel</h3>
                <p className="text-gray-600">Add your options, choose colors, or select from templates. Make it your own!</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                  🎯
                </div>
                <h3 className="text-lg font-semibold mb-2">Spin the Wheel</h3>
                <p className="text-gray-600">Click the spin button and watch the wheel animate with realistic effects.</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                  🏆
                </div>
                <h3 className="text-lg font-semibold mb-2">Get Results</h3>
                <p className="text-gray-600">See the winner, celebrate, and share your results with friends or colleagues.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Powerful Features Section */}
        <section id="features" className="py-16 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Features That Make Decision-Making Fun
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need for a smooth, fair, and fun spinning experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Custom Design</h3>
                <p className="text-gray-600">Personalize colors, text, and segments to match your needs</p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Mobile Ready</h3>
                <p className="text-gray-600">Works perfectly on all devices with touch support</p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Statistics</h3>
                <p className="text-gray-600">Track spin history and analyze results</p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Fast & Smooth</h3>
                <p className="text-gray-600">Optimized animations and instant responsiveness</p>
              </div>
            </div>

            {/* Further Refined Comparison Table */}
            <div className="mt-16 overflow-x-auto bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100 shadow-lg py-10 px-4 md:px-10">
              <div className="flex flex-col items-center mb-2">
                <span className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 shadow">Top Choice</span>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose SpintheWheels?</h2>
              </div>
              <p className="text-center text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                SpintheWheels stands out for its ease of use, flexibility, and reliability. See how this tool compares to others and why so many people trust it for their random picks and decisions.
              </p>
              <div className="rounded-2xl overflow-hidden border-4 border-transparent bg-clip-padding bg-gradient-to-r from-indigo-200 via-white to-purple-200 mb-8">
                <table className="min-w-full bg-white rounded-2xl shadow text-sm md:text-base">
                  <thead>
                    <tr className="bg-gradient-to-r from-indigo-100 to-purple-100">
                      <th className="py-3 px-4 font-semibold text-gray-700 text-left flex items-center gap-2"><span>Feature</span> <span className='text-base'>🔍</span></th>
                      <th className="py-3 px-4 font-semibold text-indigo-700 bg-gradient-to-r from-indigo-200 to-purple-200 border-l-4 border-indigo-400">SpintheWheels ⭐</th>
                      <th className="py-3 px-4 font-semibold text-gray-700">Competitor A</th>
                      <th className="py-3 px-4 font-semibold text-gray-700">Competitor B</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-indigo-50 transition-colors">
                      <td className="py-3 px-4">Unlimited Segments</td>
                      <td className="text-green-600 font-bold text-center bg-indigo-50">✅</td>
                      <td className="text-red-500 font-bold text-center">❌</td>
                      <td className="text-green-600 font-bold text-center">✅</td>
                    </tr>
                    <tr className="border-b hover:bg-indigo-50 transition-colors">
                      <td className="py-3 px-4">Custom Colors</td>
                      <td className="text-green-600 font-bold text-center bg-indigo-50">✅</td>
                      <td className="text-green-600 font-bold text-center">✅</td>
                      <td className="text-red-500 font-bold text-center">❌</td>
                    </tr>
                    <tr className="border-b hover:bg-indigo-50 transition-colors">
                      <td className="py-3 px-4">Free to Use</td>
                      <td className="text-green-600 font-bold text-center bg-indigo-50">✅</td>
                      <td className="text-red-500 font-bold text-center">❌</td>
                      <td className="text-red-500 font-bold text-center">❌</td>
                    </tr>
                    <tr className="border-b hover:bg-indigo-50 transition-colors">
                      <td className="py-3 px-4">No Signup Required</td>
                      <td className="text-green-600 font-bold text-center bg-indigo-50">✅</td>
                      <td className="text-red-500 font-bold text-center">❌</td>
                      <td className="text-green-600 font-bold text-center">✅</td>
                    </tr>
                    <tr className="border-b hover:bg-indigo-50 transition-colors">
                      <td className="py-3 px-4">Mobile Friendly</td>
                      <td className="text-green-600 font-bold text-center bg-indigo-50">✅</td>
                      <td className="text-green-600 font-bold text-center">✅</td>
                      <td className="text-green-600 font-bold text-center">✅</td>
                    </tr>
                    <tr className="border-b hover:bg-indigo-50 transition-colors">
                      <td className="py-3 px-4">Export/Import Configs</td>
                      <td className="text-green-600 font-bold text-center bg-indigo-50">✅</td>
                      <td className="text-red-500 font-bold text-center">❌</td>
                      <td className="text-red-500 font-bold text-center">❌</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition-colors">
                      <td className="py-3 px-4">Realistic Animations</td>
                      <td className="text-green-600 font-bold text-center bg-indigo-50">✅</td>
                      <td className="text-green-600 font-bold text-center">✅</td>
                      <td className="text-red-500 font-bold text-center">❌</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Perfect for Every Occasion (Use Cases) */}
        <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Perfect for Every Occasion
              </h2>
              <p className="text-lg text-gray-600">
                Use this random picker for classrooms, parties, meetings, games, and more. The possibilities are endless!
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold mb-3">Education</h3>
                <p className="text-gray-600">
                  Make learning fun with random question selection, group assignments, and interactive classroom activities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-semibold mb-3">Business</h3>
                <p className="text-gray-600">
                  Team building activities, meeting icebreakers, and fair task distribution among team members.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-xl font-semibold mb-3">Events & Parties</h3>
                <p className="text-gray-600">
                  Party games, prize giveaways, and entertainment that keeps everyone engaged and excited.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">🤔</div>
                <h3 className="text-xl font-semibold mb-3">Daily Decisions</h3>
                <p className="text-gray-600">
                  What to eat, where to go, what to watch - let the wheel help you make those everyday choices.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="text-xl font-semibold mb-3">Gaming</h3>
                <p className="text-gray-600">
                  Random character selection, challenge modes, and adding unpredictability to your games.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold mb-3">Creative Projects</h3>
                <p className="text-gray-600">
                  Art prompts, writing inspiration, and creative challenges to spark your imagination.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-base text-gray-500">
                Got questions? Here are some quick answers about using this spinner app.
              </p>
            </div>
            {/* Professional Engaging Accordion FAQ */}
            {(() => {
              const faqs = [
                {
                  question: 'Is this spinning wheel free to use?',
                  answer: 'Absolutely! You can use all features for free. There are no hidden costs or subscriptions.'
                },
                {
                  question: 'Can I use it on my phone or tablet?',
                  answer: 'Yes, the app is fully responsive and works great on any device.'
                },
                {
                  question: 'How random are the results?',
                  answer: 'The spinner uses advanced algorithms to make sure every spin is fair and random.'
                },
                {
                  question: 'Can I save and share my wheels?',
                  answer: 'You can export your wheel setups and share them, or import wheels from friends.'
                },
                {
                  question: 'How many options can I add?',
                  answer: 'Add as many as you like! The wheel automatically adjusts to fit your choices.'
                }
              ];
              const [openIndex, setOpenIndex] = useState(-1);
              return (
                <div className="space-y-5">
                  {faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className={`transition-all duration-300 rounded-2xl shadow-lg bg-gradient-to-br from-white via-indigo-50 to-purple-50 border border-gray-100 group ${openIndex === idx ? 'ring-2 ring-indigo-400' : ''}`}
                    >
                      <button
                        className={`w-full flex items-center justify-between px-7 py-6 text-left rounded-2xl focus:outline-none transition-colors duration-200 ${openIndex === idx ? 'text-indigo-800 font-extrabold' : 'text-gray-900 font-bold'} group-hover:bg-indigo-50/40 hover:bg-indigo-50/60`}
                        onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                        aria-expanded={openIndex === idx}
                        aria-controls={`faq-panel-${idx}`}
                      >
                        <h3 className="text-lg md:text-xl flex-1 font-semibold">{faq.question}</h3>
                        <span className={`ml-6 flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-300 shadow ${openIndex === idx ? 'bg-indigo-500 border-indigo-500 text-white scale-110' : 'bg-white border-indigo-200 text-indigo-500 scale-100'}`}
                        >
                          {openIndex === idx ? (
                            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="11" x2="17" y2="11" /></svg>
                          ) : (
                            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="11" y1="5" x2="11" y2="17" /><line x1="5" y1="11" x2="17" y2="11" /></svg>
                          )}
                        </span>
                      </button>
                      <div
                        id={`faq-panel-${idx}`}
                        className={`overflow-hidden transition-all duration-500 ease-in-out px-7 ${openIndex === idx ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                        style={{
                          transitionProperty: 'max-height, opacity, padding',
                        }}
                      >
                        <div className={`pl-4 border-l-4 transition-all duration-300 ${openIndex === idx ? 'border-indigo-400 bg-indigo-50/40' : 'border-transparent'}`}>
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

      <Footer />
    </div>
  );
}

export default App;