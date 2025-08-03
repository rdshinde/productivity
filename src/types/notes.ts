// export interface Note {
//   id: string;
//   title: string;
//   content: string;
//   tags: string[];
//   lastModified: string;
//   isPinned?: boolean;
//   isFavorite?: boolean;
//   collaborators?: string[];
//   isShared?: boolean;
// }

// export interface Block {
//   id: string;
//   type: 'heading' | 'paragraph' | 'list' | 'checklist' | 'code' | 'quote' | 'toggle' | 'table' | 'image' | 'link' | 'video' | 'pdf';
//   content: string;
//   level?: number;
//   items?: string[];
//   checked?: boolean[];
// }

// export interface Comment {
//   id: string;
//   author: string;
//   content: string;
//   timestamp: string;
//   replies?: Comment[];
// }

// export interface FolderItem {
//   id: string;
//   name: string;
//   icon: string;
//   children?: FolderItem[];
//   isExpanded?: boolean;
// }

// export interface EditorProps {
//   content: string;
//   onContentChange: (content: string) => void;
//   onTextSelection: (text: string) => void;
// }

// export interface EditorBlockProps {
//   block: Block;
//   isSelected: boolean;
//   onSelect: () => void;
//   onChange: (content: string) => void;
//   onTypeChange: (type: Block['type']) => void;
//   onAddBlock: () => void;
//   onDeleteBlock: () => void;
//   onMoveBlock: (direction: 'up' | 'down') => void;
//   isFirst: boolean;
//   isLast: boolean;
// }

// export interface NoteCardProps {
//   note: Note;
//   isSelected: boolean;
//   onSelect: () => void;
//   onTogglePin: () => void;
//   onToggleFavorite: () => void;
// }

// export interface NoteListProps {
//   searchQuery: string;
//   selectedTags: string[];
// }

// export interface SearchBarProps {
//   value: string;
//   onChange: (value: string) => void;
// }

// export interface FilterTagsProps {
//   selectedTags: string[];
//   onTagToggle: (tags: string[]) => void;
// }

// export interface NoteHeaderProps {
//   note: Note;
//   onSave: () => void;
// }

// export interface FloatingToolbarProps {
//   selectedText: string;
//   onFormat: (format: string) => void;
// } 