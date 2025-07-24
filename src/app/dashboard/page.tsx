"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Sidebar,
  Header,
  StatsOverview,
  TaskList,
  EventList,
  NoteList,
  HealthDashboard,
  CollaborationPanel,
  RightSidebar,
} from "@/components";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 overflow-hidden">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <motion.main
          className="flex-1 flex flex-col overflow-y-auto px-2 md:px-6 pb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <StatsOverview />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
            <TaskList />
            <EventList />
            <NoteList />
            <HealthDashboard />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
            <CollaborationPanel />
          </div>
        </motion.main>
      </div>
      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
}
