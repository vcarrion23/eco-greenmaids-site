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
      {/* pt-0 removes the gap between the Navbar and the Hero content */}
      <section className="relative bg-emerald-50 pt-0 pb-10 md:pb-14 overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col items-center text-center relative z-10">
          
          {/* LARGE BROOM LOGO - mt-[-20px] tucks it closer to the nav */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 mb-2 drop-shadow-xl mt-[-20px] md:mt-[-40px]">
            <Image 
              src="/logo-broom2.png" 
              alt="EcoGreenMaids Professional Cleaning"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-emerald-950 mb-4 tracking-tight mt-[-20px]">
            A Cleaner Home. <br/>
            <span className="text-emerald-600 font-medium italic text-2xl md:text-4xl">Expertly Maintained.</span>
          </h1>
          
          <p className="text-sm md:text-base text-emerald-800/80 mb-8 max-w-lg leading-relaxed font-medium">
            We deliver a clinical-grade clean using 100% organic, non-toxic supplies. 
            The professional choice for a healthy, spotless home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-10">
            <a 
              href="tel:+19145641364" 
              className="bg-emerald-600 text-white px-8 py-3.5 rounded-full font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95"
            >
              <Phone size={20} fill="currentColor" />
              Book a Clean
            </a>

            <Link 
              href="/services" 
              className="bg-white text-emerald-800 border-2 border-emerald-100 px-8 py-3.5 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <Sparkles size={18} className="text-emerald-500" />
              View Our Work
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-5 text-emerald-900/60 font-semibold text-[10px] uppercase tracking-widest">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-500" /> Professional Grade
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-500" /> Fully Insured
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-500" /> 100% Organic
            </span>
          </div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-72 h-72 bg-emerald-200/40 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-72 h-72 bg-emerald-300/20 rounded-full blur-3xl opacity-40"></div>
      </section>

      <Footer />
    </main>
  );
}