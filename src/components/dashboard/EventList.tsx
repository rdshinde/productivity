import React from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const events = [
  {
    id: 1,
    time: "3:00",
    period: "PM",
    title: "Design Review Meeting",
    details: "With Sarah and Mike",
    location: "Conference Room A",
    color: "primary",
  },
  {
    id: 2,
    time: "5:30",
    period: "PM",
    title: "Gym Session",
    details: "Personal training",
    location: "Fitness First",
    color: "accent",
  },
];

const eventColor = {
  primary: {
    background: "rgba(0, 128, 157, 0.1)",
    color: "#00809d",
    border: "rgba(0, 128, 157, 0.2)",
  },
  accent: {
    background: "rgba(0, 180, 216, 0.1)",
    color: "#00b4d8",
    border: "rgba(0, 180, 216, 0.2)",
  },
};

export const EventList = () => {
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
      transition={{ delay: 0.3 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-black text-gray-900">Upcoming Events</h3>
        <button
          className="text-white hover:shadow-lg transition-all duration-200 p-2 rounded-full"
          style={{
            background: "linear-gradient(135deg, #00809d 0%, #0099cc 100%)",
          }}
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="flex items-start space-x-3">
            <div
              className="w-12 h-12 rounded-2xl flex flex-col items-center justify-center shadow-md"
              style={{
                background:
                  eventColor[event.color as "primary" | "accent"].background,
                border: `1px solid ${
                  eventColor[event.color as "primary" | "accent"].border
                }`,
                color: eventColor[event.color as "primary" | "accent"].color,
              }}
            >
              <span className="text-xs font-bold">{event.time}</span>
              <span className="text-xs font-medium">{event.period}</span>
            </div>
            <div className="flex-1">
              <p className="font-bold text-gray-900">{event.title}</p>
              <p className="text-sm text-gray-500 font-medium">
                {event.details}
              </p>
              <p className="text-xs text-gray-400 font-medium">
                {event.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
