"use client";
import { Navbar } from "@/components";
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
      <Navbar />
    </motion.div>
  );
}
