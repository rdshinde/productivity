'use client';

import React from 'react';

interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  lastModified: string;
  isPinned?: boolean;
  isFavorite?: boolean;
}

interface NoteCardProps {
  note: Note;
  isSelected: boolean;
  onSelect: () => void;
  onTogglePin: () => void;
  onToggleFavorite: () => void;
}

const NoteCard: React.FC<NoteCardProps> = ({
  note,
  isSelected,
  onSelect,
  onTogglePin,
  onToggleFavorite
}) => {
  return (
    <div
      className={`p-3 rounded-lg border cursor-pointer transition-all ${
        isSelected
          ? 'bg-blue-50 border-blue-200 shadow-sm'
          : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300'
      }`}
      onClick={onSelect}
    >
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-medium text-gray-900 text-sm line-clamp-1">
          {note.title}
        </h4>
        <div className="flex items-center space-x-1">
          {note.isPinned && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onTogglePin();
              }}
              className="p-1 text-yellow-500 hover:text-yellow-600"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </button>
          )}
          {note.isFavorite && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite();
              }}
              className="p-1 text-yellow-500 hover:text-yellow-600"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </button>
          )}
        </div>
      </div>
      
      <p className="text-gray-600 text-xs line-clamp-2 mb-2">
        {note.content}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {note.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
            >
              {tag}
            </span>
          ))}
          {note.tags.length > 2 && (
            <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
              +{note.tags.length - 2}
            </span>
          )}
        </div>
        
        <span className="text-xs text-gray-500">
          {note.lastModified}
        </span>
      </div>
    </div>
  );
};

export default NoteCard; 