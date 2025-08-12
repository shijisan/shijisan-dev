// app/api/spotify/topTracks/route.ts
import { NextResponse } from "next/server";

let cachedAccessToken: string | null = null;
let accessTokenExpires = 0;

async function refreshAccessToken() {
  try {
    const basicAuth = Buffer.from(
      `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
    ).toString("base64");

    console.log("Attempting to refresh token...");

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
    
    console.log("Refresh response:", { status: res.status, data });

    if (!res.ok) {
      throw new Error(`Refresh failed: ${JSON.stringify(data)}`);
    }

    cachedAccessToken = data.access_token;
    accessTokenExpires = Date.now() + (data.expires_in * 1000) - 60000; // 1 min buffer

    console.log("Token refreshed successfully");
    return cachedAccessToken;
  } catch (error) {
    console.error("Refresh token error:", error);
    throw error;
  }
}

async function getAccessToken() {
  // Check if we have a valid cached token
  if (cachedAccessToken && Date.now() < accessTokenExpires) {
    console.log("Using cached token");
    return cachedAccessToken;
  }

  console.log("Token expired or missing, refreshing...");
  return refreshAccessToken();
}

export async function GET() {
  try {
    const token = await getAccessToken();

    console.log("Making Spotify API request...");

    const res = await fetch(
      "https://api.spotify.com/v1/me/top/tracks?limit=5&time_range=short_term",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const data = await res.json();

    console.log("Spotify API response:", { status: res.status, data });

    if (!res.ok) {
      // If we get a 401, try refreshing the token once more
      if (res.status === 401) {
        console.log("Got 401, forcing token refresh...");
        const newToken = await refreshAccessToken();
        
        const retryRes = await fetch(
          "https://api.spotify.com/v1/me/top/tracks?limit=5&time_range=short_term",
          {
            headers: { Authorization: `Bearer ${newToken}` },
          }
        );
        
        const retryData = await retryRes.json();
        
        if (!retryRes.ok) {
          return NextResponse.json(retryData, { status: retryRes.status });
        }
        
        return NextResponse.json(retryData);
      }
      
      return NextResponse.json(data, { status: res.status });
    }

    return NextResponse.json(data);
  } catch (err: unknown) {
    console.error("Error fetching Spotify top tracks:", err);
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ 
      error: "Failed to fetch top tracks", 
      details: errorMessage 
    }, { status: 500 });
  }
}