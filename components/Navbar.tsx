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
    <nav className="bg-blue-500 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">
        <Link href="/">NextJS News</Link>
      </h1>
      <div>
        <Link href="/" className="mx-2">
          Trang chủ
        </Link>
        <Link href="/membership" className="mx-2">
          Thành viên
        </Link>
        <Link href="/events" className="mx-2">
          Sự kiện
        </Link>

        {!isLoggedIn ? (
          <>
            <Link href="/auth/login" className="mx-2">
              Đăng nhập
            </Link>
            <Link
              href="/auth/register"
              className="mx-2 bg-green-500 px-3 py-1 rounded"
            >
              Đăng ký
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="mx-2 bg-red-500 px-3 py-1 rounded"
          >
            Đăng xuất
          </button>
        )}
      </div>
    </nav>
  );
}
