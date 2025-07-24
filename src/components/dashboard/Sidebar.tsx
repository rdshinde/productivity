import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  Search,
  CheckCircle,
  StickyNote,
  Calendar,
  Dumbbell,
  Users,
  Bell,
  BookOpen,
  LogOut,
} from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Dashboard", icon: Home, href: "/dashboard", badge: null },
  { label: "Smart AI Search", icon: Search, href: "#", badge: null },
  { label: "Tasks", icon: CheckCircle, href: "/tasks", badge: 47 },
  { label: "Notes", icon: StickyNote, href: "/notes", badge: 12 },
  { label: "Events", icon: Calendar, href: "/events", badge: null },
  { label: "Diet & Exercise", icon: Dumbbell, href: "#", badge: null },
  { label: "Collaboration", icon: Users, href: "#", badge: "•" },
  { label: "Alerts & Alarms", icon: Bell, href: "#", badge: null },
  { label: "Blogs", icon: BookOpen, href: "/blogs", badge: "New" },
];

export const Sidebar = () => {
  return (
    <motion.aside
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80 }}
      className="sidebar-left w-64 shadow-lg lg:flex flex-col h-screen hidden"
      style={{
        background: "rgba(255, 255, 255, 0.98)",
        backdropFilter: "blur(20px)",
        borderRight: "1px solid rgba(0, 128, 157, 0.1)",
      }}
    >
      {/* Logo */}
      <div className="flex items-center px-6 py-6">
        <div
          className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg"
          style={{
            background: "linear-gradient(135deg, #00809d 0%, #0099cc 100%)",
          }}
        >
          <Home className="w-5 h-5 text-white" />
        </div>
        <span
          className="ml-3 text-xl font-black text-gray-900"
          style={{ color: "#00809d" }}
        >
          Productivity
        </span>
      </div>
      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {navItems.map(({ label, icon: Icon, href, badge }) => (
          <Link href={href} key={label} legacyBehavior>
            <a
              className="sidebar-item flex items-center px-3 py-3 text-gray-700 rounded-2xl group hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
              style={{
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(0, 128, 157, 0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0, 128, 157, 0.1)";
                e.currentTarget.style.borderColor = "rgba(0, 128, 157, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.8)";
                e.currentTarget.style.borderColor = "rgba(0, 128, 157, 0.08)";
              }}
            >
              <Icon className="w-5 h-5 mr-3" style={{ color: "#00809d" }} />
              <span className="font-bold text-gray-800">{label}</span>
              {badge && (
                <span
                  className="ml-auto text-white text-xs px-2 py-1 rounded-full font-bold shadow-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, #00809d 0%, #0099cc 100%)",
                  }}
                >
                  {badge}
                </span>
              )}
            </a>
          </Link>
        ))}
      </nav>
      {/* User Profile */}
      <div
        className="px-4 py-4 mt-auto"
        style={{
          borderTop: "1px solid rgba(0, 128, 157, 0.1)",
        }}
      >
        <div
          className="flex items-center p-3 rounded-2xl transition-all duration-200 hover:shadow-md"
          style={{
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(0, 128, 157, 0.08)",
          }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black shadow-md"
            style={{
              background: "linear-gradient(135deg, #00809d 0%, #0099cc 100%)",
            }}
          >
            U
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-bold text-gray-900">User</p>
            <p className="text-xs font-medium" style={{ color: "#00809d" }}>
              Online
            </p>
          </div>
          <button
            className="text-gray-400 hover:text-white hover:shadow-lg transition-all duration-200 p-2 rounded-full"
            style={{
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg, #00809d 0%, #0099cc 100%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.aside>
  );
};
