"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users as UsersIcon, Search, Filter, MoreVertical, 
  MapPin, Plus, Download, ChevronRight, LayoutDashboard,
  FileText, Component, Activity, Command
} from "lucide-react";

const mockUsers = [
  { id: 1, name: "Sarah Chen", email: "sarah.chen@example.com", role: "Admin", status: "Active", location: "San Francisco, CA", avatar: "SC" },
  { id: 2, name: "Marcus Johnson", email: "marcus.j@example.com", role: "Editor", status: "Active", location: "New York, NY", avatar: "MJ" },
  { id: 3, name: "Elena Rodriguez", email: "elena.r@example.com", role: "Viewer", status: "Inactive", location: "Austin, TX", avatar: "ER" },
  { id: 4, name: "James Wilson", email: "james.w@example.com", role: "Editor", status: "Active", location: "Seattle, WA", avatar: "JW" },
  { id: 5, name: "Priya Sharma", email: "priya.s@example.com", role: "Admin", status: "Active", location: "London, UK", avatar: "PS" },
];

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const sidebarLinks = [
    { name: "Nexus Home", href: "/", icon: Command },
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Users", href: "/users", icon: UsersIcon, active: true },
    { name: "Forms", href: "/multistep-form", icon: FileText },
    { name: "UI Docs", href: "/ui-docs", icon: Component },
    { name: "Live Feed", href: "/realtime-ui", icon: Activity },
  ];

  return (
    <div className="flex min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-blue-500/30">
      
      {/* 1. PREMIUM SIDEBAR NAV */}
      <aside className="w-72 border-r border-white/5 bg-[#020617] sticky top-0 h-screen hidden lg:flex flex-col p-6">
        <div className="flex items-center gap-3 mb-12 px-2">
          <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
            <Command size={22} strokeWidth={2.5} />
          </div>
          <span className="font-black tracking-tighter text-xl uppercase italic text-white">
            Nexus<span className="text-blue-600 not-italic">Labs</span>
          </span>
        </div>

        <nav className="space-y-2 flex-1">
          {sidebarLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`flex items-center justify-between p-3 rounded-2xl transition-all group ${
                link.active 
                ? "bg-blue-600/10 text-blue-400 border border-blue-500/20" 
                : "hover:bg-white/5 text-slate-500 hover:text-slate-200"
              }`}
            >
              <div className="flex items-center gap-3">
                <link.icon size={18} className={link.active ? "text-blue-400" : "opacity-50"} />
                <span className="text-[11px] font-black uppercase tracking-widest">{link.name}</span>
              </div>
              {link.active && <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />}
            </Link>
          ))}
        </nav>

        <div className="p-4 bg-white/[0.02] border border-white/5 rounded-[24px]">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2">System Status</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-300 uppercase">Operational</span>
          </div>
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 p-8 lg:p-12 relative">
        {/* Dynamic Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="h-px w-8 bg-blue-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500">Core Network</span>
              </div>
              <h1 className="text-5xl font-black tracking-tighter text-white italic uppercase">
                User <span className="text-blue-600 not-italic">Registry</span>
              </h1>
            </motion.div>

            <div className="flex gap-3">
              <button className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all text-slate-400">
                <Download size={20} />
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-blue-600/20 transition-all active:scale-95">
                <Plus size={16} /> Add Member
              </button>
            </div>
          </header>

          {/* Search & Statistics Bar */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
            <div className="lg:col-span-3 relative group">
              <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Query Registry..."
                className="w-full pl-14 pr-6 py-4 bg-white/[0.02] border border-white/5 rounded-2xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.04] transition-all font-medium"
              />
            </div>
            <button className="flex items-center justify-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition text-slate-300">
              <Filter size={18} />
              <span className="text-[10px] font-black uppercase tracking-widest">Filters</span>
            </button>
          </div>

          {/* Table Container */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/[0.02] border border-white/5 rounded-[32px] overflow-hidden backdrop-blur-sm shadow-2xl"
          >
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/5 bg-white/[0.01]">
                    <th className="text-left px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Identity</th>
                    <th className="text-left px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Access Level</th>
                    <th className="text-left px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Heartbeat</th>
                    <th className="text-left px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Location</th>
                    <th className="px-8 py-5"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {mockUsers.map((user, idx) => (
                    <motion.tr
                      key={user.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="group hover:bg-white/[0.03] transition-colors"
                    >
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-[18px] bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-xs shadow-lg shadow-blue-600/10 group-hover:scale-110 transition-transform">
                            {user.avatar}
                          </div>
                          <div>
                            <p className="font-bold text-white tracking-tight">{user.name}</p>
                            <p className="text-[11px] text-slate-500 font-medium tracking-tight italic">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className={`inline-flex items-center px-3 py-1 rounded-lg border text-[10px] font-black uppercase tracking-widest ${
                          user.role === 'Admin' 
                          ? "bg-blue-500/10 border-blue-500/20 text-blue-400" 
                          : "bg-white/5 border-white/10 text-slate-400"
                        }`}>
                          {user.role}
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${user.status === "Active" ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-slate-700"}`} />
                          <span className={`text-[10px] font-black uppercase tracking-widest ${user.status === "Active" ? "text-emerald-500" : "text-slate-600"}`}>
                            {user.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                          <MapPin size={14} className="opacity-40" />
                          {user.location}
                        </div>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <button className="p-2 hover:bg-white/10 rounded-xl transition-all text-slate-600 hover:text-white">
                          <MoreVertical size={18} />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Table Footer */}
            <div className="p-6 border-t border-white/5 bg-white/[0.01] flex items-center justify-between">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-600">Showing {mockUsers.length} total entries</p>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition">Prev</button>
                <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition">Next</button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}