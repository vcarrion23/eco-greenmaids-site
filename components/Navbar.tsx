"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageSquare, X, Instagram, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const openOverlay = () => {
    setIsOpen(true);
    window.dispatchEvent(new Event("egmOverlayOpen"));
  };

  const closeOverlay = () => {
    setIsOpen(false);
    window.dispatchEvent(new Event("egmOverlayClose"));
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-sm">
        {/* Changed px-6 to px-4 on mobile to maximize physical horizontal screen space */}
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-2">
          
          {/* --- BRAND NAME BUTTON --- */}
          <button 
            onClick={openOverlay} 
            className="group flex flex-col items-start relative overflow-hidden py-1 text-left focus:outline-none cursor-none shrink"
          >
            <motion.div 
              className="flex flex-col items-start"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Scaled text down slightly on mobile (text-xl instead of text-2xl) so it never clips */}
              <span className="text-xl md:text-3xl font-black tracking-tighter italic 
                bg-gradient-to-r from-emerald-900 via-emerald-600 to-emerald-800 
                bg-clip-text text-transparent 
                drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]
                group-hover:from-emerald-600 group-hover:to-emerald-400 
                transition-all duration-500 ease-in-out whitespace-nowrap">
                EcoGreenMaids
              </span>
            </motion.div>
            <span className="absolute bottom-0 left-0 w-2 h-2 bg-emerald-500 rounded-full animate-ping opacity-75" />
            <div className="absolute -bottom-0.5 left-0 h-[3px] w-0 bg-gradient-to-r from-emerald-400 to-emerald-600 group-hover:w-full transition-all duration-500 rounded-full" />
          </button>

          {/* --- NAVIGATION LINKS --- */}
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

          {/* --- RESPONSIVE WHATSAPP BUTTON --- */}
          <a 
            href="https://wa.me/19145641364?text=Hi%20EcoGreenMaids!%20I'd%20like%20to%20get%20a%20cleaning%20quote." 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-emerald-600 text-white px-3.5 py-2 md:px-5 md:py-2.5 rounded-full font-bold text-xs md:text-sm hover:bg-emerald-700 transition-all hover:shadow-lg hover:shadow-emerald-200 active:scale-95 shadow-md border border-emerald-500/20 cursor-none shrink-0"
          >
            <MessageSquare size={14} className="md:w-4 md:h-4" fill="currentColor" />
            {/* Using hidden/inline utilities to toggle text depending on device size */}
            <span className="inline md:hidden">Text Us</span>
            <span className="hidden md:inline">Text Us on WhatsApp</span>
          </a>

        </div>
      </nav>

      {/* --- IMMERSIVE OVERLAY PANEL --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-emerald-950/95 backdrop-blur-xl z-[99999] p-6 md:p-12 flex flex-col justify-between overflow-y-auto"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Top Navigation Row */}
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto z-10">
              <div className="flex items-center gap-2.5 text-emerald-400 font-bold uppercase tracking-widest text-sm">
                <Sparkles size={20} />
                <span>Behind the Scenes Experience</span>
              </div>
              <button 
                onClick={closeOverlay}
                className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all text-white border border-white/10 flex items-center justify-center cursor-none group"
              >
                <X size={28} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Main Interactive Screen Split */}
            <div className="container mx-auto max-w-6xl grid lg:grid-cols-12 gap-12 items-center my-auto z-10">
              
              {/* Left Column: Video Frame */}
              <div className="lg:col-span-5 flex justify-center w-full">
                <motion.div 
                  className="relative aspect-[9/16] w-full max-w-sm bg-black rounded-[3rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border-4 border-emerald-800/40"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring", damping: 20 }}
                >
                  <video
                    src="/action.mp4" 
                    poster="/logo-broom2.png" 
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </div>

              {/* Right Column: Text Content Block */}
              <motion.div 
                className="lg:col-span-7 flex flex-col gap-6 text-left lg:pl-6"
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none text-white">
                  Spotless, Safe, <br />
                  <span className="text-emerald-400 italic font-medium">Expertly Executed.</span>
                </h2>
                
                <p className="text-emerald-100/70 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                  Watch our step-by-step organic sanitization routines live from the field. Providing Westchester families with complete peace of mind.
                </p>

                <div className="grid gap-3 pt-2 text-base font-semibold text-emerald-100/90 max-w-md">
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

                {/* Big Action Row */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6 max-w-md">
                  <a 
                    href="https://wa.me/19145641364?text=Hi%20EcoGreenMaids!%20I%20saw%20your%20cinematic%20clip%20and%20want%20to%20chat!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-50 text-white font-extrabold text-center flex items-center justify-center gap-2.5 shadow-xl transition-all active:scale-95 text-base cursor-none"
                  >
                    <MessageSquare size={20} fill="currentColor" />
                    Chat on WhatsApp
                  </a>
                  
                  <a 
                    href="https://www.instagram.com/ecogreenmaids/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-4 px-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-center flex items-center justify-center gap-2.5 transition-all active:scale-95 text-sm cursor-none"
                  >
                    <Instagram size={18} />
                    View Instagram
                  </a>
                </div>
              </motion.div>

            </div>

            {/* Bottom Footer Row */}
            <div className="w-full text-center text-xs text-emerald-300/40 font-bold uppercase tracking-widest z-10 max-w-7xl mx-auto border-t border-white/5 pt-6">
              EcoGreenMaids Premium Experience © 2026
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}