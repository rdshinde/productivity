# Notes Components

This directory contains all the components for the Notes feature of the productivity application. The components are built using Next.js, TypeScript, and Tailwind CSS.

## Component Structure

```
src/components/notes/
├── Layout.tsx              # Main layout wrapper
├── Sidebar.tsx             # Left sidebar with search, filters, and note list
├── MainContent.tsx         # Main content area with editor
├── CommentsSidebar.tsx     # Right sidebar for comments
├── SearchBar.tsx           # Search input component
├── FilterTags.tsx          # Tag filtering component
├── FolderTree.tsx          # Folder navigation tree
├── NoteList.tsx            # List of notes
├── NoteCard.tsx            # Individual note card
├── NoteHeader.tsx          # Note header with title and actions
├── Editor.tsx              # Rich text editor
├── EditorBlock.tsx         # Individual editor block
├── FloatingToolbar.tsx     # Floating formatting toolbar
├── index.ts                # Component exports
└── README.md               # This file
```

## Key Features

### Layout
- Three-panel layout: Sidebar, Main Content, Comments Sidebar
- Responsive design with fixed widths
- Flexbox-based layout

### Sidebar
- Search functionality with real-time filtering
- Tag-based filtering system
- Folder tree navigation with expand/collapse
- Note list with sorting (pinned first, then by date)
- Note cards with pin/favorite actions

### Main Content
- Rich text editor with multiple block types
- Auto-save functionality
- Floating toolbar for text formatting
- Block-level editing with keyboard shortcuts

### Editor Block Types
- **Heading**: H1-H4 with configurable levels
- **Paragraph**: Standard text blocks
- **List**: Bulleted lists
- **Checklist**: Checkable items
- **Code**: Syntax-highlighted code blocks
- **Quote**: Styled blockquotes
- **Toggle**: Collapsible content (planned)
- **Table**: Data tables (planned)
- **Image**: Image embeds (planned)
- **Link**: Link embeds (planned)
- **Video**: Video embeds (planned)
- **PDF**: PDF embeds (planned)

### Comments Sidebar
- Threaded comments system
- Real-time comment addition
- User avatars and timestamps
- Reply functionality

## Usage

```tsx
import { Layout } from '@/components/notes';

function NotesPage() {
  return <Layout />;
}
```

## State Management

The components use React's built-in state management with `useState` hooks. For a production application, consider using:

- **Zustand** for global state management
- **React Query** for server state
- **Context API** for theme/user preferences

## Styling

All components use Tailwind CSS classes for styling. The design follows a clean, modern aesthetic with:

- Gray color palette for neutral elements
- Blue accent color for interactive elements
- Consistent spacing and typography
- Hover states and transitions
- Focus states for accessibility

## Keyboard Shortcuts

- `Enter`: Create new block
- `Backspace` (empty block): Delete block
- `Ctrl + Arrow Up/Down`: Move block up/down
- `Ctrl + B`: Bold text
- `Ctrl + I`: Italic text
- `Ctrl + U`: Underline text

## Accessibility

- Proper ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- High contrast support

## Performance Considerations

- Lazy loading for large note lists
- Debounced search input
- Virtual scrolling for long documents
- Memoization for expensive operations
- Optimistic updates for better UX

## Future Enhancements

- Real-time collaboration
- Version history
- Advanced formatting options
- File attachments
- Export functionality
- Mobile responsiveness
- Offline support 