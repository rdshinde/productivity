'use client';

import React from 'react';
import Sidebar from '../notes/Sidebar';
import MainContent from '../notes/MainContent';
import CommentsSidebar from '../notes/CommentsSidebar';

const Layout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <MainContent />
      <CommentsSidebar />
    </div>
  );
};

export default Layout;

