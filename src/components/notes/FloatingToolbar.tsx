'use client';

import React from 'react';

interface FloatingToolbarProps {
  selectedText: string;
  onFormat: (format: string) => void;
}

const FloatingToolbar: React.FC<FloatingToolbarProps> = ({ selectedText, onFormat }) => {
  const formatOptions = [
    { name: 'bold', icon: 'B', label: 'Bold' },
    { name: 'italic', icon: 'I', label: 'Italic' },
    { name: 'underline', icon: 'U', label: 'Underline' },
    { name: 'strikethrough', icon: 'S', label: 'Strikethrough' },
    { name: 'link', icon: '🔗', label: 'Link' },
    { name: 'code', icon: '</>', label: 'Code' }
  ];

  return (
    <div className="absolute bg-white border border-gray-200 rounded-lg shadow-lg p-2 flex items-center space-x-1 z-50">
      {formatOptions.map((option) => (
        <button
          key={option.name}
          onClick={() => onFormat(option.name)}
          className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors"
          title={option.label}
        >
          <span className="text-sm font-medium">{option.icon}</span>
        </button>
      ))}
      
      <div className="w-px h-6 bg-gray-200 mx-1"></div>
      
      <button
        onClick={() => onFormat('copy')}
        className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors"
        title="Copy"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      </button>
    </div>
  );
};

export default FloatingToolbar; 