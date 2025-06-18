import React from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdEventAvailable } from "react-icons/md";
import {motion} from 'framer-motion'
import { fadeIn } from "../ultils/motion";

const users = [
  {
    name: "Isabella Christensen",
    activity: "Lorem ipsum...",
    time: "11 May 12:56",
  },
  {
    name: "Mathilde Andersen",
    activity: "Lorem ipsum...",
    time: "11 May 10:35",
  },
  { name: "Karla Sorensen", activity: "Lorem ipsum...", time: "9 May 17:38" },
  { name: "Ida Jorgensen", activity: "Lorem ipsum...", time: "19 May 12:56" },
  {
    name: "Albert Andersen",
    activity: "Lorem ipsum...",
    time: "21 July 12:56",
  },
];

const RecentSection = () => {
  return (
    <section className="p-4 ml-16 md:ml-64 lg:ml-64">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* recent users section */}
        <motion.div 
         variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                   
        className="lg:col-span-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-4">
          <h3 className="font-semibold text-lg mb-4">Recent Users</h3>
          <div className="divide-y divide-gray-300">
            {users.map((user, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-2"
              >
                <div className="flex items-center gap-4 w-full sm:w-1/3">
                  <FaRegCircleUser className="text-blue-400 h-10 w-10 rounded-full" />
                  <div>
                    <p className="font-medium text-slate-800">{user.name}</p>
                    <p className="text-sm text-slate-500">{user.activity}</p>
                  </div>
                </div>

                <div className="text-sm text-slate-500 self-start sm:self-center">
                  {user.time}
                </div>

                <div className="space-x-2 self-start sm:self-center">
                  <button className="px-3 py-1 text-sm bg-rose-100 text-rose-600 rounded-lg cursor-pointer">
                    Reject
                  </button>
                  <button className="px-3 py-1 text-sm bg-emerald-100 text-emerald-600 rounded-lg cursor-pointer">
                    Approve
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* right panels */}
        <div className="flex flex-col gap-4">
          {/* Upcoming event card */}
          <motion.div 
          variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
          className="bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all p-4 w-full">
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium text-slate-500">
                Upcoming Event
              </p>
              <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                34%
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="mt-4">
                <p className="text-4xl font-bold">45</p>
                <p className="text-sm font-medium text-slate-500">
                  Competitors
                </p>
              </div>
              <MdEventAvailable className="w-10 h-10 text-purple-500 mt-4" />
            </div>
            <p className="text-sm font-medium text-slate-900 mt-2">
              You can participate in event
            </p>
          </motion.div>

          {/* Ideas & Locations card */}
          <motion.div 
          variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView="show"
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all w-full divide-y divide-gray-300 hover:scale-105">
            {/* Row 1: Total Ideas */}
            <div className="flex items-center gap-4 p-4">
              <AiOutlineThunderbolt className="text-green-500 w-8 h-8" />
              <div>
                <p className="text-xl font-semibold">235</p>
                <p className="text-sm text-gray-500 uppercase">Total Ideas</p>
              </div>
            </div>

            {/* Row 2: Total Locations */}
            <div className="flex items-center gap-4 p-4">
              <IoLocationOutline className="text-blue-500 w-8 h-8" />
              <div>
                <p className="text-xl font-semibold">26</p>
                <p className="text-sm text-gray-500 uppercase">
                  Total Locations
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RecentSection;
