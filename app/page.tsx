import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* This adds the Menu Bar at the top */}
      <Navbar />
      
      {/* This is your main banner */}
      <Hero />
      
      {/* This adds the contact info at the bottom */}
      <Footer />
    </main>
  );
}