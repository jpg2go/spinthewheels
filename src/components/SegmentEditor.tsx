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
      <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
        <div className="space-y-3">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Segment text..."
          />
          
          <div className="flex items-center space-x-3">
            <input
              type="color"
              value={editColor}
              onChange={(e) => setEditColor(e.target.value)}
              className="w-12 h-8 border border-gray-300 rounded cursor-pointer"
            />
            <div className="relative">
              <button
                type="button"
                className="px-2 py-1 bg-yellow-100 rounded hover:bg-yellow-200 border border-gray-300 text-xl"
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
              <div className="flex items-center space-x-2 flex-1">
                <label className="text-xs text-gray-600">Weight:</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={editWeight}
                  onChange={(e) => setEditWeight(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            )}
            
            <div className="flex space-x-1">
              <button
                onClick={handleSave}
                disabled={!editText.trim()}
                className="p-1 text-green-600 hover:text-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Check className="w-4 h-4" />
              </button>
              <button
                onClick={handleCancel}
                className="p-1 text-gray-600 hover:text-gray-700"
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
    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors group">
      <div 
        className="w-4 h-4 rounded-full border border-gray-300 flex-shrink-0"
        style={{ backgroundColor: segment.color }}
      ></div>
      
      <span className="flex-1 text-sm font-medium text-gray-900 truncate">
        {segment.emoji && <span className="mr-1 text-xl align-middle">{segment.emoji}</span>}
        {segment.text}
      </span>
      
      {showAdvanced && (
        <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">
          {segment.weight}x
        </span>
      )}
      
      <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => setIsEditing(true)}
          className="p-1 text-indigo-600 hover:text-indigo-700"
        >
          <Edit2 className="w-4 h-4" />
        </button>
        <button
          onClick={() => onDelete(segment.id)}
          className="p-1 text-red-600 hover:text-red-700"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default SegmentEditor;