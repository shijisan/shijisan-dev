import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await axios.get(
      "https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/",
      {
        params: {
          key: process.env.STEAM_KEY,
          steamid: "76561198359424792",
          format: "json",
        },
      }
    );

    return NextResponse.json(res.data);
  } catch (err) {
    console.error("Failed to fetch recently played games:", err);
    return NextResponse.json({ error: "Failed to fetch games" }, { status: 500 });
  }
}
