"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Bell, Trash2, Zap, Cpu, Clock, 
  LayoutGrid, Home, Settings, Radio,
  Sun, Moon
} from "lucide-react";

export default function RealtimeUI() {
  const [notifications, setNotifications] = useState([]);
  const [count, setCount] = useState(1);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const newEntry = {
        id: Date.now(),
        message: `Protocol Sync ${count}: Operational data packet received.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        priority: count % 5 === 0 ? "Critical" : "Standard"
      };

      setNotifications((prev) => [newEntry, ...prev].slice(0, 6));
      setCount((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [count]);

  const clearNotifications = () => {
    setNotifications([]);
    setCount(1);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center transition-colors duration-500 selection:bg-blue-500/30 overflow-x-hidden relative ${isDark ? 'bg-[#020617] text-slate-300' : 'bg-slate-50 text-slate-600'}`}>
      
      {/* 1. FLOATING GLASS NAVBAR */}
      <nav className="fixed top-6 z-[100] px-4 w-full max-w-xl">
        <div className={`backdrop-blur-xl border rounded-2xl p-1.5 flex items-center justify-between shadow-2xl transition-all ${isDark ? 'bg-slate-900/40 border-white/10' : 'bg-white/80 border-slate-200 shadow-slate-200/50'}`}>
          <div className="flex items-center gap-1">
            <Link href="/" className={`p-2.5 rounded-xl transition-colors ${isDark ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}><Home size={18} /></Link>
            <div className={`h-4 w-[1px] mx-1 ${isDark ? 'bg-white/10' : 'bg-slate-200'}`} />
            <Link href="/dashboard" className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${isDark ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}>Dashboard</Link>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-xl transition-all ${isDark ? 'text-yellow-400 hover:bg-white/5' : 'text-indigo-600 hover:bg-slate-100'}`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link href="/realtime-ui" className="bg-blue-600 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest text-white shadow-lg shadow-blue-600/20">Live</Link>
          </div>
        </div>
      </nav>

      {/* 2. ATMOSPHERIC ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none">
        <div className={`absolute top-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full blur-[120px] transition-opacity duration-1000 ${isDark ? 'bg-blue-600/[0.03]' : 'bg-blue-400/[0.08]'}`} />
        <div className={`absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full blur-[100px] transition-opacity duration-1000 ${isDark ? 'bg-indigo-600/[0.03]' : 'bg-indigo-400/[0.08]'}`} />
      </div>

      {/* 3. MAIN MONITORING HUB */}
      <main className="w-full max-w-2xl relative z-10 pt-32 pb-20 px-6">
        
        <header className="flex items-end justify-between mb-12">
          <div className="space-y-3">
            <motion.div 
              initial={{ opacity: 0, x: -10 }} 
              animate={{ opacity: 1, x: 0 }}
              className={`flex items-center gap-2 font-bold text-[10px] uppercase tracking-[0.5em] ${isDark ? 'text-blue-500' : 'text-blue-600'}`}
            >
              <Radio size={14} className="animate-pulse" />
              <span>Frequency 142.8 MHz</span>
            </motion.div>
            <h1 className={`text-5xl font-black tracking-tighter uppercase leading-none transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Live <span className={`${isDark ? 'text-slate-600' : 'text-slate-400'} font-thin italic`}>Stream</span>
            </h1>
          </div>

          <button 
            onClick={clearNotifications}
            className={`group flex items-center gap-2 px-4 py-2 rounded-xl border transition-all active:scale-95 ${
              isDark 
              ? 'bg-white/5 border-white/10 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 hover:border-rose-500/20' 
              : 'bg-white border-slate-200 text-slate-500 hover:text-rose-600 hover:bg-rose-50 hover:border-rose-200 shadow-sm'
            }`}
          >
            <Trash2 size={14} className="group-hover:rotate-12 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Purge</span>
          </button>
        </header>

        {/* 4. NOTIFICATION LIST */}
        <div className="space-y-4 relative">
          <div className={`absolute left-6 top-0 bottom-0 w-[1px] ${isDark ? 'bg-gradient-to-b from-blue-500/20 via-white/5 to-transparent' : 'bg-gradient-to-b from-blue-500/30 via-slate-200 to-transparent'}`} />

          <AnimatePresence mode="popLayout">
            {notifications.length === 0 ? (
              <motion.div 
                key="empty"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`py-32 flex flex-col items-center justify-center rounded-[40px] border backdrop-blur-sm transition-all ${isDark ? 'border-white/5 bg-white/[0.01]' : 'border-slate-200 bg-white/50'}`}
              >
                <div className={`p-6 rounded-full border mb-6 shadow-inner transition-all ${isDark ? 'bg-slate-900 border-white/5 text-slate-800' : 'bg-slate-100 border-slate-200 text-slate-300'}`}>
                  <Cpu size={48} strokeWidth={1} />
                </div>
                <p className={`text-[10px] font-bold tracking-[0.4em] uppercase ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>Synchronizing Neural Link...</p>
              </motion.div>
            ) : (
              notifications.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  className="group relative ml-4 pl-10"
                >
                  {/* Timeline Node */}
                  <div className={`absolute left-[7px] top-7 w-2.5 h-2.5 rounded-full border-2 z-20 transition-all ${
                    isDark ? 'border-[#020617]' : 'border-slate-50'
                  } ${item.priority === 'Critical' ? 'bg-rose-500' : 'bg-blue-500'}`} />

                  <div className={`relative overflow-hidden rounded-3xl border p-6 backdrop-blur-xl transition-all shadow-xl group-hover:-translate-y-1 ${
                    isDark ? 'bg-slate-900/40 border-white/5 hover:border-white/20' : 'bg-white border-slate-200 hover:border-blue-200 shadow-slate-200/50'
                  }`}>
                    <div className="flex items-start gap-5">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-colors ${
                        item.priority === 'Critical' 
                        ? (isDark ? 'bg-rose-500/10 text-rose-500' : 'bg-rose-50 text-rose-600') 
                        : (isDark ? 'bg-blue-600/10 text-blue-500' : 'bg-blue-50 text-blue-600')
                      }`}>
                        {item.priority === 'Critical' ? <Zap size={20} /> : <Bell size={20} />}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className={`text-[9px] font-black uppercase tracking-[0.2em] ${
                             item.priority === 'Critical' ? 'text-rose-500' : 'text-blue-500'
                          }`}>
                            {item.priority} Packet
                          </span>
                          <span className={`text-[10px] font-mono ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>{item.timestamp}</span>
                        </div>
                        <p className={`text-sm font-semibold transition-colors tracking-tight ${isDark ? 'text-slate-200 group-hover:text-white' : 'text-slate-700 group-hover:text-slate-950'}`}>
                          {item.message}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* 5. DIAGNOSTIC FOOTER */}
        <footer className="mt-16 flex items-center justify-between px-6">
          <div className="flex gap-8">
            <DiagnosticItem label="Uptime" value="99.98%" isDark={isDark} />
            <DiagnosticItem label="Latency" value="12ms" isDark={isDark} />
            <DiagnosticItem label="Load" value="0.02" isDark={isDark} />
          </div>
          <div className={`flex items-center gap-2 px-3 py-1 rounded-full border transition-all ${isDark ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-emerald-50 border-emerald-200'}`}>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className={`text-[9px] font-bold uppercase tracking-widest ${isDark ? 'text-emerald-500/80' : 'text-emerald-600'}`}>Master Node</span>
          </div>
        </footer>
      </main>
    </div>
  );
}

function DiagnosticItem({ label, value, isDark }) {
  return (
    <div className="flex flex-col gap-1">
      <span className={`text-[8px] font-black uppercase tracking-widest ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>{label}</span>
      <span className={`text-[10px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{value}</span>
    </div>
  );
}