import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WheelContainer from './components/WheelContainer';
import ControlPanel from './components/ControlPanel';
import { WheelSegment } from './types/wheel';
import { defaultSegments } from './data/defaultSegments';
import CustomWheelPage from './pages/CustomWheelPage';
import YesNoWheelPage from './pages/YesNoWheelPage';
import WhatToEatWheelPage from './pages/WhatToEatWheelPage';
import PrizeWheelPage from './pages/PrizeWheelPage';
import SpinTheWheelPage from './pages/SpinTheWheelPage';
import WheelOfNamesPage from './pages/WheelOfNamesPage';
import RandomTeamGeneratorPage from './pages/RandomTeamGeneratorPage';
import ColorPickerPage from './pages/ColorPickerPage';
import LuckyNumbersPage from './pages/LuckyNumbersPage';
import WheelOfLunchPage from './pages/WheelOfLunchPage';
import FastFoodWheelPage from './pages/FastFoodWheelPage';
import TruthOrDareWheelPage from './pages/TruthOrDareWheelPage';
import HeadsOrTailsWheelPage from './pages/HeadsOrTailsWheelPage';
import RandomPasswordGeneratorPage from './pages/RandomPasswordGeneratorPage';
import RandomLetterPickerPage from './pages/RandomLetterPickerPage';
import DiceRollerPage from './pages/DiceRollerPage';
import CoinFlipPage from './pages/CoinFlipPage';
import RandomDirectionPage from './pages/RandomDirectionPage';
import WheelOfFortunePage from './pages/WheelOfFortunePage';
import Magic8BallPage from './pages/Magic8BallPage';
import TwisterWheelPage from './pages/TwisterWheelPage';
import RandomNumberPickerPage from './pages/RandomNumberPickerPage';
import WheelOfBirthdaysPage from './pages/WheelOfBirthdaysPage';
import SquidGameRolesPage from './pages/SquidGameRolesPage';
import LetterPickerWheelPage from './pages/LetterPickerWheelPage';
import CountryPickerWheelPage from './pages/CountryPickerWheelPage';
import StatePickerWheelPage from './pages/StatePickerWheelPage';
import AboutUsPage from './pages/AboutUsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import TemplatesPage from './pages/TemplatesPage';
import SEO from './components/SEO';
import { AdSenseAutoAds } from './components/AdSense';
import DatePickerWheelPage from './pages/DatePickerWheelPage';
import MLBPickerWheelPage from './pages/MLBPickerWheelPage';
import NBAPickerWheelPage from './pages/NBAPickerWheelPage';
import NFLPickerWheelPage from './pages/NFLPickerWheelPage';
import WheelOfDinnerPage from './pages/WheelOfDinnerPage';
import WheelOfBreakfastPage from './pages/WheelOfBreakfastPage';
import FoodWheelPage from './pages/FoodWheelPage';

function App() {
  const [segments, setSegments] = useState<WheelSegment[]>(defaultSegments);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('custom');
  const [faqOpenIndex, setFaqOpenIndex] = useState(-1);

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
            <>
              <SEO 
                title="Spin the Wheels | Free Random Picker | Decision Maker Tool"
                description="Spin the Wheels - Make decisions fun with our free spinning wheel! Perfect for teams, classrooms, parties, and daily choices. Customize colors and spin with realistic animations."
                keywords="spinning wheel, random picker, decision maker, free wheel, online wheel, wheel spinner, random selector, prize wheel, yes no wheel, food wheel, team picker"
                canonical="/"
              />
              <section className="py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-6 px-4">
                      Spin the Wheels
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                      Instantly create, customize, and spin wheels for decisions, games, or fun. Enjoy a fast, interactive experience for any choice you need to make.
                    </p>
                  </div>

                  {/* Main App Container */}
                  <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Wheel Section */}
                    <div className="lg:col-span-2">
                      <WheelContainer
                        segments={segments}
                        onSpin={() => {}}
                        isSpinning={isSpinning}
                        setIsSpinning={setIsSpinning}
                        title="Your Custom Wheel"
                      />
                    </div>

                    {/* Control Panel */}
                    <div className="space-y-4 lg:space-y-6">
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

              {/* How It Works Section */}
              <section className="py-16 bg-white/50 backdrop-blur-sm">
                {/* AdSense Banner */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                  <div className="text-center">
                    <ins
                      className="adsbygoogle"
                      style={{ display: 'block' }}
                      data-ad-client="ca-pub-4542839087220625"
                      data-ad-slot="1234567890"
                      data-ad-format="auto"
                      data-full-width-responsive="true"
                    />
                  </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 px-4">
                      How to Get Spinning in Seconds
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 px-4">
                      No instructions needed. Just jump in! Here’s how easy it is:
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                    <div className="text-center p-4 sm:p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                        🎨
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">Customize Your Wheel</h3>
                      <p className="text-sm sm:text-base text-gray-600">Type in your choices, pick your favorite colors, or start with a ready made template. Make it as simple or wild as you want!</p>
                    </div>
                    <div className="text-center p-4 sm:p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                        🎯
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">Spin the Wheel</h3>
                      <p className="text-sm sm:text-base text-gray-600">Hit spin and watch the wheel go! The suspense builds with every tick. Who will win?</p>
                    </div>
                    <div className="text-center p-4 sm:p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 sm:col-span-2 md:col-span-1">
                      <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                        🏆
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">Get Results</h3>
                      <p className="text-sm sm:text-base text-gray-600">Celebrate your winner! Share the outcome or spin again for more fun. It’s that easy.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Powerful Features Section */}
              <section id="features" className="py-16 bg-white/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 px-4">
                      Features That Make Every Spin a Blast
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 px-4">
                      Discover all the ways our wheel makes choosing simple, fair, and a little bit thrilling.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    <div className="text-center p-4 sm:p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🎨</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">Custom Design</h3>
                      <p className="text-sm sm:text-base text-gray-600">Change up the look. Colors, labels, and segments are all yours to tweak.</p>
                    </div>

                    <div className="text-center p-4 sm:p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📱</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">Mobile Ready</h3>
                      <p className="text-sm sm:text-base text-gray-600">Spin on your phone, tablet, or computer. Wherever you are, it just works.</p>
                    </div>

                    <div className="text-center p-4 sm:p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📊</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">Statistics</h3>
                      <p className="text-sm sm:text-base text-gray-600">See which options win most often and keep track of your spins with ease.</p>
                    </div>

                    <div className="text-center p-4 sm:p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🚀</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">Fast & Smooth</h3>
                      <p className="text-sm sm:text-base text-gray-600">No lag, no waiting. Just instant, satisfying spins every time.</p>
                    </div>
                  </div>

                  {/* Further Refined Comparison Table */}
                  <div className="mt-12 lg:mt-16 overflow-x-auto bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100 shadow-lg py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-10">
                    <div className="flex flex-col items-center mb-2">
                      <span className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 shadow">Top Choice</span>
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center px-4">Why Spin the Wheels is Your Best Bet</h2>
                    </div>
                    <p className="text-center text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                      Spin the Wheels is built for real people. Easy to use, super flexible, and always reliable. See how we stack up and why so many trust us to make their next pick a breeze.
                    </p>
                    <div className="rounded-2xl overflow-hidden border-4 border-transparent bg-clip-padding bg-gradient-to-r from-indigo-200 via-white to-purple-200 mb-6 sm:mb-8">
                      <table className="min-w-full bg-white rounded-2xl shadow text-xs sm:text-sm lg:text-base">
                        <thead>
                          <tr className="bg-gradient-to-r from-indigo-100 to-purple-100">
                            <th className="py-2 sm:py-3 px-2 sm:px-4 font-semibold text-gray-700 text-left"><span className="flex items-center gap-1 sm:gap-2"><span>Feature</span> <span className='text-sm sm:text-base'>🔍</span></span></th>
                            <th className="py-2 sm:py-3 px-2 sm:px-4 font-semibold text-indigo-700 bg-gradient-to-r from-indigo-200 to-purple-200 border-l-2 sm:border-l-4 border-indigo-400 text-center">SpintheWheels ⭐</th>
                            <th className="py-2 sm:py-3 px-2 sm:px-4 font-semibold text-gray-700 text-center">Competitor A</th>
                            <th className="py-2 sm:py-3 px-2 sm:px-4 font-semibold text-gray-700 text-center">Competitor B</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b hover:bg-indigo-50 transition-colors">
                            <td className="py-2 sm:py-3 px-2 sm:px-4">Unlimited Segments</td>
                            <td className="text-green-600 font-bold text-center bg-indigo-50 py-2 sm:py-3 px-2 sm:px-4">✅</td>
                            <td className="text-red-500 font-bold text-center py-2 sm:py-3 px-2 sm:px-4">❌</td>
                            <td className="text-green-600 font-bold text-center py-2 sm:py-3 px-2 sm:px-4">✅</td>
                          </tr>
                          <tr className="border-b hover:bg-indigo-50 transition-colors">
                            <td className="py-2 sm:py-3 px-2 sm:px-4">Custom Colors</td>
                            <td className="text-green-600 font-bold text-center bg-indigo-50 py-2 sm:py-3 px-2 sm:px-4">✅</td>
                            <td className="text-green-600 font-bold text-center py-2 sm:py-3 px-2 sm:px-4">✅</td>
                            <td className="text-red-500 font-bold text-center py-2 sm:py-3 px-2 sm:px-4">❌</td>
                          </tr>
                          <tr className="border-b hover:bg-indigo-50 transition-colors">
                            <td className="py-2 sm:py-3 px-2 sm:px-4">Free to Use</td>
                            <td className="text-green-600 font-bold text-center bg-indigo-50 py-2 sm:py-3 px-2 sm:px-4">✅</td>
                            <td className="text-red-500 font-bold text-center py-2 sm:py-3 px-2 sm:px-4">❌</td>
                            <td className="text-red-500 font-bold text-center py-2 sm:py-3 px-2 sm:px-4">❌</td>
                          </tr>
                          <tr className="border-b hover:bg-indigo-50 transition-colors">
                            <td className="py-2 sm:py-3 px-2 sm:px-4">No Signup Required</td>
                            <td className="text-green-600 font-bold text-center bg-indigo-50 py-2 sm:py-3 px-2 sm:px-4">✅</td>
                            <td className="text-red-500 font-bold text-center py-2 sm:py-3 px-2 sm:px-4">❌</td>
                            <td className="text-green-600 font-bold text-center py-2 sm:py-3 px-2 sm:px-4">✅</td>
                          </tr>
                          <tr className="border-b hover:bg-indigo-50 transition-colors">
                            <td className="py-2 sm:py-3 px-2 sm:px-4">Mobile Friendly</td>
                            <td className="text-green-600 font-bold text-center bg-indigo-50 py-2 sm:py-3 px-2 sm:px-4">✅</td>
                            <td className="text-green-600 font-bold text-center py-2 sm:py-3 px-2 sm:px-4">✅</td>
                            <td className="text-green-600 font-bold text-center py-2 sm:py-3 px-2 sm:px-4">✅</td>
                          </tr>
                          <tr className="border-b hover:bg-indigo-50 transition-colors">
                            <td className="py-2 sm:py-3 px-2 sm:px-4">Export/Import Wheels</td>
                            <td className="text-green-600 font-bold text-center bg-indigo-50 py-2 sm:py-3 px-2 sm:px-4">✅</td>
                            <td className="text-red-500 font-bold text-center py-2 sm:py-3 px-2 sm:px-4">❌</td>
                            <td className="text-red-500 font-bold text-center py-2 sm:py-3 px-2 sm:px-4">❌</td>
                          </tr>
                          <tr className="hover:bg-indigo-50 transition-colors">
                            <td className="py-2 sm:py-3 px-2 sm:px-4">Realistic Animations</td>
                            <td className="text-green-600 font-bold text-center bg-indigo-50 py-2 sm:py-3 px-2 sm:px-4">✅</td>
                            <td className="text-green-600 font-bold text-center py-2 sm:py-3 px-2 sm:px-4">✅</td>
                            <td className="text-red-500 font-bold text-center py-2 sm:py-3 px-2 sm:px-4">❌</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>

              {/* Templates Section */}
              <section className="py-16 bg-white/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 px-4">
                      Ready to Use Templates
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 px-4">
                      Don’t want to start from scratch? Pick a template and spin right away, or make your own for something totally unique.
                    </p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
                    <Link to="/yes-no" className="group">
                      <div className="text-center p-4 sm:p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                          🤔
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-indigo-600 transition-colors">Yes or No</h3>
                        <p className="text-sm sm:text-base text-gray-600">Quick decisions made simple</p>
                      </div>
                    </Link>
                    
                    <Link to="/what-to-eat" className="group">
                      <div className="text-center p-4 sm:p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                          🍕
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-indigo-600 transition-colors">What to Eat</h3>
                        <p className="text-sm sm:text-base text-gray-600">End your food indecision</p>
                      </div>
                    </Link>
                    
                    <Link to="/wheel-of-names" className="group">
                      <div className="text-center p-4 sm:p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                          👥
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-indigo-600 transition-colors">Name Picker</h3>
                        <p className="text-sm sm:text-base text-gray-600">Fair selection for groups</p>
                      </div>
                    </Link>
                    
                    <Link to="/prize-wheel" className="group">
                      <div className="text-center p-4 sm:p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                          🎁
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-indigo-600 transition-colors">Prize Wheel</h3>
                        <p className="text-sm sm:text-base text-gray-600">Exciting giveaways & rewards</p>
                      </div>
                    </Link>
                  </div>
                  
                  <div className="text-center">
                    <Link
                      to="/templates"
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <span>View All Templates</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                {/* AdSense Banner */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                  <div className="text-center">
                    <ins
                      className="adsbygoogle"
                      style={{ display: 'block' }}
                      data-ad-client="ca-pub-4542839087220625"
                      data-ad-slot="0987654321"
                      data-ad-format="auto"
                      data-full-width-responsive="true"
                    />
                  </div>
                </div>
              </section>

              {/* Perfect for Every Occasion (Use Cases) */}
              <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 px-4">
                      Perfect for Every Occasion
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 px-4">
                      From classrooms to parties, meetings to game nights. If you need a random pick, this wheel has you covered!
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-4xl mb-4">🎓</div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-3">Education</h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        Make lessons lively! Use the wheel for random questions, group work, or fun classroom games.
                      </p>
                    </div>
                    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-4xl mb-4">💼</div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-3">Business</h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        Break the ice, assign tasks, or spark creativity in meetings. Fair and fun for every team.
                      </p>
                    </div>
                    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-4xl mb-4">🎉</div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-3">Events & Parties</h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        Keep guests engaged with games, raffles, or prize draws. Everyone loves a spin!
                      </p>
                    </div>
                    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-4xl mb-4">🤔</div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-3">Daily Decisions</h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        Can’t decide what’s for dinner or what to do next? Let the wheel choose for you. No more debates!
                      </p>
                    </div>
                    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-4xl mb-4">🎮</div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-3">Gaming</h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        Add a twist to your games. Randomize characters, challenges, or rules for extra excitement.
                      </p>
                    </div>
                    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-4xl mb-4">🎨</div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-3">Creative Projects</h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        Stuck for ideas? Spin for art prompts, writing challenges, or anything that sparks your imagination.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQs Section */}
              <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 px-4">
                      FAQs
                    </h2>
                    <p className="text-sm sm:text-base text-gray-500 px-4">
                      Got questions? Here are some quick answers about using this spinner app.
                    </p>
                  </div>
                  {/* Professional Engaging Accordion FAQ */}
                  {(() => {
                    const faqs = [
                      {
                        question: 'Is this spinning wheel free to use?',
                        answer: 'Yes! Every feature is 100% free. No catches, no signups, just spin and enjoy.'
                      },
                      {
                        question: 'Can I use it on my phone or tablet?',
                        answer: 'Absolutely! The wheel works perfectly on any device, so you can spin wherever you are.'
                      },
                      {
                        question: 'How random are the results?',
                        answer: 'Every spin is powered by a fair, unbiased algorithm. So the outcome is always a surprise!'
                      },
                      {
                        question: 'Can I save and share my wheels?',
                        answer: 'You bet! Export your wheels to save or share, and import wheels from friends in seconds.'
                      },
                      {
                        question: 'How many options can I add?',
                        answer: 'As many as you want! The wheel grows to fit your list, no matter how big.'
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
                              className={`w-full flex items-center justify-between px-4 sm:px-7 py-4 sm:py-6 text-left rounded-2xl focus:outline-none transition-colors duration-200 ${faqOpenIndex === idx ? 'text-indigo-800 font-extrabold' : 'text-gray-900 font-bold'} group-hover:bg-indigo-50/40 hover:bg-indigo-50/60`}
                              onClick={() => setFaqOpenIndex(faqOpenIndex === idx ? -1 : idx)}
                              aria-expanded={faqOpenIndex === idx}
                              aria-controls={`faq-panel-${idx}`}
                            >
                              <h3 className="text-base sm:text-lg lg:text-xl flex-1 font-semibold pr-4">{faq.question}</h3>
                              <span className={`flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 transition-all duration-300 shadow ${faqOpenIndex === idx ? 'bg-indigo-500 border-indigo-500 text-white scale-110' : 'bg-white border-indigo-200 text-indigo-500 scale-100'}`}
                              >
                                {faqOpenIndex === idx ? (
                                  <svg width="18" height="18" className="sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="9" x2="13" y2="9" /></svg>
                                ) : (
                                  <svg width="18" height="18" className="sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="9" y1="5" x2="9" y2="13" /><line x1="5" y1="9" x2="13" y2="9" /></svg>
                                )}
                              </span>
                            </button>
                                                  <div
                        id={`faq-panel-${idx}`}
                        className={`overflow-hidden transition-all duration-500 ease-in-out px-4 sm:px-7 ${faqOpenIndex === idx ? 'max-h-40 py-3 sm:py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                        style={{
                          transitionProperty: 'max-height, opacity, padding',
                        }}
                      >
                        <div className={`pl-3 sm:pl-4 border-l-2 sm:border-l-4 transition-all duration-300 ${faqOpenIndex === idx ? 'border-indigo-400 bg-indigo-50/40' : 'border-transparent'}`}>
                                <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
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
            </>
          } />
          <Route path="/yes-no" element={<YesNoWheelPage />} />
          <Route path="/what-to-eat" element={<WhatToEatWheelPage />} />
          <Route path="/prize-wheel" element={<PrizeWheelPage />} />
          <Route path="/spin-the-wheel" element={<SpinTheWheelPage />} />
          <Route path="/wheel-of-names" element={<WheelOfNamesPage />} />
          <Route path="/random-team-generator" element={<RandomTeamGeneratorPage />} />
          <Route path="/color-picker" element={<ColorPickerPage />} />
          <Route path="/lucky-numbers" element={<LuckyNumbersPage />} />
          <Route path="/wheel-of-lunch" element={<WheelOfLunchPage />} />
          <Route path="/fast-food-wheel" element={<FastFoodWheelPage />} />
          <Route path="/truth-or-dare" element={<TruthOrDareWheelPage />} />
          <Route path="/heads-or-tails" element={<HeadsOrTailsWheelPage />} />
          <Route path="/random-password-generator" element={<RandomPasswordGeneratorPage />} />
          <Route path="/random-letter-picker" element={<RandomLetterPickerPage />} />
          <Route path="/dice-roller" element={<DiceRollerPage />} />
          <Route path="/coin-flip" element={<CoinFlipPage />} />
          <Route path="/random-direction" element={<RandomDirectionPage />} />
          <Route path="/the-wheel-of-fortune" element={<WheelOfFortunePage />} />
          <Route path="/magic-8-ball" element={<Magic8BallPage />} />
          <Route path="/twister-wheel" element={<TwisterWheelPage />} />
          <Route path="/random-number-picker" element={<RandomNumberPickerPage />} />
          <Route path="/wheel-of-birthdays" element={<WheelOfBirthdaysPage />} />
          <Route path="/squid-game-roles" element={<SquidGameRolesPage />} />
          <Route path="/letter-picker-wheel" element={<LetterPickerWheelPage />} />
          <Route path="/country-picker-wheel" element={<CountryPickerWheelPage />} />
          <Route path="/state-picker-wheel" element={<StatePickerWheelPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/date-picker-wheel" element={<DatePickerWheelPage />} />
          <Route path="/mlb-picker-wheel" element={<MLBPickerWheelPage />} />
          <Route path="/nba-picker-wheel" element={<NBAPickerWheelPage />} />
          <Route path="/nfl-picker-wheel" element={<NFLPickerWheelPage />} />
          <Route path="/wheel-of-dinner" element={<WheelOfDinnerPage />} />
          <Route path="/wheel-of-breakfast" element={<WheelOfBreakfastPage />} />
          <Route path="/food-wheel" element={<FoodWheelPage />} />
          <Route path="/:slug" element={<CustomWheelPage />} />
        </Routes>
      </main>

      <Footer />
      <AdSenseAutoAds />
    </div>
  );
}

export default App;