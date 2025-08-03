'use client';

import React, { useState, useRef } from 'react';

interface Block {
  id: string;
  type: 'heading' | 'paragraph' | 'list' | 'checklist' | 'code' | 'quote' | 'toggle' | 'table' | 'image' | 'link' | 'video' | 'pdf';
  content: string;
  level?: number;
  items?: string[];
  checked?: boolean[];
}

interface EditorBlockProps {
  block: Block;
  isSelected: boolean;
  onSelect: () => void;
  onChange: (content: string) => void;
  onTypeChange: (type: Block['type']) => void;
  onAddBlock: () => void;
  onDeleteBlock: () => void;
  onMoveBlock: (direction: 'up' | 'down') => void;
  isFirst: boolean;
  isLast: boolean;
}

const EditorBlock: React.FC<EditorBlockProps> = ({
  block,
  isSelected,
  onSelect,
  onChange,
  onTypeChange,
  onAddBlock,
  onDeleteBlock,
  onMoveBlock,
  isFirst,
  isLast
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onAddBlock();
    } else if (e.key === 'Backspace' && block.content === '') {
      e.preventDefault();
      onDeleteBlock();
    } else if (e.key === 'ArrowUp' && e.ctrlKey) {
      e.preventDefault();
      onMoveBlock('up');
    } else if (e.key === 'ArrowDown' && e.ctrlKey) {
      e.preventDefault();
      onMoveBlock('down');
    }
  };

  const renderBlockContent = () => {
    switch (block.type) {
      case 'heading':
        const level = block.level || 1;
        const HeadingComponent = level === 1 ? 'h1' : level === 2 ? 'h2' : level === 3 ? 'h3' : 'h4';
        return React.createElement(HeadingComponent, {
          className: "font-bold text-gray-900 focus:outline-none",
          style: { fontSize: `${Math.max(1.5, 2.5 - level * 0.3)}rem` },
          contentEditable: true,
          onInput: (e: React.FormEvent<HTMLHeadingElement>) => onChange(e.currentTarget.textContent || ''),
          onKeyDown: handleKeyDown,
          onFocus: onSelect,
          dangerouslySetInnerHTML: { __html: block.content }
        });

      case 'paragraph':
        return (
          <p
            className="text-gray-700 leading-relaxed focus:outline-none"
            contentEditable
            onInput={(e: React.FormEvent<HTMLParagraphElement>) => onChange(e.currentTarget.textContent || '')}
            onKeyDown={handleKeyDown}
            onFocus={onSelect}
            dangerouslySetInnerHTML={{ __html: block.content }}
          />
        );

      case 'list':
        return (
          <ul className="list-disc list-inside space-y-1">
            {block.items?.map((item, index) => (
              <li
                key={index}
                className="text-gray-700 focus:outline-none"
                contentEditable
                onInput={(e: React.FormEvent<HTMLLIElement>) => {
                  const newItems = [...(block.items || [])];
                  newItems[index] = e.currentTarget.textContent || '';
                  onChange(JSON.stringify({ items: newItems }));
                }}
                onKeyDown={handleKeyDown}
                onFocus={onSelect}
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </ul>
        );

      case 'checklist':
        return (
          <div className="space-y-2">
            {block.items?.map((item, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={block.checked?.[index] || false}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const newChecked = [...(block.checked || [])];
                    newChecked[index] = e.target.checked;
                    onChange(JSON.stringify({ items: block.items, checked: newChecked }));
                  }}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span
                  className="text-gray-700 focus:outline-none"
                  contentEditable
                  onInput={(e: React.FormEvent<HTMLSpanElement>) => {
                    const newItems = [...(block.items || [])];
                    newItems[index] = e.currentTarget.textContent || '';
                    onChange(JSON.stringify({ items: newItems, checked: block.checked }));
                  }}
                  onKeyDown={handleKeyDown}
                  onFocus={onSelect}
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </label>
            ))}
          </div>
        );

      case 'code':
        return (
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code
              className="text-sm text-gray-800 font-mono focus:outline-none"
              contentEditable
              onInput={(e: React.FormEvent<HTMLElement>) => onChange(e.currentTarget.textContent || '')}
              onKeyDown={handleKeyDown}
              onFocus={onSelect}
              dangerouslySetInnerHTML={{ __html: block.content }}
            />
          </pre>
        );

      case 'quote':
        return (
          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
            <p
              className="focus:outline-none"
              contentEditable
              onInput={(e: React.FormEvent<HTMLParagraphElement>) => onChange(e.currentTarget.textContent || '')}
              onKeyDown={handleKeyDown}
              onFocus={onSelect}
              dangerouslySetInnerHTML={{ __html: block.content }}
            />
          </blockquote>
        );

      default:
        return (
          <p
            className="text-gray-700 focus:outline-none"
            contentEditable
            onInput={(e: React.FormEvent<HTMLParagraphElement>) => onChange(e.currentTarget.textContent || '')}
            onKeyDown={handleKeyDown}
            onFocus={onSelect}
            dangerouslySetInnerHTML={{ __html: block.content }}
          />
        );
    }
  };

  return (
    <div
      className={`relative group ${
        isSelected ? 'bg-blue-50 rounded-lg p-2' : ''
      }`}
      onClick={onSelect}
    >
      {isSelected && (
        <div className="absolute -left-12 top-0 flex flex-col space-y-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMoveBlock('up');
            }}
            disabled={isFirst}
            className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-50"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMoveBlock('down');
            }}
            disabled={isLast}
            className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-50"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
      
      {renderBlockContent()}
    </div>
  );
};

export default EditorBlock; 