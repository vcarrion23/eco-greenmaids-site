import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { 
  Truck, 
  Sparkles, 
  Hammer, 
  CalendarCheck, 
  Zap, 
  Phone,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    title: "Move-In / Move-Out",
    desc: "A total deep-clean of every nook, cranny, and appliance to make your transition effortless.",
    icon: <Truck size={32} />,
  },
  {
    title: "Deep Cleaning",
    desc: "An intensive scrub targeting built-up grime, baseboards, and hard-to-reach areas.",
    icon: <Sparkles size={32} />,
  },
  {
    title: "Post-Construction",
    desc: "High-detail removal of fine dust and debris to make your new renovation live-in ready.",
    icon: <Hammer size={32} />,
  },
  {
    title: "Maintenance Schedule",
    desc: "Consistent, recurring eco-cleans to keep your home healthy and sparkling year-round.",
    icon: <CalendarCheck size={32} />,
  },
  {
    title: "One-Time Service",
    desc: "A professional, full-standard clean whenever you need a quick reset for your home.",
    icon: <Zap size={32} />,
  },
];

// Mapped exactly to your public folder filenames
const results = [
  {
    title: "Kitchen Transformation",
    before: "/kitchenbefore.png",
    after: "/kicthenafter.png", // matches your 'kicthen' typo in public folder
    tag: "Deep Clean"
  },
  {
    title: "Floor Restoration",
    before: "/floorbefore.png",
    after: "/floorafter.png",
    tag: "Post-Construction"
  },
  {
    title: "Bathroom Deep Scrub",
    before: "/bathroombefore.png",
    after: "/bathroomafter.png",
    tag: "Move-Out"
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* --- HEADER --- */}
      <section className="bg-emerald-950 py-16 text-center text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Services & Results</h1>
          <p className="text-emerald-100/70 text-lg max-w-xl mx-auto font-medium">
            Professional eco-friendly cleaning tailored to your needs.
          </p>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 border border-emerald-50 rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
            >
              <div className="mb-6 w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-3">{service.title}</h3>
              <p className="text-emerald-800/70 leading-relaxed mb-8 flex-grow">{service.desc}</p>
              
              <a 
                href="tel:+19145641364" 
                className="w-full py-3.5 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-md"
              >
                <Phone size={18} fill="currentColor" />
                Book Now
              </a>
            </div>
          ))}
        </div>

        {/* --- BEFORE & AFTER GALLERY --- */}
        <div className="border-t border-emerald-100 pt-20">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-widest text-xs mb-3">
              <Sparkles size={16} />
              <span>Real Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-950">See The Difference</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {results.map((item, index) => (
              <div key={index} className="flex flex-col group">
                <div className="relative h-72 md:h-80 rounded-3xl overflow-hidden shadow-lg flex">
                  {/* Before Side */}
                  <div className="relative w-1/2 h-full border-r border-white/40">
                    <Image 
                        src={item.before} 
                        alt="Before" 
                        fill 
                        className="object-cover grayscale-[30%]" 
                        unoptimized
                    />
                    <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-md text-white text-[9px] px-2 py-1 rounded font-bold uppercase tracking-wider">Before</div>
                  </div>
                  {/* After Side */}
                  <div className="relative w-1/2 h-full">
                    <Image 
                        src={item.after} 
                        alt="After" 
                        fill 
                        className="object-cover" 
                        unoptimized
                    />
                    <div className="absolute top-3 right-3 bg-emerald-600 text-white text-[9px] px-2 py-1 rounded font-bold uppercase tracking-wider shadow-md">After</div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center px-2">
                  <span className="font-bold text-emerald-900">{item.title}</span>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded uppercase">{item.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CALL TO ACTION --- */}
      <section className="bg-emerald-50 py-16 mb-20 mx-6 rounded-[3rem] text-center border border-emerald-100">
        <h2 className="text-3xl font-bold text-emerald-950 mb-4">Ready for your transformation?</h2>
        <a 
          href="tel:+19145641364" 
          className="inline-flex items-center gap-3 bg-emerald-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl active:scale-95"
        >
          <Phone size={22} fill="currentColor" />
          Call to Schedule
        </a>
      </section>

      <Footer />
    </main>
  );
}