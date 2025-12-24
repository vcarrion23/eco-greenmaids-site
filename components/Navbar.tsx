"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-sm">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* --- STYLIZED BRAND NAME --- */}
        <Link href="/" className="group flex flex-col items-start relative">
          <span className="text-2xl md:text-3xl font-black tracking-tighter italic 
            bg-gradient-to-r from-emerald-900 via-emerald-600 to-emerald-800 
            bg-clip-text text-transparent 
            drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]
            group-hover:from-emerald-600 group-hover:to-emerald-400 
            transition-all duration-500 ease-in-out">
            EcoGreenMaids
          </span>
          {/* Animated Underline Effect */}
          <div className="absolute -bottom-1 left-0 h-[3px] w-0 bg-gradient-to-r from-emerald-400 to-emerald-600 group-hover:w-full transition-all duration-500 rounded-full" />
        </Link>

        {/* --- NAVIGATION LINKS --- */}
        <div className="hidden md:flex items-center gap-8 font-bold text-emerald-950/80">
          <Link href="/" className="hover:text-emerald-600 transition-colors relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all"></span>
          </Link>
          <Link href="/about" className="hover:text-emerald-600 transition-colors relative group">
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all"></span>
          </Link>
          <Link href="/services" className="hover:text-emerald-600 transition-colors relative group">
            Services & Results
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all"></span>
          </Link>
        </div>

        {/* --- CALL BUTTON --- */}
        <a 
          href="tel:+19145641364" 
          className="flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-emerald-700 transition-all hover:shadow-lg hover:shadow-emerald-200 active:scale-95 shadow-md border border-emerald-500/20"
        >
          <Phone size={16} fill="currentColor" />
          <span className="hidden sm:inline">914-564-1364</span>
        </a>

      </div>
    </nav>
  );
}