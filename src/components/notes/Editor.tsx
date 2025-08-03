'use client';

import React, { useState, useRef, useEffect } from 'react';
import EditorBlock from '../notes/EditorBlock';

interface EditorProps {
  content: string;
  onContentChange: (content: string) => void;
  onTextSelection: (text: string) => void;
}

interface Block {
  id: string;
  type: 'heading' | 'paragraph' | 'list' | 'checklist' | 'code' | 'quote' | 'toggle' | 'table' | 'image' | 'link' | 'video' | 'pdf';
  content: string;
  level?: number; // for headings
  items?: string[]; // for lists and checklists
  checked?: boolean[]; // for checklists
}

const Editor: React.FC<EditorProps> = ({ content, onContentChange, onTextSelection }) => {
  const [blocks, setBlocks] = useState<Block[]>([
    { id: '1', type: 'heading', content: 'Project Ideas for 2024', level: 1 },
    { id: '2', type: 'paragraph', content: 'This is a comprehensive list of project ideas that could be developed in 2024.' },
    { id: '3', type: 'heading', content: 'Web Development', level: 2 },
    { id: '4', type: 'list', content: '', items: [
      'Progressive Web App for task management',
      'Real-time collaboration platform',
      'AI-powered content generator'
    ]},
    { id: '5', type: 'heading', content: 'Mobile Apps', level: 2 },
    { id: '6', type: 'checklist', content: '', items: [
      'Fitness tracking app with social features',
      'Language learning app with gamification',
      'Smart home automation controller'
    ], checked: [false, true, false]},
    { id: '7', type: 'code', content: 'function createProject() {\n  console.log("New project created!");\n}' },
    { id: '8', type: 'quote', content: 'The best way to predict the future is to invent it.' }
  ]);

  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      if (selection && selection.toString().length > 0) {
        onTextSelection(selection.toString());
      }
    };

    document.addEventListener('selectionchange', handleSelection);
    return () => document.removeEventListener('selectionchange', handleSelection);
  }, [onTextSelection]);

  const handleBlockChange = (blockId: string, newContent: string) => {
    setBlocks(prev => prev.map(block => 
      block.id === blockId ? { ...block, content: newContent } : block
    ));
    onContentChange(JSON.stringify(blocks));
  };

  const handleBlockTypeChange = (blockId: string, newType: Block['type']) => {
    setBlocks(prev => prev.map(block => 
      block.id === blockId ? { ...block, type: newType } : block
    ));
  };

  const addBlock = (afterBlockId: string, type: Block['type'] = 'paragraph') => {
    const newBlock: Block = {
      id: Date.now().toString(),
      type,
      content: ''
    };
    
    setBlocks(prev => {
      const index = prev.findIndex(block => block.id === afterBlockId);
      const newBlocks = [...prev];
      newBlocks.splice(index + 1, 0, newBlock);
      return newBlocks;
    });
  };

  const deleteBlock = (blockId: string) => {
    if (blocks.length > 1) {
      setBlocks(prev => prev.filter(block => block.id !== blockId));
    }
  };

  const moveBlock = (blockId: string, direction: 'up' | 'down') => {
    setBlocks(prev => {
      const index = prev.findIndex(block => block.id === blockId);
      if (index === -1) return prev;
      
      const newBlocks = [...prev];
      if (direction === 'up' && index > 0) {
        [newBlocks[index], newBlocks[index - 1]] = [newBlocks[index - 1], newBlocks[index]];
      } else if (direction === 'down' && index < newBlocks.length - 1) {
        [newBlocks[index], newBlocks[index + 1]] = [newBlocks[index + 1], newBlocks[index]];
      }
      
      return newBlocks;
    });
  };

  return (
    <div 
      ref={editorRef}
      className="flex-1 p-6 overflow-y-auto focus:outline-none"
      contentEditable={false}
    >
      <div className="max-w-4xl mx-auto space-y-4">
        {blocks.map((block, index) => (
          <EditorBlock
            key={block.id}
            block={block}
            isSelected={selectedBlockId === block.id}
            onSelect={() => setSelectedBlockId(block.id)}
            onChange={(content) => handleBlockChange(block.id, content)}
            onTypeChange={(type) => handleBlockTypeChange(block.id, type)}
            onAddBlock={() => addBlock(block.id)}
            onDeleteBlock={() => deleteBlock(block.id)}
            onMoveBlock={(direction) => moveBlock(block.id, direction)}
            isFirst={index === 0}
            isLast={index === blocks.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Editor; 