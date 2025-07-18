import React from 'react';
import { wheelTemplates, CategorizedWheelTemplate } from '../data/wheelTemplates';

const groupByCategory = (templates: CategorizedWheelTemplate[]) => {
  return templates.reduce<Record<string, CategorizedWheelTemplate[]>>((acc, template) => {
    if (!acc[template.category]) acc[template.category] = [];
    acc[template.category].push(template);
    return acc;
  }, {});
};

const categoryColors: Record<string, string> = {
  'Decision Wheels': 'border-indigo-400',
  'Name & Team Wheels': 'border-green-400',
  'Color & Number Wheels': 'border-yellow-400',
  'Food & Meal Wheels': 'border-pink-400',
  'Game & Fun Wheels': 'border-blue-400',
};

const Wheels: React.FC = () => {
  const grouped = groupByCategory(wheelTemplates);
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        Popular Wheels
      </h1>
      {Object.entries(grouped).map(([category, templates]) => (
        <div
          key={category}
          className={`mb-10 rounded-2xl shadow-xl bg-gradient-to-br from-white via-gray-50 to-gray-100 p-6 sm:p-8 border-l-8 ${categoryColors[category] || 'border-indigo-400'}`}
        >
          <h2 className="text-2xl font-extrabold mb-6 text-gray-800 tracking-tight">
            {category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {templates.map((template: CategorizedWheelTemplate) => (
              <div
                key={template.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center card-hover"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{template.name}</h3>
                <p className="text-gray-500 text-center mb-4">{template.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {template.segments.slice(0, 8).map((segment) => (
                    <span
                      key={segment.id}
                      className="px-3 py-1 rounded-full text-xs font-semibold shadow"
                      style={{ background: segment.color, color: '#fff' }}
                    >
                      {segment.text}
                    </span>
                  ))}
                  {template.segments.length > 8 && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-300 text-gray-700 shadow">
                      +{template.segments.length - 8} more
                    </span>
                  )}
                </div>
                <button
                  className="mt-auto px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors w-full font-semibold"
                  disabled
                >
                  View & Use
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wheels; 