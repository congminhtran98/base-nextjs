import type { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

async function refreshAccessToken(token: any) {
  try {
    const response = await fetch(`${process.env.API_URL}/auth/refresh-tokens`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token.refreshToken,
      }),
    });

    const refreshedTokens = await response.json();

    return {
      ...token,
      accessToken: refreshedTokens.accessToken,
      accessTokenExpires: Date.now() + 30 * 24 * 60 * 60 * 1000, // 30 ngày
      refreshToken: refreshedTokens.refreshToken ?? token.refreshToken, // Fall back to old refresh token
    };
  } catch (error) {
    return {
      ...token,
      error: "SessionExpired",
    };
  }
}

export const authOptions = {
  pages: {
    signIn: "/login",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verify-otp",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials as any;
        const res = await fetch(`${process.env.API_URL}/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userName: username, password }),
        });
        const user = await res.json();
        if (res.ok && user?.data) return user;
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        return {
          accessToken: user.data.accessToken,
          accessTokenExpires: Date.now() + 30 * 24 * 60 * 60 * 1000,
          refreshToken: user.data.refreshToken,
          user: {
            id: user.data.user.id,
            name: user.data.user.fullName,
            email: user.data.user.email,
            role: user.data.user.role,
          },
        };
      }
      if (Date.now() < token.accessTokenExpires) return token;
      return refreshAccessToken(token);
    },
    async session({ session, token }: any) {
      console.log("token", token)
      return {
        ...session,
        accessToken: token.accessToken,
        user: {
          id: token.user?.id,
          name: token.user?.name,
          email: token.user?.email,
          role: token.user?.role,
        },
      };
    },
  },
};

// // eslint-disable-next-line @typescript-eslint/require-await
// export default async function auth(req: NextApiRequest, res: NextApiResponse) {
// 	// @ts-ignore
// 	if (req.query.nextauth.includes('callback') && req.method === 'POST') {
// 		// eslint-disable-next-line no-console
// 		console.log('Handling callback request from my Identity Provider', req.body);
// 	}

// 	// Get a custom cookie value from the request
// 	const someCookie = req.cookies['some-custom-cookie'];

// 	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
// 	return NextAuth(req, res, {
// 		...authOptions,
// 		callbacks: {
// 			// eslint-disable-next-line @typescript-eslint/no-unused-vars
// 			session({ session, token }) {
// 				// Return a cookie value as part of the session
// 				// This is read when `req.query.nextauth.includes("session") && req.method === "GET"`
// 				// @ts-ignore
// 				session.someCookie = someCookie;
// 				return session;
// 			},
// 		},
// 	});
// }
