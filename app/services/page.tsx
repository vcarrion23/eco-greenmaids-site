import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimate from "@/components/ScrollAnimate";
import CustomQuoteForm from "@/components/CustomQuoteForm";
import { CheckCircle2, Sparkles, Sparkle, Trash2, Home, Key } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Routine Eco-Maintenance",
      tagline: "Perfect for weekly, bi-weekly, or monthly upkeep.",
      icon: <Home size={24} />,
      bullets: [
        "Dusting all high surfaces, fixtures & baseboards",
        "Sanitizing counters, sinks & appliance exteriors",
        "Complete HEPA-vacuuming & organic floor mopping",
        "Polishing mirrors and emptying all trash basins"
      ]
    },
    {
      title: "Signature Organic Deep Clean",
      tagline: "A structural reboot for immaculate fresh starts.",
      icon: <Trash2 size={24} />,
      bullets: [
        "Scrubbing interior grout lines and detailed shower glass scaling",
        "Hand-wiping window sills, blinds, door frames & trim moldings",
        "Deep kitchen degreasing including stovetops & backsplash panels",
        "Full dust extraction behind accessible furniture frames"
      ]
    },
    {
      title: "Move-In / Move-Out Turnkey",
      tagline: "A total comprehensive cleaning to transition spaces flawlessly.",
      icon: <Key size={24} />,
      bullets: [
        "Deep interior cleaning of all empty cabinets, drawers & pantries",
        "Sanitizing inside major appliances (Oven, Fridge, Freezer)",
        "Removing wall scuffs, baseboard marks & threshold residue",
        "Full micro-particle vacuum extraction across all bare square footage"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white text-emerald-950">
      <Navbar />

      <section className="bg-emerald-950 py-16 text-center text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight italic">Services & Results</h1>
          <p className="text-emerald-100/70 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Premium, plant-based clinical procedures meticulously tailored to protect your indoor climate.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex flex-col gap-12">
            {services.map((srv, index) => (
              <ScrollAnimate key={index} delay={index * 0.1}>
                <div className="bg-white rounded-[2.5rem] border border-emerald-100 shadow-xl hover:shadow-2xl hover:border-emerald-200 transition-all duration-500 overflow-hidden grid md:grid-cols-12">
                  <div className="md:col-span-4 bg-gradient-to-br from-emerald-900 to-emerald-950 p-8 text-white flex flex-col justify-between relative">
                    <div className="absolute right-0 top-0 text-emerald-800/20 pointer-events-none translate-x-4 translate-y-4 scale-150">{srv.icon}</div>
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center mb-6">{srv.icon}</div>
                    <div>
                      <h3 className="text-2xl font-black tracking-tight leading-tight mb-2">{srv.title}</h3>
                      <p className="text-emerald-200/70 font-medium text-xs md:text-sm">{srv.tagline}</p>
                    </div>
                  </div>
                  <div className="md:col-span-8 p-8 md:p-10 flex flex-col justify-center bg-emerald-50/10">
                    <div className="flex items-center gap-1.5 text-emerald-600 font-bold uppercase tracking-widest text-[10px] mb-4">
                      <Sparkle size={12} fill="currentColor" />
                      <span>What's Included in the Procedure</span>
                    </div>
                    <div className="grid gap-3.5">
                      {srv.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span className="font-bold text-emerald-900/80 text-sm md:text-base leading-tight">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      <CustomQuoteForm />

      <Footer />
    </main>
  );
}