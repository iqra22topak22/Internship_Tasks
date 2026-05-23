"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Users, Settings, ChevronRight, LayoutGrid } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function Sidebar() {
  const [active, setActive] = useState("Home");
  const { theme } = useTheme();

  const menuItems = [
    { name: "Home", icon: <Home size={20} />, href: "/" },
    { name: "Users", icon: <Users size={20} />, href: "/users" },
    { name: "Settings", icon: <Settings size={20} />, href: "/ui-docs" },
  ];

  return (
    <div className={`h-screen w-72 border-r p-6 flex flex-col transition-colors duration-500 ${
      theme === "dark" 
        ? "bg-[#030712] border-white/5" 
        : "bg-white border-gray-200"
    }`}>
      {/* Brand Logo Area removed as it's handled by global Navbar */}

      {/* Navigation List */}
      <nav className="flex-1 space-y-2 pt-12">
        {menuItems.map((item) => {
          const isActive = active === item.name;

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActive(item.name)}
              className="relative group block"
            >
              {/* Active Background Glow */}
              {isActive && (
                <motion.div
                  layoutId="activePill"
                  className={`absolute inset-0 rounded-xl border transition-all ${
                    theme === "dark" 
                      ? "bg-blue-600/10 border-blue-500/20" 
                      : "bg-blue-50 border-blue-200"
                  }`}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              <div className={`relative flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 ${
                isActive 
                  ? theme === "dark" ? "text-white" : "text-blue-600"
                  : theme === "dark" ? "text-gray-500 hover:text-gray-300 hover:bg-white/5" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
              }`}>
                <div className="flex items-center gap-4">
                  <span className={`transition-colors duration-300 ${isActive ? "text-blue-500" : "group-hover:text-gray-300"}`}>
                    {item.icon}
                  </span>
                  <span className={`font-medium tracking-wide text-sm ${isActive ? "font-bold" : ""}`}>{item.name}</span>
                </div>

                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <ChevronRight size={14} className="text-blue-500" />
                  </motion.div>
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Footer / User Profile Area */}
      <div className={`mt-auto pt-6 border-t ${theme === "dark" ? "border-white/5" : "border-gray-100"}`}>
        <Link href="/users" className={`flex items-center gap-3 p-2 rounded-2xl transition-colors cursor-pointer group ${
          theme === "dark" ? "hover:bg-white/5" : "hover:bg-gray-100"
        }`}>
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 p-[2px]">
            <div className={`h-full w-full rounded-full flex items-center justify-center ${theme === "dark" ? "bg-[#030712]" : "bg-white"}`}>
              <span className={`text-xs font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>IM</span>
            </div>
          </div>
          <div className="flex-1">
            <p className={`text-sm font-bold leading-none ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Iqra Mushtaq</p>
            <p className="text-[11px] text-gray-500 mt-1 font-medium">Pro Plan</p>
          </div>
          <Settings size={16} className="text-gray-600 group-hover:rotate-90 transition-transform duration-500" />
        </Link>
      </div>
    </div>
  );
}