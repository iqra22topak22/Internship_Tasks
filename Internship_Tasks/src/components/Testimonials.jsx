"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";

export default function Testimonials() {
  const { theme } = useTheme();

  const testimonials = [
    {
      name: "Ali Raza",
      role: "Software Engineer",
      msg: "The performance is unparalleled. It transformed how our team builds and deploys production-ready interfaces.",
      initials: "AR",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Sara Khan",
      role: "Product Designer",
      msg: "Absolutely loved the design language. The attention to detail in the components is something you rarely see.",
      initials: "SK",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Daniyal Ahmed",
      role: "Tech Lead",
      msg: "Finally, a platform that understands developer experience. Scalable, fast, and incredibly intuitive.",
      initials: "DA",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className={`relative overflow-hidden py-24 transition-colors duration-500 ${
      theme === "dark" ? "bg-[#030712]" : "bg-gray-50"
    }`}>
      {/* Decorative Background Elements */}
      {theme === "dark" && (
        <div className="absolute left-1/2 top-0 h-[300px] w-full -translate-x-1/2 bg-blue-600/10 blur-[120px]" />
      )}

      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-bold tracking-[0.2em] text-blue-500 uppercase mb-4">
            Wall of Love
          </h2>
          <h3 className={`text-4xl font-bold sm:text-5xl transition-colors duration-500 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            Trusted by the best in the industry.
          </h3>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`group relative flex flex-col justify-between rounded-3xl border p-8 transition-all duration-500 ${
                theme === "dark"
                  ? "border-white/5 bg-white/5 hover:border-white/20 hover:bg-white/[0.08]"
                  : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg"
              }`}
            >
              {/* Quote Icon */}
              <div className="mb-6 text-4xl text-blue-500/30 font-serif group-hover:text-blue-500/60 transition-colors">
                "
              </div>

              <p className={`mb-8 text-lg leading-relaxed transition-colors duration-500 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}>
                {t.msg}
              </p>

              <div className="flex items-center gap-4">
                {/* Custom Avatar Gradient */}
                <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr ${t.color} text-sm font-bold text-white shadow-lg`}>
                  {t.initials}
                </div>

                <div className="text-left">
                  <h4 className={`font-bold tracking-wide transition-colors duration-500 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}>
                    {t.name}
                  </h4>
                  <p className={`text-sm transition-colors duration-500 ${
                    theme === "dark" ? "text-gray-500" : "text-gray-500"
                  }`}>
                    {t.role}
                  </p>
                </div>
              </div>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Optional: Secondary CTA for trust */}
        <div className="mt-16 text-center">
          <p className={`transition-colors duration-500 ${
            theme === "dark" ? "text-gray-500" : "text-gray-500"
          }`}>
            Join <span className={`font-semibold transition-colors duration-500 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>500+</span> teams scaling their dreams.
          </p>
        </div>
      </div>
    </section>
  );
}