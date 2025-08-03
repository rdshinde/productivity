'use client';

import React, { useState } from 'react';
import NoteCard from '../notes/NoteCard';

interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  lastModified: string;
  isPinned?: boolean;
  isFavorite?: boolean;
}

interface NoteListProps {
  searchQuery: string;
  selectedTags: string[];
}

const NoteList: React.FC<NoteListProps> = ({ searchQuery, selectedTags }) => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: '1',
      title: 'Project Ideas for 2024',
      content: 'Brainstorming new project ideas and potential collaborations...',
      tags: ['Work', 'Ideas'],
      lastModified: '2 hours ago',
      isPinned: true,
      isFavorite: true
    },
    {
      id: '2',
      title: 'Meeting Notes - Q4 Planning',
      content: 'Key points from the quarterly planning meeting...',
      tags: ['Work', 'Important'],
      lastModified: '1 day ago',
      isPinned: false,
      isFavorite: true
    },
    {
      id: '3',
      title: 'Personal Goals',
      content: 'Setting personal development goals for the year...',
      tags: ['Personal'],
      lastModified: '3 days ago',
      isPinned: false,
      isFavorite: false
    },
    {
      id: '4',
      title: 'Book Recommendations',
      content: 'List of books to read this year...',
      tags: ['Personal', 'Ideas'],
      lastModified: '1 week ago',
      isPinned: false,
      isFavorite: false
    }
  ]);

  const [selectedNoteId, setSelectedNoteId] = useState<string | null>('1');

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         note.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.some(tag => note.tags.includes(tag));
    
    return matchesSearch && matchesTags;
  });

  const handleNoteSelect = (noteId: string) => {
    setSelectedNoteId(noteId);
  };

  const togglePin = (noteId: string) => {
    setNotes(prev => prev.map(note => 
      note.id === noteId ? { ...note, isPinned: !note.isPinned } : note
    ));
  };

  const toggleFavorite = (noteId: string) => {
    setNotes(prev => prev.map(note => 
      note.id === noteId ? { ...note, isFavorite: !note.isFavorite } : note
    ));
  };

  // Sort notes: pinned first, then by last modified
  const sortedNotes = [...filteredNotes].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime();
  });

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-700">All Notes</h3>
        <span className="text-xs text-gray-500">{filteredNotes.length} notes</span>
      </div>
      
      <div className="space-y-2">
        {sortedNotes.map(note => (
          <NoteCard
            key={note.id}
            note={note}
            isSelected={selectedNoteId === note.id}
            onSelect={() => handleNoteSelect(note.id)}
            onTogglePin={() => togglePin(note.id)}
            onToggleFavorite={() => toggleFavorite(note.id)}
          />
        ))}
      </div>
      
      {filteredNotes.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>No notes found</p>
        </div>
      )}
    </div>
  );
};

export default NoteList; 