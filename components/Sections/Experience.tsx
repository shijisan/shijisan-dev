import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { FreeMode, Autoplay, Pagination } from 'swiper/modules'

export default function Experience() {
  return (
    <section className="md:p-0 p-4 relative mt-8 md:scroll-mt-64" id="Experience">
      <div className="mx-auto max-w-7xl w-full">
        <div className="flex flex-col justify-center items-center">
          <div className="w-full mb-8">
            <h2 className="text-xl font-semibold font-poppins">Experience 💼</h2>
          </div>
          
          <div className="w-full">
            <Swiper
              slidesPerView={1}
              spaceBetween={16}
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
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                }
              }}
              modules={[FreeMode, Autoplay, Pagination]}
              className="w-full"
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
              }, {
                title: "Matcha Fuel",
                role: "Shopify E-Commerce Developer",
                desc: "Implementing custom API, and UI solutions using Replo, and Javascript.",
                year: "2025"
              }, {
                title: "Hipe Japan",
                role: "Software Engineer",
                desc: "Engineering software solutions for large-scale enterprise clients.",
                year: "2025"
              },
            ].reverse().map((item, i) => (
                <SwiperSlide
                  key={i}
                  className="h-52 bg-neutral-800/50 rounded-2xl p-6 shadow-md border border-primary/20 flex flex-col justify-between"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-primary font-poppins mb-2">{item.title}</h3>
                      <p className="text-sm text-foreground font-medium mb-3">{item.role}</p>
                      <p className="text-xs text-foreground/80 leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="mt-auto pt-4">
                      <span className="text-xs text-muted-foreground font-medium">{item.year}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="custom-pagination mt-8 flex w-full items-center justify-center gap-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}