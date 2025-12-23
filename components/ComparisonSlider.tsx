"use client"; // This is required for interactive parts
import { useState } from "react";

export default function ComparisonSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleDrag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl border-4 border-white group">
      {/* 1. The DIRTY Image (Background) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          // We use a grey placeholder for 'dirty'
          backgroundImage: "url('https://placehold.co/800x600/555555/ffffff?text=Before:+Messy')" 
        }} 
      />

      {/* 2. The CLEAN Image (Foreground - Clipped) */}
      <div 
        className="absolute inset-0 bg-cover bg-center border-r-4 border-white"
        style={{ 
          // We use a green placeholder for 'clean'
          backgroundImage: "url('https://placehold.co/800x600/A4D4AE/ffffff?text=After:+Sparkling')",
          width: `${sliderPosition}%` 
        }} 
      />

      {/* 3. The Slider Control (Invisible but draggable) */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleDrag}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
      />

      {/* 4. The Handle Button (Visual only) */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center pointer-events-none z-10 text-eco-800"
        style={{ left: `calc(${sliderPosition}% - 20px)` }}
      >
        ↔
      </div>
    </div>
  );
}