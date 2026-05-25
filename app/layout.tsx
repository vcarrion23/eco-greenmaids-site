"use client";

import { Inter } from "next/font/google"; 
import "./globals.css"; 
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Track state for the cinematic overlay view
  const [isCinematicActive, setIsCinematicActive] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { stiffness: 600, damping: 40 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 5); 
      cursorY.set(e.clientY - 5);
    };

    // Listeners to dynamic switch colors based on navbar overlay actions
    const handleOverlayOpen = () => setIsCinematicActive(true);
    const handleOverlayClose = () => setIsCinematicActive(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("egmOverlayOpen", handleOverlayOpen);
    window.addEventListener("egmOverlayClose", handleOverlayClose);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("egmOverlayOpen", handleOverlayOpen);
      window.removeEventListener("egmOverlayClose", handleOverlayClose);
    };
  }, [cursorX, cursorY]);

  return (
    <html lang="en" className="cursor-none select-none">
      <body className={`${inter.className} cursor-none antialiased`}>
        
        {/* --- SIMPLE SOLID DOT CURSOR WITH STATIC TRANSITIONS --- */}
        <motion.div
          className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[999999] hidden md:block"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
          animate={{
            // Turns bright crisp white on the dark reel panel, stays core emerald on white pages
            backgroundColor: isCinematicActive ? "#ffffff" : "#059669",
            scale: isCinematicActive ? 1.4 : 1 // Slightly increases size for perfect high-contrast visibility
          }}
          transition={{ duration: 0.2 }}
        />

        {children}
      </body>
    </html>
  );
}