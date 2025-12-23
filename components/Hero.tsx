import Link from "next/link";
import FadeIn from "./FadeIn"; // We can safely import this now!

export default function Hero() {
  return (
    <section className="relative bg-eco-50 min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Pulse Effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-eco-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4 animate-pulse"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* Title floats in first */}
        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold text-eco-800 mb-6 tracking-tight">
            A Cleaner Home. <br />
            <span className="text-eco-300">A Greener Earth.</span>
          </h1>
        </FadeIn>

        {/* Text floats in second */}
        <FadeIn delay={0.4}>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            We use 100% organic, non-toxic supplies to transform your space. 
            Safe for your pets, safe for your kids, and safe for the planet.
          </p>
        </FadeIn>

        {/* Buttons float in last */}
        <FadeIn delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            <a 
              href="https://wa.me/15551234567" 
              target="_blank"
              className="bg-eco-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-eco-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
            >
              Book a Clean
            </a>

            <Link 
              href="/services" 
              className="bg-white border-2 border-eco-600 text-eco-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-eco-50 transition cursor-pointer"
            >
              View Our Work
            </Link>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}