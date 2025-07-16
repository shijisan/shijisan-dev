"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

export default function SwiperSection() {
  return (
    <>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        loop={true}
      >
        <SwiperSlide>
          <div className="flex items-center justify-center px-4">
            <div className='flex flex-col space-y-4 max-w-sm'>
              <div className='h-[240px] rounded-sm'>
                <iframe
                  className="w-full aspect-video rounded-sm bg-black"
                  src="https://www.youtube.com/embed/B_lYfQd57vQ?si=B5z7MY6hjYMkstMk?rel=0&controls=0&modestbranding=1&autoplay=0&loop=1"
                  title="Sum-AI-Rise"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  height="240px"
                  allowFullScreen
                ></iframe>
              </div>
              <div>
                <h1>Sum-AI-Rise</h1>
                <p className='mt-2'>An AI Powered document summarization tool that accepts PDF, DOCX, and PPTX. Open source and serverless!</p>
              </div>
              <div className="flex gap-4">
                <Link href="https://freesoul.com/pages/train-smarter-with-hydracreatine" className='btn bg-foreground rounded-full'>Live Link</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center px-4">
            <div className='flex flex-col space-y-4 max-w-sm'>
              <div className='h-[240px] rounded-sm'>
                <iframe
                  className="w-full aspect-video rounded-sm bg-black"
                  src="https://www.youtube.com/embed/zUYugyH97Rg?rel=0&controls=0&modestbranding=1&autoplay=0&loop=1&playlist=zUYugyH97Rg&vq=hd1080p"
                  title="Free Soul HydraCreatine"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  height="240px"
                  allowFullScreen
                ></iframe>
              </div>
              <div>
                <h1>Free Soul HydraCreatine</h1>
                <p className='mt-2'>A Landing Page built with Replo and Shopify Integration for a UK-based health supplement company.</p>
              </div>
              <div className="flex gap-4">
                <Link href="https://freesoul.com/pages/train-smarter-with-hydracreatine" className='btn bg-foreground rounded-full'>Live Link</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center px-4">
            <div className='flex flex-col space-y-4 max-w-sm'>
              <iframe
                className="w-full aspect-video rounded-sm bg-black"
                src="https://www.youtube.com/embed/TlVkysaG7GE?si=4lP1eZXAWOpWiH_A?rel=0&controls=0&modestbranding=1&autoplay=0&loop=1&vq=hd1080p"
                title="Chat-TFU"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                height="240px"
                allowFullScreen
              ></iframe>
              <div>
                <h1>Chat-TFU</h1>
                <p className='mt-2'>An End-to-End Encryptied Messaging Web Application with Serverless Peer-to-Peer Video Call.</p>
              </div>
              <div className="flex gap-4">
                <Link href="https://github.com/shijisan/chat-tfu" className='btn border-2 border-foreground text-foreground rounded-full bg-white'>Github</Link>
                <Link href="https://chat-tfu.vercel.app" className='btn bg-foreground rounded-full'>Live Link</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center px-4">
            <div className='flex flex-col space-y-4 max-w-sm'>
              <iframe
                className="w-full aspect-video rounded-sm bg-black"
                src="https://youtube.com/embed/igL7F0MsUeA?si=T7li4hJQI5m2BnwM?rel=0&controls=0&modestbranding=1&autoplay=0&loop=1&vq=hd1080p"
                title="Stock Knowledge"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                height="240px"
                allowFullScreen
              ></iframe>
              <div>
                <h1>Stock Knowledge</h1>
                <p className='mt-2'>A simple inventory management mobile app made with React Native (Expo) and NativeWind</p>
              </div>
              <div className="flex gap-4">
                <Link href="https://github.com/shijisan/stock-knowledge" className='btn border-2 border-foreground text-foreground rounded-full bg-white'>Github</Link>
                <Link href="https://expo.dev/accounts/shijisan/projects/stock-knowledge/builds/014226d7-f045-4fac-9bf4-ea22bb0680da" className='btn bg-foreground rounded-full'>Download Link</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}