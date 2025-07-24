import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dumbbell } from "lucide-react";

export const HealthDashboard = () => {
  const [water, setWater] = useState(6);
  const totalWater = 8;
  const steps = 8432;
  const stepGoal = 10000;

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
      transition={{ delay: 0.5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-black text-gray-900">
          Health & Wellness
        </h3>
        <button 
          className="text-white hover:shadow-lg transition-all duration-200 p-2 rounded-full"
          style={{
            background: "linear-gradient(135deg, #00809d 0%, #0099cc 100%)",
          }}
        >
          <Dumbbell className="w-5 h-5" />
        </button>
      </div>
      <div className="space-y-4">
        {/* Water Intake */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold cursor-pointer shadow-md transition-all duration-200 hover:shadow-lg hover:scale-105"
              onClick={() => setWater((w) => (w < totalWater ? w + 1 : w))}
              style={{ background: "linear-gradient(135deg, #00b4d8 0%, #0099cc 100%)" }}
            >
              {water}/{totalWater}
            </div>
            <div>
              <p className="font-bold text-gray-900">Water Intake</p>
              <p className="text-sm text-gray-500 font-medium">
                {water} of {totalWater} glasses
              </p>
            </div>
          </div>
          <div className="w-16 h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 rounded-full transition-all duration-300"
              style={{ 
                width: `${(water / totalWater) * 100}%`,
                background: "linear-gradient(135deg, #00b4d8 0%, #0099cc 100%)"
              }}
            ></div>
          </div>
        </div>
        {/* Steps */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center shadow-md"
              style={{
                background: "rgba(0, 128, 157, 0.1)",
                border: "1px solid rgba(0, 128, 157, 0.2)",
              }}
            >
              <span className="text-sm" style={{ color: "#00809d" }}>🏃</span>
            </div>
            <div>
              <p className="font-bold text-gray-900">Steps Today</p>
              <p className="text-sm text-gray-500 font-medium">
                {steps.toLocaleString()} of {stepGoal.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="w-16 h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 rounded-full transition-all duration-300"
              style={{ 
                width: `${(steps / stepGoal) * 100}%`,
                background: "linear-gradient(135deg, #00809d 0%, #0099cc 100%)"
              }}
            ></div>
          </div>
        </div>
        {/* Next Meal */}
        <div 
          className="p-3 rounded-2xl shadow-sm"
          style={{
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(0, 128, 157, 0.08)",
          }}
        >
          <p className="text-sm font-bold text-gray-900">Next Meal</p>
          <p className="text-sm text-gray-600 font-medium">
            Dinner - Grilled salmon with vegetables
          </p>
          <p className="text-xs text-gray-400 font-medium">Planned for 7:00 PM</p>
        </div>
      </div>
    </motion.div>
  );
};
