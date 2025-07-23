"use client";
import React from "react";
import { useSelector } from "react-redux";
import Layout from "@/components/Layout";
import TaskCard from "@/components/TaskCard";
import { RootState } from "@/lib/store";

const TasksPage = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const todoTasks = tasks.filter((task) => task.status === "todo");
  const inProgressTasks = tasks.filter((task) => task.status === "progress");
  const reviewTasks = tasks.filter((task) => task.status === "review");
  const doneTasks = tasks.filter((task) => task.status === "done");

  return (
    <Layout>
      <div className="h-full p-6 overflow-x-auto">
        <div className="flex space-x-6 h-full min-w-max">
          <div className="kanban-column flex-shrink-0 w-80 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 flex items-center">
                  <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
                  To Do
                </h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{todoTasks.length}</span>
              </div>
            </div>
            <div className="p-4 space-y-3 custom-scrollbar overflow-y-auto" style={{ maxHeight: "calc(100vh - 200px)" }}>
              {todoTasks.map((task) => (
                <TaskCard key={task.id} {...task} />
              ))}
            </div>
          </div>
          <div className="kanban-column flex-shrink-0 w-80 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  In Progress
                </h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{inProgressTasks.length}</span>
              </div>
            </div>
            <div className="p-4 space-y-3 custom-scrollbar overflow-y-auto" style={{ maxHeight: "calc(100vh - 200px)" }}>
              {inProgressTasks.map((task) => (
                <TaskCard key={task.id} {...task} />
              ))}
            </div>
          </div>
          <div className="kanban-column flex-shrink-0 w-80 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  Review
                </h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{reviewTasks.length}</span>
              </div>
            </div>
            <div className="p-4 space-y-3 custom-scrollbar overflow-y-auto" style={{ maxHeight: "calc(100vh - 200px)" }}>
              {reviewTasks.map((task) => (
                <TaskCard key={task.id} {...task} />
              ))}
            </div>
          </div>
          <div className="kanban-column flex-shrink-0 w-80 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  Done
                </h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{doneTasks.length}</span>
              </div>
            </div>
            <div className="p-4 space-y-3 custom-scrollbar overflow-y-auto" style={{ maxHeight: "calc(100vh - 200px)" }}>
              {doneTasks.map((task) => (
                <TaskCard key={task.id} {...task} completed />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TasksPage;
