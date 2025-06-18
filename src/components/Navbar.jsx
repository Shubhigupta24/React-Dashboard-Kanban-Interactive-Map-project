import React from 'react';
import {motion} from 'framer-motion'
import { fadeIn } from '../ultils/motion';
const Navbar = () => {
  return (
    <motion.nav 
    variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    className="fixed top-0 left-0 w-full z-20 pl-4">
      <div className="ml-16 md:ml-64 mr-4 bg-white/90 backdrop-blur-sm border-b border-slate-300 shadow-sm p-4 rounded-b-lg">
        <h1 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-4 relative inline-block group cursor-pointer">
          Welcome back, User!
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
        </h1>
      </div>
    </motion.nav>
  );
};

export default Navbar;
