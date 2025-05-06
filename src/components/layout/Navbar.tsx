"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSession, signOut } from "next-auth/react";

const navLinks = [
  { name: "About Us", href: "/about", submenu: [] },
  {
    name: "Membership",
    href: "/membership/list",
    submenu: [
      { name: "Members Directory", href: "/membership/list" },
      { name: "Join Us", href: "/membership/join-us" },
    ],
  },
  {
    name: "Events",
    href: "/events",
    submenu: [
      { name: "Upcoming Events", href: "/events/upcoming" },
      { name: "Past Events", href: "/events/past" },
      { name: "Key Activities", href: "/events/key-activities" },
      { name: "Gallery", href: "/events/gallery" },
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
  const { data: session, status } = useSession();
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
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full" />
              </Link>

              {link.submenu.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  exit={{ opacity: 0, scaleY: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="absolute left-0 mt-0 bg-white shadow-lg rounded-md w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300"
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

          {/* Avatar or Login Button */}
          {status === "authenticated" ? (
            <div className="relative group">
              <div className="flex items-center space-x-2 cursor-pointer">
                <div className="w-9 h-9 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0"
                    />
                  </svg>
                </div>

                <span className="font-medium text-gray-800">
                  {session.user?.name || "User"}
                </span>
              </div>
              <div className="absolute right-0 w-40 bg-white shadow-md rounded-md invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200 z-50">
                <button
                  onClick={() => signOut()}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link
              href="/login"
              className="hidden md:block bg-[#6355D8] text-white font-normal text-lg px-9 py-3 rounded-lg hover:bg-purple-700"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            onClick={toggleMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed left-0 top-0 h-full w-64 bg-white shadow-md p-4 z-50"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <button
              className="absolute top-4 right-4"
              onClick={toggleMobileMenu}
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

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
                          transition={{ duration: 0.2, ease: "easeInOut" }}
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

                  <AnimatePresence>
                    {link.submenu.length > 0 && openSubmenus[link.name] && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0, y: -10 }}
                        animate={{ height: "auto", opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
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

            {/* Login / Logout Mobile */}
            {status === "authenticated" ? (
              <div className="mt-6 flex items-center space-x-3">
                <Image
                  src={session.user?.image || "/images/avatar-placeholder.png"}
                  alt="Avatar"
                  width={36}
                  height={36}
                  className="rounded-full border border-gray-300"
                />
                <div>
                  <p className="text-gray-800 font-medium">
                    {session.user?.name || "User"}
                  </p>
                  <button
                    onClick={() => signOut()}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-6">
                <Link
                  href="/login"
                  className="block text-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
                >
                  Login
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
