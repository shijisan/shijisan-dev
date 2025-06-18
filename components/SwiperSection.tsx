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
          <div className="flex items-center justify-center px-4">
            <div className='flex flex-col space-y-4'>
              <Image src="https://placehold.co/426x240/webp" height={240} width={426} alt="test" />
              <h1>Title 1</h1>
              <p>Body</p>
              <div className="flex gap-2">
                <button className='btn border-2 bg-foreground/0 hover:bg-foreground/10 border-foreground text-foreground'>Github</button>
                <button className='btn bg-blue-500'>Live Link</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center px-4">
            <div className='flex flex-col space-y-4'>
              <Image src="https://placehold.co/426x240/webp" height={240} width={426} alt="test" />
              <h1>Title 2</h1>
              <p>Body</p>
              <div className="flex gap-2">
                <button className='btn border-2 bg-foreground/0 hover:bg-foreground/10 border-foreground text-foreground'>Github</button>
                <button className='btn bg-blue-500'>Live Link</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center px-4">
            <div className='flex flex-col space-y-4'>
              <Image src="https://placehold.co/426x240/webp" height={240} width={426} alt="test" />
              <h1>Title 3</h1>
              <p>Body</p>
              <div className="flex gap-2">
                <button className='btn border-2 bg-foreground/0 hover:bg-foreground/10 border-foreground text-foreground'>Github</button>
                <button className='btn bg-blue-500'>Live Link</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center px-4">
            <div className='flex flex-col space-y-4'>
              <Image src="https://placehold.co/426x240/webp" height={240} width={426} alt="test" />
              <h1>Title 4</h1>
              <p>Body</p>
              <div className="flex gap-2">
                <button className='btn border-2 bg-foreground/0 hover:bg-foreground/10 border-foreground text-foreground'>Github</button>
                <button className='btn bg-blue-500'>Live Link</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}