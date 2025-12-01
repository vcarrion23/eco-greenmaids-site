import type { Metadata } from "next";
// 1. This imports the font
import { Inter } from "next/font/google"; 
// 2. THIS IS THE MISSING LINK - It connects your CSS file
import "./globals.css"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eco GreenMaids",
  description: "Eco-friendly cleaning services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. The font is applied here */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
