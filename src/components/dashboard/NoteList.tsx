import React from "react";
import { motion } from "framer-motion";
import { Plus, StickyNote } from "lucide-react";

const notes = [
  {
    id: 1,
    title: "Project Ideas",
    content: "Dashboard redesign concepts for the new...",
    time: "2 hours ago",
    color: "yellow",
  },
  {
    id: 2,
    title: "Meeting Notes",
    content: "+ Key decisions from today's product meeting...",
    time: "1 day ago",
    color: "blue",
  },
];

const noteColor = {
  yellow: {
    background: "rgba(0, 180, 216, 0.1)",
    border: "rgba(0, 180, 216, 0.2)"
  },
  blue: {
    background: "rgba(0, 128, 157, 0.1)",
    border: "rgba(0, 128, 157, 0.2)"
  },
};

export const NoteList = () => {
  return (
    <motion.div
      className="rounded-3xl shadow-lg p-6 transition-all duration-200 hover:shadow-xl"
      style={{
        background: "rgba(255, 255, 255, 0.98)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(0, 128, 157, 0.1)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-black text-gray-900">Pinned Notes</h3>
        <button 
          className="text-white hover:shadow-lg transition-all duration-200 p-2 rounded-full"
          style={{
            background: "linear-gradient(135deg, #00809d 0%, #0099cc 100%)",
          }}
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
      <div className="space-y-3">
        {notes.map((note) => (
          <div
            key={note.id}
            className="p-3 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md"
            style={{
              background: noteColor[note.color as "yellow" | "blue"].background,
              border: `1px solid ${noteColor[note.color as "yellow" | "blue"].border}`,
            }}
          >
            <h4 className="font-bold text-gray-900 mb-1 flex items-center">
              <StickyNote className="w-4 h-4 mr-1" style={{ color: "#00809d" }} />
              {note.title}
            </h4>
            <p className="text-sm text-gray-600 font-medium">{note.content}</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-gray-400 font-medium">{note.time}</span>
              <button 
                className="transition-colors duration-200 hover:opacity-80"
                style={{ color: "#00809d" }}
              >
                <StickyNote className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
