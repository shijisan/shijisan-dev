import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { FreeMode, Autoplay, Pagination } from 'swiper/modules'

export default function Experience() {
  return (
    <>
      <section className="md:p-0 p-4 relative mt-8" id="Experience">
         <div className='-mt-[10%]! w-full relative flex flex-col justify-center items-center md:min-h-fit min-h-screen'>
         <div className='mx-auto max-w-7xl w-full'>
                    <h2 className="text-xl font-semibold font-poppins">Experience 💼</h2>

         </div>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={8}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
          }}
          modules={[FreeMode, Autoplay, Pagination]}
          className="w-full mt-4"
        >
          {[{
            title: "The VA BAR",
            role: "Web Dev Instructor & Freelancer",
            desc: "Taught two batches of beginners in front-end development.",
            year: "2024"
          }, {
            title: "VAMEPLEASE",
            role: "System Automation Intern",
            desc: "Helped build a SaaS-style business management hub as an intern.",
            year: "2024"
          }, {
            title: "Hambi Media",
            role: "Landing Page Developer",
            desc: "Created Shopify landing pages using Replo, based on provided designs.",
            year: "2025"
          }, {
            title: "Freesoul",
            role: "Landing Page Developer",
            desc: "Built responsive landing pages based on modern design guidelines.",
            year: "2025"
          }].map((item, i) => (
            <SwiperSlide
              key={i}
              className="!w-full md:!w-5/12 h-44 md:h-48 bg-neutral-800/50 md:rounded-2xl rounded-lg py-12 px-4 shadow-md flex flex-col justify-between items-center border border-primary/20"
            >
              <div className="flex flex-col justify-between items-center w-full">
                <div>
                  <h3 className="text-xl font-semibold text-primary font-poppins">{item.title}</h3>
                  <p className="text-sm text-foreground">{item.role}</p>
                  <p className="text-xs text-foreground mt-2 leading-relaxed">{item.desc}</p>
                  <span className="text-xs text-muted-foreground mt-3">{item.year}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

         <div className="custom-pagination swiper-pagination static! mt-8 gap-1.5 flex w-full items-center justify-center"></div>


         </div>


      </section>
    </>
  )
}
