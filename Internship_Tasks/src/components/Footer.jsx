"use client";

import React from "react";
import { ArrowUp, Mail, Globe, Cpu } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Footer() {
  const { theme } = useTheme();

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className={`relative pt-24 pb-12 overflow-hidden transition-colors duration-500 ${
      theme === "dark" ? "bg-[#030712]" : "bg-gray-100"
    }`}>
      {/* Premium Gradient Divider */}
      <div className={`absolute top-0 left-0 w-full h-[1px] transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
          : "bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"
      }`} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <h2 className={`text-2xl font-bold bg-clip-text text-transparent mb-6 transition-colors duration-500 ${
              theme === "dark"
                ? "bg-gradient-to-r from-white to-white/50"
                : "bg-gradient-to-r from-gray-900 to-gray-600"
            }`}>
              Iqra.dev
            </h2>
            <p className={`text-sm leading-relaxed mb-6 transition-colors duration-500 ${
              theme === "dark" ? "text-gray-500" : "text-gray-500"
            }`}>
              Crafting high-performance Agentic AI solutions and premium web experiences.
            </p>
            <div className="flex gap-4">
              <div className={`p-2 rounded-lg border transition-colors duration-500 ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 text-gray-400"
                  : "bg-gray-200 border-gray-300 text-gray-600"
              }`}>
                <Cpu size={18} />
              </div>
              <div className={`p-2 rounded-lg border transition-colors duration-500 ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 text-gray-400"
                  : "bg-gray-200 border-gray-300 text-gray-600"
              }`}>
                <Globe size={18} />
              </div>
              <div className={`p-2 rounded-lg border transition-colors duration-500 ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 text-gray-400"
                  : "bg-gray-200 border-gray-300 text-gray-600"
              }`}>
                <Mail size={18} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-semibold mb-6 transition-colors duration-500 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>Navigation</h4>
            <ul className={`space-y-4 text-sm transition-colors duration-500 ${
              theme === "dark" ? "text-gray-500" : "text-gray-600"
            }`}>
              <li className="hover:text-blue-500 transition-colors cursor-pointer">Projects</li>
              <li className="hover:text-blue-500 transition-colors cursor-pointer">Skills</li>
              <li className="hover:text-blue-500 transition-colors cursor-pointer">Experience</li>
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold mb-6 transition-colors duration-500 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>Expertise</h4>
            <ul className={`space-y-4 text-sm transition-colors duration-500 ${
              theme === "dark" ? "text-gray-500" : "text-gray-600"
            }`}>
              <li className="hover:text-blue-500 transition-colors cursor-pointer">Next.js 16</li>
              <li className="hover:text-blue-500 transition-colors cursor-pointer">Agentic AI</li>
              <li className="hover:text-blue-500 transition-colors cursor-pointer">FastAPI</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className={`font-semibold mb-6 transition-colors duration-500 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>Newsletter</h4>
            <div className={`flex items-center rounded-xl border p-1 transition-all duration-500 ${
              theme === "dark"
                ? "bg-white/5 border-white/10 focus-within:border-blue-500/50"
                : "bg-white border-gray-200 focus-within:border-blue-500"
            }`}>
              <input
                type="email"
                placeholder="Your email"
                className={`bg-transparent border-none text-sm px-3 py-2 outline-none w-full transition-colors duration-500 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              />
              <button className="bg-blue-600 hover:bg-blue-500 text-white text-xs px-4 py-2 rounded-lg font-medium transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`flex flex-col md:flex-row justify-between items-center pt-8 border-t transition-colors duration-500 ${
          theme === "dark" ? "border-white/5" : "border-gray-200"
        }`}>
          <p className={`text-xs mb-4 md:mb-0 uppercase tracking-widest transition-colors duration-500 ${
            theme === "dark" ? "text-gray-600" : "text-gray-400"
          }`}>
            © 2026 Iqra Mushtaq | Built with Precision
          </p>

          <button
            onClick={scrollToTop}
            className={`group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${
              theme === "dark"
                ? "text-gray-400 hover:text-white"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Scroll to Top
            <ArrowUp size={14} className="transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}