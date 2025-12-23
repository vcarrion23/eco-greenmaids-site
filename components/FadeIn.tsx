"use client";
import { motion } from "framer-motion";

export default function FadeIn({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Start invisible and slightly lower
      whileInView={{ opacity: 1, y: 0 }} // Float up and appear when seen
      viewport={{ once: true }} // Only animate once
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}