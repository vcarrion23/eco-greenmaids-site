import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Phone, Sparkles, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      {/* py-6 on mobile and py-10 on desktop keeps the section slim */}
      <section className="relative bg-emerald-50 py-6 md:py-10 overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col items-center text-center relative z-10">
          
          {/* THE LOGO - Focused on your 'home-hero-final' file */}
          <div className="relative w-32 h-32 md:w-48 md:h-48 mb-4 drop-shadow-md">
            <Image 
              src="/home-hero-final.png" 
              alt="EcoGreenMaids Home Logo"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-emerald-950 mb-2 tracking-tight">
            A Cleaner Home. <br/>
            <span className="text-emerald-600 font-medium italic">A Greener Earth.</span>
          </h1>
          
          <p className="text-sm md:text-base text-emerald-800/80 mb-6 max-w-lg leading-relaxed font-medium">
            We use 100% organic, non-toxic supplies to transform your space. 
            Safe for your pets, safe for your kids, and safe for the planet.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center mb-8">
            <a 
              href="tel:+19145641364" 
              className="bg-emerald-600 text-white px-6 py-2.5 rounded-full font-bold text-base hover:bg-emerald-700 transition-all shadow-md flex items-center justify-center gap-2 active:scale-95"
            >
              <Phone size={18} fill="currentColor" />
              Book a Clean
            </a>

            <Link 
              href="/services" 
              className="bg-white text-emerald-800 border-2 border-emerald-100 px-6 py-2.5 rounded-full font-bold text-base hover:bg-emerald-50 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles size={16} className="text-emerald-500" />
              Our Services
            </Link>
          </div>

          <div className="flex justify-center gap-4 text-emerald-900/60 font-semibold text-[10px] uppercase tracking-wider">
            <span className="flex items-center gap-1">
              <CheckCircle2 size={12} className="text-emerald-500" /> 100% Organic
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 size={12} className="text-emerald-500" /> Pet & Kid Safe
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}