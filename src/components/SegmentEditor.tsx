import React, { useState } from 'react';
import { Edit2, Trash2, Check, X } from 'lucide-react';
import { WheelSegment } from '../types/wheel';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';

interface SegmentEditorProps {
  segment: WheelSegment;
  onUpdate: (id: string, updates: Partial<WheelSegment>) => void;
  onDelete: (id: string) => void;
  showAdvanced: boolean;
}

const SegmentEditor: React.FC<SegmentEditorProps> = ({
  segment,
  onUpdate,
  onDelete,
  showAdvanced
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(segment.text);
  const [editColor, setEditColor] = useState(segment.color);
  const [editWeight, setEditWeight] = useState(segment.weight);
  const [editEmoji, setEditEmoji] = useState(segment.emoji || '');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSave = () => {
    onUpdate(segment.id, {
      text: editText.trim(),
      color: editColor,
      weight: editWeight,
      emoji: editEmoji,
      image: segment.image
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(segment.text);
    setEditColor(segment.color);
    setEditWeight(segment.weight);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="bg-gray-50 p-2 sm:p-3 rounded-lg border border-gray-200">
        <div className="space-y-2 sm:space-y-3">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="w-full px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Segment text..."
          />
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
            <input
              type="color"
              value={editColor}
              onChange={(e) => setEditColor(e.target.value)}
              className="w-full sm:w-12 h-8 border border-gray-300 rounded cursor-pointer"
            />
            <div className="relative">
              <button
                type="button"
                className="w-full sm:w-auto px-2 py-1 bg-yellow-100 rounded hover:bg-yellow-200 border border-gray-300 text-lg sm:text-xl"
                onClick={() => setShowEmojiPicker(v => !v)}
                title="Pick emoji"
              >
                {editEmoji || '😀'}
              </button>
              {showEmojiPicker && (
                <div className="absolute z-50 mt-2">
                  <Picker
                    data={data}
                    onEmojiSelect={(emoji: unknown) => { if (typeof emoji === 'object' && emoji && 'native' in emoji) { setEditEmoji((emoji as { native: string }).native); setShowEmojiPicker(false); } }}
                    theme="light"
                    previewPosition="none"
                    searchPosition="none"
                  />
                </div>
              )}
            </div>
            
            {showAdvanced && (
              <div className="flex items-center space-x-1 sm:space-x-2 flex-1">
                <label className="text-xs text-gray-600 whitespace-nowrap">Weight:</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={editWeight}
                  onChange={(e) => setEditWeight(Number(e.target.value))}
                  className="w-12 sm:w-16 px-1 sm:px-2 py-1 text-xs sm:text-sm border border-gray-300 rounded focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            )}
            
            <div className="flex space-x-1 justify-center sm:justify-start">
              <button
                onClick={handleSave}
                disabled={!editText.trim()}
                className="p-1 sm:p-2 text-green-600 hover:text-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Check className="w-4 h-4" />
              </button>
              <button
                onClick={handleCancel}
                className="p-1 sm:p-2 text-gray-600 hover:text-gray-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors group">
      <div 
        className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-gray-300 flex-shrink-0"
        style={{ backgroundColor: segment.color }}
      ></div>
      
      <span className="flex-1 text-xs sm:text-sm font-medium text-gray-900 truncate">
        {segment.emoji && <span className="mr-1 text-base sm:text-xl align-middle">{segment.emoji}</span>}
        {segment.text}
      </span>
      
      {showAdvanced && (
        <span className="text-xs text-gray-500 bg-gray-200 px-1 sm:px-2 py-1 rounded whitespace-nowrap">
          {segment.weight}x
        </span>
      )}
      
      <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => setIsEditing(true)}
          className="p-1 text-indigo-600 hover:text-indigo-700"
        >
          <Edit2 className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
        <button
          onClick={() => onDelete(segment.id)}
          className="p-1 text-red-600 hover:text-red-700"
        >
          <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>
  );
};

export default SegmentEditor;