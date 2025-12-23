import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="bg-emerald-950 py-20 text-center text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Services & Results</h1>
          <p className="text-emerald-100/70 text-lg max-w-xl mx-auto">
            Choose the perfect eco-friendly cleaning plan for your home.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 border border-emerald-50 rounded-3xl bg-white shadow-sm hover:shadow-2xl hover:shadow-emerald-100/50 transition-all duration-300 group flex flex-col h-full border-b-4 border-b-transparent hover:border-b-emerald-500"
            >
              <div className="mb-6 w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-emerald-900 mb-3">{service.title}</h3>
              <p className="text-emerald-800/70 leading-relaxed mb-8 flex-grow">{service.desc}</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-sm font-medium text-emerald-700">
                  <CheckCircle2 size={18} className="text-emerald-500" /> 100% Organic Products
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-emerald-700">
                  <CheckCircle2 size={18} className="text-emerald-500" /> Pet & Kid Friendly
                </div>
              </div>

              {/* CARD BUTTON */}
              <a 
                href="tel:+19145641364" 
                className="w-full py-4 rounded-2xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-all shadow-md flex items-center justify-center gap-2 active:scale-95"
              >
                <Phone size={18} fill="currentColor" />
                Call to Schedule
              </a>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}