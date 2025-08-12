import type { JWT } from "next-auth/jwt";

export async function refreshAccessToken(token?: JWT): Promise<JWT> {
  try {
    const basicAuth = Buffer.from(
      `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
    ).toString("base64");

    const res = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${basicAuth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
      }),
    });

    const refreshedToken = await res.json();

    if (!res.ok) throw refreshedToken;

    return {
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
      refreshToken: process.env.SPOTIFY_REFRESH_TOKEN!,
    } as JWT;
  } catch (error) {
    console.error("Error refreshing access token", error);
    return {
      error: "RefreshAccessTokenError",
    } as JWT;
  }
}
