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

   const placeholderArray = [
      placeholderSlide
   ]


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

   const fetchGithubActivity = async () => {
      const query = `

      `
   }

   useEffect(() => {

      fetchTopTracks();
      fetchRecentlyPlayed();
   }, []);

   return (
      <>
         <section className="md:mt-0 mt-12 text-foreground">
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            >
               <div className="max-w-7xl mx-auto min-h-[70vh] flex flex-col md:p-0 p-4">
                  <h1 className="md:text-xl text-lg font-semibold font-poppins text-primary mb-4">
                     Interactive Skills Showcase 👆
                  </h1>

                  <div className="flex md:flex-row flex-col gap-8">
                     {/* Spotify */}
                     <div className="h-fit md:w-1/3 w-full bg-neutral-900 border border-primary/10 rounded-xl shadow-sm pt-3">
                        <h2 className="text-sm text-foreground/70 mb-2 md:ml-8 md:text-start text-center">
                           REST fetch from <span className="text-primary">Spotify API</span> + OAuth
                        </h2>
                        <Carousel slides={spotifySlides?.length > 0 ? spotifySlides : placeholderArray} />
                     </div>

                     {/* Steam */}
                     <div className="h-fit md:w-1/3 w-full bg-neutral-900 border border-primary/10 rounded-xl shadow-sm pt-3">
                        {steamSlides?.length > 0 ? (
                           <>
                              <h2 className="text-sm text-foreground/70 mb-2 md:ml-8 md:text-start text-center">
                                 REST axios from <span className="text-primary">Steam API</span>
                              </h2>
                              <Carousel slides={steamSlides} />
                           </>
                        ) : (
                           <p className="text-xs text-foreground/40 italic">No games fetched 😔</p>
                        )}
                     </div>

                     {/* Notes */}
                     <div className="h-fit md:w-1/3 w-full bg-neutral-900 border border-primary/10 rounded-xl shadow-sm pt-3">
                        <h2 className="text-sm text-foreground/70 mb-2 md:ml-8 md:text-start text-center">
                           CRUD <span className="text-primary">Notes</span>
                        </h2>
                        <Notes />
                     </div>
                  </div>
               </div>
            </motion.div>
         </section>

      </>
   )
}