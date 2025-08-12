// app/api/spotify/topTracks/route.ts
import { NextResponse } from "next/server";

let cachedAccessToken: string | null = null;
let accessTokenExpires = 0;

async function refreshAccessToken() {
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

  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Failed to refresh token");

  cachedAccessToken = data.access_token;
  accessTokenExpires = Date.now() + data.expires_in * 1000;

  return cachedAccessToken;
}

async function getAccessToken() {
  if (cachedAccessToken && Date.now() < accessTokenExpires) {
    return cachedAccessToken;
  }
  return refreshAccessToken();
}

export async function GET() {
  try {
    const token = await getAccessToken();

    const res = await fetch(
      "https://api.spotify.com/v1/me/top/tracks?limit=5&time_range=short_term",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(data, { status: res.status });
    }

    return NextResponse.json(data);
  } catch (err: any) {
    console.error("Error fetching Spotify top tracks:", err);
    return NextResponse.json({ error: "Failed to fetch top tracks" }, { status: 500 });
  }
}
