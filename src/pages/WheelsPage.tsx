import React, { useState } from 'react';
import { Search, Filter, Grid, List, Star, Users, Utensils, Gamepad2, Palette, Hash, Wrench, ArrowRight, Clock, Trophy } from 'lucide-react';
import { wheelTemplates, CategorizedWheelTemplate } from '../data/wheelTemplates';
import { useNavigate } from 'react-router-dom';

const WheelsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const navigate = useNavigate();

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(wheelTemplates.map(t => t.category)))];

  // Category icons mapping
  const categoryIcons: Record<string, React.ReactNode> = {
    'Decision Wheels': <Star className="w-5 h-5" />,
    'Name & Team Wheels': <Users className="w-5 h-5" />,
    'Food & Meal Wheels': <Utensils className="w-5 h-5" />,
    'Game & Fun Wheels': <Gamepad2 className="w-5 h-5" />,
    'Color & Number Wheels': <Palette className="w-5 h-5" />,
    'Tools': <Wrench className="w-5 h-5" />
  };

  // Category colors mapping
  const categoryColors: Record<string, string> = {
    'Decision Wheels': 'from-blue-500 to-indigo-600',
    'Name & Team Wheels': 'from-purple-500 to-pink-600',
    'Food & Meal Wheels': 'from-green-500 to-emerald-600',
    'Game & Fun Wheels': 'from-orange-500 to-red-600',
    'Color & Number Wheels': 'from-cyan-500 to-blue-600',
    'Tools': 'from-gray-500 to-slate-600'
  };

  // Filter templates
  const filteredTemplates = wheelTemplates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Group templates by category
  const groupedTemplates = categories.reduce((acc, category) => {
    if (category === 'All') return acc;
    acc[category] = filteredTemplates.filter(t => t.category === category);
    return acc;
  }, {} as Record<string, CategorizedWheelTemplate[]>);

  const handleTemplateSelect = (template: CategorizedWheelTemplate) => {
    // Save template to localStorage and navigate to home
    localStorage.setItem('selectedTemplate', JSON.stringify(template));
    navigate('/');
  };

  const TemplateCard: React.FC<{ template: CategorizedWheelTemplate }> = ({ template }) => (
    <div 
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 overflow-hidden transform hover:-translate-y-1"
      onClick={() => handleTemplateSelect(template)}
    >
      {/* Template Preview Header */}
      <div className={`relative h-40 bg-gradient-to-br ${categoryColors[template.category] || 'from-gray-500 to-slate-600'} p-6 flex items-center justify-center`}>
        <div className="relative">
          {/* Mini wheel preview */}
          <div className="w-24 h-24 rounded-full border-3 border-white/30 shadow-2xl relative overflow-hidden backdrop-blur-sm bg-white/10">
            <svg width="96" height="96" className="absolute inset-0">
              {template.segments.slice(0, 8).map((segment, index) => {
                const angle = (360 / Math.min(template.segments.length, 8)) * index;
                const nextAngle = (360 / Math.min(template.segments.length, 8)) * (index + 1);
                const startAngle = (angle - 90) * (Math.PI / 180);
                const endAngle = (nextAngle - 90) * (Math.PI / 180);
                const radius = 45;
                const centerX = 48;
                const centerY = 48;
                
                const x1 = centerX + radius * Math.cos(startAngle);
                const y1 = centerY + radius * Math.sin(startAngle);
                const x2 = centerX + radius * Math.cos(endAngle);
                const y2 = centerY + radius * Math.sin(endAngle);
                
                const largeArcFlag = (360 / Math.min(template.segments.length, 8)) > 180 ? 1 : 0;
                const path = `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
                
                return (
                  <path
                    key={index}
                    d={path}
                    fill={segment.color}
                    stroke="#ffffff"
                    strokeWidth="1"
                    className="opacity-90"
                  />
                );
              })}
              <circle cx="48" cy="48" r="8" fill="#ffffff" className="drop-shadow-sm" />
            </svg>
          </div>
          {/* Spinning animation on hover */}
          <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-spin" style={{ animationDuration: '3s' }}></div>
        </div>
        
        {/* Category badge */}
        <div className="absolute top-4 right-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
            {categoryIcons[template.category]}
            <span className="text-white text-xs font-medium">{template.segments.length}</span>
          </div>
        </div>
      </div>
      
      {/* Template Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors leading-tight">
            {template.name}
          </h3>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-2" />
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {template.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${categoryColors[template.category]}`}></div>
            <span className="text-xs text-gray-500 font-medium">{template.category}</span>
          </div>
          <div className="text-xs text-gray-400 font-medium">
            Click to use
          </div>
        </div>
      </div>
    </div>
  );

  const CategorySection: React.FC<{ category: string; templates: CategorizedWheelTemplate[] }> = ({ category, templates }) => (
    <div className="mb-16">
      {/* Category Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className={`p-3 rounded-2xl bg-gradient-to-r ${categoryColors[category]} shadow-lg`}>
            <div className="text-white">
              {categoryIcons[category]}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
            <p className="text-gray-600">{templates.length} template{templates.length !== 1 ? 's' : ''} available</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          <span>Ready to use</span>
        </div>
      </div>
      
      {/* Templates Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {templates.map(template => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="animated-bg"></div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Spinning Wheel Templates
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
                Choose from our collection of professionally designed spinning wheels. Perfect for decisions, games, education, and entertainment.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{wheelTemplates.length}+</div>
                  <div className="text-white/80 text-sm">Templates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{categories.length - 1}</div>
                  <div className="text-white/80 text-sm">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">100%</div>
                  <div className="text-white/80 text-sm">Free</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">0</div>
                  <div className="text-white/80 text-sm">Sign-ups</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200/50 p-6 mb-12">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1 w-full lg:w-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search templates by name or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                />
              </div>

              {/* Category Filter */}
              <div className="relative w-full lg:w-auto">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full lg:w-72 pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none bg-white text-lg"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'All' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-white text-indigo-600 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  title="Grid view"
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-white text-indigo-600 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  title="List view"
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {/* Results Summary */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedCategory === 'All' ? 'All Templates' : selectedCategory}
                </h2>
                <p className="text-gray-600">
                  {filteredTemplates.length} template{filteredTemplates.length !== 1 ? 's' : ''} found
                  {searchTerm && ` for "${searchTerm}"`}
                </p>
              </div>
              
              {searchTerm || selectedCategory !== 'All' ? (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="text-indigo-600 hover:text-indigo-700 font-medium text-sm flex items-center space-x-1"
                >
                  <span>Clear filters</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : null}
            </div>
          </div>

          {/* Templates Display */}
          {selectedCategory === 'All' && !searchTerm ? (
            // Show by categories when "All" is selected and no search
            <div className="space-y-16">
              {Object.entries(groupedTemplates).map(([category, templates]) => {
                if (templates.length === 0) return null;
                return (
                  <CategorySection key={category} category={category} templates={templates} />
                );
              })}
            </div>
          ) : (
            // Show filtered results
            <div>
              {filteredTemplates.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredTemplates.map(template => (
                    <TemplateCard key={template.id} template={template} />
                  ))}
                </div>
              ) : (
                // No Results State
                <div className="text-center py-16">
                  <div className="text-8xl mb-6">🎡</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">No templates found</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    We couldn't find any templates matching your search. Try different keywords or browse our categories.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('All');
                      }}
                      className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-medium"
                    >
                      View All Templates
                    </button>
                    <button
                      onClick={() => navigate('/')}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                    >
                      Create Custom Wheel
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Can't find what you're looking for?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Create your own custom spinning wheel with unlimited segments, colors, and options.
              </p>
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-indigo-600 rounded-xl hover:bg-gray-50 transition-colors font-bold text-lg shadow-lg"
              >
                <span>Create Custom Wheel</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WheelsPage;