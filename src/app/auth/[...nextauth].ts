import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import prisma from "@/lib/db";
// import bcrypt from "bcryptjs";

export const authOptions = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     CredentialsProvider({
//       name: "Email & Password",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error("Email và mật khẩu là bắt buộc");
//         }

//         const user = await prisma.user.findUnique({
//           where: { email: credentials.email },
//         });

//         if (!user || !user.password) {
//           throw new Error("Tài khoản không tồn tại");
//         }

//         const isValidPassword = await bcrypt.compare(
//           credentials.password,
//           user.password
//         );

//         if (!isValidPassword) {
//           throw new Error("Sai mật khẩu");
//         }

//         return user;
//       },
//     }),
//   ],
//   session: { strategy: "jwt" },
//   callbacks: {
//     async session({ session, token }) {
//       session.user.id = token.sub;
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/auth/login",
//   },
};

// export const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };