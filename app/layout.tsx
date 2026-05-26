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
  const [isCinematicActive, setIsCinematicActive] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { stiffness: 700, damping: 45 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 5); 
      cursorY.set(e.clientY - 5);
    };

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
    <html lang="en" className="md:cursor-none select-none scroll-smooth">
      <body className={`${inter.className} md:cursor-none antialiased relative z-0 bg-white`}>
        
        {/* --- CUSTOM CURSOR LAYER (Guaranteed Non-Blocking) --- */}
        <motion.div
          className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[999999] hidden md:block"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
          animate={{
            backgroundColor: isCinematicActive ? "#ffffff" : "#059669",
            scale: isCinematicActive ? 1.5 : 1
          }}
          transition={{ duration: 0.15 }}
        />

        {children}
      </body>
    </html>
  );
}