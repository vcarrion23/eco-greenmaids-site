import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn"; 
import Image from "next/image"; // <--- Import Image component
import { Leaf, Heart, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navbar />

      {/* 1. Header Section */}
      <section className="bg-eco-100 py-20 text-center">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-eco-800 mb-6">Cleaning with a Conscience</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We believe a clean home shouldn't come at the cost of your health or the environment.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Our Story / Mission */}
      <section className="py-20 container mx-auto px-6">
        <FadeIn delay={0.2}>
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Text Side */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-eco-800 mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                EcoGreenMaids started with a simple idea: Harsh chemicals don't belong in the places where we eat, sleep, and play. 
              </p>
              <p className="text-gray-600 leading-relaxed">
                Traditional cleaning supplies often leave behind toxic residues that can harm pets and children. We set out to prove that 
                you can get a sparkling, hotel-quality clean using 100% plant-based, biodegradable products.
              </p>
            </div>
            
            {/* 3. IMAGE SECTION (Updated to .png) */}
            <div className="flex-1 relative h-64 md:h-96 w-full">
              <Image 
                src="/aboutus.png"  // <--- CHANGED TO .PNG
                alt="Our eco-friendly cleaning team"
                fill 
                className="object-cover rounded-2xl shadow-lg"
              />
            </div>

          </div>
        </FadeIn>
      </section>

      {/* 3. Why Choose Eco? (The 3 Icons) */}
      <section className="bg-eco-50 py-20">
        <div className="container mx-auto px-6">
          <FadeIn delay={0.4}>
            <h2 className="text-3xl font-bold text-center text-eco-800 mb-16">Why Go Green?</h2>
            
            <div className="grid md:grid-cols-3 gap-10">
              {/* Benefit 1 */}
              <div className="text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-eco-100 text-eco-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-eco-800">Non-Toxic & Organic</h3>
                <p className="text-gray-600">No bleach, no ammonia, no artificial fragrances. Just powerful plant-based ingredients.</p>
              </div>

              {/* Benefit 2 */}
              <div className="text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-eco-100 text-eco-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-eco-800">Safe for Pets & Kids</h3>
                <p className="text-gray-600">Your little ones (and furry ones) spend the most time on the floor. We keep it safe.</p>
              </div>

              {/* Benefit 3 */}
              <div className="text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-eco-100 text-eco-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-eco-800">Satisfaction Guaranteed</h3>
                <p className="text-gray-600">Eco-friendly doesn't mean weak. We guarantee a spotless shine or we re-clean for free.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}