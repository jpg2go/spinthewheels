import React, { useState } from 'react';
import { Search, Star, Users, Gamepad2, Utensils, Palette, Hash, Settings, Sparkles, TrendingUp, Filter, Grid3X3, List, Eye } from 'lucide-react';
import { wheelTemplates, CategorizedWheelTemplate } from '../data/wheelTemplates';
import { useNavigate } from 'react-router-dom';

const groupByCategory = (templates: CategorizedWheelTemplate[]) => {
  return templates.reduce<Record<string, CategorizedWheelTemplate[]>>((acc, template) => {
    if (!acc[template.category]) acc[template.category] = [];
    acc[template.category].push(template);
    return acc;
  }, {});
};

const categoryIcons: Record<string, React.ReactNode> = {
  'Decision Wheels': <Star className="w-5 h-5" />,
  'Name & Team Wheels': <Users className="w-5 h-5" />,
  'Color & Number Wheels': <Palette className="w-5 h-5" />,
  'Food & Meal Wheels': <Utensils className="w-5 h-5" />,
  'Game & Fun Wheels': <Gamepad2 className="w-5 h-5" />,
  'Tools': <Settings className="w-5 h-5" />,
};

const categoryGradients: Record<string, string> = {
  'Decision Wheels': 'from-blue-500 via-indigo-500 to-purple-600',
  'Name & Team Wheels': 'from-emerald-500 via-teal-500 to-cyan-600',
  'Color & Number Wheels': 'from-purple-500 via-pink-500 to-rose-600',
  'Food & Meal Wheels': 'from-orange-500 via-red-500 to-pink-600',
  'Game & Fun Wheels': 'from-yellow-500 via-orange-500 to-red-600',
  'Tools': 'from-gray-600 via-slate-600 to-zinc-700',
};

const Wheels: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const navigate = useNavigate();

  const grouped = groupByCategory(wheelTemplates);
  const categories = Object.keys(grouped);

  const filteredTemplates = wheelTemplates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.segments.some(segment => segment.text.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleUseWheel = (template: CategorizedWheelTemplate) => {
    localStorage.setItem('selectedTemplate', JSON.stringify(template));
    navigate('/');
  };

  const popularTemplates = wheelTemplates.slice(0, 6);
  const recentTemplates = wheelTemplates.slice(-4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span>Discover Amazing Wheels</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent mb-6 leading-tight">
            Spinning Wheel
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Collection
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Explore our curated collection of <span className="font-semibold text-indigo-600">{wheelTemplates.length}+ spinning wheels</span> designed for every occasion. 
            From decision-making to entertainment, find the perfect wheel for your needs.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">{wheelTemplates.length}+</div>
              <div className="text-sm text-slate-500 font-medium">Templates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">{categories.length}</div>
              <div className="text-sm text-slate-500 font-medium">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">100%</div>
              <div className="text-sm text-slate-500 font-medium">Free</div>
            </div>
          </div>
        </div>

        {/* Search and Controls */}
        <div className="mb-12">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-2xl">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search wheels, categories, or options..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 text-lg placeholder-slate-400"
                />
              </div>

              {/* View Toggle */}
              <div className="flex items-center space-x-2 bg-slate-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-lg transition-all duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-white shadow-md text-indigo-600'
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-lg transition-all duration-200 ${
                    viewMode === 'list'
                      ? 'bg-white shadow-md text-indigo-600'
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Category Filters */}
            <div className="mt-8">
              <div className="flex items-center space-x-4 mb-4">
                <Filter className="w-5 h-5 text-slate-600" />
                <span className="text-lg font-semibold text-slate-700">Filter by Category</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === 'all'
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl shadow-indigo-500/25'
                      : 'bg-white/70 text-slate-700 hover:bg-white hover:shadow-lg border border-slate-200'
                  }`}
                >
                  All Categories
                </button>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 ${
                      selectedCategory === category
                        ? `bg-gradient-to-r ${categoryGradients[category]} text-white shadow-xl`
                        : 'bg-white/70 text-slate-700 hover:bg-white hover:shadow-lg border border-slate-200'
                    }`}
                  >
                    {categoryIcons[category]}
                    <span>{category}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Popular Templates Section */}
        {selectedCategory === 'all' && searchTerm === '' && (
          <div className="mb-16">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Popular Wheels</h2>
                <p className="text-slate-600">Most loved by our community</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularTemplates.map((template) => (
                <WheelCard key={template.id} template={template} onUse={handleUseWheel} featured />
              ))}
            </div>
          </div>
        )}

        {/* Results Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              {selectedCategory === 'all' ? 'All Wheels' : selectedCategory}
            </h3>
            <p className="text-slate-600 mt-1">
              {filteredTemplates.length} wheel{filteredTemplates.length !== 1 ? 's' : ''} found
            </p>
          </div>
        </div>

        {/* Wheels Grid/List */}
        {selectedCategory === 'all' && searchTerm === '' ? (
          // Show by categories when "all" is selected and no search
          <div className="space-y-16">
            {categories.map(category => {
              const categoryTemplates = grouped[category];
              return (
                <div key={category} className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${categoryGradients[category]} text-white shadow-xl`}>
                      {categoryIcons[category]}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900">{category}</h2>
                      <p className="text-slate-600">{categoryTemplates.length} wheels available</p>
                    </div>
                  </div>

                  <div className={viewMode === 'grid' 
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    : "space-y-4"
                  }>
                    {categoryTemplates.map((template) => (
                      <WheelCard 
                        key={template.id} 
                        template={template} 
                        onUse={handleUseWheel} 
                        viewMode={viewMode}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // Show filtered results
          <div className={viewMode === 'grid' 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            : "space-y-4"
          }>
            {filteredTemplates.map((template) => (
              <WheelCard 
                key={template.id} 
                template={template} 
                onUse={handleUseWheel} 
                viewMode={viewMode}
              />
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-20">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center">
              <div className="text-6xl">🎡</div>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">No wheels found</h3>
            <p className="text-xl text-slate-600 mb-8 max-w-md mx-auto">
              We couldn't find any wheels matching your search. Try different keywords or browse our categories.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Show All Wheels
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Enhanced Wheel Card Component
interface WheelCardProps {
  template: CategorizedWheelTemplate;
  onUse: (template: CategorizedWheelTemplate) => void;
  featured?: boolean;
  viewMode?: 'grid' | 'list';
}

const WheelCard: React.FC<WheelCardProps> = ({ template, onUse, featured = false, viewMode = 'grid' }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (viewMode === 'list') {
    return (
      <div 
        className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-500 overflow-hidden group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center p-6 space-x-6">
          {/* Mini Wheel */}
          <div className="relative w-16 h-16 flex-shrink-0">
            <svg width="64" height="64" className={`transform transition-transform duration-700 ${isHovered ? 'rotate-180' : ''}`}>
              {template.segments.slice(0, 8).map((segment, index) => {
                const angle = (360 / Math.min(template.segments.length, 8)) * index;
                const nextAngle = (360 / Math.min(template.segments.length, 8)) * (index + 1);
                const startAngle = (angle - 90) * (Math.PI / 180);
                const endAngle = (nextAngle - 90) * (Math.PI / 180);
                const radius = 28;
                const centerX = 32;
                const centerY = 32;
                
                const x1 = centerX + radius * Math.cos(startAngle);
                const y1 = centerY + radius * Math.sin(startAngle);
                const x2 = centerX + radius * Math.cos(endAngle);
                const y2 = centerY + radius * Math.sin(endAngle);
                
                const largeArcFlag = (nextAngle - angle) > 180 ? 1 : 0;
                const path = `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
                
                return (
                  <path
                    key={segment.id}
                    d={path}
                    fill={segment.color}
                    stroke="#ffffff"
                    strokeWidth="1"
                    className="drop-shadow-sm"
                  />
                );
              })}
              <circle cx="32" cy="32" r="6" fill="#ffffff" stroke="#4f46e5" strokeWidth="2" className="drop-shadow-sm" />
            </svg>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-slate-900 mb-2 truncate">{template.name}</h3>
                <p className="text-slate-600 mb-3 line-clamp-2">{template.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                    {template.category}
                  </span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Hash className="w-3 h-3" />
                    <span>{template.segments.length} options</span>
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onUse(template)}
                className="ml-4 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-semibold transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <Eye className="w-4 h-4" />
                <span>Use Wheel</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:scale-105 ${
        featured ? 'ring-2 ring-yellow-400 shadow-yellow-400/25' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {featured && (
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-center py-2 font-semibold text-sm">
          ⭐ Popular Choice
        </div>
      )}

      {/* Mini Wheel Preview */}
      <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent"></div>
        <div className="relative w-28 h-28 mx-auto">
          <svg width="112" height="112" className={`transform transition-transform duration-700 ${isHovered ? 'rotate-180 scale-110' : ''} drop-shadow-xl`}>
            {template.segments.slice(0, 8).map((segment, index) => {
              const angle = (360 / Math.min(template.segments.length, 8)) * index;
              const nextAngle = (360 / Math.min(template.segments.length, 8)) * (index + 1);
              const startAngle = (angle - 90) * (Math.PI / 180);
              const endAngle = (nextAngle - 90) * (Math.PI / 180);
              const radius = 48;
              const centerX = 56;
              const centerY = 56;
              
              const x1 = centerX + radius * Math.cos(startAngle);
              const y1 = centerY + radius * Math.sin(startAngle);
              const x2 = centerX + radius * Math.cos(endAngle);
              const y2 = centerY + radius * Math.sin(endAngle);
              
              const largeArcFlag = (nextAngle - angle) > 180 ? 1 : 0;
              const path = `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
              
              return (
                <path
                  key={segment.id}
                  d={path}
                  fill={segment.color}
                  stroke="#ffffff"
                  strokeWidth="2"
                  className="drop-shadow-sm"
                />
              );
            })}
            <circle cx="56" cy="56" r="12" fill="#ffffff" stroke="#4f46e5" strokeWidth="3" className="drop-shadow-lg" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-1">{template.name}</h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">{template.description}</p>

        {/* Segments Preview */}
        <div className="flex flex-wrap gap-2 mb-4">
          {template.segments.slice(0, 3).map((segment) => (
            <span
              key={segment.id}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white shadow-sm"
              style={{ backgroundColor: segment.color }}
            >
              {segment.emoji && <span className="mr-1">{segment.emoji}</span>}
              {segment.text}
            </span>
          ))}
          {template.segments.length > 3 && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-200 text-slate-700">
              +{template.segments.length - 3} more
            </span>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-slate-500 mb-6">
          <span className="flex items-center space-x-1 bg-slate-100 px-3 py-1 rounded-full">
            <Hash className="w-3 h-3" />
            <span className="font-medium">{template.segments.length} options</span>
          </span>
          <span className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-xs font-semibold">
            {template.category}
          </span>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onUse(template)}
          className="w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
        >
          Use This Wheel
        </button>
      </div>
    </div>
  );
};

export default Wheels;