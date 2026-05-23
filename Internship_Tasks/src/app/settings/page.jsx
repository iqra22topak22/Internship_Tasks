"use client";

import React, { useState, useEffect } from 'react';
import { 
  Bell, 
  Lock, 
  User, 
  Globe, 
  ChevronRight, 
  Moon, 
  Sun,
  ArrowLeft,
  Zap,
  Settings,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { useTheme } from "@/components/ThemeProvider";

export default function SettingsPage() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const sections = [
    { id: 'profile', label: 'Account Profile', icon: <User size={18} />, color: 'text-blue-500' },
    { id: 'security', label: 'Security & Privacy', icon: <Lock size={18} />, color: 'text-purple-500' },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={18} />, color: 'text-amber-500' },
    { id: 'language', label: 'Language & Region', icon: <Globe size={18} />, color: 'text-emerald-500' },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Live Feed', href: '/realtime-ui' },
    { name: 'UI Docs', href: '/ui-docs' },
    { name: 'Form', href: '/multistep-form' },
    { name: 'Settings', href: '/settings' },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans ${isDarkMode ? 'bg-[#020617] text-white' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 right-0 w-[50%] h-[40%] rounded-full blur-[120px] opacity-10 transition-colors duration-700 ${isDarkMode ? 'bg-indigo-600' : 'bg-blue-200'}`} />
        <div className={`absolute bottom-0 left-0 w-[30%] h-[30%] rounded-full blur-[100px] opacity-5 transition-colors duration-700 ${isDarkMode ? 'bg-blue-500' : 'bg-indigo-200'}`} />
      </div>

      <main className="relative z-10 max-w-3xl mx-auto pt-36 pb-20 px-6">
        
        {/* Header Section */}
        <div className="mb-12">
          <button className="flex items-center gap-3 text-blue-500 mb-6 group" onClick={() => window.history.back()}>
            <div className="p-2 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                <ArrowLeft size={16} />
            </div>
            <span className="text-xs font-black tracking-widest uppercase">Return to Dashboard</span>
          </button>
          
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-6xl font-black tracking-tighter mb-3 italic uppercase">Settings</h1>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-500'} font-medium`}>
                Configure your agentic environment and security.
              </p>
            </div>
            <Settings className={`w-14 h-14 opacity-5 animate-spin-slow ${isDarkMode ? 'text-white' : 'text-black'}`} />
          </div>
        </div>

        <div className="space-y-8">
          
          {/* Appearance Section */}
          <section>
            <h2 className={`text-[10px] font-black uppercase tracking-[0.3em] mb-4 ml-4 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Preference</h2>
            <div className={`p-1 rounded-[2.5rem] border transition-all ${isDarkMode ? 'bg-white/[0.03] border-white/5' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/20'}`}>
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${isDarkMode ? 'bg-slate-800 text-yellow-400 border border-white/5' : 'bg-blue-50 text-blue-600 border border-blue-100'}`}>
                      {isDarkMode ? <Moon size={24} /> : <Sun size={24} />}
                    </div>
                    <div>
                      <h3 className="text-xl font-black italic tracking-tight uppercase">Interface Theme</h3>
                      <p className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                        Set to <span className="text-blue-500 font-black">{isDarkMode ? 'DEEP SPACE' : 'CLOUD WHITE'}</span>
                      </p>
                    </div>
                  </div>

                  <button 
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`relative w-20 h-10 rounded-full transition-all duration-500 p-1 border ${isDarkMode ? 'bg-blue-600 border-blue-400/30' : 'bg-slate-200 border-slate-300'}`}
                  >
                    <div className={`w-7 h-7 rounded-full bg-white shadow-lg transform transition-all duration-500 flex items-center justify-center ${isDarkMode ? 'translate-x-10' : 'translate-x-0'}`}>
                      <div className={`w-1 h-3 rounded-full ${isDarkMode ? 'bg-blue-600' : 'bg-slate-300'}`} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Account Section */}
          <section>
            <h2 className={`text-[10px] font-black uppercase tracking-[0.3em] mb-4 ml-4 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Account</h2>
            <div className={`rounded-[2.5rem] border overflow-hidden transition-all ${isDarkMode ? 'bg-white/[0.03] border-white/5' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/20'}`}>
              {sections.map((item, index) => (
                <button 
                  key={item.id}
                  className={`w-full flex items-center justify-between p-7 transition-all group ${index !== sections.length - 1 ? (isDarkMode ? 'border-b border-white/5' : 'border-b border-slate-100') : ''} hover:bg-blue-500/[0.03] active:scale-[0.99]`}
                >
                  <div className="flex items-center gap-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-opacity-10 transition-transform group-hover:scale-110 ${item.color} ${isDarkMode ? 'bg-current' : 'bg-current'}`}>
                      {item.icon}
                    </div>
                    <span className="text-lg font-black uppercase tracking-tighter italic">{item.label}</span>
                  </div>
                  <div className={`p-2 rounded-full transition-all ${isDarkMode ? 'bg-white/5 group-hover:bg-white/10' : 'bg-slate-100 group-hover:bg-slate-200'}`}>
                    <ChevronRight size={18} className={isDarkMode ? 'text-slate-500' : 'text-slate-400'} />
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Action Footer */}
          <div className="pt-10 flex flex-col items-center gap-6">
            <button className={`flex items-center gap-3 px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.1em] transition-all border shadow-lg ${isDarkMode ? 'border-red-500/20 text-red-500 bg-red-500/5 hover:bg-red-500/10' : 'border-slate-200 text-slate-600 bg-white hover:text-red-600 hover:border-red-100 shadow-slate-200'}`}>
              <LogOut size={18} />
              Sign out from CORE.AI
            </button>
            <p className="text-[10px] font-black text-slate-500 tracking-[0.4em] uppercase opacity-40">System Ver 2.0.4 • Build 2026</p>
          </div>

        </div>
      </main>
    </div>
  );
}