"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Giả lập kiểm tra đăng nhập (sau này có thể dùng JWT từ localStorage)
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
<nav className="flex justify-between items-center p-4 bg-blue-800 text-white">
  <div className="text-2xl font-bold">ITS Singapore</div>
  <ul className="flex gap-6">
    <li className="hover:text-gray-300"><Link href="#">Home</Link></li>
    <li className="hover:text-gray-300"><Link href="#">About</Link></li>
    <li className="hover:text-gray-300"><Link href="#">Membership</Link></li>
  </ul>
  <button className="px-4 py-2 bg-white text-blue-800 rounded-lg">Login</button>
</nav>
  );
}
