"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, X, Command, Sun, Moon, 
  LayoutDashboard, FileText, Component, 
  Activity, Info, Briefcase, Settings, Home
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "About", href: "/about", icon: Info },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Form Wizard", href: "/multistep-form", icon: FileText },
  { name: "UI Library", href: "/ui-docs", icon: Component },
  { name: "Live Feed", href: "/realtime-ui", icon: Activity },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      scrolled ? "py-4" : "py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-between p-2 pl-6 rounded-2xl border transition-all duration-500 ${
          scrolled
            ? theme === "dark"
              ? "bg-slate-900/40 border-white/10 backdrop-blur-2xl shadow-2xl"
              : "bg-white/80 border-gray-200/50 backdrop-blur-2xl shadow-lg"
            : "bg-transparent border-transparent"
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20 group-hover:rotate-[15deg] transition-transform duration-500">
              <Command size={20} strokeWidth={2.5} />
            </div>
            <span className={`font-black tracking-tighter text-xl uppercase italic transition-colors duration-500 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}>
              Nexus<span className="text-blue-600 not-italic">Labs</span>
            </span>
          </Link>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            <Link
              href="/dashboard"
              className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-xl shadow-blue-600/20 transition-all active:scale-95"
            >
              Console <Activity size={14} />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors duration-500 rounded-xl ${
                theme === "dark" 
                  ? "text-slate-400 hover:bg-white/5 hover:text-white" 
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Full Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full px-6 pt-2"
          >
            <div className={`rounded-3xl border p-4 shadow-2xl backdrop-blur-3xl ${
              theme === "dark"
                ? "bg-slate-900/90 border-white/10"
                : "bg-white/95 border-gray-200"
            }`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${
                      pathname === link.href
                        ? "bg-blue-600 text-white"
                        : theme === "dark"
                          ? "hover:bg-white/5 text-slate-300"
                          : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${
                      pathname === link.href
                        ? "bg-white/20"
                        : theme === "dark" ? "bg-white/5" : "bg-gray-200/50"
                    }`}>
                      <link.icon size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-sm uppercase tracking-tight">{link.name}</p>
                      <p className={`text-[10px] uppercase tracking-widest opacity-60`}>Navigate to {link.name}</p>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between px-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">System Status: Active</p>
                <div className="flex gap-2">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                   <div className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}