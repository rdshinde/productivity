"use client";
import React from "react";
import { useSelector } from "react-redux";
import Layout from "@/components/Layout";
import EventCard from "@/components/EventCard";
import { RootState } from "@/lib/store";

const EventsPage = () => {
  const events = useSelector((state: RootState) => state.events.events);

  return (
    <Layout>
      <div className="flex-1 overflow-hidden">
        <div className="calendar-view h-full p-6">
          <div className="grid grid-cols-7 gap-1 mb-1">
            <div className="text-center py-3 text-sm font-semibold text-gray-600">Sunday</div>
            <div className="text-center py-3 text-sm font-semibold text-gray-600">Monday</div>
            <div className="text-center py-3 text-sm font-semibold text-gray-600">Tuesday</div>
            <div className="text-center py-3 text-sm font-semibold text-gray-600">Wednesday</div>
            <div className="text-center py-3 text-sm font-semibold text-gray-600">Thursday</div>
            <div className="text-center py-3 text-sm font-semibold text-gray-600">Friday</div>
            <div className="text-center py-3 text-sm font-semibold text-gray-600">Saturday</div>
          </div>
          <div className="calendar-grid flex-1">
            {/* This would be dynamically generated based on the current month */}
            {Array.from({ length: 35 }).map((_, i) => (
              <div key={i} className="calendar-day">
                <div className="text-sm font-medium mb-2">{i + 1}</div>
                {events.map((event) => {
                  const eventDate = new Date(event.date).getDate();
                  if (eventDate === i + 1) {
                    return (
                      <EventCard
                        key={event.id}
                        time={event.time}
                        title={event.title}
                        description=""
                        location=""
                        type={event.type === "meeting" ? "primary" : "accent"}
                      />
                    );
                  }
                  return null;
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventsPage;
