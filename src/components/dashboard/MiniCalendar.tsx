"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Calendar from "react-calendar";
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
} from "lucide-react";
import "react-calendar/dist/Calendar.css";

// Custom types for calendar value
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// Sample events data (this will be replaced with real data later)
const sampleEvents = [
  { date: new Date(2025, 6, 20), title: "Team Meeting", type: "meeting" },
  { date: new Date(2025, 6, 25), title: "Project Deadline", type: "deadline" },
  { date: new Date(2025, 6, 28), title: "Review Session", type: "review" },
];

export const MiniCalendar: React.FC = () => {
  const [value, setValue] = useState<Value>(new Date());
  const [activeStartDate, setActiveStartDate] = useState(new Date());

  // Check if a date has events
  const hasEvents = (date: Date) => {
    return sampleEvents.some(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );
  };

  // Get event type for styling
  const getEventType = (date: Date) => {
    const event = sampleEvents.find(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );
    return event?.type || null;
  };

  // Custom tile content to show event indicators
  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month" && hasEvents(date)) {
      const eventType = getEventType(date);
      let dotColor = "bg-[#00809d]";

      if (eventType === "deadline") dotColor = "bg-red-500";
      if (eventType === "review") dotColor = "bg-[#00b4d8]";

      return (
        <div className="flex justify-center mt-1">
          <div className={`w-1.5 h-1.5 rounded-full ${dotColor}`}></div>
        </div>
      );
    }
    return null;
  };

  // Custom tile class names for styling
  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    const baseClasses = "relative";
    const today = new Date();

    if (view === "month") {
      // Today's date
      if (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      ) {
        return `${baseClasses} !bg-gradient-to-br from-[#00809d] to-[#0099cc] !text-white font-bold rounded-lg`;
      }

      // Selected date
      if (
        value instanceof Date &&
        date.getDate() === value.getDate() &&
        date.getMonth() === value.getMonth() &&
        date.getFullYear() === value.getFullYear() &&
        date.getTime() !== today.getTime()
      ) {
        return `${baseClasses} !bg-[#00b4d8]/20 !text-[#00809d] font-semibold rounded-lg border border-[#00809d]/30`;
      }

      // Dates with events
      if (hasEvents(date)) {
        return `${baseClasses} hover:bg-[#00809d]/10 rounded-lg transition-colors duration-200`;
      }
    }

    return baseClasses;
  };

  return (
    <motion.div
      className="mini-calendar-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-lg font-black text-gray-900 mb-4 flex items-center gap-2">
        <span className="w-8 h-8 rounded-2xl bg-gradient-to-br from-[#00809d] to-[#0099cc] flex items-center justify-center shadow-lg">
          <CalendarIcon className="w-4 h-4 text-white" />
        </span>
        Calendar
      </h3>

      <div className="bg-white/98 backdrop-blur-lg rounded-3xl p-4 shadow-md border border-[rgba(0,128,157,0.1)]">
        <div className="mini-calendar-wrapper">
          <Calendar
            onChange={setValue}
            value={value}
            activeStartDate={activeStartDate}
            onActiveStartDateChange={({ activeStartDate }) =>
              setActiveStartDate(activeStartDate || new Date())
            }
            tileContent={tileContent}
            tileClassName={tileClassName}
            showNeighboringMonth={false}
            locale="en-US"
            prev2Label={null}
            next2Label={null}
            prevLabel={<ChevronLeft className="w-4 h-4" />}
            nextLabel={<ChevronRight className="w-4 h-4" />}
            formatShortWeekday={(locale, date) =>
              date.toLocaleDateString(locale, { weekday: "narrow" })
            }
          />
        </div>

        {/* Event List for Selected Date */}
        {value instanceof Date && (
          <div className="mt-4 pt-4 border-t border-gray-200/50">
            <h4 className="text-sm font-bold text-gray-900 mb-2">
              Events for{" "}
              {value.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </h4>
            {sampleEvents
              .filter(
                (event) =>
                  event.date.getDate() === value.getDate() &&
                  event.date.getMonth() === value.getMonth() &&
                  event.date.getFullYear() === value.getFullYear()
              )
              .map((event, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 py-1 text-sm"
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      event.type === "deadline"
                        ? "bg-red-500"
                        : event.type === "review"
                        ? "bg-[#00b4d8]"
                        : "bg-[#00809d]"
                    }`}
                  ></div>
                  <span className="text-gray-700 font-medium">
                    {event.title}
                  </span>
                </div>
              )) || (
              <p className="text-xs text-gray-500 italic">
                No events scheduled
              </p>
            )}
          </div>
        )}
      </div>

      <style jsx global>{`
        .mini-calendar-wrapper .react-calendar {
          width: 100%;
          border: none;
          background: transparent;
          font-family: inherit;
        }

        .mini-calendar-wrapper .react-calendar__navigation {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
          height: auto;
        }

        .mini-calendar-wrapper .react-calendar__navigation button {
          background: transparent;
          border: none;
          color: #374151;
          font-weight: 600;
          font-size: 0.875rem;
          padding: 0.5rem;
          border-radius: 0.5rem;
          transition: all 0.2s;
        }

        .mini-calendar-wrapper .react-calendar__navigation button:hover {
          background-color: #f3f4f6;
          color: #00809d;
        }

        .mini-calendar-wrapper .react-calendar__navigation button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .mini-calendar-wrapper .react-calendar__month-view__weekdays {
          text-align: center;
          font-weight: 700;
          font-size: 0.75rem;
          color: #6b7280;
          margin-bottom: 0.5rem;
        }

        .mini-calendar-wrapper .react-calendar__month-view__weekdays__weekday {
          padding: 0.5rem 0.25rem;
        }

        .mini-calendar-wrapper .react-calendar__month-view__days {
          display: grid !important;
          grid-template-columns: repeat(7, 1fr);
          gap: 0.125rem;
        }

        .mini-calendar-wrapper .react-calendar__tile {
          background: transparent;
          border: none;
          color: #374151;
          font-size: 0.875rem;
          font-weight: 500;
          padding: 0.5rem 0.25rem;
          text-align: center;
          transition: all 0.2s;
          cursor: pointer;
          position: relative;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .mini-calendar-wrapper .react-calendar__tile:hover {
          background-color: #f3f4f6;
          border-radius: 0.5rem;
        }

        .mini-calendar-wrapper .react-calendar__tile--neighboringMonth {
          color: #d1d5db !important;
        }

        .mini-calendar-wrapper .react-calendar__tile--active {
          background: linear-gradient(
            135deg,
            #00809d 0%,
            #0099cc 100%
          ) !important;
          color: white !important;
          border-radius: 0.5rem !important;
          font-weight: 700 !important;
        }

        .mini-calendar-wrapper .react-calendar__tile--now {
          background: linear-gradient(
            135deg,
            #00809d 0%,
            #0099cc 100%
          ) !important;
          color: white !important;
          border-radius: 0.5rem !important;
          font-weight: 700 !important;
        }
      `}</style>
    </motion.div>
  );
};
