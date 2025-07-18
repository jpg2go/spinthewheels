import React, { useState } from 'react';
import { Search, Star, Users, Gamepad2, Utensils, Palette, Hash, Settings } from 'lucide-react';
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

const categoryColors: Record<string, string> = {
  'Decision Wheels': 'from-blue-500 to-indigo-600',
  'Name & Team Wheels': 'from-green-500 to-emerald-600',
  'Color & Number Wheels': 'from-purple-500 to-violet-600',
  'Food & Meal Wheels': 'from-pink-500 to-rose-600',
  'Game & Fun Wheels': 'from-orange-500 to-amber-600',
  'Tools': 'from-gray-500 to-slate-600',
};

const Wheels: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
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
    // Store the template in localStorage and navigate to home
    localStorage.setItem('selectedTemplate', JSON.stringify(template));
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="animated-bg"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Spinning Wheel Templates
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our collection of pre-made spinning wheels or get inspired to create your own. 
            Perfect for decisions, games, education, and fun activities.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search wheels..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white shadow-sm"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              All Categories
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all flex items-center space-x-2 ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {categoryIcons[category]}
                <span>{category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            {filteredTemplates.length} wheel{filteredTemplates.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Wheels Grid */}
        {selectedCategory === 'all' ? (
          // Show by categories when "all" is selected
          <div className="space-y-12">
            {categories.map(category => {
              const categoryTemplates = grouped[category].filter(template =>
                template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                template.segments.some(segment => segment.text.toLowerCase().includes(searchTerm.toLowerCase()))
              );

              if (categoryTemplates.length === 0) return null;

              return (
                <div key={category} className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${categoryColors[category]} text-white shadow-lg`}>
                      {categoryIcons[category]}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
                      <p className="text-gray-600">{categoryTemplates.length} wheels available</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {categoryTemplates.map((template) => (
                      <WheelCard key={template.id} template={template} onUse={handleUseWheel} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // Show filtered results when a specific category is selected
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTemplates.map((template) => (
              <WheelCard key={template.id} template={template} onUse={handleUseWheel} />
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎡</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No wheels found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or browse different categories.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
            >
              Show All Wheels
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Wheel Card Component
interface WheelCardProps {
  template: CategorizedWheelTemplate;
  onUse: (template: CategorizedWheelTemplate) => void;
}

const WheelCard: React.FC<WheelCardProps> = ({ template, onUse }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Mini Wheel Preview */}
      <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="relative w-24 h-24 mx-auto">
          <svg width="96" height="96" className="transform group-hover:rotate-12 transition-transform duration-300">
            {template.segments.slice(0, 8).map((segment, index) => {
              const angle = (360 / Math.min(template.segments.length, 8)) * index;
              const nextAngle = (360 / Math.min(template.segments.length, 8)) * (index + 1);
              const startAngle = (angle - 90) * (Math.PI / 180);
              const endAngle = (nextAngle - 90) * (Math.PI / 180);
              const radius = 40;
              const centerX = 48;
              const centerY = 48;
              
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
                />
              );
            })}
            <circle cx="48" cy="48" r="8" fill="#ffffff" stroke="#4f46e5" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">{template.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{template.description}</p>

        {/* Segments Preview */}
        <div className="flex flex-wrap gap-1 mb-4">
          {template.segments.slice(0, 4).map((segment) => (
            <span
              key={segment.id}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white shadow-sm"
              style={{ backgroundColor: segment.color }}
            >
              {segment.emoji && <span className="mr-1">{segment.emoji}</span>}
              {segment.text}
            </span>
          ))}
          {template.segments.length > 4 && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-700">
              +{template.segments.length - 4} more
            </span>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span className="flex items-center space-x-1">
            <Hash className="w-4 h-4" />
            <span>{template.segments.length} options</span>
          </span>
          <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium">
            {template.category}
          </span>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onUse(template)}
          className="w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-semibold transform hover:scale-105 active:scale-95"
        >
          Use This Wheel
        </button>
      </div>
    </div>
  );
};

export default Wheels;