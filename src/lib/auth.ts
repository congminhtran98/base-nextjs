// src/lib/auth.ts
import { getServerSession } from "next-auth";
import { authOptions } from '@/app/api/auth/[...nextauth]';

export function auth() {
  return getServerSession(authOptions);
}