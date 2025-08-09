// api/spotify/topTracks

import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET(){
   const session = await auth();
   const accessToken = session?.accessToken;

   const res = await fetch("https://api.spotify.com/v1/me/top/tracks?limit=5&time_range=short_term", {
      headers: {
         Authorization: `Bearer ${accessToken}`
      },
   });

   const data = await res.json();
   console.log("accessToken value:", accessToken);
   return NextResponse.json(data);
}