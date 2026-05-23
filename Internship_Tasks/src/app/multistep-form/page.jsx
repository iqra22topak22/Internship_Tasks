"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  LayoutGrid, FileText, Component, Activity, Home, HelpCircle, 
  Sun, Moon, Menu, X 
} from "lucide-react";
import StepOne from "@/components/forms/StepOne";
import StepTwo from "@/components/forms/StepTwo";
import StepThree from "@/components/forms/StepThree";
import { useTheme } from "@/components/ThemeProvider";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "", age: "" });
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const saved = localStorage.getItem("formData");
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const progress = (step / 3) * 100;

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 selection:bg-blue-500/30 overflow-hidden relative ${isDark ? 'bg-[#020617] text-slate-300' : 'bg-slate-50 text-slate-600'}`}>
      
      {/* 2. AMBIENT ATMOSPHERE */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full blur-[120px] transition-opacity duration-1000 ${isDark ? 'bg-blue-600/5' : 'bg-blue-400/10'}`} />
        <div className={`absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full blur-[100px] transition-opacity duration-1000 ${isDark ? 'bg-indigo-600/5' : 'bg-indigo-400/10'}`} />
      </div>

      {/* 3. MAIN FORM INTERFACE */}
      <main className="flex-grow flex flex-col items-center justify-center p-6 relative z-10 pt-32">
        <div className="w-full max-w-[500px]">
          
          {/* Progress Header */}
          <header className="mb-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-[0.2em] mb-4 transition-all ${isDark ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'}`}
            >
              <span className={`w-1 h-1 rounded-full animate-pulse ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`} />
              Phase {step} / 3
            </motion.div>
            <h2 className={`text-3xl font-bold tracking-tight transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {step === 1 && "Create Identity"}
              {step === 2 && "Setup Security"}
              {step === 3 && "Final Validation"}
            </h2>
          </header>

          {/* Form Glass Card */}
          <div className="relative group">
            {/* Outer Glow */}
            <div className={`absolute -inset-1 rounded-[40px] blur-xl opacity-0 group-hover:opacity-100 transition duration-1000 ${isDark ? 'bg-gradient-to-r from-blue-600/20 to-indigo-600/20' : 'bg-gradient-to-r from-blue-400/10 to-indigo-400/10'}`} />
            
            <div className={`relative border rounded-[40px] shadow-2xl overflow-hidden transition-all ${isDark ? 'bg-[#0b0f1a]/80 backdrop-blur-2xl border-white/10' : 'bg-white border-slate-200'}`}>
              
              {/* Internal Progress Fill Line */}
              <div className={`absolute top-0 left-0 w-full h-[2px] ${isDark ? 'bg-white/5' : 'bg-slate-100'}`}>
                <motion.div 
                  className={`h-full bg-blue-500 shadow-[0_0_10px_#3b82f6]`}
                  animate={{ width: `${progress}%` }}
                  transition={{ type: "spring", stiffness: 50, damping: 20 }}
                />
              </div>

              <div className="p-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                  >
                    {step === 1 && <StepOne formData={formData} setFormData={setFormData} nextStep={nextStep} theme={isDark ? 'dark' : 'light'} />}
                    {step === 2 && <StepTwo formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} theme={isDark ? 'dark' : 'light'} />}
                    {step === 3 && <StepThree formData={formData} prevStep={prevStep} theme={isDark ? 'dark' : 'light'} />}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Contextual Footer */}
          <div className="mt-8 flex justify-between items-center px-4">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
              <HelpCircle size={14} />
              <span>Identity verified via Protocol Nexus</span>
            </div>
            <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">v1.0.4</span>
          </div>
        </div>
      </main>
    </div>
  );
}

function NavLink({ href, icon: Icon, label, active = false, isDark, onClick }) {
  return (
    <Link 
      href={href}
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold w-full md:w-auto transition-all ${
        active 
        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
        : isDark 
          ? "text-slate-400 hover:text-white hover:bg-white/5"
          : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
      }`}
    >
      <Icon size={15} />
      <span>{label}</span>
    </Link>
  );
}