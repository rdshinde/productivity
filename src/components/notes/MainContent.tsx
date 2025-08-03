'use client';

import React, { useState } from 'react';
import Editor from '../notes/Editor';
import FloatingToolbar from '../notes/FloatingToolbar';
import NoteHeader from '../notes/NoteHeader';

const MainContent: React.FC = () => {
  const [currentNote, setCurrentNote] = useState({
    id: '1',
    title: 'Project Ideas for 2024',
    content: '',
    tags: ['Work', 'Ideas'],
    lastModified: '2 hours ago',
    collaborators: ['John Doe', 'Jane Smith'],
    isShared: true
  });

  const [isToolbarVisible, setIsToolbarVisible] = useState(false);
  const [selectedText, setSelectedText] = useState('');

  const handleTextSelection = (text: string) => {
    setSelectedText(text);
    setIsToolbarVisible(text.length > 0);
  };

  const handleSave = () => {
    console.log('Auto-saving note...');
    // Implement auto-save logic here
  };

  return (
    <div className="flex-1 flex flex-col bg-white">
      <NoteHeader note={currentNote} onSave={handleSave} />
      
      <div className="flex-1 relative">
        <Editor
          content={currentNote.content}
          onContentChange={(content) => {
            setCurrentNote(prev => ({ ...prev, content }));
            handleSave();
          }}
          onTextSelection={handleTextSelection}
        />
        
        {isToolbarVisible && (
          <FloatingToolbar
            selectedText={selectedText}
            onFormat={(format) => {
              console.log('Formatting text:', format);
              setIsToolbarVisible(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default MainContent; 