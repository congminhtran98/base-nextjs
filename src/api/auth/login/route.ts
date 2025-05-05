import { NextResponse } from "next/server";
import { AuthResponse, Role } from "@/core/types";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (email === "admin@example.com" && password === "password") {
    const user = { id: "1", name: "Admin", email, role: Role.ADMIN };
    return NextResponse.json<AuthResponse>({ user, token: "fake-jwt-token" });
  }

  return NextResponse.json<AuthResponse>(
    { error: "Sai tài khoản hoặc mật khẩu" },
    { status: 401 }
  );
}
