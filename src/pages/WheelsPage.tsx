import React, { useState } from 'react';
import { Search, Filter, Grid, List, Star, Users, Utensils, Gamepad2, Palette, Hash, Wrench } from 'lucide-react';
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
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-200/50 overflow-hidden"
      onClick={() => handleTemplateSelect(template)}
    >
      {/* Template Preview */}
      <div className="relative h-48 bg-gradient-to-br from-indigo-50 to-purple-50 p-6 flex items-center justify-center">
        <div className="relative">
          {/* Mini wheel preview */}
          <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg relative overflow-hidden">
            <svg width="128" height="128" className="absolute inset-0">
              {template.segments.slice(0, 8).map((segment, index) => {
                const angle = (360 / Math.min(template.segments.length, 8)) * index;
                const nextAngle = (360 / Math.min(template.segments.length, 8)) * (index + 1);
                const startAngle = (angle - 90) * (Math.PI / 180);
                const endAngle = (nextAngle - 90) * (Math.PI / 180);
                const radius = 60;
                const centerX = 64;
                const centerY = 64;
                
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
                  />
                );
              })}
              <circle cx="64" cy="64" r="12" fill="#ffffff" stroke="#4f46e5" strokeWidth="2" />
            </svg>
          </div>
          {/* Hover effect */}
          <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
      
      {/* Template Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
            {template.name}
          </h3>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {template.segments.length}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {template.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            {categoryIcons[template.category]}
            <span>{template.category}</span>
          </div>
          <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm group-hover:underline">
            Use Template
          </button>
        </div>
      </div>
    </div>
  );

  const TemplateListItem: React.FC<{ template: CategorizedWheelTemplate }> = ({ template }) => (
    <div 
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group border border-gray-200/50 p-6"
      onClick={() => handleTemplateSelect(template)}
    >
      <div className="flex items-center space-x-6">
        {/* Mini wheel preview */}
        <div className="w-16 h-16 rounded-full border-2 border-gray-200 flex-shrink-0 relative overflow-hidden">
          <svg width="64" height="64" className="absolute inset-0">
            {template.segments.slice(0, 6).map((segment, index) => {
              const angle = (360 / Math.min(template.segments.length, 6)) * index;
              const nextAngle = (360 / Math.min(template.segments.length, 6)) * (index + 1);
              const startAngle = (angle - 90) * (Math.PI / 180);
              const endAngle = (nextAngle - 90) * (Math.PI / 180);
              const radius = 30;
              const centerX = 32;
              const centerY = 32;
              
              const x1 = centerX + radius * Math.cos(startAngle);
              const y1 = centerY + radius * Math.sin(startAngle);
              const x2 = centerX + radius * Math.cos(endAngle);
              const y2 = centerY + radius * Math.sin(endAngle);
              
              const largeArcFlag = (360 / Math.min(template.segments.length, 6)) > 180 ? 1 : 0;
              const path = `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
              
              return (
                <path
                  key={index}
                  d={path}
                  fill={segment.color}
                  stroke="#ffffff"
                  strokeWidth="1"
                />
              );
            })}
            <circle cx="32" cy="32" r="6" fill="#ffffff" stroke="#4f46e5" strokeWidth="1" />
          </svg>
        </div>
        
        {/* Template Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors truncate">
              {template.name}
            </h3>
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full ml-2">
              {template.segments.length}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-2 line-clamp-1">
            {template.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              {categoryIcons[template.category]}
              <span>{template.category}</span>
            </div>
            <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm group-hover:underline">
              Use Template
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="animated-bg"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Wheel Templates
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our collection of pre-made spinning wheels. Perfect for quick decisions, games, and fun activities.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 w-full lg:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Category Filter */}
            <div className="relative w-full lg:w-auto">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full lg:w-64 pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none bg-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-white text-indigo-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-white text-indigo-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredTemplates.length} template{filteredTemplates.length !== 1 ? 's' : ''}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* Templates Display */}
        {selectedCategory === 'All' ? (
          // Show by categories when "All" is selected
          <div className="space-y-12">
            {Object.entries(groupedTemplates).map(([category, templates]) => {
              if (templates.length === 0) return null;
              
              return (
                <div key={category}>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-indigo-100 rounded-xl">
                      {categoryIcons[category]}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {templates.length}
                    </span>
                  </div>
                  
                  {viewMode === 'grid' ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {templates.map(template => (
                        <TemplateCard key={template.id} template={template} />
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {templates.map(template => (
                        <TemplateListItem key={template.id} template={template} />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          // Show filtered results
          <div>
            {viewMode === 'grid' ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredTemplates.map(template => (
                  <TemplateCard key={template.id} template={template} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredTemplates.map(template => (
                  <TemplateListItem key={template.id} template={template} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* No Results */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎡</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No templates found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or category filter.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">
                {wheelTemplates.length}
              </div>
              <div className="text-gray-600">Total Templates</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {categories.length - 1}
              </div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {Math.round(wheelTemplates.reduce((sum, t) => sum + t.segments.length, 0) / wheelTemplates.length)}
              </div>
              <div className="text-gray-600">Avg. Segments</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">
                100%
              </div>
              <div className="text-gray-600">Free to Use</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WheelsPage;