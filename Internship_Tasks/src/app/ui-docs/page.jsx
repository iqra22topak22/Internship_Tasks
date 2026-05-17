"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Package, MousePointer2, CreditCard, Type, 
  BellRing, Home, LayoutGrid, Layers, Cpu, Zap,
  Sun, Moon // Added Icons
} from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Toast from "@/components/ui/Toast";

export default function DocsPage() {
  const [showToast, setShowToast] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isDark, setIsDark] = useState(true); // Theme State

  // Section Header logic with dynamic colors
  const sectionHeader = (icon, title) => (
    <div className={`flex items-center gap-4 mb-10 border-l-2 ${isDark ? 'border-blue-600' : 'border-blue-500'} pl-6`}>
      <div className={`p-2.5 rounded-xl ${isDark ? 'bg-blue-600/10 text-blue-500 ring-1 ring-blue-500/20' : 'bg-blue-50 text-blue-600 ring-1 ring-blue-200'}`}>
        {icon}
      </div>
      <h2 className={`text-[10px] font-black uppercase tracking-[0.4em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
        {title}
      </h2>
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-500 ease-in-out overflow-x-hidden relative ${isDark ? 'bg-[#020617] text-slate-300' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* 1. FLOATING NEURAL NAVBAR */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-4xl">
        <div className={`backdrop-blur-2xl border rounded-2xl p-1.5 flex items-center justify-between shadow-2xl transition-all ${isDark ? 'bg-slate-900/60 border-white/10 shadow-black/50' : 'bg-white/70 border-slate-200 shadow-slate-200/50'}`}>
          <div className="flex items-center gap-1">
            <Link href="/" className={`p-2.5 rounded-xl transition-all ${isDark ? 'hover:bg-white/5 text-slate-400 hover:text-white' : 'hover:bg-slate-100 text-slate-500 hover:text-slate-900'}`}>
              <Home size={18} />
            </Link>
            <div className={`h-4 w-[1px] mx-1 ${isDark ? 'bg-white/10' : 'bg-slate-200'}`} />
            <Link href="/dashboard" className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${isDark ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}>Dashboard</Link>
            <Link href="/multistep-form" className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${isDark ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}>Forms</Link>
          </div>
          
          <div className="flex items-center gap-4 pr-2">
            {/* 🌙 THEME TOGGLE SWITCH */}
            <button 
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-lg transition-all ${isDark ? 'bg-white/5 text-yellow-400 hover:bg-white/10' : 'bg-slate-100 text-indigo-600 hover:bg-slate-200'}`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <div className="hidden sm:flex items-center gap-2 text-blue-500">
               <Zap size={14} fill="currentColor" />
               <span className="text-[10px] font-black uppercase tracking-widest">v1.0</span>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. ATMOSPHERIC BACKGROUND (Updated for Light Mode) */}
      <div className="fixed inset-0 pointer-events-none">
        <div className={`absolute top-[-20%] left-[-10%] h-[800px] w-[800px] rounded-full blur-[150px] transition-opacity duration-1000 ${isDark ? 'bg-blue-600/[0.03] opacity-100' : 'bg-blue-400/[0.08] opacity-50'}`} />
        <div className={`absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full blur-[120px] transition-opacity duration-1000 ${isDark ? 'bg-indigo-600/[0.03] opacity-100' : 'bg-indigo-400/[0.08] opacity-50'}`} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        
        {/* 3. HERO SECTION */}
        <header className="mb-32 relative">
          <motion.div className="flex items-center gap-3 text-blue-500 font-bold text-[10px] uppercase tracking-[0.5em] mb-6">
            <Layers size={14} />
            <span>Foundations & Elements</span>
          </motion.div>
          
          <h1 className={`text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] mb-8 uppercase italic transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Core <span className="text-blue-600 not-italic">UI</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <p className={`text-lg md:text-xl font-medium leading-relaxed tracking-tight border-l pl-8 transition-colors ${isDark ? 'text-slate-500 border-white/10' : 'text-slate-400 border-slate-200'}`}>
              A high-fidelity design system engineered for <span className={isDark ? 'text-white' : 'text-slate-800'}>Agentic AI Workflows</span>.
            </p>
          </div>
        </header>

        {/* 4. COMPONENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <aside className="hidden lg:block lg:col-span-3 sticky top-40 h-fit space-y-8">
             <div className="space-y-4">
               <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Categories</p>
               <nav className="flex flex-col gap-2">
                 {['Interactions', 'Containers', 'Inputs'].map((nav) => (
                   <button key={nav} className={`text-left py-2 px-4 rounded-xl transition-all text-sm font-medium ${isDark ? 'text-slate-400 hover:bg-white/5 hover:text-white' : 'text-slate-500 hover:bg-slate-200/50 hover:text-slate-900'}`}>
                     {nav}
                   </button>
                 ))}
               </nav>
             </div>
          </aside>

          <div className="lg:col-span-9 space-y-32">
            {/* BUTTONS */}
            <section>
              {sectionHeader(<MousePointer2 size={18} />, "Interactive Elements")}
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 p-8 rounded-[40px] border backdrop-blur-xl transition-all ${isDark ? 'bg-slate-900/40 border-white/5' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/40'}`}>
                <Button text="Primary Action" variant="primary" />
                <Button text="Secondary" variant="secondary" />
                <Button text="Danger Zone" variant="danger" />
                <Button text="Ghost Interface" variant="ghost" />
              </div>
            </section>

            {/* CARDS */}
            <section>
              {sectionHeader(<CreditCard size={18} />, "Data Containers")}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card 
                  title="RAG Pipeline" 
                  description="Retrieval-Augmented Generation performance metrics." 
                  theme={isDark ? 'dark' : 'light'} // Pass theme prop if your Card supports it
                />
                <Card 
                  title="Agentic Reasoner" 
                  description="Heuristic decision-making logs for AI agents." 
                  theme={isDark ? 'dark' : 'light'}
                />
              </div>
            </section>
          </div>
        </div>

        {/* 5. FOOTER */}
        <footer className={`mt-40 pt-16 border-t flex flex-col md:flex-row justify-between items-center gap-8 ${isDark ? 'border-white/5' : 'border-slate-200'}`}>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs italic">IM</div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
              Handcrafted by Iqra Mushtaq • 2026
            </p>
          </div>
        </footer>
      </div>

      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        message="System: Library Sync Complete 🚀"
        type="success"
      />
    </div>
  );
}