"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Command, LayoutDashboard, FileText, Component,
  Activity, Menu, ArrowRight, ShieldCheck, Beaker
} from "lucide-react";

import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "@/components/ThemeProvider";

// Section Components
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

// UI Components
import Modal from "@/components/Modal";
import Sidebar from "@/components/Sidebar";
import Accordion from "@/components/Accordion";

export default function Home() {
  const { theme } = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Form", href: "/multistep-form", icon: FileText },
    { name: "UI Docs", href: "/ui-docs", icon: Component },
    { name: "Live Feed", href: "/realtime-ui", icon: Activity },
    { name: "Sandbox", href: "#", icon: Beaker, isTrigger: true },
  ];

  return (
    <div className={`min-h-screen selection:bg-blue-500/30 font-sans transition-colors duration-500 ${
      theme === "dark"
        ? "bg-[#020617] text-slate-300"
        : "bg-gray-50 text-gray-800"
    }`}>
      
      {/* 1. ADAPTIVE FLOATING NAV */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? "py-4" : "py-8"
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`flex items-center justify-between p-2 pl-6 rounded-[24px] border transition-all duration-500 ${
            scrolled
              ? theme === "dark"
                ? "bg-slate-900/40 border-white/10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                : "bg-white/80 border-gray-200/50 backdrop-blur-2xl shadow-lg"
              : "bg-transparent border-transparent"
          }`}>
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20 group-hover:rotate-[15deg] transition-transform duration-500">
                <Command size={20} strokeWidth={2.5} />
              </div>
              <span className={`font-black tracking-tighter text-xl uppercase italic ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}>
                Nexus<span className="text-blue-600 not-italic">Labs</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                link.isTrigger ? (
                  <button 
                    key={link.name}
                    onClick={() => setSidebarOpen(true)}
                    className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all flex items-center gap-2 border border-transparent ${
                      theme === "dark"
                      ? "hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/20"
                      : "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
                    }`}
                  >
                    <link.icon size={13} />
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all flex items-center gap-2 ${
                      theme === "dark"
                        ? "hover:bg-white/5 hover:text-white text-slate-400"
                        : "hover:bg-gray-100 hover:text-gray-900 text-gray-600"
                    }`}
                  >
                    <link.icon size={13} className="opacity-50" />
                    {link.name}
                  </Link>
                )
              ))}
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => setModalOpen(true)}
                className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-xl shadow-blue-600/20 transition-all active:scale-95"
              >
                Launch Protocol <ArrowRight size={14} />
              </button>

              <button onClick={() => setSidebarOpen(true)} className={`lg:hidden p-2 transition-colors duration-500 ${
                  theme === "dark" ? "text-slate-400" : "text-gray-600"
                }`}>
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. MAIN CONTENT AREA */}
      <main className="relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[700px] pointer-events-none overflow-hidden">
          <div className={`absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[120px] transition-all duration-1000 ${
            theme === "dark" ? "bg-blue-600/10" : "bg-blue-400/20"
          }`} />
        </div>

        <section className="relative z-10 pt-44">
          <Hero theme={theme} />
        </section>

        {/* 3. INTERACTIVE CONTROL HUB */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`p-1 rounded-[40px] border transition-colors duration-500 ${
              theme === "dark"
                ? "bg-white/[0.02] border-white/5 shadow-2xl shadow-black/20"
                : "bg-white border-gray-200 shadow-xl shadow-gray-200/50"
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-6 p-8 md:px-12">
              <div className="flex items-center gap-4">
                <div className={`p-4 rounded-2xl transition-colors duration-500 ${
                  theme === "dark"
                    ? "bg-blue-500/10 text-blue-400"
                    : "bg-blue-50 text-blue-600"
                }`}>
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <h3 className={`font-black uppercase italic tracking-tighter text-xl transition-colors duration-500 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}>System Integration</h3>
                  <p className={`text-[10px] font-black uppercase tracking-widest transition-colors duration-500 ${
                    theme === "dark" ? "opacity-40" : "opacity-60"
                  }`}>Ready for Agentic Deployment</p>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                    theme === "dark"
                      ? "bg-white/5 border-white/10 hover:bg-white/10 text-white"
                      : "bg-gray-100 border-gray-200 hover:bg-gray-200 text-gray-800"
                  }`}
                >
                  Configure Agents
                </button>
                <button
                  onClick={() => setSidebarOpen(true)}
                  className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border shadow-lg transition-transform active:scale-95 ${
                    theme === "dark"
                    ? "bg-blue-500/10 border-blue-500/20 text-blue-400 hover:bg-blue-500/20 shadow-blue-500/5"
                    : "bg-blue-600 border-blue-600 text-white hover:bg-blue-700 shadow-blue-600/20"
                  }`}
                >
                  Open Sandbox
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <Features theme={theme} />
        <Testimonials theme={theme} />

        {/* 4. FAQ SECTION */}
        <section className="py-32 relative overflow-hidden">
          <div className="max-w-3xl mx-auto px-6">
            <header className="text-center mb-16">
              <span className={`font-black text-[10px] uppercase tracking-[0.4em] mb-4 block ${
                theme === "dark" ? "text-blue-500" : "text-blue-600"
              }`}>Knowledge Base</span>
              <h2 className={`text-4xl md:text-5xl font-black tracking-tighter mb-4 italic uppercase transition-colors ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}>
                Nexus <span className="text-blue-600 not-italic">Briefing</span>
              </h2>
            </header>
            
            <div className={`rounded-[40px] border p-2 backdrop-blur-xl transition-all ${
              theme === "dark" ? "bg-slate-900/40 border-white/5" : "bg-white border-gray-200 shadow-sm"
            }`}>
              <Accordion theme={theme} />
            </div>
          </div>
        </section>
      </main>

      <Footer theme={theme} />

      {/* 5. MODAL & OVERLAYS */}
      <AnimatePresence>
        {modalOpen && (
          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} theme={theme} />
        )}
      </AnimatePresence>
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} theme={theme} />
    </div>
  );
}