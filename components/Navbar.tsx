"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageSquare, X, Instagram, Sparkles, CheckCircle2, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isCinematicOpen, setIsCinematicOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openCinematic = () => {
    setIsCinematicOpen(true);
    setIsMobileMenuOpen(false); 
    window.dispatchEvent(new Event("egmOverlayOpen"));
  };

  const closeCinematic = () => {
    setIsCinematicOpen(false);
    window.dispatchEvent(new Event("egmOverlayClose"));
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-2">
          
          {/* --- MOBILE HAMBURGER TRIGGER --- */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-emerald-950 hover:bg-emerald-50 rounded-xl md:hidden cursor-none z-50"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* --- BRAND HEADER BUTTON --- */}
          <button 
            onClick={openCinematic} 
            className="group flex flex-col items-start relative overflow-hidden py-1 text-left focus:outline-none cursor-none shrink"
          >
            <span className="text-xl md:text-3xl font-black tracking-tighter italic 
              bg-gradient-to-r from-emerald-900 via-emerald-600 to-emerald-800 
              bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.05)]
              group-hover:from-emerald-600 group-hover:to-emerald-400 transition-all duration-500 ease-in-out whitespace-nowrap">
              EcoGreenMaids
            </span>
            <span className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping opacity-75" />
          </button>

          {/* --- DESKTOP ROUTING ROWS --- */}
          <div className="hidden md:flex items-center gap-8 font-bold text-emerald-950/80">
            <Link href="/" className="hover:text-emerald-600 transition-colors relative group cursor-none">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all"></span>
            </Link>
            <Link href="/about" className="hover:text-emerald-600 transition-colors relative group cursor-none">
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all"></span>
            </Link>
            <Link href="/services" className="hover:text-emerald-600 transition-colors relative group cursor-none">
              Services & Results
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all"></span>
            </Link>
          </div>

          {/* --- DIRECT PHONE CTA --- */}
          <a 
            href="tel:19145641364" 
            className="flex items-center gap-1.5 bg-emerald-600 text-white px-3.5 py-2 md:px-5 md:py-2.5 rounded-full font-bold text-xs md:text-sm hover:bg-emerald-700 transition-all hover:shadow-lg hover:shadow-emerald-200 active:scale-95 shadow-md border border-emerald-500/20 cursor-none shrink-0"
          >
            <MessageSquare size={14} fill="currentColor" />
            <span className="inline md:hidden">Text Us</span>
            <span className="hidden md:inline">Text Us Directly</span>
          </a>

        </div>

        {/* --- MOBILE SLIDEOUT TRAY --- */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="md:hidden bg-white border-b border-emerald-100 flex flex-col font-bold text-emerald-950/90 divide-y divide-emerald-50"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-4 hover:bg-emerald-50/50 transition-colors cursor-none">
                Home
              </Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-4 hover:bg-emerald-50/50 transition-colors cursor-none">
                About Us
              </Link>
              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-4 hover:bg-emerald-50/50 transition-colors cursor-none">
                Services & Results
              </Link>
              <button onClick={openCinematic} className="px-6 py-4 text-left font-black text-emerald-600 bg-emerald-50/30 hover:bg-emerald-50 transition-colors flex items-center gap-2 cursor-none w-full">
                <Sparkles size={16} />
                <span>Watch Behind the Scenes Reel</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- CINEMATIC MODAL SYSTEM --- */}
      <AnimatePresence>
        {isCinematicOpen && (
          <motion.div 
            className="fixed inset-0 bg-emerald-950/95 backdrop-blur-xl z-[99999] p-6 md:p-12 flex flex-col justify-between overflow-y-auto"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto z-10">
              <div className="flex items-center gap-2.5 text-emerald-400 font-bold uppercase tracking-widest text-sm">
                <Sparkles size={20} />
                <span>Behind the Scenes Experience</span>
              </div>
              <button onClick={closeCinematic} className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all text-white border border-white/10 cursor-none">
                <X size={28} />
              </button>
            </div>

            <div className="container mx-auto max-w-6xl grid lg:grid-cols-12 gap-12 items-center my-auto z-10 py-8">
              <div className="lg:col-span-5 flex justify-center w-full">
                <div className="relative aspect-[9/16] w-full max-w-sm bg-black rounded-[3rem] overflow-hidden shadow-2xl border-4 border-emerald-800/40">
                  <video src="/action.mp4" poster="/logo-broom2.png" className="w-full h-full object-cover" autoPlay loop muted playsInline controls={false} />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-6 text-left lg:pl-6">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-tight">
                  Spotless, Safe, <br />
                  <span className="text-emerald-400 italic font-medium">Expertly Executed.</span>
                </h2>
                <p className="text-emerald-100/70 text-lg md:text-xl font-medium max-w-xl">
                  Watch our step-by-step organic sanitization routines live from the field. Providing Westchester families with complete peace of mind.
                </p>
                <div className="grid gap-3 text-emerald-100/90 font-semibold max-w-md">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                    <span>100% Non-Toxic & Plant-Based Solutions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                    <span>Trained, Vetted & Background-Checked Cleaners</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                    <span>Fully Insured & Family Operated in NY</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-4 max-w-md">
                  <a href="tel:19145641364" className="flex-1 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-center flex items-center justify-center gap-2.5 shadow-xl cursor-none">
                    <MessageSquare size={20} fill="currentColor" /> Text Us Directly
                  </a>
                  <a href="https://www.instagram.com/ecogreenmaids/" target="_blank" rel="noopener noreferrer" className="flex-1 py-4 px-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-center flex items-center justify-center gap-2.5 cursor-none">
                    <Instagram size={18} /> View Instagram
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full text-center text-xs text-emerald-300/40 font-bold uppercase tracking-widest border-t border-white/5 pt-6">
              EcoGreenMaids Premium Experience © 2026
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}