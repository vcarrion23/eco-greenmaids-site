import Link from "next/link";
import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      {/* We use 'container mx-auto' to keep it aligned with the rest of your page content */}
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        
        {/* 1. THE LOGO: Large and Bold (The "Big" part) */}
        <Link href="/" className="text-3xl md:text-4xl font-bold text-eco-800 tracking-tight">
          Eco<span className="text-eco-600">GreenMaids</span>
        </Link>

        {/* 2. THE MENU: Normal Size, Standard Spacing (The "Normal" part) */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-gray-600 hover:text-eco-600 font-medium transition">
            Home
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-eco-600 font-medium transition">
            Services & Results
          </Link>
          
          {/* Button is standard size again */}
          <a 
            href="https://wa.me/15551234567" 
            target="_blank" 
            className="flex items-center gap-2 bg-eco-600 text-white px-5 py-2.5 rounded-full hover:bg-eco-800 transition shadow-md font-medium"
          >
            <Phone size={18} />
            <span>Book Now</span>
          </a>
        </div>

      </div>
    </nav>
  );
}