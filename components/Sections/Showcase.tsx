"use client";

import Carousel from "../Carousel";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Notes from "../Notes";

type Track = {
   id: string,
   name: string,
   artists: Artists[],
   duration_ms: number,
   album: Album,
}

type Artists = {
   name: string,
}

type Album = {
   images: Image[]
}

type Image = {
   url: string
}

type RecentPlayed = {
   appid: number,
   name: string,
   img_icon_url: string;
   playtime_forever: number,
}

export type SlideItem = {
   id?: string | number;
   appid?: number;
   title: string;
   imageUrl: string;
   subtitle?: string | string[];
};

function mapSpotifyTracksToSlides(tracks: Track[]): SlideItem[] {
   if (!tracks) return [];

   return tracks.map(track => ({
      imageUrl: track.album.images[0].url,
      title: track.name,
      subtitle: track.artists.map(artist => artist.name),
   }));
}

function mapSteamGamesToSlides(games: RecentPlayed[]): SlideItem[] {
   return games.map((game, idx) => ({
      id: idx,
      appid: game.appid,
      imageUrl: `https://cdn.akamai.steamstatic.com/steam/apps/${game.appid}/header.jpg`,
      title: game.name,
      subtitle: `${Math.floor(game.playtime_forever / 60)} hrs played`,
   }));
}

export default function Showcase() {
   const [spotifySlides, setSpotifySlides] = useState<SlideItem[]>([]);
   const [steamSlides, setSteamSlides] = useState<SlideItem[]>([]);

   const placeholderSlide = {
      id: 1,
      appid: undefined,
      title: "No Tracks",
      imageUrl: "https://placehold.co/300/webp",
      subtitle: "Server error"
   }

   const placeholderArray = [placeholderSlide]

   const fetchTopTracks = async () => {
      const res = await fetch("/api/spotify/topTracks");
      const data = await res.json();
      const mapped = mapSpotifyTracksToSlides(data.items);
      setSpotifySlides(mapped);
   };

   const fetchRecentlyPlayed = async () => {
      const res = await axios.get("/api/steam/recentPlayed");
      const mapped = mapSteamGamesToSlides(res.data.response.games);
      setSteamSlides(mapped);
   }
   
   useEffect(() => {
      fetchTopTracks();
      fetchRecentlyPlayed();
   }, []);

   return (
      <section className="md:p-0 p-4 relative mt-16" id="Showcase">
         <div className="mx-auto max-w-7xl w-full">
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
               className="min-h-[70vh] flex flex-col justify-center"
            >
               <div className="mb-8">
                  <h1 className="md:text-xl text-lg font-semibold font-poppins text-primary">
                     Interactive Skills Showcase 👆
                  </h1>
               </div>

               <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                  {/* Spotify */}
                  <div className="bg-neutral-900 border border-primary/10 rounded-xl shadow-sm overflow-hidden">
                     <div className="p-4 pb-2">
                        <h2 className="text-sm text-foreground/70">
                           REST fetch from <span className="text-primary">Spotify API</span> + OAuth
                        </h2>
                     </div>
                     <div className="px-2 pb-4">
                        <Carousel slides={spotifySlides?.length > 0 ? spotifySlides : placeholderArray} />
                     </div>
                  </div>

                  {/* Steam */}
                  <div className="bg-neutral-900 border border-primary/10 rounded-xl shadow-sm overflow-hidden">
                     {steamSlides?.length > 0 ? (
                        <>
                           <div className="p-4 pb-2">
                              <h2 className="text-sm text-foreground/70">
                                 REST axios from <span className="text-primary">Steam API</span>
                              </h2>
                           </div>
                           <div className="px-2 pb-4">
                              <Carousel slides={steamSlides} />
                           </div>
                        </>
                     ) : (
                        <div className="p-4 flex items-center justify-center h-32">
                           <p className="text-xs text-foreground/40 italic">No games fetched 😔</p>
                        </div>
                     )}
                  </div>

                  {/* Notes */}
                  <div className="bg-neutral-900 border border-primary/10 rounded-xl shadow-sm overflow-hidden">
                     <div className="p-4 pb-2">
                        <h2 className="text-sm text-foreground/70">
                           CRUD <span className="text-primary">Notes</span>
                        </h2>
                     </div>
                     <div className="px-2 pb-4">
                        <Notes />
                     </div>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>
   )
}