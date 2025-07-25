import React, { useState } from 'react';
import { WheelSegment } from '../types/wheel';
import WheelContainer from '../components/WheelContainer';
import ControlPanel from '../components/ControlPanel';
import SEO from '../components/SEO';
import { wheelTemplates } from '../data/wheelTemplates';

const CountryPickerWheelPage: React.FC = () => {
  const [segments, setSegments] = useState<WheelSegment[]>([
    { id: '1', text: 'United States', color: '#3b82f6', weight: 1 },
    { id: '2', text: 'Canada', color: '#f59e0b', weight: 1 },
    { id: '3', text: 'United Kingdom', color: '#10b981', weight: 1 },
    { id: '4', text: 'Australia', color: '#8b5cf6', weight: 1 },
    { id: '5', text: 'India', color: '#ef4444', weight: 1 },
    { id: '6', text: 'Germany', color: '#f97316', weight: 1 },
    { id: '7', text: 'France', color: '#6366f1', weight: 1 },
    { id: '8', text: 'Japan', color: '#22c55e', weight: 1 },
    { id: '9', text: 'Brazil', color: '#eab308', weight: 1 },
    { id: '10', text: 'South Africa', color: '#3b82f6', weight: 1 }
  ]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('country-picker-wheel');
  const [faqOpenIndex, setFaqOpenIndex] = useState(-1);
  const template = wheelTemplates.find(t => t.id === 'country-picker-wheel');

  return (
    <>
      <SEO 
        title="Country Picker | Spin for a Random Country | Spin the Wheels"
        description="Travel the world from home! Spin the Country Picker Wheel to discover countries for games, learning, or trip planning. Get inspired for your next adventure!"
        keywords="country picker wheel, random country generator, world travel, geography games, cultural learning, travel planning"
        canonical="/country-picker-wheel"
      />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="animated-bg"></div>
        <main className="relative z-10">
          <section className="py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-6 px-4">
                  Country Picker Wheel
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                  Explore the globe with a spin! The Country Picker Wheel is your ticket to discovering new places, planning travel games, or learning about the world in a fun, random way.
                </p>
              </div>
              <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-2">
                  <WheelContainer
                    segments={segments}
                    onSpin={() => {}}
                    isSpinning={isSpinning}
                    setIsSpinning={setIsSpinning}
                    title="Country Picker Wheel"
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
                  Global Adventure Awaits
                </h2>
                <p className="text-lg text-gray-600">
                  Your worldwide journey begins
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    🌍
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Choose Your Destination</h3>
                  <p className="text-gray-600">Let the wheel guide you through a world of possibilities, from bustling cities to serene landscapes across all continents</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    ⭐
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Explore Cultures</h3>
                  <p className="text-gray-600">Discover diverse traditions, cuisines, and customs as you learn about different nations and their unique heritage</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    🎯
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Plan Adventures</h3>
                  <p className="text-gray-600">Transform random selections into exciting travel plans, educational projects, or cultural exploration activities</p>
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
                  Making geography exciting
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">🎓</div>
                  <h3 className="text-xl font-semibold mb-3">Geography Learning</h3>
                  <p className="text-gray-600">Make geography lessons interactive and engaging with random country selections and cultural exploration activities</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">✈️</div>
                  <h3 className="text-xl font-semibold mb-3">Travel Planning</h3>
                  <p className="text-gray-600">Discover unexpected destinations and create unique travel itineraries for your next global adventure</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">🎲</div>
                  <h3 className="text-xl font-semibold mb-3">Cultural Games</h3>
                  <p className="text-gray-600">Create engaging geography games and cultural learning activities for classrooms, parties, or family fun</p>
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
                  Everything you need to know about country selection
                </p>
              </div>
              <div className="space-y-5">
                <div className={`transition-all duration-300 rounded-2xl shadow-lg bg-gradient-to-br from-white via-indigo-50 to-purple-50 border border-gray-100 group ${faqOpenIndex === 0 ? 'ring-2 ring-indigo-400' : ''}`}>
                  <button
                    className={`w-full flex items-center justify-between px-7 py-6 text-left rounded-2xl focus:outline-none transition-colors duration-200 ${faqOpenIndex === 0 ? 'text-indigo-800 font-extrabold' : 'text-gray-900 font-bold'} group-hover:bg-indigo-50/40 hover:bg-indigo-50/60`}
                    onClick={() => setFaqOpenIndex(faqOpenIndex === 0 ? -1 : 0)}
                  >
                    <h3 className="text-lg md:text-xl flex-1 font-semibold">🌍 How many countries are included?</h3>
                    <span className={`ml-6 flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-300 shadow ${faqOpenIndex === 0 ? 'bg-indigo-500 border-indigo-500 text-white scale-110' : 'bg-white border-indigo-200 text-indigo-500 scale-100'}`}>
                      {faqOpenIndex === 0 ? (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      ) : (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="11" y1="5" x2="11" y2="17" /><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      )}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out px-7 ${faqOpenIndex === 0 ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">The wheel features a diverse selection of countries from every continent, and you can customize the list to your preferences</p>
                  </div>
                </div>

                <div className={`transition-all duration-300 rounded-2xl shadow-lg bg-gradient-to-br from-white via-indigo-50 to-purple-50 border border-gray-100 group ${faqOpenIndex === 1 ? 'ring-2 ring-indigo-400' : ''}`}>
                  <button
                    className={`w-full flex items-center justify-between px-7 py-6 text-left rounded-2xl focus:outline-none transition-colors duration-200 ${faqOpenIndex === 1 ? 'text-indigo-800 font-extrabold' : 'text-gray-900 font-bold'} group-hover:bg-indigo-50/40 hover:bg-indigo-50/60`}
                    onClick={() => setFaqOpenIndex(faqOpenIndex === 1 ? -1 : 1)}
                  >
                    <h3 className="text-lg md:text-xl flex-1 font-semibold">⭐ Can I customize regions?</h3>
                    <span className={`ml-6 flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-300 shadow ${faqOpenIndex === 1 ? 'bg-indigo-500 border-indigo-500 text-white scale-110' : 'bg-white border-indigo-200 text-indigo-500 scale-100'}`}>
                      {faqOpenIndex === 1 ? (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      ) : (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="11" y1="5" x2="11" y2="17" /><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      )}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out px-7 ${faqOpenIndex === 1 ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">Yes! Focus on specific continents, regions, or create custom country lists for targeted learning and activities</p>
                  </div>
                </div>

                <div className={`transition-all duration-300 rounded-2xl shadow-lg bg-gradient-to-br from-white via-indigo-50 to-purple-50 border border-gray-100 group ${faqOpenIndex === 2 ? 'ring-2 ring-indigo-400' : ''}`}>
                  <button
                    className={`w-full flex items-center justify-between px-7 py-6 text-left rounded-2xl focus:outline-none transition-colors duration-200 ${faqOpenIndex === 2 ? 'text-indigo-800 font-extrabold' : 'text-gray-900 font-bold'} group-hover:bg-indigo-50/40 hover:bg-indigo-50/60`}
                    onClick={() => setFaqOpenIndex(faqOpenIndex === 2 ? -1 : 2)}
                  >
                    <h3 className="text-lg md:text-xl flex-1 font-semibold">🎯 Perfect for education?</h3>
                    <span className={`ml-6 flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-300 shadow ${faqOpenIndex === 2 ? 'bg-indigo-500 border-indigo-500 text-white scale-110' : 'bg-white border-indigo-200 text-indigo-500 scale-100'}`}>
                      {faqOpenIndex === 2 ? (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      ) : (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="11" y1="5" x2="11" y2="17" /><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      )}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out px-7 ${faqOpenIndex === 2 ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">Great for geography lessons! Use it to teach about countries, cultures, capitals, flags, and international relations</p>
                  </div>
                </div>

                <div className={`transition-all duration-300 rounded-2xl shadow-lg bg-gradient-to-br from-white via-indigo-50 to-purple-50 border border-gray-100 group ${faqOpenIndex === 3 ? 'ring-2 ring-indigo-400' : ''}`}>
                  <button
                    className={`w-full flex items-center justify-between px-7 py-6 text-left rounded-2xl focus:outline-none transition-colors duration-200 ${faqOpenIndex === 3 ? 'text-indigo-800 font-extrabold' : 'text-gray-900 font-bold'} group-hover:bg-indigo-50/40 hover:bg-indigo-50/60`}
                    onClick={() => setFaqOpenIndex(faqOpenIndex === 3 ? -1 : 3)}
                  >
                    <h3 className="text-lg md:text-xl flex-1 font-semibold">✈️ Travel planning ideas?</h3>
                    <span className={`ml-6 flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-300 shadow ${faqOpenIndex === 3 ? 'bg-indigo-500 border-indigo-500 text-white scale-110' : 'bg-white border-indigo-200 text-indigo-500 scale-100'}`}>
                      {faqOpenIndex === 3 ? (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      ) : (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="11" y1="5" x2="11" y2="17" /><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      )}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out px-7 ${faqOpenIndex === 3 ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">Use it to discover new destinations, create bucket lists, plan themed trips, or organize virtual cultural tours</p>
                  </div>
                </div>

                <div className={`transition-all duration-300 rounded-2xl shadow-lg bg-gradient-to-br from-white via-indigo-50 to-purple-50 border border-gray-100 group ${faqOpenIndex === 4 ? 'ring-2 ring-indigo-400' : ''}`}>
                  <button
                    className={`w-full flex items-center justify-between px-7 py-6 text-left rounded-2xl focus:outline-none transition-colors duration-200 ${faqOpenIndex === 4 ? 'text-indigo-800 font-extrabold' : 'text-gray-900 font-bold'} group-hover:bg-indigo-50/40 hover:bg-indigo-50/60`}
                    onClick={() => setFaqOpenIndex(faqOpenIndex === 4 ? -1 : 4)}
                  >
                    <h3 className="text-lg md:text-xl flex-1 font-semibold">🎲 Fun game variations?</h3>
                    <span className={`ml-6 flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-300 shadow ${faqOpenIndex === 4 ? 'bg-indigo-500 border-indigo-500 text-white scale-110' : 'bg-white border-indigo-200 text-indigo-500 scale-100'}`}>
                      {faqOpenIndex === 4 ? (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      ) : (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="11" y1="5" x2="11" y2="17" /><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      )}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out px-7 ${faqOpenIndex === 4 ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">Create trivia games about selected countries, organize cultural presentations, or challenge friends to share facts about each nation</p>
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

export default CountryPickerWheelPage; 