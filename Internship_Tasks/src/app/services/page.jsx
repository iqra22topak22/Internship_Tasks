"use client";

import React, { useState, useEffect } from 'react';
import { Layout, Code, Monitor, Zap, Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { useTheme } from "@/components/ThemeProvider";

export default function ServicesPage() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const services = [
    {
      title: "Web Development",
      description: "Building high-performance, scalable web apps with the latest frameworks.",
      icon: <Code className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "UI/UX Design",
      description: "Crafting visually stunning and user-centric interfaces with premium aesthetics.",
      icon: <Layout className="w-6 h-6 text-purple-500" />,
    },
    {
      title: "Dashboard Development",
      description: "Complex data visualization and management tools built for clarity and speed.",
      icon: <Monitor className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Real-Time Applications",
      description: "Low-latency systems powered by WebSockets and live data synchronization.",
      icon: <Zap className="w-6 h-6 text-amber-500" />,
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-[#020617] text-white' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Background Ambient Glows */}

      <main className="relative z-10 max-w-6xl mx-auto pt-40 pb-20 px-6">
        <div className="text-center mb-24 space-y-8">
          <div className="inline-flex items-center">
            <span className={`px-4 py-1 text-xs font-bold tracking-[0.2em] uppercase rounded-full border ${isDarkMode ? 'text-blue-400 bg-blue-400/10 border-blue-400/20' : 'text-blue-600 bg-blue-50 border-blue-200'}`}>
              Our Expertise
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight">
            Premium <br />
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDarkMode ? 'from-white via-blue-200 to-slate-500' : 'from-slate-900 via-blue-600 to-indigo-500'}`}>
              Solutions.
            </span>
          </h1>
          <p className={`max-w-xl mx-auto text-lg md:text-xl font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            We transform complex ideas into digital realities with precision engineering and world-class design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-10 rounded-[2.5rem] border transition-all duration-500 cursor-pointer ${
                isDarkMode 
                ? 'border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10' 
                : 'border-slate-200 bg-white hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200'
              }`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border transition-all duration-500 group-hover:-translate-y-1 ${
                isDarkMode ? 'bg-slate-900 border-white/10 group-hover:border-blue-500' : 'bg-slate-50 border-slate-100 group-hover:border-blue-300'
              }`}>
                {service.icon}
              </div>

              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                {service.title}
                <ArrowRight className="w-5 h-5 text-blue-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </h2>
              
              <p className={`leading-relaxed text-lg font-medium transition-colors ${isDarkMode ? 'text-slate-400 group-hover:text-slate-300' : 'text-slate-500 group-hover:text-slate-700'}`}>
                {service.description}
              </p>

              {/* Animated bottom bar */}
              <div className="absolute bottom-8 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}