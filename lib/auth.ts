// lib/auth.ts
import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import { refreshAccessToken } from "@/utils/refreshAccessToken";
import type { JWT } from "next-auth/jwt";

interface ExtendedToken extends JWT {
  accessToken: string;
  refreshToken: string;
  accessTokenExpires: number;
  error?: string;
}

export const authOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID!,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
      authorization: {
        url: "https://accounts.spotify.com/authorize",
        params: {
          scope: "user-read-email user-top-read",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      const t = token as ExtendedToken;

     
      if (account) {
        return {
          accessToken: account.access_token!,
          refreshToken: account.refresh_token!,
          accessTokenExpires: account.expires_at! * 1000,
        };
      }

     
      if (t.accessTokenExpires && Date.now() < t.accessTokenExpires) {
        return t;
      }

     
      const refreshed = await refreshAccessToken(t);

      if (refreshed.error) {
        return {
          ...t,
          error: "RefreshAccessTokenError",
        };
      }

      return {
        ...t,
        accessToken: refreshed.accessToken,
        refreshToken: refreshed.refreshToken ?? t.refreshToken,
        accessTokenExpires: refreshed.accessTokenExpires,
        error: undefined,
      };
    },

    async session({ session, token }) {
      const t = token as ExtendedToken;

      return {
        ...session,
        accessToken: t.accessToken,
        refreshToken: t.refreshToken,
        expiresAt: t.accessTokenExpires,
        error: t.error,
      };
    },
  },
} satisfies Parameters<typeof NextAuth>[0];

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
