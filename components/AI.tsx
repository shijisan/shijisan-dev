"use client"

import { useEffect } from "react";

export default function AU() {

const fetchAI = async () => {
   console.log("Fetching response...");
   try {
      const res = await fetch("https://shijisan-portfolio-demo.hf.space/greet");

      if (!res.ok) {
         const text = await res.text();
         throw new Error(`Server error ${res.status}: ${text}`);
      }

      const data = await res.json();
      console.log(data);
   } catch (err) {
      console.error("Failed to fetch AI response", err);
   }
}


   useEffect(() => {
      fetchAI();
   }, []);

   return (
      <>

      </>
   )
}