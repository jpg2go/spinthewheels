import React, { useState } from 'react';
import { WheelSegment } from '../types/wheel';
import WheelContainer from '../components/WheelContainer';
import ControlPanel from '../components/ControlPanel';
import SEO from '../components/SEO';
import { wheelTemplates } from '../data/wheelTemplates';

const ColorPickerPage: React.FC = () => {
  const [segments, setSegments] = useState<WheelSegment[]>([
    { id: '1', text: 'Red', color: '#EF4444', weight: 1 },
    { id: '2', text: 'Blue', color: '#3B82F6', weight: 1 },
    { id: '3', text: 'Green', color: '#22C55E', weight: 1 },
    { id: '4', text: 'Yellow', color: '#EAB308', weight: 1 },
    { id: '5', text: 'Purple', color: '#8B5CF6', weight: 1 },
    { id: '6', text: 'Orange', color: '#F97316', weight: 1 },
    { id: '7', text: 'Pink', color: '#EC4899', weight: 1 },
    { id: '8', text: 'Teal', color: '#14B8A6', weight: 1 }
  ]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('color-picker');
  const [faqOpenIndex, setFaqOpenIndex] = useState(-1);
  const template = wheelTemplates.find(t => t.id === 'color-picker');

  return (
    <>
      <SEO 
        title="Color Picker Wheel | Creative Color Generator | Spin the Wheels"
        description="Need color inspiration? Spin the Color Picker Wheel to discover new palettes and shades for art, design, decor, fashion, and creative projects."
        keywords="color picker wheel, color generator, palette creator, design tool, color inspiration, random color selector, creative color wheel"
        canonical="/color-picker"
      />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="animated-bg"></div>
        <main className="relative z-10">
          <section className="py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-6 px-4">
                  Color Picker Wheel
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                  Discover the perfect colors for your creative vision! Spin to explore endless color combinations and let inspiration guide your next masterpiece.
                </p>
              </div>
              <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-2">
                  <WheelContainer
                    segments={segments}
                    onSpin={() => {}}
                    isSpinning={isSpinning}
                    setIsSpinning={setIsSpinning}
                    title="Color Picker Wheel"
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
                  Unleash Your Creativity
                </h2>
                <p className="text-lg text-gray-600">
                  Find your perfect palette
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    🎨
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Explore Colors</h3>
                  <p className="text-gray-600">Dive into a vibrant spectrum of possibilities as you discover new shades and combinations that spark your creative inspiration</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    ✨
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Create Palettes</h3>
                  <p className="text-gray-600">Build harmonious color schemes by spinning multiple times, letting serendipity guide you to unexpected and beautiful combinations</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    💫
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Design Magic</h3>
                  <p className="text-gray-600">Transform your creative projects with perfectly matched colors that bring your vision to life in stunning and unique ways</p>
                </div>
              </div>
            </div>
          </section>

          {/* Perfect For Section */}
          <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Endless Creative Possibilities
                </h2>
                <p className="text-lg text-gray-600">
                  Color inspiration for every project
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">🖌️</div>
                  <h3 className="text-xl font-semibold mb-3">Artistic Vision</h3>
                  <p className="text-gray-600">Discover inspiring color combinations for your artwork, whether you are painting, illustrating, or creating digital masterpieces</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">🏠</div>
                  <h3 className="text-xl font-semibold mb-3">Interior Dreams</h3>
                  <p className="text-gray-600">Find the perfect color scheme for your space, from accent walls to complete room makeovers that reflect your unique style</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">👗</div>
                  <h3 className="text-xl font-semibold mb-3">Fashion Forward</h3>
                  <p className="text-gray-600">Create stunning outfit combinations and design palettes that keep you ahead of trends and express your personal aesthetic</p>
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
                  Everything you need to know about finding your perfect colors
                </p>
              </div>
              {/* Professional Engaging Accordion FAQ */}
              {(() => {
                const faqs = [
                  {
                    question: '🎨 How do I save color combinations?',
                    answer: 'Capture your favorite color schemes by saving the hex codes or taking screenshots, making it easy to reference and use them in future projects'
                  },
                  {
                    question: '✨ Can I customize the color options?',
                    answer: 'Add your own colors, adjust existing shades, or create themed palettes by customizing the wheel to match your creative needs'
                  },
                  {
                    question: '🖌️ How do I use this for design projects?',
                    answer: 'Spin for primary colors, accents, or complete palettes, then export the codes to use in your digital design tools or as reference'
                  },
                  {
                    question: '💫 What makes this color picker unique?',
                    answer: 'Our wheel combines randomization with curated color theory, ensuring both surprising and harmonious combinations every time'
                  },
                  {
                    question: '🌈 Can I find specific color schemes?',
                    answer: 'Create custom wheels for different themes like pastels, earth tones, or vibrant neons to focus your color exploration'
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

export default ColorPickerPage; 