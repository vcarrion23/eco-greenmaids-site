import { Facebook, Instagram, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-eco-800 text-white py-12 mt-auto">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Company Info */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">EcoGreenMaids</h3>
          <p className="text-eco-100">Clean home. Green planet.</p>
        </div>

        {/* Social Media Icons - INCREASED GAP HERE */}
        <div className="flex gap-12"> 
          <a href="https://instagram.com" target="_blank" className="hover:text-eco-300 transition hover:scale-110">
            <Instagram size={32} />
          </a>
          <a href="https://facebook.com" target="_blank" className="hover:text-eco-300 transition hover:scale-110">
            <Facebook size={32} />
          </a>
          <a href="https://wa.me/15551234567" target="_blank" className="hover:text-eco-300 transition hover:scale-110">
            <Phone size={32} />
          </a>
        </div>
      </div>
    </footer>
  );
}