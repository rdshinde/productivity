import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

const collaborations = [
  {
    id: 1,
    title: "Shared Notes",
    description: "Project brainstorming document",
    status: [
      { type: "online", color: "#00b4d8" },
      { type: "away", color: "#00809d" },
    ],
    details: "Sarah editing • Mike viewing",
  },
  {
    id: 2,
    title: "Team Calendar",
    description: "Weekly planning session",
    status: [
      { type: "busy", color: "#0099cc" },
      { type: "online", color: "#00b4d8" },
    ],
    details: "3 members attending",
  },
];

export const CollaborationPanel = () => {
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
      transition={{ delay: 0.6 }}
    >
      <h3 className="text-lg font-black text-gray-900 mb-4">
        Team Collaboration
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {collaborations.map((item) => (
          <div 
            key={item.id} 
            className="p-4 rounded-2xl shadow-md transition-all duration-200 hover:shadow-lg"
            style={{
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(0, 128, 157, 0.08)",
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-gray-900">{item.title}</h4>
              <div className="flex -space-x-2">
                {item.status.map((s, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                    style={{ backgroundColor: s.color }}
                  ></div>
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-600 font-medium">{item.description}</p>
            <p className="text-xs text-gray-400 font-medium mt-1">{item.details}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
