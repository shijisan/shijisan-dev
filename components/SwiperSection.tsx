"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
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
              <Image className='h-[240px]' src="/chat-tfu-sc.webp" height={240} width={426} alt="test" />
              <h1>Chat-TFU</h1>
              <p>An End-to-End Encryptied Messaging Web Application with Serverless Peer-to-Peer Video Call.</p>
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
              <Image className='h-[240px]' src="/phx-write-sc.webp" height={240} width={426} alt="test" />
              <h1>PHX-Write</h1>
              <p>A privacy-focused, offline-first notes app with E2E encryption, seamless local-to-cloud migration, and a clean minimalist UI.</p>
              <div className="flex gap-4">
                <Link href="https://github.com/shijisan/PHX-Write" className='btn border-2 border-foreground text-foreground rounded-full bg-white'>Github</Link>
                <Link href="https://phx-write.vercel.app" className='btn bg-foreground rounded-full'>Live Link</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center px-4">
            <div className='flex flex-col space-y-4 max-w-sm'>
              <Image className='h-[240px]' src="/replo-plug-sc.webp" height={240} width={426} alt="test" />
              <h1>Replo Plug</h1>
              <p>Documentation site with admin panel and documentation/article search.</p>
              <div className="flex gap-4">
                <Link href="https://github.com/shijisan/replo-plug" className='btn border-2 border-foreground text-foreground rounded-full bg-white'>Github</Link>
                <Link href="https://replo-plug.vercel.app" className='btn bg-foreground rounded-full'>Live Link</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>



      </Swiper>
    </>
  )
}