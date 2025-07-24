"use client";
import { motion } from "framer-motion";
import { Dumbbell } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [water, setWater] = useState(6);
  const totalWater = 8;
  const steps = 8432;
  const stepGoal = 10000;

  return (
    <motion.div
      className="bg-white rounded-xl shadow-card p-6 card-hover"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Health & Wellness
        </h3>
        <button className="text-primary hover:text-primary-dark">
          <Dumbbell className="w-5 h-5" />
        </button>
      </div>
      <div className="space-y-4">
        {/* Water Intake */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div
              className="hydration-wave w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium cursor-pointer"
              onClick={() => setWater((w) => (w < totalWater ? w + 1 : w))}
              style={{ background: "linear-gradient(45deg, #00b4d8, #0099cc)" }}
            >
              {water}/{totalWater}
            </div>
            <div>
              <p className="font-medium text-gray-900">Water Intake</p>
              <p className="text-sm text-gray-500">
                {water} of {totalWater} glasses
              </p>
            </div>
          </div>
          <div className="w-16 h-2 bg-gray-200 rounded-full">
            <div
              className="progress-bar h-2 rounded-full"
              style={{ width: `${(water / totalWater) * 100}%` }}
            ></div>
          </div>
        </div>
        {/* Steps */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-sm">🏃</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">Steps Today</p>
              <p className="text-sm text-gray-500">
                {steps.toLocaleString()} of {stepGoal.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="w-16 h-2 bg-gray-200 rounded-full">
            <div
              className="progress-bar h-2 rounded-full"
              style={{ width: `${(steps / stepGoal) * 100}%` }}
            ></div>
          </div>
        </div>
        {/* Next Meal */}
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm font-medium text-gray-900">Next Meal</p>
          <p className="text-sm text-gray-600">
            Dinner - Grilled salmon with vegetables
          </p>
          <p className="text-xs text-gray-400">Planned for 7:00 PM</p>
        </div>
      </div>
    </motion.div>
  );
}
