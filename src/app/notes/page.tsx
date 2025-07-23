"use client";
import React from "react";
import { useSelector } from "react-redux";
import Layout from "@/components/Layout";
import NoteCard from "@/components/NoteCard";
import { RootState } from "@/lib/store";

const NotesPage = () => {
  const notes = useSelector((state: RootState) => state.notes.notes);

  return (
    <Layout>
      <div className="flex-1 flex flex-col bg-gray-50">
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>Personal Notes</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <span className="text-gray-900 font-medium">Product Roadmap Q3 2025</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {/* Note Actions */}
            </div>
          </div>
        </header>
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <input type="text" placeholder="Note title..." value="Product Roadmap Q3 2025" className="note-title" />
            <div className="editor-area">
              {notes.map((note) => (
                <NoteCard key={note.id} {...note} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotesPage;
