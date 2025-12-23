import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComparisonSlider from "@/components/ComparisonSlider";
import FadeIn from "@/components/FadeIn"; // Import the magic

export default function ServicesPage() {
  return (
    <main className="bg-eco-50 min-h-screen flex flex-col">
      <Navbar />

      {/* Header Section */}
      <section className="bg-eco-600 text-white py-20 text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services & Results</h1>
          <p className="text-xl opacity-90">See the difference eco-friendly cleaning makes.</p>
        </FadeIn>
      </section>

      {/* Slider Section - Floats in slightly later */}
      <section className="py-16 container mx-auto px-6">
        <FadeIn delay={0.2}>
          <h2 className="text-3xl font-bold text-eco-800 text-center mb-10">Transformation Gallery</h2>
          <p className="text-center text-gray-600 mb-8">Drag the slider to see the magic!</p>
          <ComparisonSlider />
        </FadeIn>
      </section>

      {/* Service Templates - Floats in last */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn delay={0.4}>
            <h2 className="text-3xl font-bold text-eco-800 text-center mb-12">What We Offer</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Template 1 */}
              <div className="p-8 bg-eco-50 rounded-xl border border-eco-100 hover:shadow-lg transition group">
                <h3 className="text-xl font-bold text-eco-800 mb-4 group-hover:text-eco-600 transition">Standard Clean</h3>
                <p className="text-gray-600 leading-relaxed">
                  [TEMPLATE: Write about dusting, vacuuming, and general maintenance here. Great for weekly visits.]
                </p>
              </div>

              {/* Template 2 */}
              <div className="p-8 bg-eco-50 rounded-xl border border-eco-100 hover:shadow-lg transition group">
                <h3 className="text-xl font-bold text-eco-800 mb-4 group-hover:text-eco-600 transition">Deep Clean</h3>
                <p className="text-gray-600 leading-relaxed">
                  [TEMPLATE: Write about scrubbing baseboards, behind appliances, and heavy duty work here.]
                </p>
              </div>

              {/* Template 3 */}
              <div className="p-8 bg-eco-50 rounded-xl border border-eco-100 hover:shadow-lg transition group">
                <h3 className="text-xl font-bold text-eco-800 mb-4 group-hover:text-eco-600 transition">Move In / Move Out</h3>
                <p className="text-gray-600 leading-relaxed">
                  [TEMPLATE: Write about emptying an apartment and making it ready for the next tenant.]
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}