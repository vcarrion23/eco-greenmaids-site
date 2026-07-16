"use client";

import { useState } from "react";
import { MessageSquare, Sparkles } from "lucide-react";

const CLEANING_TYPES = [
  { id: "routine", name: "Routine Eco-Maintenance", basePrice: 150, pricePerSqFt: 0.15 },
  { id: "deepclean", name: "Signature Organic Deep Clean", basePrice: 250, pricePerSqFt: 0.25 },
  { id: "moveout", name: "Move-Out/Move-In Cleaning", basePrice: 300, pricePerSqFt: 0.30 },
  { id: "custom", name: "Custom Operational Routine", basePrice: 0, pricePerSqFt: 0 }
];

export default function CustomQuoteForm() {
  const [selectedType, setSelectedType] = useState("");
  const [squareFootage, setSquareFootage] = useState("");
  const [showEstimate, setShowEstimate] = useState(false);

  const selected = CLEANING_TYPES.find(t => t.id === selectedType);
  const estimate = selected && squareFootage 
    ? Math.round(selected.basePrice + (parseInt(squareFootage) * selected.pricePerSqFt))
    : null;

  const handleSendViaWhatsApp = () => {
    const typeText = selected?.name || "Custom cleaning service";
    const sfText = squareFootage ? ` (${squareFootage} sq ft)` : "";
    const estimateText = estimate ? ` - Estimated: $${estimate}` : "";
    
    const message = `Hi EcoGreenmaids! I'm interested in ${typeText}${sfText}${estimateText}. Can you provide a detailed quote?`;
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/19145641364?text=${encoded}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-[2.5rem] border border-emerald-200/50 p-8 md:p-12 text-center shadow-sm">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-emerald-600 border border-emerald-200/60 shadow-xs mb-6">
            <Sparkles size={14} />
            <span>Custom Premium Estimates</span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-black tracking-tight text-emerald-950 mb-4">
            Get Your Custom Quote
          </h3>
          <p className="text-emerald-900/70 font-medium text-sm md:text-base mb-8 leading-relaxed">
            Select your cleaning type, enter your home size, and send a request via WhatsApp. We'll follow up with a detailed quote.
          </p>

          <div className="space-y-6">
            {/* Cleaning Type Selection */}
            <div className="flex flex-col gap-3">
              <label className="text-left font-semibold text-emerald-950 text-sm">
                What type of cleaning do you need?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CLEANING_TYPES.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => {
                      setSelectedType(type.id);
                      setShowEstimate(false);
                    }}
                    className={`p-4 rounded-xl font-semibold text-sm transition-all text-left ${
                      selectedType === type.id
                        ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                        : "bg-white border-2 border-emerald-200 text-emerald-950 hover:border-emerald-400"
                    }`}
                  >
                    {type.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Square Footage Input */}
            {selectedType && selectedType !== "custom" && (
              <div className="flex flex-col gap-3">
                <label className="text-left font-semibold text-emerald-950 text-sm">
                  Home size (square feet) - Optional
                </label>
                <input
                  type="number"
                  placeholder="e.g., 2500"
                  value={squareFootage}
                  onChange={(e) => {
                    setSquareFootage(e.target.value);
                    if (e.target.value) setShowEstimate(true);
                  }}
                  className="w-full px-4 py-3 rounded-lg border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none text-emerald-950 placeholder-emerald-400"
                />
              </div>
            )}

            {/* Estimate Display */}
            {estimate && showEstimate && (
              <div className="bg-white rounded-lg p-4 border-2 border-emerald-200">
                <p className="text-sm text-emerald-900/70 mb-1">Estimated Price Range</p>
                <p className="text-3xl font-black text-emerald-600">
                  ${estimate}
                </p>
                <p className="text-xs text-emerald-900/60 mt-2">
                  Final quote may vary based on home layout and condition
                </p>
              </div>
            )}

            {/* WhatsApp Button */}
            <button
              onClick={handleSendViaWhatsApp}
              disabled={!selectedType}
              className={`w-full inline-flex items-center justify-center gap-2 font-extrabold px-8 py-4 rounded-2xl shadow-xl transition-all active:scale-95 text-base ${
                selectedType
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-900/10 cursor-pointer"
                  : "bg-emerald-300 text-emerald-900/50 cursor-not-allowed"
              }`}
            >
              <MessageSquare size={18} fill="currentColor" /> Send Quote Request via WhatsApp
            </button>

            <p className="text-xs text-emerald-900/60 mt-4">
              ✓ Your request is sent immediately • ✓ We respond within 24 hours • ✓ No commitment needed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
