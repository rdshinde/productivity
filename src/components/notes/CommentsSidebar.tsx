'use client';

import React, { useState } from 'react';

interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  replies?: Comment[];
}

const CommentsSidebar: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      author: 'John Doe',
      content: 'Great idea! I think we should focus on the mobile app first.',
      timestamp: '2 hours ago',
      replies: [
        {
          id: '1-1',
          author: 'Jane Smith',
          content: 'Agreed! The mobile market is growing rapidly.',
          timestamp: '1 hour ago'
        }
      ]
    },
    {
      id: '2',
      author: 'Mike Johnson',
      content: 'Have we considered the technical requirements for the AI features?',
      timestamp: '30 minutes ago'
    }
  ]);

  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        author: 'Current User',
        content: newComment,
        timestamp: 'Just now'
      };
      setComments(prev => [...prev, comment]);
      setNewComment('');
    }
  };

  const renderComment = (comment: Comment) => (
    <div key={comment.id} className="mb-4">
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 bg-blue-500 text-white text-sm rounded-full flex items-center justify-center">
          {comment.author.charAt(0)}
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-sm font-medium text-gray-900">{comment.author}</span>
            <span className="text-xs text-gray-500">{comment.timestamp}</span>
          </div>
          <p className="text-sm text-gray-700 mb-2">{comment.content}</p>
          <button className="text-xs text-blue-600 hover:text-blue-800">Reply</button>
        </div>
      </div>
      
      {comment.replies && comment.replies.length > 0 && (
        <div className="ml-11 mt-3 space-y-3">
          {comment.replies.map(reply => renderComment(reply))}
        </div>
      )}
    </div>
  );

  return (
    <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Comments</h2>
        <p className="text-sm text-gray-500 mt-1">Discuss and collaborate on this note</p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {comments.map(comment => renderComment(comment))}
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
          />
          <button
            onClick={handleAddComment}
            disabled={!newComment.trim()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentsSidebar; 