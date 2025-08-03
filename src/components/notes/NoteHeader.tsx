'use client';

import React, { useState } from 'react';

interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  lastModified: string;
  collaborators: string[];
  isShared: boolean;
}

interface NoteHeaderProps {
  note: Note;
  onSave: () => void;
}

const NoteHeader: React.FC<NoteHeaderProps> = ({ note, onSave }) => {
  const [title, setTitle] = useState(note.title);
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  const handleTitleSave = () => {
    setIsEditingTitle(false);
    onSave();
  };

  return (
    <div className="border-b border-gray-200 p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1">
          {isEditingTitle ? (
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={handleTitleSave}
              onKeyPress={(e) => e.key === 'Enter' && handleTitleSave()}
              className="text-2xl font-bold text-gray-900 bg-transparent border-none outline-none w-full"
              autoFocus
            />
          ) : (
            <h1
              className="text-2xl font-bold text-gray-900 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
              onClick={() => setIsEditingTitle(true)}
            >
              {title}
            </h1>
          )}
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
          </button>
          
          <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
          
          <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </button>
          
          <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Last modified:</span>
            <span className="text-sm text-gray-700">{note.lastModified}</span>
          </div>
          
          {note.isShared && (
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Collaborators:</span>
              <div className="flex -space-x-2">
                {note.collaborators.slice(0, 3).map((collaborator, index) => (
                  <div
                    key={index}
                    className="w-6 h-6 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center border-2 border-white"
                    title={collaborator}
                  >
                    {collaborator.charAt(0)}
                  </div>
                ))}
                {note.collaborators.length > 3 && (
                  <div className="w-6 h-6 bg-gray-300 text-gray-600 text-xs rounded-full flex items-center justify-center border-2 border-white">
                    +{note.collaborators.length - 3}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        
        <div className="flex items-center space-x-2">
          {note.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoteHeader; 