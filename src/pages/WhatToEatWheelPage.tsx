import React, { useState } from 'react';
import { WheelSegment } from '../types/wheel';
import WheelContainer from '../components/WheelContainer';
import ControlPanel from '../components/ControlPanel';
import SEO from '../components/SEO';
import { wheelTemplates } from '../data/wheelTemplates';

const WhatToEatWheelPage: React.FC = () => {
  const [segments, setSegments] = useState<WheelSegment[]>([
    { id: '1', text: 'Pizza', color: '#EF4444', weight: 1 },
    { id: '2', text: 'Burger', color: '#F97316', weight: 1 },
    { id: '3', text: 'Sushi', color: '#EAB308', weight: 1 },
    { id: '4', text: 'Tacos', color: '#22C55E', weight: 1 },
    { id: '5', text: 'Pasta', color: '#3B82F6', weight: 1 },
    { id: '6', text: 'Salad', color: '#8B5CF6', weight: 1 }
  ]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('what-to-eat');
  const [faqOpenIndex, setFaqOpenIndex] = useState(-1);
  const template = wheelTemplates.find(t => t.id === 'what-to-eat');

  return (
    <>
      <SEO 
        title="What To Eat Wheel | Find Your Next Meal | Spin the Wheels"
        description="Can't decide what to eat? Spin the What To Eat Wheel for tasty meal ideas and restaurant picks. Perfect for families, friends, or solo foodies!"
        keywords="what to eat wheel, food picker, meal spinner, restaurant picker, dinner wheel, lunch wheel, food decision maker, random food wheel"
        canonical="/what-to-eat"
      />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="animated-bg"></div>
        <main className="relative z-10">
          <section className="py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-6 px-4">
                  What to Eat Wheel
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                  Hungry for inspiration? Let the What To Eat Wheel surprise you with a tasty suggestion or a new cuisine to try, making every meal a little adventure.
                </p>
              </div>
              <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-2">
                  <WheelContainer
                    segments={segments}
                    onSpin={() => {}}
                    isSpinning={isSpinning}
                    setIsSpinning={setIsSpinning}
                    title="What to Eat Wheel"
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
                  Create Your Perfect Food Moment
                </h2>
                <p className="text-lg text-gray-600">
                  Let spontaneity guide your next meal
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    🎪
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Set Your Scene</h3>
                  <p className="text-gray-600">Create your ultimate food collection by mixing favorite local restaurants, cherished comfort foods, and exciting new flavors to explore</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    ⭐
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Magic Moment</h3>
                  <p className="text-gray-600">Experience the thrill as the wheel spins through your curated choices, building anticipation for your next delicious adventure</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    🌈
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Food Journey</h3>
                  <p className="text-gray-600">Transform your meal selection into an exciting culinary expedition, where each spin leads to a fresh and satisfying discovery</p>
                </div>
              </div>
            </div>
          </section>

          {/* Perfect For Section */}
          <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Food Moments Made Special
                </h2>
                <p className="text-lg text-gray-600">
                  Your personal food companion for any situation
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">🌺</div>
                  <h3 className="text-xl font-semibold mb-3">Solo Food Adventures</h3>
                  <p className="text-gray-600">Elevate your personal dining experience with spontaneous choices that transform ordinary meals into memorable food moments</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">🎪</div>
                  <h3 className="text-xl font-semibold mb-3">Social Gatherings</h3>
                  <p className="text-gray-600">Make group dining decisions effortless and exciting by letting the wheel guide everyone to their next shared culinary experience</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">🌟</div>
                  <h3 className="text-xl font-semibold mb-3">Weekly Planning</h3>
                  <p className="text-gray-600">Design your weekly menu with variety and excitement as the wheel helps you discover perfect meals for each day ahead</p>
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
                  Learn how to make the most of your dining decisions
                </p>
              </div>
              {/* Professional Engaging Accordion FAQ */}
              {(() => {
                const faqs = [
                  {
                    question: '🎪 Tell me about wheel customization',
                    answer: 'Make it yours by adding local gems, family favorites, and exciting new spots you want to try'
                  },
                  {
                    question: '🌺 What makes this perfect for daily use?',
                    answer: 'It brings fun to routine decisions while helping you explore more of what you love to eat'
                  },
                  {
                    question: '⭐ Best ways to use with friends?',
                    answer: 'Turn group decisions into a game where everyone wins with a satisfying choice'
                  },
                  {
                    question: '🌈 How to keep things interesting?',
                    answer: 'Mix up your options weekly with seasonal dishes and new discoveries'
                  },
                  {
                    question: '🌟 Can I plan my week ahead?',
                    answer: 'Create themed collections for different days to make weekly planning effortless and exciting'
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

export default WhatToEatWheelPage; 