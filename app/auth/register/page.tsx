"use client";

import { useState } from "react";
import api from "@/core/services/apiService";
import { AuthResponse } from "@/core/types";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post<AuthResponse>("/auth/register", {
        name,
        email,
        password,
      });
      if (res.data.error) throw new Error(res.data.error);
      alert("Đăng ký thành công!");
      router.push("/auth/login"); // Chuyển hướng sau khi đăng ký
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleRegister}
        className="p-6 bg-white shadow-md rounded"
      >
        <h2 className="text-2xl font-bold mb-4">Đăng ký</h2>
        <input
          type="text"
          placeholder="Tên"
          className="border p-2 w-full mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          className="border p-2 w-full mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
}
