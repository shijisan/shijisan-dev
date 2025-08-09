"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import PingPongMarquee from "./PingPongMarquee";
import { SlideItem } from "./Sections/Showcase";

type CarouselProps = {
   slides: SlideItem[];
};

export default function Carousel({ slides }: CarouselProps) {
   const [activeIndex, setActiveIndex] = useState(0);

   const next = () => {
      if (activeIndex + 1 < slides.length) setActiveIndex(activeIndex + 1);
   };

   const prev = () => {
      if (activeIndex > 0) setActiveIndex(activeIndex - 1);
   };

   return (
      <div className="relative w-full h-fit">
         <ul className="w-full flex flex-col items-center">
            {slides.map((slide, index) => (
               <li
                  key={index}
                  className={`
                     transition-opacity duration-300
                     ${index === activeIndex ? "opacity-100 block" : "opacity-0 hidden"}
                     w-full bg-neutral-800 border border-primary/10 rounded-lg p-4
                  `}
               >
                  <div className="relative flex items-center justify-between md:gap-8 gap-3 w-full">
                     {/* Prev Button */}
                     <button
                        className={`
                           carousel-btn btn
                           ${activeIndex === 0 ? "cursor-not-allowed text-muted-foreground" : ""}
                           md:static absolute -left-3 top-1/2 -translate-y-1/2 z-10 -mt-4
                        `}
                        onClick={prev}
                        disabled={activeIndex === 0}
                     >
                        <FaChevronLeft />
                     </button>

                     {/* Slide Content */}
                     <div className="flex flex-col gap-4 md:w-60 w-48 mx-auto overflow-x-clip">
                        <Image
                           src={slide.imageUrl}
                           alt={`${slide.title}'s image`}
                           height={300}
                           width={slide.appid ? 700 : 300}
                           className="rounded-sm md:size-60 size-48 object-contain bg-neutral-900"
                        />

                        <div className="flex flex-col gap-1">
                           <div className="relative md:max-w-60 h-6 overflow-hidden">
                              <PingPongMarquee text={slide.title} />
                           </div>
                           <ul className="text-sm text-foreground/70 leading-snug">
                              {Array.isArray(slide.subtitle) ? (
                                 slide.subtitle.map((item, idx) => (
                                    <p key={idx}>{item}</p>
                                 ))
                              ) : (
                                 <p>{slide.subtitle}</p>
                              )}
                           </ul>
                        </div>
                     </div>

                     {/* Next Button */}
                     <button
                        className={`
                           carousel-btn btn
                           ${activeIndex + 1 >= slides.length ? "cursor-not-allowed text-muted-foreground" : ""}
                           md:static absolute -right-3 top-1/2 -translate-y-1/2 z-10 -mt-4
                        `}
                        onClick={next}
                        disabled={activeIndex + 1 >= slides.length}
                     >
                        <FaChevronRight />
                     </button>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
}
