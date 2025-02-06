import { NextResponse } from "next/server";

export async function POST(req: Request) {
  return NextResponse.json({ message: "user API - Chưa có database" });
}
