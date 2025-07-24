import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const initialTasks = [
  {
    id: 1,
    title: "Review dashboard design",
    due: "Due in 2 hours",
    priority: "high",
    completed: false,
  },
  {
    id: 2,
    title: "Update project documentation",
    due: "Due by 5 PM",
    priority: "medium",
    completed: false,
  },
  {
    id: 3,
    title: "Team standup meeting",
    due: "Completed",
    priority: "low",
    completed: true,
  },
];

const priorityStyles = {
  high: "bg-red-50 border border-red-200",
  medium: "bg-yellow-50 border border-yellow-200",
  low: "bg-green-50 border border-green-200",
};

const priorityBadge = {
  high: (
    <span 
      className="text-white px-2 py-1 rounded-full text-xs font-bold shadow-sm"
      style={{
        background: "linear-gradient(135deg, #dc2626 0%, #ef4444 100%)",
      }}
    >
      High
    </span>
  ),
  medium: (
    <span 
      className="text-white px-2 py-1 rounded-full text-xs font-bold shadow-sm"
      style={{
        background: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
      }}
    >
      Medium
    </span>
  ),
  low: (
    <span 
      className="text-white px-2 py-1 rounded-full text-xs font-bold shadow-sm"
      style={{
        background: "linear-gradient(135deg, #00809d 0%, #0099cc 100%)",
      }}
    >
      Done
    </span>
  ),
};

export const TaskList = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleCheck = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

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
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-black text-gray-900">Today's Tasks</h3>
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
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`${
              priorityStyles[task.priority as "high" | "medium" | "low"]
            } p-3 rounded-2xl flex items-center space-x-3 shadow-sm transition-all duration-200 hover:shadow-md ${
              task.completed ? "opacity-50" : ""
            }`}
          >
            <input
              type="checkbox"
              className="w-4 h-4 border-gray-300 rounded focus:ring-2 transition-all duration-200"
              style={{
                accentColor: "#00809d",
              }}
              checked={task.completed}
              onChange={() => handleCheck(task.id)}
            />
            <div className={`flex-1 ${task.completed ? "opacity-50" : ""}`}>
              <p
                className={`font-bold text-gray-900 ${
                  task.completed ? "line-through" : ""
                }`}
              >
                {task.title}
              </p>
              <p className="text-sm text-gray-500 font-medium">{task.due}</p>
            </div>
            {priorityBadge[task.priority as "high" | "medium" | "low"]}
          </div>
        ))}
      </div>
    </motion.div>
  );
};
