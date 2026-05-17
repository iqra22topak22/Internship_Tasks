"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  Settings,
  X,
  ChevronRight,
} from "lucide-react";

export default function Sidebar({ open, setOpen }) {
  const menuItems = [
    {
      name: "Home",
      href: "/",
      icon: <Home size={20} />,
    },
    {
      name: "About",
      href: "/about",
      icon: <User size={20} />,
    },
    {
      name: "Services",
      href: "/services",
      icon: <Briefcase size={20} />,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] bg-[#030712]/60 backdrop-blur-sm"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
            }}
            className="fixed top-0 left-0 z-[110] h-full w-72 border-r border-white/10 bg-[#0b0f1a]/90 p-6 shadow-2xl backdrop-blur-xl"
          >
            {/* Header */}
            <div className="mb-12 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">
                  I
                </div>

                <h2 className="text-xl font-bold tracking-tight text-white">
                  Iqra.dev
                </h2>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-2 text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group relative flex items-center justify-between rounded-xl p-3 text-gray-400 transition-all hover:bg-white/5 hover:text-white"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-gray-500 transition-colors group-hover:text-blue-500">
                        {item.icon}
                      </span>

                      <span className="font-medium">
                        {item.name}
                      </span>
                    </div>

                    <ChevronRight
                      size={16}
                      className="translate-x-[-8px] opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                    />

                    {/* Hover Indicator */}
                    <div className="absolute left-0 h-6 w-1 rounded-r-full bg-blue-500 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom Profile */}
            <div className="absolute bottom-8 left-6 right-6">
              <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 p-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />

                <div>
                  <p className="text-sm font-bold text-white">
                    Iqra Mushtaq
                  </p>

                  <p className="text-xs font-medium tracking-tight text-gray-500">
                    AI Developer
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}