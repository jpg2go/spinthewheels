import React from 'react';
import SEO from '../components/SEO';
import { Facebook, Twitter } from 'lucide-react';

const AboutUsPage: React.FC = () => {
  console.log('AboutUsPage component rendered');
  
  return (
    <>
      <SEO 
        title="About Us | Meet the Team | Spin the Wheels"
        description="Learn more about the creators of Spin the Wheels, our mission, and how we help you make decisions fun and easy."
        keywords="about spin the wheels, team, mission, creators, decision maker, random picker"
        canonical="/about"
      />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              About Spin the Wheels
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the team behind Spin the Wheels and discover our passion for making decision-making fun, fair, and accessible for everyone.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200/50 mb-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Spin the Wheels, we understand that decision-making can be overwhelming. That's why we created a spinning wheel tool that turns tough choices into exciting moments. Whether you're deciding what to cook for dinner, selecting team members for a project, or choosing your next weekend activity, our wheel makes every decision feel like a game.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We built this tool with simplicity in mind - no complicated setups, no account creation, and definitely no hidden fees. Just open the website, customize your wheel, and start spinning. It's that straightforward.
            </p>
          </div>

          {/* What We Offer Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200/50 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">What We Offer</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Custom Wheels</h3>
                <p className="text-gray-600">Design your perfect wheel with unlimited options, vibrant colors, and personalized segments</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Mobile Friendly</h3>
                <p className="text-gray-600">Seamlessly works across all your devices - smartphones, tablets, laptops, and desktops</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-pink-50 to-red-50">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
                <p className="text-gray-600">Blazing-fast performance with buttery-smooth animations that keep you engaged</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Privacy First</h3>
                <p className="text-gray-600">Your privacy matters - we don't collect data or track your decisions</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Smart Templates</h3>
                <p className="text-gray-600">Ready-to-use templates for popular scenarios - Yes/No decisions, food choices, and more</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎉</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Always Free</h3>
                <p className="text-gray-600">Completely free forever - no hidden costs, no premium tiers, no surprises</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="relative bg-gradient-to-br from-white via-indigo-50/20 to-purple-50/20 rounded-3xl shadow-2xl p-8 border border-indigo-200/50 mb-8 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full -translate-y-10 -translate-x-10"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-purple-400/10 to-pink-400/10 rounded-full translate-y-8 translate-x-8"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
                  <span className="text-2xl text-white">⭐</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">Why Choose Spin the Wheels?</h2>
                <p className="text-lg text-gray-600">See why thousands of users choose our spinning wheel for their daily decisions</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-lg font-bold">1</span>
                    </div>
                  </div>
                  <div className="pt-6 text-center">
                    <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors duration-300">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Simplicity First</h3>
                    <p className="text-gray-600 leading-relaxed">We designed this tool for instant use - no tutorials needed, no complex settings to figure out. Just click and spin.</p>
                  </div>
                </div>
                
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-lg font-bold">2</span>
                    </div>
                  </div>
                  <div className="pt-6 text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                      <span className="text-2xl">⚖️</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Fair and Random</h3>
                    <p className="text-gray-600 leading-relaxed">Every spin is genuinely random - no favoritism, no predictable patterns. What you see is what you get.</p>
                  </div>
                </div>
                
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-lg font-bold">3</span>
                    </div>
                  </div>
                  <div className="pt-6 text-center">
                    <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-200 transition-colors duration-300">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Community Driven</h3>
                    <p className="text-gray-600 leading-relaxed">Your feedback shapes our tool. We're constantly improving based on what users like you tell us.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Story Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200/50 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Spin the Wheels started with a simple frustration - I was tired of spending 20 minutes deciding what to eat for dinner. Sound familiar? That's when I realized we all face these small but annoying decision-making moments every day.
              </p>
              <p className="mb-4">
                I looked around for solutions, but everything I found was either too complicated, required downloading apps, or had sneaky hidden costs. So I decided to build something better - a tool that works instantly, costs nothing, and actually makes decision-making fun.
              </p>
              <p className="mb-4">
                What began as my personal solution has now become a tool that teachers use in classrooms, teams use for fair task distribution, families use for game nights, and individuals use for those daily "what should I do?" moments.
              </p>
              <p>
                It's incredible to see how something so simple has helped so many people make decisions easier and more enjoyable.
              </p>
            </div>
          </div>

          {/* Author Box Section */}
          <div className="relative bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30 rounded-3xl shadow-2xl p-8 border border-indigo-200/50 mb-8 overflow-hidden group">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <span className="text-3xl text-white font-bold">M</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">Meet the Creator</h2>
                <p className="text-xl font-semibold text-gray-800 mb-2">Monu Tiwari</p>
                <p className="text-lg text-gray-600 font-medium">Founder & Developer of Spin the Wheels</p>
                <div className="flex justify-center mt-4 space-x-2">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
              
              <div className="max-w-3xl mx-auto text-center mb-8">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/50 shadow-lg">
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Hey there! I'm <span className="font-semibold text-indigo-600">Monu Tiwari</span>, the guy behind <span className="font-semibold text-indigo-600">Spin the Wheels</span>. I built this tool because I got tired of the endless "what should we do?" conversations. Whether you're a teacher trying to pick students fairly, a team leader assigning tasks, or just someone who can't decide between pizza and burgers, this tool is here to help.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    I love building things that actually solve real problems. When I'm not coding, you'll find me experimenting with new tech, contributing to open-source projects, or probably drinking my third coffee of the day ☕
                  </p>
                </div>
                
                {/* Skills/Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">React</span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">TypeScript</span>
                  <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">UI/UX</span>
                  <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">Problem Solver</span>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://www.facebook.com/spinthewheels/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-7 h-7 group-hover:scale-110 transition-transform duration-200" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="text-xs text-blue-600 font-bold">FB</span>
                  </div>
                </a>
                <a 
                  href="https://x.com/spinthe_wheels" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 bg-gradient-to-r from-sky-400 to-sky-500 rounded-full flex items-center justify-center text-white hover:from-sky-500 hover:to-sky-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="Follow us on X (Twitter)"
                >
                  <Twitter className="w-7 h-7 group-hover:scale-110 transition-transform duration-200" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="text-xs text-sky-500 font-bold">TW</span>
                  </div>
                </a>
                <a 
                  href="https://in.pinterest.com/spinthewheels/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white hover:from-red-600 hover:to-red-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="Follow us on Pinterest"
                >
                  <svg className="w-7 h-7 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="text-xs text-red-600 font-bold">PIN</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="relative bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-8 text-white text-center overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 shadow-lg">
                <span className="text-2xl">💬</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Got ideas for new features? Found a bug? Just want to chat? I'd love to hear from you! Your feedback helps make this tool better for everyone.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl">📧</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                  <p className="text-sm opacity-80 mb-3">Drop me a line with your thoughts</p>
                  <a 
                    href="mailto:infospinthewheels@gmail.com" 
                    className="text-lg font-semibold hover:text-indigo-200 transition-colors duration-200"
                  >
                    infospinthewheels@gmail.com
                  </a>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl">📱</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                  <p className="text-sm opacity-80 mb-3">Stay in the loop with updates and tips</p>
                  <p className="text-lg font-semibold">@spinthewheels</p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-sm opacity-80">
                  I usually get back to you within a day. Can't wait to hear what you think! 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage; 