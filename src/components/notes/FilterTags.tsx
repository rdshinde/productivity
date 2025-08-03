'use client';

import React from 'react';

interface FilterTagsProps {
  selectedTags: string[];
  onTagToggle: (tags: string[]) => void;
}

const FilterTags: React.FC<FilterTagsProps> = ({ selectedTags, onTagToggle }) => {
  const availableTags = ['Work', 'Personal', 'Ideas', 'Important', 'Draft'];

  const handleTagClick = (tag: string) => {
    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    onTagToggle(newSelectedTags);
  };

  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {availableTags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleTagClick(tag)}
          className={`px-3 py-1 text-sm rounded-full border transition-colors ${
            selectedTags.includes(tag)
              ? 'bg-blue-100 text-blue-700 border-blue-200'
              : 'bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default FilterTags; 