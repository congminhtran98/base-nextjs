import { NextResponse } from "next/server";
import { AuthResponse, Role } from "@/core/types";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  const newUser = { id: "2", name, email, role: Role.MEMBER };
  return NextResponse.json<AuthResponse>({
    user: newUser,
    token: "fake-jwt-token",
  });
}
