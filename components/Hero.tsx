import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Phone, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative bg-emerald-50 py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col items-center text-center relative z-10">
          
          {/* THE LOGO - Using the brand new filename to force an update */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 mb-10 drop-shadow-2xl">
            <Image 
              src="/main-hero-logo.png" 
              alt="EcoGreenMaids Home Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <h1 className="text-4xl md:text-7xl font-extrabold text-emerald-950 mb-6 tracking-tight">
            A Cleaner Home. <br/>
            <span className="text-emerald-600 font-medium italic">A Greener Earth.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-emerald-800/80 mb-12 max-w-2xl leading-relaxed font-medium">
            We use 100% organic, non-toxic supplies to transform your space. 
            Safe for your pets, safe for your kids, and safe for the planet.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
            <a 
              href="tel:+19145641364" 
              className="group bg-emerald-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-emerald-700 transition-all shadow-2xl hover:shadow-emerald-200/50 flex items-center justify-center gap-3 active:scale-95"
            >
              <Phone size={24} fill="currentColor" />
              Book a Clean
            </a>

            <Link 
              href="/services" 
              className="bg-white text-emerald-800 border-2 border-emerald-100 px-10 py-5 rounded-full font-bold text-xl hover:bg-emerald-50 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <Sparkles size={22} className="text-emerald-500" />
              View Our Work
            </Link>
          </div>
        </div>

        {/* Decorative Background */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl opacity-40"></div>
      </section>

      <Footer />
    </main>
  );
}