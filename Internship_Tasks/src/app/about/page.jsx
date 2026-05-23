"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { useTheme } from "@/components/ThemeProvider";
import {
  Sparkles,
  Rocket,
  ShieldCheck,
  Code2,
  Cpu,
  Menu,
  X,
  Zap,
  Moon,
  Sun,
  ArrowRight,
  LayoutDashboard, // Added missing import
  FileText,        // Added missing import
  Component,       // Added missing import
  Activity         // Added missing import
} from "lucide-react";

export default function AboutPage() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const techStack = [
    { name: "Next.js 14", desc: "High-performance SSR", icon: <Rocket size={20} /> },
    { name: "TypeScript", desc: "Type-safe architecture", icon: <Code2 size={20} /> },
    { name: "Tailwind CSS", desc: "Modern UI system", icon: <Sparkles size={20} /> },
    { name: "Agentic AI", desc: "Smart AI experiences", icon: <Cpu size={20} /> },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Settings', href: '/settings' },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Form", href: "/multistep-form" },
    { name: "UI Docs", href: "/ui-docs" },
    { name: "Live Feed", href: "/realtime-ui" },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans ${isDarkMode ? 'bg-[#020617] text-white' : 'bg-slate-50 text-slate-900'}`}>
      
      <section className="relative overflow-hidden px-6 pt-40 pb-20 md:px-10 lg:px-20">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[160px] pointer-events-none" />
        
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            
            <div className="space-y-8 text-center lg:text-left">
              <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold tracking-widest uppercase backdrop-blur-xl ${isDarkMode ? 'border-blue-500/20 bg-blue-500/10 text-blue-400' : 'border-blue-200 bg-blue-50 text-blue-600'}`}>
                <ShieldCheck size={14} /> Innovation Driven Agency
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl font-black leading-tight sm:text-6xl xl:text-7xl">
                  Crafting The <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">Digital Future</span>
                </h1>
                <p className={`mx-auto max-w-2xl text-lg leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-slate-500'} lg:mx-0 font-medium`}>
                  Premium experiences built with <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>Next.js 14</span>.
                </p>
              </div>

              <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
                <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-500">
                  Explore More <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Right Card */}
            <div className="relative group">
              <div className={`relative overflow-hidden rounded-[2.5rem] border p-8 backdrop-blur-2xl ${isDarkMode ? 'border-white/10 bg-[#0a0f29]/80' : 'border-slate-200 bg-white/90 shadow-xl'}`}>
                <h2 className="text-3xl font-black mb-8 italic">Core Stack</h2>
                <div className="space-y-4">
                  {techStack.map((tech, index) => (
                    <div key={index} className={`flex items-center justify-between rounded-2xl border p-5 ${isDarkMode ? 'border-white/5 bg-white/[0.03]' : 'border-slate-100 bg-slate-50'}`}>
                      <div className="flex items-center gap-4">
                        <div className="text-blue-500">{tech.icon}</div>
                        <div>
                          <h3 className="font-bold">{tech.name}</h3>
                          <p className="text-xs opacity-50">{tech.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}