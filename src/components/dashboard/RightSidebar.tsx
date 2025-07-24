"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Plus,
  StickyNote,
  Calendar,
  AlarmClock,
  Bell,
  CheckCircle,
  BookOpen,
  X,
} from "lucide-react";

const quickActions = [
  {
    label: "New Task",
    icon: Plus,
    color: "from-[#00809d] to-[#0099cc]",
    hoverColor: "hover:from-[#006d85] to-[#0087b3]",
  },
  {
    label: "New Note",
    icon: StickyNote,
    color: "from-[#0099cc] to-[#00b4d8]",
    hoverColor: "hover:from-[#0087b3] to-[#009bc4]",
  },
  {
    label: "New Event",
    icon: Calendar,
    color: "from-[#00b4d8] to-[#0099cc]",
    hoverColor: "hover:from-[#009bc4] to-[#0087b3]",
  },
  {
    label: "Set Alarm",
    icon: AlarmClock,
    color: "from-[#00809d] to-[#00b4d8]",
    hoverColor: "hover:from-[#006d85] to-[#009bc4]",
  },
];

const notifications = [
  {
    id: 1,
    type: "Task Reminder",
    message: "Design review meeting in 30 minutes",
    time: "2 min ago",
    color: "#00b4d8",
    bgColor: "rgba(0, 180, 216, 0.1)",
    borderColor: "rgba(0, 180, 216, 0.2)",
  },
  {
    id: 2,
    type: "Goal Achieved",
    message: "You've completed 5 tasks today!",
    time: "1 hour ago",
    color: "#00809d",
    bgColor: "rgba(0, 128, 157, 0.1)",
    borderColor: "rgba(0, 128, 157, 0.2)",
  },
  {
    id: 3,
    type: "Collaboration Update",
    message: "Sarah added comments to your note",
    time: "3 hours ago",
    color: "#0099cc",
    bgColor: "rgba(0, 153, 204, 0.1)",
    borderColor: "rgba(0, 153, 204, 0.2)",
  },
];

const alarms = [
  {
    id: 1,
    label: "Stand-up Meeting",
    time: "Tomorrow 9:00 AM",
    color: "#00809d",
    bgColor: "rgba(0, 128, 157, 0.1)",
    icon: AlarmClock,
  },
  {
    id: 2,
    label: "Drink Water",
    time: "Every 2 hours",
    color: "#00b4d8",
    bgColor: "rgba(0, 180, 216, 0.1)",
    icon: CheckCircle,
  },
];

export const RightSidebar = () => {
  return (
    <motion.aside
      className="sidebar-right w-80 border-l p-6 space-y-6 hidden lg:block h-screen overflow-y-auto overflow-x-hidden"
      style={{
        background: "rgba(255, 255, 255, 0.98)",
        backdropFilter: "blur(20px)",
        borderLeft: "1px solid rgba(0, 128, 157, 0.1)",
      }}
      initial={{ x: 80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80 }}
    >
      {/* Quick Actions */}
      <div>
        <h3 className="text-lg font-black text-gray-900 mb-4 flex items-center gap-2">
          <span
            className="w-8 h-8 rounded-2xl flex items-center justify-center shadow-lg"
            style={{
              background: "linear-gradient(135deg, #00809d 0%, #0099cc 100%)",
            }}
          >
            <Plus className="w-4 h-4 text-white" />
          </span>
          Quick Actions
        </h3>
        <div className="space-y-3">
          {quickActions.map((action) => (
            <button
              key={action.label}
              className={`w-full bg-gradient-to-r ${action.color} ${action.hoverColor} text-white p-3 rounded-2xl font-bold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25 flex items-center space-x-2 shadow-md`}
            >
              <action.icon className="w-5 h-5" />
              <span>{action.label}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Mini Calendar */}
      <div>
        <h3 className="text-lg font-black text-gray-900 mb-4">Calendar</h3>
        <div
          className="rounded-3xl p-4 shadow-md"
          style={{
            background: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(0, 128, 157, 0.1)",
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-gray-900">July 2025</h4>
            <div className="flex space-x-1">
              <button className="p-1 hover:bg-gray-200 rounded transition-colors duration-200">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-200 rounded transition-colors duration-200">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="mini-calendar">
            <div className="grid grid-cols-7 gap-1 mb-2">
              {[..."SMTWTFS"].map((d, i) => (
                <div
                  key={i}
                  className="text-center text-xs font-bold text-gray-500 py-1"
                >
                  {d}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {/* Example days, highlight today */}
              {[...Array(35)].map((_, i) => (
                <div
                  key={i}
                  className={`text-center py-1 text-sm day ${
                    i === 20
                      ? "text-white rounded-lg font-bold shadow-md"
                      : "hover:bg-gray-100 rounded transition-colors duration-200"
                  } ${i < 2 || i > 32 ? "text-gray-400" : "text-gray-700"}`}
                  style={
                    i === 20
                      ? {
                          background:
                            "linear-gradient(135deg, #00809d 0%, #0099cc 100%)",
                        }
                      : {}
                  }
                >
                  {i < 2 ? 29 + i : i > 32 ? i - 32 : i - 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Motivational Quote */}
      <div>
        <div
          className="rounded-3xl p-4 text-white shadow-lg"
          style={{
            background:
              "linear-gradient(135deg, #00809d 0%, #00b4d8 50%, #0099cc 100%)",
          }}
        >
          <div className="text-2xl mb-2">💡</div>
          <p className="text-sm font-bold mb-2">
            "The secret of getting ahead is getting started."
          </p>
          <p className="text-xs text-white/80 font-medium">— Mark Twain</p>
        </div>
      </div>
      {/* Notifications */}
      <div>
        <h3 className="text-lg font-black text-gray-900 mb-4">Notifications</h3>
        <div className="space-y-3">
          {notifications.map((n) => (
            <div
              key={n.id}
              className="p-3 rounded-2xl shadow-md transition-all duration-200 hover:shadow-lg"
              style={{
                background: n.bgColor,
                border: `1px solid ${n.borderColor}`,
              }}
            >
              <div className="flex items-start space-x-2">
                <div
                  className="w-2 h-2 rounded-full mt-2"
                  style={{ backgroundColor: n.color }}
                ></div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-900">{n.type}</p>
                  <p className="text-xs text-gray-600 font-medium">
                    {n.message}
                  </p>
                  <p className="text-xs text-gray-400 font-medium">{n.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Upcoming Alarms */}
      <div>
        <h3 className="text-lg font-black text-gray-900 mb-4">
          Upcoming Alarms
        </h3>
        <div className="space-y-2">
          {alarms.map((alarm) => (
            <div
              key={alarm.id}
              className="flex items-center justify-between p-3 rounded-2xl shadow-md transition-all duration-200 hover:shadow-lg"
              style={{
                background: "rgba(255, 255, 255, 0.98)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(0, 128, 157, 0.1)",
              }}
            >
              <div className="flex items-center space-x-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: alarm.bgColor }}
                >
                  <alarm.icon
                    className="w-4 h-4"
                    style={{ color: alarm.color }}
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    {alarm.label}
                  </p>
                  <p className="text-xs text-gray-500 font-medium">
                    {alarm.time}
                  </p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </motion.aside>
  );
};
