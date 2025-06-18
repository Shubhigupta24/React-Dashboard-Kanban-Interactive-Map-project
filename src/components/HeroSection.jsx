import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../ultils/motion";

const stats = [
  {
    title: "Daily Sales",
    value: "$249.95",
    percentage: "67%",
    progress: "w-2/3",
    color: "text-emerald-500",
    barColor: "bg-emerald-400",
    icon: <FaArrowUp className="inline mr-1" />,
  },
  {
    title: "Monthly Sales",
    value: "$2942.32",
    percentage: "36%",
    progress: "w-1/3",
    color: "text-rose-500",
    barColor: "bg-purple-500",
    icon: <FaArrowDown className="inline mr-1" />,
  },
  {
    title: "Yearly Sales",
    value: "$8638.32",
    percentage: "80%",
    progress: "w-4/5",
    color: "text-emerald-500",
    barColor: "bg-emerald-400",
    icon: <FaArrowUp className="inline mr-1" />,
  },
];
const HeroSection = () => {
  return (
    <section id="dashboard" className="p-4 ml-16 md:ml-64 lg:ml-64 pt-30">
      {/* all three cards */}
      <motion.div variants={staggerContainer(0.2, 0)}
            initial="hidden"
            whileInView="show"className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up",index * 0.2)}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all "
          >
            <h3 className="text-sm text-gray-500">{stat.title}</h3>
            <div className="flex justify-between items-start mt-2">
              <p className={`text-xl font-semibold ${stat.color}`}>
                {stat.icon}
                {stat.value}
              </p>
              <span className="text-gray-400 text-sm">{stat.percentage}</span>
            </div>
            <div className="mt-4 w-full h-2 bg-gray-200 rounded-full">
              <div className={`${stat.progress} ${stat.barColor} h-2 rounded-full shadow-sm`}></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;
