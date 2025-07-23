import React from "react";

interface NoteCardProps {
  title: string;
  excerpt: string;
  lastUpdated: string;
  color: "yellow" | "blue";
}

const NoteCard: React.FC<NoteCardProps> = ({ title, excerpt, lastUpdated, color }) => {
  const cardColorClasses = {
    yellow: "bg-yellow-50 border-yellow-200",
    blue: "bg-blue-50 border-blue-200",
  };

  const buttonColorClasses = {
    yellow: "text-yellow-600 hover:text-yellow-700",
    blue: "text-blue-600 hover:text-blue-700",
  };

  return (
    <div className={`${cardColorClasses[color]} p-3 rounded-lg border`}>
      <h4 className="font-medium text-gray-900 mb-1">{title}</h4>
      <p className="text-sm text-gray-600">{excerpt}</p>
      <div className="flex items-center justify-between mt-2">
        <span className="text-xs text-gray-400">{lastUpdated}</span>
        <button className={`${buttonColorClasses[color]}`}>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
