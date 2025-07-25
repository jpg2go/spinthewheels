import React, { useState } from 'react';
import { WheelSegment } from '../types/wheel';
import WheelContainer from '../components/WheelContainer';
import ControlPanel from '../components/ControlPanel';
import SEO from '../components/SEO';
import { wheelTemplates } from '../data/wheelTemplates';

const SquidGameRolesPage: React.FC = () => {
  const [segments, setSegments] = useState<WheelSegment[]>([
    { id: '1', text: 'Player', color: '#ef4444', weight: 1 },
    { id: '2', text: 'Guard', color: '#6366f1', weight: 1 },
    { id: '3', text: 'Front Man', color: '#10b981', weight: 1 },
    { id: '4', text: 'VIP', color: '#f59e0b', weight: 1 },
    { id: '5', text: 'Detective', color: '#3b82f6', weight: 1 }
  ]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('squid-game-roles');
  const [faqOpenIndex, setFaqOpenIndex] = useState(-1);
  const template = wheelTemplates.find(t => t.id === 'squid-game-roles');

  return (
    <>
      <SEO 
        title="Squid Game Roles | Spin for Your Character | Spin the Wheels"
        description="Get your Squid Game role! Spin to become a player, guard, or VIP. Perfect for themed parties, cosplay events, and fans of the hit show!"
        keywords="squid game roles, squid game characters, role picker, character selector, themed party games, cosplay roles, squid game wheel"
        canonical="/squid-game-roles"
      />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="animated-bg"></div>
        <main className="relative z-10">
          <section className="py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-6 px-4">
                  Squid Game Roles
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                  Step into the world of Squid Game! Spin to discover which role you'd play in the ultimate challenge. Whether you're with friends or just curious, this wheel brings the thrill of the game to your screen.
                </p>
              </div>
              <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-2">
                  <WheelContainer
                    segments={segments}
                    onSpin={() => {}}
                    isSpinning={isSpinning}
                    setIsSpinning={setIsSpinning}
                    title="Squid Game Roles"
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
                  Enter the Game
                </h2>
                <p className="text-lg text-gray-600">
                  Your role awaits
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    🎭
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Choose Your Role</h3>
                  <p className="text-gray-600">Discover your destiny in the game as the wheel assigns you one of five iconic roles, each with unique responsibilities</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    🎮
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Embrace Your Part</h3>
                  <p className="text-gray-600">Step into character with detailed role descriptions and suggestions for bringing your assigned position to life</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    🎪
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Join the Drama</h3>
                  <p className="text-gray-600">Immerse yourself in the intense atmosphere of the games, whether as a determined player or mysterious staff member</p>
                </div>
              </div>
            </div>
          </section>

          {/* Perfect For Section */}
          <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Perfect for Every Fan
                </h2>
                <p className="text-lg text-gray-600">
                  Making events unforgettable
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">🎬</div>
                  <h3 className="text-xl font-semibold mb-3">Themed Parties</h3>
                  <p className="text-gray-600">Transform your gathering into an immersive Squid Game experience with role assignments and themed decorations</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">👔</div>
                  <h3 className="text-xl font-semibold mb-3">Cosplay Events</h3>
                  <p className="text-gray-600">Get inspiration for your next convention or costume party with authentic character roles from the series</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">🎲</div>
                  <h3 className="text-xl font-semibold mb-3">Role Playing</h3>
                  <p className="text-gray-600">Create engaging scenarios and games based on your assigned roles for an authentic Squid Game experience</p>
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
                  Everything you need to know about role selection
                </p>
              </div>
              <div className="space-y-5">
                <div className={`transition-all duration-300 rounded-2xl shadow-lg bg-gradient-to-br from-white via-indigo-50 to-purple-50 border border-gray-100 group ${faqOpenIndex === 0 ? 'ring-2 ring-indigo-400' : ''}`}>
                  <button
                    className={`w-full flex items-center justify-between px-7 py-6 text-left rounded-2xl focus:outline-none transition-colors duration-200 ${faqOpenIndex === 0 ? 'text-indigo-800 font-extrabold' : 'text-gray-900 font-bold'} group-hover:bg-indigo-50/40 hover:bg-indigo-50/60`}
                    onClick={() => setFaqOpenIndex(faqOpenIndex === 0 ? -1 : 0)}
                  >
                    <h3 className="text-lg md:text-xl flex-1 font-semibold">🎭 What are the different roles?</h3>
                    <span className={`ml-6 flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-300 shadow ${faqOpenIndex === 0 ? 'bg-indigo-500 border-indigo-500 text-white scale-110' : 'bg-white border-indigo-200 text-indigo-500 scale-100'}`}>
                      {faqOpenIndex === 0 ? (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      ) : (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="11" y1="5" x2="11" y2="17" /><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      )}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out px-7 ${faqOpenIndex === 0 ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">Choose from Player, Guard, Front Man, VIP, or Detective, each with unique characteristics and story elements</p>
                  </div>
                </div>

                <div className={`transition-all duration-300 rounded-2xl shadow-lg bg-gradient-to-br from-white via-indigo-50 to-purple-50 border border-gray-100 group ${faqOpenIndex === 1 ? 'ring-2 ring-indigo-400' : ''}`}>
                  <button
                    className={`w-full flex items-center justify-between px-7 py-6 text-left rounded-2xl focus:outline-none transition-colors duration-200 ${faqOpenIndex === 1 ? 'text-indigo-800 font-extrabold' : 'text-gray-900 font-bold'} group-hover:bg-indigo-50/40 hover:bg-indigo-50/60`}
                    onClick={() => setFaqOpenIndex(faqOpenIndex === 1 ? -1 : 1)}
                  >
                    <h3 className="text-lg md:text-xl flex-1 font-semibold">🎮 Can I customize the roles?</h3>
                    <span className={`ml-6 flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-300 shadow ${faqOpenIndex === 1 ? 'bg-indigo-500 border-indigo-500 text-white scale-110' : 'bg-white border-indigo-200 text-indigo-500 scale-100'}`}>
                      {faqOpenIndex === 1 ? (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      ) : (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="11" y1="5" x2="11" y2="17" /><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      )}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out px-7 ${faqOpenIndex === 1 ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">Yes! Add new roles or modify existing ones to create your own unique version of the game experience</p>
                  </div>
                </div>

                <div className={`transition-all duration-300 rounded-2xl shadow-lg bg-gradient-to-br from-white via-indigo-50 to-purple-50 border border-gray-100 group ${faqOpenIndex === 2 ? 'ring-2 ring-indigo-400' : ''}`}>
                  <button
                    className={`w-full flex items-center justify-between px-7 py-6 text-left rounded-2xl focus:outline-none transition-colors duration-200 ${faqOpenIndex === 2 ? 'text-indigo-800 font-extrabold' : 'text-gray-900 font-bold'} group-hover:bg-indigo-50/40 hover:bg-indigo-50/60`}
                    onClick={() => setFaqOpenIndex(faqOpenIndex === 2 ? -1 : 2)}
                  >
                    <h3 className="text-lg md:text-xl flex-1 font-semibold">🎪 Perfect for parties?</h3>
                    <span className={`ml-6 flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-300 shadow ${faqOpenIndex === 2 ? 'bg-indigo-500 border-indigo-500 text-white scale-110' : 'bg-white border-indigo-200 text-indigo-500 scale-100'}`}>
                      {faqOpenIndex === 2 ? (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      ) : (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="11" y1="5" x2="11" y2="17" /><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      )}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out px-7 ${faqOpenIndex === 2 ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">Ideal for themed parties! Assign roles to guests and create immersive games and activities based on the show</p>
                  </div>
                </div>

                <div className={`transition-all duration-300 rounded-2xl shadow-lg bg-gradient-to-br from-white via-indigo-50 to-purple-50 border border-gray-100 group ${faqOpenIndex === 3 ? 'ring-2 ring-indigo-400' : ''}`}>
                  <button
                    className={`w-full flex items-center justify-between px-7 py-6 text-left rounded-2xl focus:outline-none transition-colors duration-200 ${faqOpenIndex === 3 ? 'text-indigo-800 font-extrabold' : 'text-gray-900 font-bold'} group-hover:bg-indigo-50/40 hover:bg-indigo-50/60`}
                    onClick={() => setFaqOpenIndex(faqOpenIndex === 3 ? -1 : 3)}
                  >
                    <h3 className="text-lg md:text-xl flex-1 font-semibold">🎬 How to make it authentic?</h3>
                    <span className={`ml-6 flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-300 shadow ${faqOpenIndex === 3 ? 'bg-indigo-500 border-indigo-500 text-white scale-110' : 'bg-white border-indigo-200 text-indigo-500 scale-100'}`}>
                      {faqOpenIndex === 3 ? (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      ) : (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="11" y1="5" x2="11" y2="17" /><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      )}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out px-7 ${faqOpenIndex === 3 ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">Use show inspired costumes, props, and decorations to create an authentic atmosphere for your role playing experience</p>
                  </div>
                </div>

                <div className={`transition-all duration-300 rounded-2xl shadow-lg bg-gradient-to-br from-white via-indigo-50 to-purple-50 border border-gray-100 group ${faqOpenIndex === 4 ? 'ring-2 ring-indigo-400' : ''}`}>
                  <button
                    className={`w-full flex items-center justify-between px-7 py-6 text-left rounded-2xl focus:outline-none transition-colors duration-200 ${faqOpenIndex === 4 ? 'text-indigo-800 font-extrabold' : 'text-gray-900 font-bold'} group-hover:bg-indigo-50/40 hover:bg-indigo-50/60`}
                    onClick={() => setFaqOpenIndex(faqOpenIndex === 4 ? -1 : 4)}
                  >
                    <h3 className="text-lg md:text-xl flex-1 font-semibold">🎲 Ideas for role playing?</h3>
                    <span className={`ml-6 flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-300 shadow ${faqOpenIndex === 4 ? 'bg-indigo-500 border-indigo-500 text-white scale-110' : 'bg-white border-indigo-200 text-indigo-500 scale-100'}`}>
                      {faqOpenIndex === 4 ? (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      ) : (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="11" y1="5" x2="11" y2="17" /><line x1="5" y1="11" x2="17" y2="11" /></svg>
                      )}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out px-7 ${faqOpenIndex === 4 ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">Create character backstories, organize themed games, and design interactive scenarios based on your assigned roles</p>
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

export default SquidGameRolesPage; 