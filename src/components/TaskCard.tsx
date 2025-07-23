import React from "react";

interface TaskCardProps {
  priority: "high" | "medium" | "low";
  title: string;
  dueDate: string;
  completed?: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({ priority, title, dueDate, completed }) => {
  const priorityClasses = {
    high: "priority-high",
    medium: "priority-medium",
    low: "priority-low",
  };

  const priorityBadgeClasses = {
    high: "bg-red-100 text-red-700",
    medium: "bg-yellow-100 text-yellow-700",
    low: "bg-green-100 text-green-700",
  };

  return (
    <div className={`bg-gray-50 p-3 rounded-lg flex items-center space-x-3 ${priorityClasses[priority]}`}>
      <input
        type="checkbox"
        className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
        checked={completed}
        readOnly
      />
      <div className={`flex-1 ${completed ? "opacity-50" : ""}`}>
        <p className={`font-medium text-gray-900 ${completed ? "line-through" : ""}`}>{title}</p>
        <p className="text-sm text-gray-500">{completed ? "Completed" : dueDate}</p>
      </div>
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${completed ? "bg-green-100 text-green-700" : priorityBadgeClasses[priority]}`}>
        {completed ? "Done" : priority.charAt(0).toUpperCase() + priority.slice(1)}
      </span>
    </div>
  );
};

export default TaskCard;
