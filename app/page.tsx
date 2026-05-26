import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimate from "@/components/ScrollAnimate";
import { Sparkles, ShieldCheck, Clock, Star, Heart, MessageSquare } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-emerald-950">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[85vh] flex items-center justify-center bg-emerald-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none">
          <video src="/action.mp4" poster="/logo-broom2.png" className="w-full h-full object-cover" autoPlay loop muted playsInline controls={false} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-emerald-950/60 to-white pointer-events-none" />

        <div className="container mx-auto px-6 text-center z-10 max-w-3xl mt-[-40px]">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-white/10">
            <Sparkles size={14} className="text-emerald-400" />
            <span>Premium Organic Home Sanitization</span>
          </div>
          {/* HEADLINE UPDATED HERE */}
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6">
            A Spotless Home. <br />
            <span className="text-emerald-400 italic font-medium">Expertly Executed.</span>
          </h1>
          <p className="text-emerald-100/80 text-lg md:text-xl font-medium max-w-xl mx-auto mb-8 leading-relaxed">
            Clinical-grade, high-detail cleaning tailored for busy Westchester families. Safe for kids, pets, and the planet.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
            <a href="tel:19145641364" className="w-full sm:flex-1 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-center flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-900/20 transition-all active:scale-95 cursor-none">
              <MessageSquare size={18} fill="currentColor" /> Text Us Directly
            </a>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES SECTION --- */}
      <section className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 block mb-2">The EcoGreen Standard</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-emerald-950">
              Why Westchester Families Trust Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ScrollAnimate>
              <div className="p-8 rounded-3xl bg-emerald-50/50 border border-emerald-100/80 h-full flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-md">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-black text-emerald-950">100% Non-Toxic</h3>
                <p className="text-emerald-900/70 font-medium text-sm leading-relaxed">
                  We use premium plant-derived formulations that kill bacteria and lift grime completely without harsh chemical fumes.
                </p>
              </div>
            </ScrollAnimate>

            <ScrollAnimate delay={0.15}>
              <div className="p-8 rounded-3xl bg-emerald-50/50 border border-emerald-100/80 h-full flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-md">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-black text-emerald-950">Reliable & Insured</h3>
                <p className="text-emerald-900/70 font-medium text-sm leading-relaxed">
                  Every cleaner is rigorously background-checked, vetted, and fully insured to keep your space completely secure.
                </p>
              </div>
            </ScrollAnimate>

            <ScrollAnimate delay={0.3}>
              <div className="p-8 rounded-3xl bg-emerald-50/50 border border-emerald-100/80 h-full flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-md">
                  <Heart size={24} />
                </div>
                <h3 className="text-xl font-black text-emerald-950">Detail Oriented</h3>
                <p className="text-emerald-900/70 font-medium text-sm leading-relaxed">
                  From baseboards to high handles, our clinical checklist ensures we never leave a single dust particle behind.
                </p>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* --- QUICK CTA CARD --- */}
      <section className="pb-24 bg-white relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollAnimate>
            <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 text-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-800/20 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex flex-col gap-3 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-1.5 text-emerald-400 text-sm font-bold tracking-wider uppercase">
                  <Star size={16} fill="currentColor" />
                  <span>Satisfaction Guaranteed</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-snug">
                  Ready for a Flawless, <br className="hidden md:block" />
                  Healthy Living Space?
                </h3>
                <p className="text-emerald-200/70 font-medium text-sm md:text-base max-w-md">
                  Get your customized premium organic quote instantly through our direct phone line.
                </p>
              </div>

              <div className="w-full md:w-auto shrink-0">
                <a href="tel:19145641364" className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold px-8 py-4 rounded-2xl shadow-xl transition-all active:scale-95 cursor-none whitespace-nowrap text-base">
                  <MessageSquare size={18} fill="currentColor" /> Text to Book Now
                </a>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      <Footer />
    </main>
  );
}