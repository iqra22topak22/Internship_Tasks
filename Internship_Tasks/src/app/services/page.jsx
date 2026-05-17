"use client";

import React, { useState, useEffect } from 'react';
import { Layout, Code, Monitor, Zap, Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';

export default function ServicesPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle theme class on the body for global styling
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

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

  const navLinks = [
   { name: 'About', href: '/about' },
    { name: 'Settings', href: '/settings' },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Form", href: "/multistep-form" },
    { name: "UI Docs", href: "/ui-docs" },
    { name: "Live Feed", href: "/realtime-ui" },
   
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-[#020617] text-white' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 transition-colors duration-700 ${isDarkMode ? 'bg-blue-600' : 'bg-blue-300'}`} />
        <div className={`absolute bottom-[10%] -right-[10%] w-[30%] h-[30%] rounded-full blur-[120px] opacity-20 transition-colors duration-700 ${isDarkMode ? 'bg-purple-600' : 'bg-purple-300'}`} />
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 border-b backdrop-blur-xl transition-colors duration-300 ${isDarkMode ? 'border-white/5 bg-[#020617]/70' : 'border-slate-200 bg-white/70'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:rotate-12 transition-transform">
              <Zap className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase">
              Core<span className="text-blue-500">.</span>AI
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-semibold transition-colors ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-blue-600'}`}
              >
                {link.name}
              </a>
            ))}
            
            <div className="h-6 w-[1px] bg-slate-300 dark:bg-slate-700 mx-2" />

            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full transition-all ${isDarkMode ? 'bg-slate-800 text-yellow-400' : 'bg-slate-200 text-slate-600'}`}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button className="px-6 py-2.5 rounded-full bg-blue-600 text-white text-sm font-bold hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95">
              Let's Talk
            </button>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className={`md:hidden absolute top-20 w-full p-6 space-y-4 border-b animate-in slide-in-from-top-5 duration-300 ${isDarkMode ? 'bg-[#020617] border-white/5' : 'bg-white border-slate-200'}`}>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="block text-lg font-medium">{link.name}</a>
            ))}
            <button 
               onClick={() => setIsDarkMode(!isDarkMode)}
               className="flex items-center gap-2 text-lg font-medium"
            >
              {isDarkMode ? <><Sun size={20}/> Light Mode</> : <><Moon size={20}/> Dark Mode</>}
            </button>
          </div>
        )}
      </nav>

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