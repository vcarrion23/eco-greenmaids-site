import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="w-full px-6 md:px-12 py-2 flex justify-between items-center">
        
        {/* LOGO SECTION - Left Aligned */}
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo-brown.png" 
            alt="EcoGreenMaids Logo" 
            width={90} 
            height={90} 
            className="object-contain" 
            priority
          />
        </Link>

        {/* MENU LINKS & CONTACT - Right Aligned */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-gray-600 hover:text-emerald-600 font-medium transition">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-emerald-600 font-medium transition">
            About Us
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-emerald-600 font-medium transition">
            Services & Results
          </Link>
          
          {/* CALL BUTTON - Click to Call */}
          <a 
            href="tel:+19145641364" 
            className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-2.5 rounded-full hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-200/50 font-bold active:scale-95 whitespace-nowrap"
          >
            <Phone size={18} fill="currentColor" />
            <span>914-564-1364</span>
          </a>
        </div>

        {/* MOBILE VIEW - Just the button for small screens */}
        <div className="md:hidden">
          <a href="tel:+19145641364" className="text-emerald-600 p-2 block">
            <Phone size={28} fill="currentColor" />
          </a>
        </div>

      </div>
    </nav>
  );
}