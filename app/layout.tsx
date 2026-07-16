"use client";

import { Inter } from "next/font/google"; 
import "./globals.css"; 

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="select-none scroll-smooth">
      <body className={`${inter.className} antialiased relative z-0 bg-white`}>
        {children}
      </body>
    </html>
  );
}