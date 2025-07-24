import React from "react";
import { motion } from "framer-motion";
import { ListChecks, Users, StickyNote, TrendingUp } from "lucide-react";

const stats = [
  { 
    label: "Tasks Today", 
    value: 3, 
    icon: ListChecks, 
    color: "#00809d",
    background: "rgba(0, 128, 157, 0.1)",
    border: "rgba(0, 128, 157, 0.2)"
  },
  { 
    label: "Meetings", 
    value: 2, 
    icon: Users, 
    color: "#0099cc",
    background: "rgba(0, 153, 204, 0.1)",
    border: "rgba(0, 153, 204, 0.2)"
  },
  { 
    label: "Notes", 
    value: 12, 
    icon: StickyNote, 
    color: "#00b4d8",
    background: "rgba(0, 180, 216, 0.1)",
    border: "rgba(0, 180, 216, 0.2)"
  },
  { 
    label: "Productivity", 
    value: "87%", 
    icon: TrendingUp, 
    color: "#00809d",
    background: "rgba(0, 128, 157, 0.1)",
    border: "rgba(0, 128, 157, 0.2)"
  },
];

export const StatsOverview = () => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {stats.map(({ label, value, icon: Icon, color, background, border }, i) => (
        <motion.div
          key={label}
          className="rounded-3xl p-4 shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.02]"
          style={{
            background: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(0, 128, 157, 0.1)",
          }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">{label}</p>
              <p className="text-2xl font-black text-gray-900">{value}</p>
            </div>
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-md"
              style={{
                background: background,
                border: `1px solid ${border}`,
              }}
            >
              <Icon className="w-5 h-5" style={{ color: color }} />
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
