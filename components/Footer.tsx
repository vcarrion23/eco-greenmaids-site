import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Section 1: Brand - Kept Intact */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold tracking-tight text-emerald-400">EcoGreenMaids</h3>
            <p className="text-emerald-100/60 text-sm">A Safe Way To Clean.</p>
          </div>

          {/* Section 2: Social Icons - Kept Intact */}
          <div className="flex gap-4">
            <a 
              href="https://www.facebook.com/share/17qLTzpQ2w/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 bg-white/10 rounded-full hover:bg-white hover:text-emerald-950 transition-all border border-white/5"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="https://www.instagram.com/ecogreenmaids?igsh=MTY4ajUxaDJhMmU4Zg==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 bg-white/10 rounded-full hover:bg-white hover:text-emerald-950 transition-all border border-white/5"
            >
              <Instagram size={20} />
            </a>
          </div>

        </div>
        
        {/* Bottom Copyright & Claims - Kept Intact */}
        <div className="border-t border-white/5 mt-8 pt-4 text-center">
          <p className="text-[10px] uppercase tracking-widest text-emerald-100/30">
            © {new Date().getFullYear()} EcoGreenMaids • Safe for Kids & Pets • 100% Organic
          </p>
        </div>
      </div>
    </footer>
  );
}