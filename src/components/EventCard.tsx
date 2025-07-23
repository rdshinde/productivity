import React from "react";

interface EventCardProps {
  time: string;
  title: string;
  description: string;
  location: string;
  type: "primary" | "accent";
}

const EventCard: React.FC<EventCardProps> = ({ time, title, description, location, type }) => {
  const bgColor = type === "primary" ? "bg-primary/10" : "bg-accent/10";
  const textColor = type === "primary" ? "text-primary" : "text-accent";

  return (
    <div className="flex items-start space-x-3">
      <div className={`w-12 h-12 ${bgColor} rounded-lg flex flex-col items-center justify-center`}>
        <span className={`text-xs ${textColor} font-medium`}>{time.split(" ")[0]}</span>
        <span className={`text-xs ${textColor}`}>{time.split(" ")[1]}</span>
      </div>
      <div className="flex-1">
        <p className="font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-xs text-gray-400">{location}</p>
      </div>
    </div>
  );
};

export default EventCard;
