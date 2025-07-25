import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, RotateCcw, Star, Users, Palette, Utensils, Gamepad2, Wrench } from 'lucide-react';
import { wheelTemplates } from '../data/wheelTemplates';
import SEO from '../components/SEO';

const TemplatesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(wheelTemplates.map(template => template.category))];
    return ['All', ...cats];
  }, []);

  // Filter templates based on search and category
  const filteredTemplates = useMemo(() => {
    return wheelTemplates.filter(template => {
      const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           template.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Group templates by category
  const groupedTemplates = useMemo(() => {
    const grouped = filteredTemplates.reduce((acc, template) => {
      if (!acc[template.category]) {
        acc[template.category] = [];
      }
      acc[template.category].push(template);
      return acc;
    }, {} as Record<string, typeof wheelTemplates>);
    return grouped;
  }, [filteredTemplates]);

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Decision Wheels':
        return <RotateCcw className="w-5 h-5" />;
      case 'Name & Team Wheels':
        return <Users className="w-5 h-5" />;
      case 'Color & Number Wheels':
        return <Palette className="w-5 h-5" />;
      case 'Food Wheels':
        return <Utensils className="w-5 h-5" />;
      case 'Game & Fun Wheels':
        return <Gamepad2 className="w-5 h-5" />;
      case 'Tools':
        return <Wrench className="w-5 h-5" />;
      default:
        return <Star className="w-5 h-5" />;
    }
  };

  // Get category color
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Decision Wheels':
        return 'from-blue-500 to-indigo-600';
      case 'Name & Team Wheels':
        return 'from-green-500 to-emerald-600';
      case 'Color & Number Wheels':
        return 'from-purple-500 to-pink-600';
      case 'Food Wheels':
        return 'from-orange-500 to-red-600';
      case 'Game & Fun Wheels':
        return 'from-yellow-500 to-orange-600';
      case 'Tools':
        return 'from-gray-500 to-slate-600';
      default:
        return 'from-indigo-500 to-purple-600';
    }
  };

  return (
    <>
      <SEO 
        title="Spinning Wheel Templates | Spin the Wheels - Free Templates"
        description="Browse our collection of free spinning wheel templates. From decision wheels to games, food choices to tools - find the perfect template for any situation."
        keywords="spinning wheel templates, free wheel templates, decision wheels, game wheels, food wheels, random picker templates, wheel generator templates"
        canonical="/templates"
      />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Spinning Wheel Templates
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore a wide variety of spinning wheel templates for every occasion. Instantly find the perfect wheel for games, food, names, and more—no signup needed.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search templates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-indigo-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Templates Grid */}
          <div className="space-y-12">
            {Object.entries(groupedTemplates).map(([category, templates]) => (
              <div key={category} className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(category)} text-white`}>
                    {getCategoryIcon(category)}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {templates.length} template{templates.length !== 1 ? 's' : ''}
                  </span>
                </div>

                {/* Templates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {templates.map(template => (
                    <Link
                      key={template.id}
                      to={`/${template.id}`}
                      className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200/50 hover:border-indigo-200"
                    >
                      {/* Template Preview */}
                      <div className="p-6">
                        {/* Wheel Preview */}
                        <div className="flex justify-center mb-4">
                          <div className="relative w-20 h-20">
                            <svg width="80" height="80" className="transform group-hover:scale-110 transition-transform duration-300">
                              {template.segments.map((segment, index) => {
                                const angle = (360 / template.segments.length) * index;
                                const nextAngle = (360 / template.segments.length) * (index + 1);
                                const startAngle = (angle - 90) * (Math.PI / 180);
                                const endAngle = (nextAngle - 90) * (Math.PI / 180);
                                const radius = 35;
                                const centerX = 40;
                                const centerY = 40;
                                const x1 = centerX + radius * Math.cos(startAngle);
                                const y1 = centerY + radius * Math.sin(startAngle);
                                const x2 = centerX + radius * Math.cos(endAngle);
                                const y2 = centerY + radius * Math.sin(endAngle);
                                const largeArcFlag = (360 / template.segments.length) > 180 ? 1 : 0;
                                const path = `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
                                return (
                                  <path key={index} d={path} fill={segment.color} stroke="#fff" strokeWidth="1" />
                                );
                              })}
                              <circle cx="40" cy="40" r="10" fill="#fff" stroke="#4f46e5" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>

                        {/* Template Info */}
                        <div className="text-center">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                            {template.name}
                          </h3>
                          <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                            {template.description}
                          </p>
                          
                          {/* Segments Preview */}
                          <div className="flex flex-wrap justify-center gap-1 mb-4">
                            {template.segments.slice(0, 4).map((segment, index) => (
                              <div
                                key={segment.id}
                                className="w-3 h-3 rounded-full border border-white shadow-sm"
                                style={{ backgroundColor: segment.color }}
                                title={segment.text}
                              />
                            ))}
                            {template.segments.length > 4 && (
                              <div className="w-3 h-3 rounded-full bg-gray-300 border border-white shadow-sm flex items-center justify-center">
                                <span className="text-xs text-gray-600">+{template.segments.length - 4}</span>
                              </div>
                            )}
                          </div>

                          {/* Action Button */}
                          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium group-hover:from-indigo-600 group-hover:to-purple-700 transition-all">
                            Use Template
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>



          {/* No Results */}
          {Object.keys(groupedTemplates).length === 0 && (
            <div className="text-center py-12">
              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
                <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No templates found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search terms or category filter to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}

          {/* Create Custom Wheel CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h2>
              <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
                Create your own custom spinning wheel with unlimited options, custom colors, and personalized settings.
              </p>
              <Link
                to="/"
                className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Create Custom Wheel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplatesPage; 