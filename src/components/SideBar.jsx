import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import {motion} from 'framer-motion'
import { fadeIn } from '../ultils/motion';
const SideBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#dashboard");

  const navLinks = [
    { href: "#dashboard", label: "Dashboard" },
    { href: "#kanban", label: "Kanban" },
    { href: "#map", label: "Map" },
  ];

  return (
    <>
      {/* Mobile Toggle Button - Only visible on small screens */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white bg-slate-800 p-2 rounded"
        >
          {isMenuOpen ? <HiX className="size-6" /> : <HiMenu className="size-6" />}
        </button>
      </div>

      {/* Sidebar - Always visible on md and above */}
      <motion.nav 
       variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
      className="fixed top-0 left-0 w-64 h-full bg-slate-800/90 text-white z-40 border-r border-slate-700 shadow-sm rounded-r-lg hidden md:block">
        <div className="flex flex-col items-center justify-start px-4 pt-6 gap-8">
          <h1 className="text-xl font-bold text-white border-b border-slate-600 pb-4 w-full text-center">
            My Dashboard
          </h1>

          <div className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`text-xl font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0
                    hover:after:w-full after:bg-cyan-400 after:transition-all
                     ${
                       activeLink === link.href
                         ? "text-cyan-400 after:w-full"
                         : "text-white hover:text-cyan-400"
                     }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar - visible only when isMenuOpen */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-64 h-full bg-slate-800/90 text-white z-40 border-r border-slate-700 shadow-sm rounded-r-lg">
          <div className="flex flex-col items-center justify-start px-4 pt-6 gap-8">
            <h1 className="text-xl font-bold text-white border-b border-slate-600 pb-4 w-full text-center">
              My Dashboard
            </h1>

            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.href);
                    setIsMenuOpen(false);
                  }}
                  className={`text-lg font-medium ${
                    activeLink === link.href
                      ? "text-cyan-400"
                      : "text-white hover:text-cyan-400"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
