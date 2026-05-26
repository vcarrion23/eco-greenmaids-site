import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { CheckCircle2, Sparkles, ShieldCheck, Languages } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* --- HEADER SECTION --- */}
      <section className="bg-emerald-950 py-16 text-center text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight italic">Our Mission</h1>
          <p className="text-emerald-100/70 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Delivering premium, clinical-grade cleaning for Westchester homes using 100% organic methods.
          </p>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* THE IMAGE CONTAINER - Made smaller and adjusted for better fit */}
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-md h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-xl border-4 border-emerald-50 bg-white">
                <Image 
                  src="/ecogreen-aboutus.png" 
                  alt="EcoGreenMaids Professional Service"
                  fill
                  className="object-contain p-4" // 'object-contain' ensures the whole image fits in the box
                  priority
                  unoptimized
                />
                
                {/* Compact Overlay Badge */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg flex items-center gap-3 border border-emerald-100">
                  <div className="bg-emerald-600 p-2 rounded-xl text-white">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-emerald-950">Fully Insured</p>
                    <p className="text-[10px] text-emerald-800/60 font-bold uppercase">Professional</p>
                  </div>
                </div>
              </div>
            </div>

            {/* TEXT CONTENT - Stays the same size */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-widest text-xs">
                <Sparkles size={16} />
                <span>Premium Quality Service</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-950 tracking-tight">
                Your Health, Your Home, <br/>
                <span className="text-emerald-600 italic">Our Expertise.</span>
              </h2>

              <p className="text-emerald-800/80 leading-relaxed text-lg font-medium">
                At EcoGreenMaids, we believe a clean home is the foundation of a healthy life. We provide high-detail service utilizing non-toxic, pet-safe, and kid-safe supplies. 
              </p>

              {/* USP List */}
              <div className="grid gap-4 mt-2">
                {[
                  "Trained & Background-Checked Cleaners",
                  "HEPA-Filtration Vacuums",
                  "100% Organic Cleaning Solutions",
                  "100% Satisfaction Guarantee"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                    <span className="font-bold text-emerald-900/80 text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- NEW: BILINGUAL COMMUNICATION BAR --- */}
      <section className="bg-emerald-50/60 border-y border-emerald-100/80 py-12 px-6">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-600 font-black tracking-wide text-sm uppercase">
              <Languages size={18} />
              <span>Hablamos Español</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight text-emerald-950">
              Bilingual Service For Our Community
            </h3>
            <p className="text-emerald-900/80 font-medium text-base md:text-lg max-w-xl leading-relaxed">
              To provide complete peace of mind, we offer seamless communication in both English and Spanish throughout your entire booking and cleaning process.
            </p>
          </div>
          
          <div className="bg-white px-6 py-5 rounded-2xl border border-emerald-200/50 shadow-md shrink-0 text-center w-full md:w-auto max-w-xs">
            <span className="block text-xs font-bold uppercase tracking-widest text-emerald-600 mb-1">
              Atención en Español
            </span>
            <p className="text-emerald-950 font-black text-sm md:text-base leading-snug">
              ¡Pregúntenos por WhatsApp o por teléfono hoy mismo!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}