import { NextResponse } from "next/server";

export async function POST(req: Request) {
  return NextResponse.json({ message: "Event API - Chưa có database" });
}
