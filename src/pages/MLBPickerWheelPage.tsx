import React, { useState } from 'react';
import { WheelSegment } from '../types/wheel';
import WheelContainer from '../components/WheelContainer';
import ControlPanel from '../components/ControlPanel';
import SEO from '../components/SEO';
import { wheelTemplates } from '../data/wheelTemplates';

const MLBPickerWheelPage: React.FC = () => {
  const [segments, setSegments] = useState<WheelSegment[]>([
    { id: '1', text: 'New York Yankees', color: '#3b82f6', weight: 1 },
    { id: '2', text: 'Los Angeles Dodgers', color: '#f59e0b', weight: 1 },
    { id: '3', text: 'Chicago Cubs', color: '#10b981', weight: 1 },
    { id: '4', text: 'Boston Red Sox', color: '#8b5cf6', weight: 1 },
    { id: '5', text: 'San Francisco Giants', color: '#ef4444', weight: 1 },
    { id: '6', text: 'Houston Astros', color: '#f97316', weight: 1 }
  ]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('mlb-picker-wheel');
  const [faqOpenIndex, setFaqOpenIndex] = useState(-1);
  const template = wheelTemplates.find(t => t.id === 'mlb-picker-wheel');

  return (
    <>
      <SEO 
        title="MLB Picker | Spin for a Random MLB Team | Spin the Wheels"
        description="Spin to pick a random MLB team! Great for fantasy drafts, competitions, or learning about baseball. Make unbiased choices for your next event or trivia game."
        keywords="mlb picker wheel, random mlb team, baseball wheel, fantasy draft, baseball trivia, team selector"
        canonical="/mlb-picker-wheel"
      />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="animated-bg"></div>
        <main className="relative z-10">
          <section className="py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-6 px-4">
                  MLB Picker Wheel
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                  Step up to the plate and let the MLB Picker Wheel choose your next team. Perfect for fantasy drafts, baseball games, or adding excitement to your next event.
                </p>
              </div>
              <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-2">
                  <WheelContainer
                    segments={segments}
                    onSpin={() => {}}
                    isSpinning={isSpinning}
                    setIsSpinning={setIsSpinning}
                    title="MLB Picker Wheel"
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
                  Play Ball, Spin the Wheel
                </h2>
                <p className="text-lg text-gray-600">
                  Your baseball adventure starts here
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    ⚾
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Pick a Team</h3>
                  <p className="text-gray-600">Let the wheel select your MLB team for fantasy drafts, friendly competitions, or baseball themed events</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    ⭐
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Level the Field</h3>
                  <p className="text-gray-600">Make unbiased choices and add excitement to your games by letting chance decide your next baseball team</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    🎯
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Discover New Teams</h3>
                  <p className="text-gray-600">Explore the world of Major League Baseball and learn about teams you might not have followed before</p>
                </div>
              </div>
            </div>
          </section>

          {/* Perfect For Section */}
          <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Perfect for Every Baseball Fan
                </h2>
                <p className="text-lg text-gray-600">
                  Making every game more exciting
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">🏟️</div>
                  <h3 className="text-xl font-semibold mb-3">Fantasy Drafts</h3>
                  <p className="text-gray-600">Add a twist to your fantasy baseball drafts by letting the wheel pick your team and keep things fair and fun</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">🎲</div>
                  <h3 className="text-xl font-semibold mb-3">Game Night Decisions</h3>
                  <p className="text-gray-600">Use the wheel to decide teams for friendly matches, trivia nights, or baseball themed parties and events</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-xl font-semibold mb-3">Learning Baseball</h3>
                  <p className="text-gray-600">Discover facts about MLB teams, their history, and players while making learning interactive and engaging</p>
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
                  Everything you need to know about picking MLB teams
                </p>
              </div>
              <div className="space-y-5">
                <div className={`transition-all duration-300 rounded-2xl shadow-lg bg-gradient-to-br from-white via-indigo-50 to-purple-50 border border-gray-100 group ${faqOpenIndex === 0 ? 'ring-2 ring-indigo-400' : ''}`}>
                  <button
                    className={`w-full flex items-center justify-between px-7 py-6 text-left rounded-2xl focus:outline-none transition-colors duration-200 ${faqOpenIndex === 0 ? 'text-indigo-800 font-extrabold' : 'text-gray-900 font-bold'} group-hover:bg-indigo-50/40 hover:bg-indigo-50/60`}
                    onClick={() => setFaqOpenIndex(faqOpenIndex === 0 ? -1 : 0)}
                  >
                    <h3 className="text-lg md:text-xl flex-1 font-semibold">⚾ How random is the team selection?</h3>
                    <span className={`ml-6 flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-300 shadow ${faqOpenIndex === 0 ? 'bg-indigo-500 border-indigo-500 text-white scale-110' : 'bg-white border-indigo-200 text-indigo-500 scale-100'}`}>
                      {faqOpenIndex === 0 ? (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      ) : (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="11" y1="5" x2="11" y2="17" /><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      )}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out px-7 ${faqOpenIndex === 0 ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">Every spin is completely random, giving all MLB teams an equal chance to be selected for your event</p>
                  </div>
                </div>

                <div className={`transition-all duration-300 rounded-2xl shadow-lg bg-gradient-to-br from-white via-indigo-50 to-purple-50 border border-gray-100 group ${faqOpenIndex === 1 ? 'ring-2 ring-indigo-400' : ''}`}>
                  <button
                    className={`w-full flex items-center justify-between px-7 py-6 text-left rounded-2xl focus:outline-none transition-colors duration-200 ${faqOpenIndex === 1 ? 'text-indigo-800 font-extrabold' : 'text-gray-900 font-bold'} group-hover:bg-indigo-50/40 hover:bg-indigo-50/60`}
                    onClick={() => setFaqOpenIndex(faqOpenIndex === 1 ? -1 : 1)}
                  >
                    <h3 className="text-lg md:text-xl flex-1 font-semibold">⭐ Can I add more teams?</h3>
                    <span className={`ml-6 flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-300 shadow ${faqOpenIndex === 1 ? 'bg-indigo-500 border-indigo-500 text-white scale-110' : 'bg-white border-indigo-200 text-indigo-500 scale-100'}`}>
                      {faqOpenIndex === 1 ? (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      ) : (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="11" y1="5" x2="11" y2="17" /><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      )}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out px-7 ${faqOpenIndex === 1 ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">Absolutely! Add any MLB teams you want to the wheel for a fully customized baseball experience</p>
                  </div>
                </div>

                <div className={`transition-all duration-300 rounded-2xl shadow-lg bg-gradient-to-br from-white via-indigo-50 to-purple-50 border border-gray-100 group ${faqOpenIndex === 2 ? 'ring-2 ring-indigo-400' : ''}`}>
                  <button
                    className={`w-full flex items-center justify-between px-7 py-6 text-left rounded-2xl focus:outline-none transition-colors duration-200 ${faqOpenIndex === 2 ? 'text-indigo-800 font-extrabold' : 'text-gray-900 font-bold'} group-hover:bg-indigo-50/40 hover:bg-indigo-50/60`}
                    onClick={() => setFaqOpenIndex(faqOpenIndex === 2 ? -1 : 2)}
                  >
                    <h3 className="text-lg md:text-xl flex-1 font-semibold">🎯 Great for trivia?</h3>
                    <span className={`ml-6 flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-300 shadow ${faqOpenIndex === 2 ? 'bg-indigo-500 border-indigo-500 text-white scale-110' : 'bg-white border-indigo-200 text-indigo-500 scale-100'}`}>
                      {faqOpenIndex === 2 ? (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      ) : (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="11" y1="5" x2="11" y2="17" /><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      )}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out px-7 ${faqOpenIndex === 2 ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">Use the wheel for baseball trivia, team history games, or to inspire new questions for your next quiz night</p>
                  </div>
                </div>

                <div className={`transition-all duration-300 rounded-2xl shadow-lg bg-gradient-to-br from-white via-indigo-50 to-purple-50 border border-gray-100 group ${faqOpenIndex === 3 ? 'ring-2 ring-indigo-400' : ''}`}>
                  <button
                    className={`w-full flex items-center justify-between px-7 py-6 text-left rounded-2xl focus:outline-none transition-colors duration-200 ${faqOpenIndex === 3 ? 'text-indigo-800 font-extrabold' : 'text-gray-900 font-bold'} group-hover:bg-indigo-50/40 hover:bg-indigo-50/60`}
                    onClick={() => setFaqOpenIndex(faqOpenIndex === 3 ? -1 : 3)}
                  >
                    <h3 className="text-lg md:text-xl flex-1 font-semibold">🏟️ Party and event ideas?</h3>
                    <span className={`ml-6 flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-300 shadow ${faqOpenIndex === 3 ? 'bg-indigo-500 border-indigo-500 text-white scale-110' : 'bg-white border-indigo-200 text-indigo-500 scale-100'}`}>
                      {faqOpenIndex === 3 ? (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      ) : (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="11" y1="5" x2="11" y2="17" /><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      )}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out px-7 ${faqOpenIndex === 3 ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">Host baseball themed parties, fantasy drafts, or friendly competitions using the wheel for team assignments</p>
                  </div>
                </div>

                <div className={`transition-all duration-300 rounded-2xl shadow-lg bg-gradient-to-br from-white via-indigo-50 to-purple-50 border border-gray-100 group ${faqOpenIndex === 4 ? 'ring-2 ring-indigo-400' : ''}`}>
                  <button
                    className={`w-full flex items-center justify-between px-7 py-6 text-left rounded-2xl focus:outline-none transition-colors duration-200 ${faqOpenIndex === 4 ? 'text-indigo-800 font-extrabold' : 'text-gray-900 font-bold'} group-hover:bg-indigo-50/40 hover:bg-indigo-50/60`}
                    onClick={() => setFaqOpenIndex(faqOpenIndex === 4 ? -1 : 4)}
                  >
                    <h3 className="text-lg md:text-xl flex-1 font-semibold">🎲 Fun game ideas?</h3>
                    <span className={`ml-6 flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-300 shadow ${faqOpenIndex === 4 ? 'bg-indigo-500 border-indigo-500 text-white scale-110' : 'bg-white border-indigo-200 text-indigo-500 scale-100'}`}>
                      {faqOpenIndex === 4 ? (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      ) : (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="11" y1="5" x2="11" y2="17" /><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      )}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out px-7 ${faqOpenIndex === 4 ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">Try team trivia, mascot challenges, or create your own baseball themed games using the wheel for inspiration</p>
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

export default MLBPickerWheelPage; 