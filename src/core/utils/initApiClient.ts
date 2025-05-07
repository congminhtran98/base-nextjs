// core/utils/initApiClient.ts
import { getServerSession } from "next-auth";
import api from "@/constant/axios";
import { authOptions } from "@/app/api/auth/[...nextauth]";

export async function initApiClient() {
  const session = await getServerSession(authOptions);
  if (session?.accessToken) {
    api.setToken(session.accessToken);
  }
}