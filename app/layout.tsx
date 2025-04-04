import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useRef } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Tạo biến CSS
  weight: ["400", "500", "600", "700"], // Chọn trọng lượng font cần dùng
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "ITS News - Latest Updates on Intelligent Transportation Technology",
  description: "ITS News is the leading source for updates on Intelligent Transportation Systems (ITS), AI, IoT, autonomous vehicles, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`antialiased font-sans`}>
        
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
