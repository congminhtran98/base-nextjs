"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About Us", href: "/about", submenu: [] },
  { name: "Login", href: "/login", submenu: [] },
  { name: "Membership", href: "/membership", submenu: [] },
  { name: "Advocacy & Policy", href: "/advocacy-policy", submenu: [] },
  {
    name: "Events",
    href: "/events",
    submenu: [
      { name: "Upcoming Events", href: "/events/upcoming" },
      { name: "Past Events", href: "/events/past" },
    ],
  },
  {
    name: "Industry",
    href: "/industry",
    submenu: [
      { name: "Smart Mobility", href: "/industry/smart-mobility" },
      { name: "Autonomous Vehicles", href: "/industry/autonomous-vehicles" },
    ],
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSubmenu = (name: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <nav className="w-full bg-white shadow-md h-[84px] flex fixed top-0 left-0 z-40">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={308}
            height={84}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className="relative text-[#212121] hover:text-red-500 font-bold text-xl flex items-center space-x-1 group"
              >
                <span>{link.name}</span>
                {link.submenu.length > 0 && (
                  <Plus className="w-4 h-4 transition-transform duration-300" />
                )}

                {/* Hiệu ứng gạch chân */}
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full" />
              </Link>

              {link.submenu.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  exit={{ opacity: 0, scaleY: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }} // Hiệu ứng chậm hơn
                  className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 hidden group-hover:block z-50 origin-top"
                >
                  {link.submenu.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Login Button */}
        <Link
          href="/login"
          className="hidden md:block bg-[#6355D8] text-white font-normal text-lg px-9 py-3 rounded-lg hover:bg-purple-700"
        >
          Login
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Overlay với fade-in chậm hơn */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }} // Fade chậm hơn
            onClick={toggleMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Sidebar trượt vào chậm hơn */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed left-0 top-0 h-full w-64 bg-white shadow-md p-4 z-50"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }} // Chậm hơn
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4"
              onClick={toggleMobileMenu}
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

            {/* Mobile Menu Links */}
            <ul className="mt-8 space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <div className="flex justify-between items-center">
                    <Link
                      href={link.href}
                      className="text-gray-700 hover:text-blue-600 block w-full"
                    >
                      {link.name}
                    </Link>
                    {link.submenu.length > 0 && (
                      <button onClick={() => toggleSubmenu(link.name)}>
                        <motion.div
                          animate={{
                            rotate: openSubmenus[link.name] ? 180 : 0,
                          }}
                          transition={{ duration: 0.2, ease: "easeInOut" }} // Chậm hơn
                        >
                          {openSubmenus[link.name] ? (
                            <Minus className="w-5 h-5 text-gray-700" />
                          ) : (
                            <Plus className="w-5 h-5 text-gray-700" />
                          )}
                        </motion.div>
                      </button>
                    )}
                  </div>

                  {/* Submenu mở rộng mượt hơn */}
                  <AnimatePresence>
                    {link.submenu.length > 0 && openSubmenus[link.name] && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0, y: -10 }} // Bắt đầu từ 0, trượt nhẹ xuống
                        animate={{ height: "auto", opacity: 1, y: 0 }} // Mở rộng dần dần
                        exit={{ height: 0, opacity: 0, y: -10 }} // Khi đóng, trượt lên
                        transition={{ duration: 0.2, ease: "easeInOut" }} // Hiệu ứng mượt hơn
                        className="pl-4 mt-2 space-y-2 overflow-hidden"
                      >
                        {link.submenu.map((sub) => (
                          <motion.li
                            key={sub.name}
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                          >
                            <Link
                              href={sub.href}
                              className="text-gray-600 hover:text-blue-600 block"
                            >
                              {sub.name}
                            </Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>

            {/* Login Button (Mobile) */}
            <div className="mt-6">
              <Link
                href="/login"
                className="block text-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
              >
                Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
