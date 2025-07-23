import React from "react";
import Layout from "@/components/Layout";
import TaskCard from "@/components/TaskCard";
import EventCard from "@/components/EventCard";
import NoteCard from "@/components/NoteCard";

const DashboardPage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 animate-fade-in-up animate-delay-100">
        <div className="bg-white rounded-xl p-4 shadow-card card-hover">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Tasks Today</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-card card-hover">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Meetings</p>
              <p className="text-2xl font-bold text-gray-900">2</p>
            </div>
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-card card-hover">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Notes</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
            <div className="w-10 h-10 bg-primary-light/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-primary-light" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-card card-hover">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Productivity</p>
              <p className="text-2xl font-bold text-gray-900">87%</p>
            </div>
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-card p-6 card-hover animate-fade-in-up animate-delay-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Today's Tasks</h3>
            <button className="text-primary hover:text-primary-dark">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
              </svg>
            </button>
          </div>
          <div className="space-y-3">
            <TaskCard priority="high" title="Review dashboard design" dueDate="Due in 2 hours" />
            <TaskCard priority="medium" title="Update project documentation" dueDate="Due by 5 PM" />
            <TaskCard priority="low" title="Team standup meeting" dueDate="Completed" completed />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-card p-6 card-hover animate-fade-in-up animate-delay-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Upcoming Events</h3>
            <button className="text-primary hover:text-primary-dark">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
              </svg>
            </button>
          </div>
          <div className="space-y-4">
            <EventCard time="3:00 PM" title="Design Review Meeting" description="With Sarah and Mike" location="Conference Room A" type="primary" />
            <EventCard time="5:30 PM" title="Gym Session" description="Personal training" location="Fitness First" type="accent" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-card p-6 card-hover animate-fade-in-up animate-delay-400">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Pinned Notes</h3>
            <button className="text-primary hover:text-primary-dark">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
              </svg>
            </button>
          </div>
          <div className="space-y-3">
            <NoteCard title="Project Ideas" excerpt="Dashboard redesign concepts for the new..." lastUpdated="2 hours ago" color="yellow" />
            <NoteCard title="Meeting Notes" excerpt="Key decisions from today's product meeting..." lastUpdated="1 day ago" color="blue" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
