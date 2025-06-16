"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

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
          <div className="flex items-center justify-center">
            <div className='flex flex-col space-y-4'>
              <Image src="https://placehold.co/426x240/webp" height={240} width={426} alt="test" />
              <h1>Title</h1>
              <p>Body</p>
              <div className="flex gap-2">
                <button className='btn border border-foreground text-foreground'>Github</button>
                <button className='btn bg-blue-500'>Live Link</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center">
            <div className='flex flex-col space-y-4'>
              <Image src="https://placehold.co/426x240/webp" height={240} width={426} alt="test" />
              <h1>Title</h1>
              <p>Body</p>
              <div className="flex gap-2">
                <button className='btn border border-foreground text-foreground'>Github</button>
                <button className='btn bg-blue-500'>Live Link</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center">
            <div className='flex flex-col space-y-4'>
              <Image src="https://placehold.co/426x240/webp" height={240} width={426} alt="test" />
              <h1>Title</h1>
              <p>Body</p>
              <div className="flex gap-2">
                <button className='btn border border-foreground text-foreground'>Github</button>
                <button className='btn bg-blue-500'>Live Link</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center">
            <div className='flex flex-col space-y-4'>
              <Image src="https://placehold.co/426x240/webp" height={240} width={426} alt="test" />
              <h1>Title</h1>
              <p>Body</p>
              <div className="flex gap-2">
                <button className='btn border border-foreground text-foreground'>Github</button>
                <button className='btn bg-blue-500'>Live Link</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}