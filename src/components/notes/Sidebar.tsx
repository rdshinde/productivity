'use client';

import React, { useState } from 'react';
import SearchBar from '../notes/SearchBar';
import FilterTags from '../notes/FilterTags';
import FolderTree from '../notes/FolderTree';
import NoteList from '../notes/NoteList';

const Sidebar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold text-gray-900">Notes</h1>
          <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
        
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <FilterTags selectedTags={selectedTags} onTagToggle={setSelectedTags} />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <FolderTree />
        <NoteList searchQuery={searchQuery} selectedTags={selectedTags} />
      </div>
    </div>
  );
};

export default Sidebar; 