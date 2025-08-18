import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { motion } from "motion/react";

export default function Projects() {
   return (
      <>
         <section id="Projects">
            <motion.div
               className="flex items-center justify-center min-h-screen"
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3, duration: 0.6 }}
            >

               <ul className="mx-auto max-w-7xl flex flex-col gap-8 pt-[10vh]">

                  <h2 className="text-xl font-semibold font-poppins md:ps-0 ps-4">Projects 🌐</h2>


                  <div className="flex md:flex-row flex-col gap-8 md:px-0 px-4 max-w-screen">
                     <li className="hover:scale-105 transition-transform rounded-2xl bg-primary/5 md:w-1/3 w-full p-4 flex flex-col gap-2">
                        <iframe
                           className="w-full aspect-video rounded-xl bg-black"
                           src="https://www.youtube.com/embed/B_lYfQd57vQ?si=B5z7MY6hjYMkstMk?rel=0&controls=0&modestbranding=1&autoplay=0&loop=1"
                           title="Sum-AI-Rise"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                           referrerPolicy="strict-origin-when-cross-origin"
                           height="240px"
                           allowFullScreen
                        ></iframe>
                        <div className="flex gap-2 flex-wrap">
                           <div className="rounded-full px-3 py-1 text-xs text-primary bg-primary/5">
                              <p className="whitespace-nowrap">AI Integration</p>
                           </div>
                           <div className="rounded-full px-3 py-1 text-xs text-primary bg-primary/5">
                              <p className="whitespace-nowrap">Text Summarazition</p>
                           </div>
                           <div className="rounded-full px-3 py-1 text-xs text-primary bg-primary/5">
                              <p className="whitespace-nowrap">Doc Scanning</p>
                           </div>
                        </div>
                        <h1 className="text-lg">Sum-AI-Rise</h1>
                        <div className="text-gray-400 text-xs">
                           <p>An AI Powered document summarization tool that accepts PDF, DOCX, and PPTX. Open source and serverless!</p>
                        </div>
                        <div className="flex wrap gap-3 mt-2">
                           <Link className="block w-fit text-sm btn bg-primary py-2 px-4 rounded-full hover:brightness-90 active:opacity-90 transition-all" href="https://sum-ai-rise.vercel.app">Live Link</Link>
                           <Link href="https://github.com/shijisan/Sum-AI-Rise" className="block bg-primary/0 hover:bg-primary/5 rounded-full px-4 py-2 border-2 border-primary md:text-sm text-xs text-primary transition-all">Source</Link>
                        </div>
                     </li>

                     <li className="hover:scale-105 transition-transform rounded-2xl bg-primary/5 md:w-1/3 w-full p-4 flex flex-col gap-2">
                        <iframe
                           className="w-full aspect-video rounded-xl bg-black"
                           src="https://www.youtube.com/embed/zUYugyH97Rg?rel=0&controls=0&modestbranding=1&autoplay=0&loop=1&playlist=zUYugyH97Rg&vq=hd1080p"
                           title="Free Soul HydraCreatine"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                           referrerPolicy="strict-origin-when-cross-origin"
                           height="240px"
                           allowFullScreen
                        ></iframe>
                        <div className="flex gap-2 wrap">
                           <div className="rounded-full px-3 py-1 text-xs text-primary bg-primary/5">
                              <p className="whitespace-nowrap">UI Implementation</p>
                           </div>
                           <div className="rounded-full px-3 py-1 text-xs text-primary bg-primary/5">
                              <p className="whitespace-nowrap">Shopify</p>
                           </div>
                        </div>
                        <h1 className="text-lg">Freesoul Product Landing Pages</h1>
                        <div className="text-gray-400 text-xs">
                           <p>Made and ammended Landing Pages with Replo and Shopify Integration for a UK-based health supplement company.</p>
                        </div>
                        <div className="flex wrap gap-3 mt-2">
                           <Link className="block w-fit text-sm btn bg-primary py-2 px-4 rounded-full hover:brightness-90 active:opacity-90 transition-all" href="https://freesoul.com/pages/train-smarter-with-hydracreatine">Live Link</Link>
                        </div>
                     </li>

                     <li className="hover:scale-105 transition-transform rounded-2xl bg-primary/5 md:w-1/3 w-full p-4 flex flex-col gap-2">
                        <iframe
                           className="w-full aspect-video rounded-xl bg-black"
                           src="https://www.youtube.com/embed/TlVkysaG7GE?rel=0&controls=0&modestbranding=1&autoplay=0&loop=1&vq=hd1080p&playlist=TlVkysaG7GE"
                           title="Chat-TFU"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                           referrerPolicy="strict-origin-when-cross-origin"
                           height="240px"
                           allowFullScreen
                        ></iframe>
                        <div className="flex gap-2 wrap">
                           <div className="rounded-full px-3 py-1 text-xs text-primary bg-primary/5">
                              <p className="whitespace-nowrap">End-to-End Encryption</p>
                           </div>
                           <div className="rounded-full px-3 py-1 text-xs text-primary bg-primary/5">
                              <p className="whitespace-nowrap">Web-RTC</p>
                           </div>
                        </div>
                        <h1 className="text-lg">Chat-TFU</h1>
                        <div className="text-gray-400 text-xs">
                           <p>An End-to-End Encryptied Messaging Web Application with Serverless Peer-to-Peer Video Call.</p>
                        </div>
                        <div className="flex wrap gap-3 mt-2">
                           <Link className="block w-fit text-sm btn bg-primary py-2 px-4 rounded-full hover:brightness-90 active:opacity-90 transition-all" href="https://chat-tfu.vercel.app">Live Link</Link>
                           <Link href="https://github.com/shijisan/chat-tfu" className="block bg-primary/0 hover:bg-primary/5 rounded-full px-4 py-2 border-2 border-primary md:text-sm text-xs text-primary transition-all">Source</Link>
                        </div>
                     </li>

                  </div>

                  <p className="text-xs text-gray-400 text-center">More projects at my <Link className="underline" href="https://github.com/shijisan">GitHub</Link>! <FaGithub className="inline" /></p>

               </ul>
            </motion.div>
         </section>
      </>
   )
}