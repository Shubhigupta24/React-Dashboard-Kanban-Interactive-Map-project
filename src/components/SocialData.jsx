import React from "react";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {motion} from 'framer-motion'
import { fadeIn } from "../ultils/motion";
const socials = [
  {
    platform: "Facebook",
    icon: <FaFacebookF />,
    color: "text-blue-500",
    likes: 12281,
    percent: 7.2,
    target: 35098,
    duration: 3539,
  },
  {
    platform: "Twitter",
    icon: <FaXTwitter />,
    color: "text-gray-800", // Fixed invalid class
    likes: 11200,
    percent: 6.2,
    target: 34185,
    duration: 4567,
  },
  {
    platform: "Google+",
    icon: <FaGooglePlusG />,
    color: "text-red-500",
    likes: 10500,
    percent: 5.9,
    target: 25998,
    duration: 7753,
  },
];

const SocialData = () => {
  return (
    <section className="p-4 ml-16 md:ml-64 lg:ml-64">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {socials.map((social, index) => {
          const progressPercent = Math.min(
            (social.likes / social.target) * 100,
            100
          ).toFixed(1);

          return (
            <motion.div
             variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all"
            >
              {/* Top row */}
              <div className="flex justify-between items-center mb-4">
                <div className={`text-3xl ${social.color}`}>{social.icon}</div>
                <div>
                  <p className="text-2xl font-semibold">
                    {social.likes.toLocaleString()}
                  </p>
                  <p className={`text-sm font-medium ${social.color} mt-2`}>
                    +{social.percent}% Total Likes
                  </p>
                </div>
              </div>

              {/* Metrics */}
              <div className="flex justify-between text-slate-600">
                <div className=" pr-4 w-1/2">
                <p className="mb-2">
                  Target:{" "}
                  <span className="font-semibold">
                    {social.target.toLocaleString()}
                  </span>
                </p>
                <div className="h-2 bg-gray-200 rounded-full mt-2">
                  <div
                    className="h-2 rounded-full bg-cyan-400 transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>
              </div>
              <div className="pl-4 w-1/2">
                <p className=" mb-2">
                  Target:{" "}
                  <span className="font-semibold">
                    {social.duration.toLocaleString()}
                  </span>
                </p>
                <div className="h-2 bg-gray-200 rounded-full mt-2">
                  <div
                    className="h-2 rounded-full bg-purple-400 transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>
              </div>
              </div>
              
              
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SocialData;
