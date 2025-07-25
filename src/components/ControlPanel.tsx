import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Download, Upload, Trash2, Settings } from 'lucide-react';
import { WheelSegment } from '../types/wheel';
import { wheelTemplates } from '../data/wheelTemplates';
import SegmentEditor from './SegmentEditor';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';

interface ControlPanelProps {
  segments: WheelSegment[];
  onAddSegment: (text: string, color: string) => void;
  onUpdateSegment: (id: string, updates: Partial<WheelSegment>) => void;
  onDeleteSegment: (id: string) => void;
  setSegments: (segments: WheelSegment[]) => void;
  selectedTemplate: string;
  setSelectedTemplate: (template: string) => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  segments,
  onAddSegment,
  onUpdateSegment,
  onDeleteSegment,
  setSegments,
  selectedTemplate,
  setSelectedTemplate
}) => {
  const [newSegmentText, setNewSegmentText] = useState('');
  const [newSegmentColor, setNewSegmentColor] = useState('#3B82F6');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [savedWheels, setSavedWheels] = useState<{name: string, data: unknown}[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('savedWheels') || '[]');
    } catch {
      return [];
    }
  });
  const [saveName, setSaveName] = useState('');
  const [shareUrl, setShareUrl] = useState('');
  const navigate = useNavigate();

  const filteredTemplates = wheelTemplates;
  // Remove categoryFilter, setCategoryFilter, sortOrder, setSortOrder, categories, filteredTemplates

  const colors = [
    '#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', 
    '#EF4444', '#6366F1', '#EC4899', '#14B8A6',
    '#F97316', '#84CC16', '#06B6D4', '#8B5A2B'
  ];

  const handleAddSegment = () => {
    if (newSegmentText.trim()) {
      onAddSegment(newSegmentText.trim(), newSegmentColor);
      setNewSegmentText('');
    }
  };

  const handleTemplateChange = (templateId: string) => {
    setSelectedTemplate(templateId);
    if (templateId !== 'custom') {
      const template = wheelTemplates.find(t => t.id === templateId);
      if (template) {
        setSegments(template.segments);
        navigate(`/${templateId}`);
      }
    }
  };

  const handleExportWheel = () => {
    const wheelData = {
      segments,
      template: selectedTemplate,
      exportedAt: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(wheelData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'spin-wheel-config.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImportWheel = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string);
          if (data.segments && Array.isArray(data.segments)) {
            setSegments(data.segments);
            setSelectedTemplate('custom');
          }
        } catch {
          alert('Invalid file format. Please select a valid wheel configuration file.');
        }
      };
      reader.readAsText(file);
    }
  };

  const handleClearAll = () => {
    if (confirm('Are you sure you want to clear all segments?')) {
      setSegments([]);
      setSelectedTemplate('custom');
    }
  };

  const saveCurrentWheel = () => {
    if (!saveName.trim()) return;
    const wheelData = {
      name: saveName.trim(),
      data: { segments, template: selectedTemplate, savedAt: new Date().toISOString() }
    };
    const updated = [wheelData, ...savedWheels.filter(w => w.name !== saveName.trim())];
    setSavedWheels(updated);
    localStorage.setItem('savedWheels', JSON.stringify(updated));
    setSaveName('');
  };

  const loadWheel = (data: unknown) => {
    if (typeof data === 'object' && data !== null && 'segments' in data && Array.isArray((data as unknown as { segments: WheelSegment[] }).segments)) {
      setSegments((data as unknown as { segments: WheelSegment[] }).segments);
      setSelectedTemplate((data as unknown as { template: string }).template || 'custom');
      setIsSaveModalOpen(false);
    }
  };

  const deleteWheel = (name: string) => {
    const updated = savedWheels.filter(w => w.name !== name);
    setSavedWheels(updated);
    localStorage.setItem('savedWheels', JSON.stringify(updated));
  };

  const openShareModal = () => {
    // Encode wheel config as base64 in URL
    const wheelData = { segments, template: selectedTemplate };
    const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(wheelData))));
    const url = `${window.location.origin}${window.location.pathname}?wheel=${encoded}`;
    setShareUrl(url);
    setIsShareModalOpen(true);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 sm:p-6 border-b border-gray-200/50">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 flex items-center">
          <Settings className="w-5 h-5 mr-2" />
          Wheel Settings
        </h2>
        <p className="text-sm sm:text-base text-gray-600">Customize your spinning wheel</p>
      </div>

      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        {/* Templates */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 sm:mb-3">
            Choose Template
          </label>

          <select
            value={selectedTemplate}
            onChange={(e) => handleTemplateChange(e.target.value)}
            className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
          >
            <option value="custom">Custom Wheel</option>
            {filteredTemplates.map(template => (
              <option key={template.id} value={template.id}>
                {template.name}
              </option>
            ))}
          </select>
          <div className="mt-2 text-center">
            <Link
              to="/templates"
              className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors font-medium"
            >
              Browse All Templates →
            </Link>
          </div>
        </div>

        {/* Add Segment */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 sm:mb-3">
            Add New Segment
          </label>
          <div className="space-y-2 sm:space-y-3">
            <input
              type="text"
              value={newSegmentText}
              onChange={(e) => setNewSegmentText(e.target.value)}
              placeholder="Enter segment text..."
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
              onKeyPress={(e) => e.key === 'Enter' && handleAddSegment()}
            />
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
              <div className="grid grid-cols-6 gap-1 sm:gap-2 flex-1">
                {colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setNewSegmentColor(color)}
                    className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg border-2 transition-all ${
                      newSegmentColor === color 
                        ? 'border-gray-900 scale-110' 
                        : 'border-gray-300 hover:scale-105'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              
              <button
                onClick={handleAddSegment}
                disabled={!newSegmentText.trim()}
                className="px-3 sm:px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <Plus className="w-4 h-4" />
                <span>Add</span>
              </button>
            </div>
          </div>
        </div>

        {/* Segments List */}
        {segments.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Wheel Segments ({segments.length})
              </label>
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="text-xs sm:text-sm text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                {showAdvanced ? 'Simple View' : 'Advanced Edit'}
              </button>
            </div>
            
            <div className="space-y-1 sm:space-y-2 max-h-48 sm:max-h-64 overflow-y-auto">
              {segments.map((segment) => (
                <SegmentEditor
                  key={segment.id}
                  segment={segment}
                  onUpdate={onUpdateSegment}
                  onDelete={onDeleteSegment}
                  showAdvanced={showAdvanced}
                />
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col space-y-2 sm:space-y-3 pt-3 sm:pt-4 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <button
              onClick={handleExportWheel}
              className="flex-1 flex items-center justify-center space-x-2 px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
            >
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
            
            <label className="flex-1 flex items-center justify-center space-x-2 px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer text-sm sm:text-base">
              <Upload className="w-4 h-4" />
              <span>Import</span>
              <input
                type="file"
                accept=".json"
                onChange={handleImportWheel}
                className="hidden"
              />
            </label>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 pt-1 sm:pt-2">
            <button
              onClick={() => setIsSaveModalOpen(true)}
              className="flex-1 flex items-center justify-center space-x-2 px-3 sm:px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors text-sm sm:text-base"
            >
              <span>Saved Wheels</span>
            </button>
            <button
              onClick={openShareModal}
              className="flex-1 flex items-center justify-center space-x-2 px-3 sm:px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm sm:text-base"
            >
              <span>Share</span>
            </button>
          </div>
          
          <button
            onClick={handleClearAll}
            className="flex items-center justify-center space-x-2 px-3 sm:px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base"
          >
            <Trash2 className="w-4 h-4" />
            <span>Clear All</span>
          </button>
        </div>
      </div>
      <Modal isOpen={isSaveModalOpen} onClose={() => setIsSaveModalOpen(false)} title="Saved Wheels">
        <div className="space-y-4">
          <div className="flex space-x-2">
            <input
              type="text"
              value={saveName}
              onChange={e => setSaveName(e.target.value)}
              placeholder="Wheel name..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
            />
            <button
              onClick={saveCurrentWheel}
              disabled={!saveName.trim()}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
            >
              Save
            </button>
          </div>
          <div className="max-h-48 overflow-y-auto divide-y">
            {savedWheels.length === 0 && <div className="text-gray-500">No saved wheels.</div>}
            {savedWheels.map(wheel => (
              <div key={wheel.name} className="flex items-center justify-between py-2">
                <span className="font-medium text-gray-900 truncate">{wheel.name}</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => loadWheel(wheel.data)}
                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
                  >
                    Load
                  </button>
                  <button
                    onClick={() => deleteWheel(wheel.name)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
      <Modal isOpen={isShareModalOpen} onClose={() => setIsShareModalOpen(false)} title="Share Your Wheel">
        <div className="space-y-4">
          <div className="text-gray-700">Copy and share this link to let others use your wheel:</div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={shareUrl}
              readOnly
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
              onFocus={e => e.target.select()}
            />
            <button
              onClick={() => {navigator.clipboard.writeText(shareUrl)}}
              className="px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm"
            >
              Copy
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ControlPanel;