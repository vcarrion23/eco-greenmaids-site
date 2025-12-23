import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO - Now using the transparent version */}
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo-transparent.png" // Make sure this matches your new filename!
            alt="EcoGreenMaids Logo" 
            width={80} 
            height={80} 
            className="object-contain" // Shows the natural shape of the logo
            priority
          />
          {/* Brand Name Text (Optional - keep or remove) */}
          <span className="text-2xl font-bold text-eco-800 tracking-tight hidden sm:block">
            Eco<span className="text-eco-600">GreenMaids</span>
          </span>
        </Link>

        {/* MENU LINKS */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-gray-600 hover:text-eco-600 font-medium transition">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-eco-600 font-medium transition">
            About Us
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-eco-600 font-medium transition">
            Services & Results
          </Link>
          
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