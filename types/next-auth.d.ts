import NextAuth from "next-auth";
import type { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string;
    refreshToken: string;
    accessTokenExpires: number;
    error?: string;
  }
}

declare module "next-auth" {
  interface Session {
    accessToken: string;
    refreshToken: string;
    expiresAt: number;
    error?: string;
  }
}
