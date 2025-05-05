import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useRef } from "react";

// import "@/public/css/button-override.css";  // Import thêm các file custom
// import "@/public/css/custom-dropdown.css";
// import "@/public/css/enhanced-social-icons.css";
// import "@/public/css/popup-form.css";
// import "@/public/css/responsive-navbar.css";
// import "@/public/css/zoom-fix.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { auth } from "@/lib/auth";
import SessionProvider from "@/components/common/SessionProvider";

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
  description:
    "ITS News is the leading source for updates on Intelligent Transportation Systems (ITS), AI, IoT, autonomous vehicles, and more.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en" className={inter.variable}>
      <body className={`antialiased font-sans`}>
        <SessionProvider session={session}>
          <Navbar />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
