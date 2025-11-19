"use client";

import Image from "next/image";
import { FaChevronDown, FaGlobe, FaRocket } from "react-icons/fa6";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
import { NavProps } from "../Nav";
import { useRouter } from "next/navigation";


export default function Header({ onChangeSect }: NavProps){

  const router = useRouter();

   return(
      <>
         <header id="About">
          <motion.div
            className="min-h-screen flex items-center justify-center flex-col"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="flex flex-col md:gap-3.5 gap-2 font-poppins font-medium md:text-5xl text-2xl">
              <h1 className="text-center tracking-tight inline-flex items-center"><span className="inline-block me-2"><Image className="md:size-14 size-8 rounded-full " src="/profile.webp" height={100} width={100} alt="Christian James Santos Profile Picture" /></span>Christian James Santos</h1>
              <div className="flex gap-4 justify-center items-center">
                <h1 className=" tracking-tight">Building the future,</h1>
                <div className="rounded-full overflow-clip size-fit">
                  <Image className="md:w-32 w-16 object-cover pointer-events-none" src="/header-image.avif" alt="cool image" height={100} width={300} />
                </div>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <div className="flex md:text-lg text-sm gap-2">
                  <div className="bg-primary rounded-full w-10 md:w-12 aspect-square flex items-center justify-center">
                    <FaGlobe className="text-white md:text-xl text-base" />
                  </div>
                  <div className="bg-foreground rounded-full w-10 md:w-12 aspect-square flex items-center justify-center -ml-2 z-10">
                    <FaRocket className="text-neutral-800 md:text-xl text-base" />
                  </div>
                </div>
                <h1 className="text-neutral-400 tracking-tight">
                  <Typewriter
                    words={["", "One line at a time..."]}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h1>
              </div>
            </div>
            <div className="mt-8 max-w-xl md:px-0 px-4 text-start md:text-sm text-xs">
              <p
                className="text-center text-gray-400"
              >
                Hey 👋 I&apos;m a Software Engineer with a broad scope of tech capabilities, and a specialization in Web Apps. I am 19 years old, self-taught and an advocate for open-source, and secure software.
              </p>
              <br />

            </div>
            <div className="mt-8 gap-4 flex">
              <button onClick={() => router.push("/#Techs")} className="rounded-full px-4 py-2 bg-primary md:text-sm text-xs btn">Learn More</button>
              <button onClick={() => router.push("/#Contact")} className="rounded-full px-4 py-2 border-2 border-primary md:text-sm text-xs text-primary btn">Let&apos;s Talk</button>
            </div>

            <FaChevronDown className="absolute bottom-1/12 animate-bounce text-gray-400" />
          </motion.div>

        </header>
      </>
   )
}