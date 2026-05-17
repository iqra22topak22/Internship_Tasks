"use client";

import React from "react";
import { Zap, Monitor, Layout } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Features() {
  const { theme } = useTheme();

  const features = [
    {
      title: "Lightning Fast",
      desc: "Optimized for speed with Edge-runtime delivery and sub-100ms latency.",
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      color: "from-blue-500/20",
    },
    {
      title: "Fully Responsive",
      desc: "Pixel-perfect layouts that adapt seamlessly from mobile to ultra-wide displays.",
      icon: <Monitor className="w-6 h-6 text-purple-500" />,
      color: "from-purple-500/20",
    },
    {
      title: "Effortless Setup",
      desc: "Get up and running in minutes with our intuitive CLI and documentation.",
      icon: <Layout className="w-6 h-6 text-emerald-500" />,
      color: "from-emerald-500/20",
    },
  ];

  return (
    <section id="features" className={`relative py-24 transition-colors duration-500 ${
      theme === "dark" ? "bg-[#030712]" : "bg-gray-50"
    }`}>
      {/* Background Glow */}
      {theme === "dark" && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl bg-blue-600/5 blur-[120px] pointer-events-none" />
      )}

      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-blue-500 uppercase mb-4">
            Capabilities
          </h2>
          <h3 className={`text-4xl md:text-5xl font-bold tracking-tight transition-colors duration-500 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            Built for Modern Developers
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl border p-8 transition-all duration-500 ${
                theme === "dark"
                  ? "border-white/5 bg-white/5 hover:border-white/10 hover:bg-white/[0.07]"
                  : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg"
              }`}
            >
              {/* Animated Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${f.color} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

              <div className="relative z-10">
                <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl border shadow-inner group-hover:scale-110 transition-transform duration-300 ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10"
                    : "bg-gray-100 border-gray-200"
                }`}>
                  {f.icon}
                </div>

                <h4 className={`text-xl font-bold mb-3 transition-colors duration-500 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}>
                  {f.title}
                </h4>

                <p className={`leading-relaxed text-sm transition-colors duration-500 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}>
                  {f.desc}
                </p>
              </div>

              {/* Decorative "Spotlight" light follows the corner */}
              <div className={`absolute -right-4 -bottom-4 h-24 w-24 blur-2xl transition-colors duration-500 ${
                theme === "dark"
                  ? "bg-white/5 group-hover:bg-white/10"
                  : "bg-gray-200 group-hover:bg-gray-300"
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}