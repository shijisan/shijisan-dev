// api/spotify/topTracks

import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET(){
   const session = await auth();
   const accessToken = session?.accessToken;
   const refreshToken = session?.refreshToken;

   const res = await fetch("https://api.spotify.com/v1/me/top/tracks?limit=5&time_range=short_term", {
      headers: {
         Authorization: `Bearer ${accessToken}`
      },
   });

   const data = await res.json();
   console.log("accessToken value:", accessToken);
   console.log("refresToken value:", refreshToken);
   console.log("env value:", process.env.NEXTAUTH_URL);
   return NextResponse.json(data);
}