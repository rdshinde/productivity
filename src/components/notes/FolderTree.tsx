'use client';

import React, { useState } from 'react';

interface FolderItem {
  id: string;
  name: string;
  icon: string;
  children?: FolderItem[];
  isExpanded?: boolean;
}

const FolderTree: React.FC = () => {
  const [folders, setFolders] = useState<FolderItem[]>([
    {
      id: '1',
      name: 'All Notes',
      icon: '📝',
      isExpanded: true,
      children: [
        { id: '1-1', name: 'Recent', icon: '🕒' },
        { id: '1-2', name: 'Favorites', icon: '⭐' },
        { id: '1-3', name: 'Archived', icon: '📦' }
      ]
    },
    {
      id: '2',
      name: 'Work',
      icon: '💼',
      isExpanded: false,
      children: [
        { id: '2-1', name: 'Projects', icon: '📁' },
        { id: '2-2', name: 'Meetings', icon: '🤝' }
      ]
    },
    {
      id: '3',
      name: 'Personal',
      icon: '👤',
      isExpanded: false,
      children: [
        { id: '3-1', name: 'Ideas', icon: '💡' },
        { id: '3-2', name: 'Journal', icon: '📖' }
      ]
    }
  ]);

  const toggleFolder = (folderId: string) => {
    setFolders(prev => prev.map(folder => 
      folder.id === folderId 
        ? { ...folder, isExpanded: !folder.isExpanded }
        : folder
    ));
  };

  const renderFolderItem = (item: FolderItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    
    return (
      <div key={item.id}>
        <div 
          className={`flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors ${
            level > 0 ? 'ml-4' : ''
          }`}
          onClick={() => hasChildren && toggleFolder(item.id)}
        >
          {hasChildren && (
            <svg 
              className={`w-4 h-4 mr-2 transition-transform ${
                item.isExpanded ? 'rotate-90' : ''
              }`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
          <span className="mr-2">{item.icon}</span>
          <span className="text-sm text-gray-700">{item.name}</span>
        </div>
        
        {hasChildren && item.isExpanded && (
          <div>
            {item.children!.map(child => renderFolderItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="py-2">
      {folders.map(folder => renderFolderItem(folder))}
    </div>
  );
};

export default FolderTree; 