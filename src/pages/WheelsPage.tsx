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
    'Decision Wheels': <Star className="w-4 h-4" />,
    'Name & Team Wheels': <Users className="w-4 h-4" />,
    'Food & Meal Wheels': <Utensils className="w-4 h-4" />,
    'Game & Fun Wheels': <Gamepad2 className="w-4 h-4" />,
    'Color & Number Wheels': <Palette className="w-4 h-4" />,
    'Tools': <Wrench className="w-4 h-4" />
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
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer group border border-gray-200 overflow-hidden"
      onClick={() => handleTemplateSelect(template)}
    >
      {/* Template Preview */}
      <div className="relative h-32 bg-gray-50 p-4 flex items-center justify-center">
        <div className="relative">
          {/* Mini wheel preview */}
          <div className="w-20 h-20 rounded-full border-2 border-gray-300 relative overflow-hidden bg-white">
            <svg width="80" height="80" className="absolute inset-0">
              {template.segments.slice(0, 8).map((segment, index) => {
                const angle = (360 / Math.min(template.segments.length, 8)) * index;
                const nextAngle = (360 / Math.min(template.segments.length, 8)) * (index + 1);
                const startAngle = (angle - 90) * (Math.PI / 180);
                const endAngle = (nextAngle - 90) * (Math.PI / 180);
                const radius = 38;
                const centerX = 40;
                const centerY = 40;
                
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
              <circle cx="40" cy="40" r="8" fill="#ffffff" stroke="#374151" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Template Info */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
          {template.name}
        </h3>
        <p className="text-xs text-gray-600 mb-3 line-clamp-2">
          {template.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-xs text-gray-500">
            {categoryIcons[template.category]}
            <span>{template.segments.length} items</span>
          </div>
          <span className="text-xs text-blue-600 font-medium">Use</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Spinning Wheel Templates
          </h1>
          <p className="text-gray-600">
            Choose from our collection of pre-made spinning wheels or create your own custom wheel.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full lg:w-48 px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm appearance-none bg-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-100 rounded-md p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded text-sm transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded text-sm transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            {filteredTemplates.length} template{filteredTemplates.length !== 1 ? 's' : ''}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* Templates Display */}
        {selectedCategory === 'All' ? (
          // Show by categories when "All" is selected
          <div className="space-y-8">
            {Object.entries(groupedTemplates).map(([category, templates]) => {
              if (templates.length === 0) return null;
              
              return (
                <div key={category}>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="p-1.5 bg-gray-100 rounded-md">
                      {categoryIcons[category]}
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900">{category}</h2>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                      {templates.length}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {templates.map(template => (
                      <TemplateCard key={template.id} template={template} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // Show filtered results
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredTemplates.map(template => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🎡</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No templates found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or category filter.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WheelsPage;