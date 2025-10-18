import React, { useRef, useEffect, useState } from 'react'
import { Images } from '../../assets/assets'
import CountUp from 'react-countup'
import { Swiper, SwiperSlide } from 'swiper/react'
import { motion } from "motion/react";
import 'swiper/css'

const AllImages = [
  Images.landing1,
  Images.landing2,
  Images.landing3,
  Images.landing4,
  Images.landing5,
  Images.landing6,
  Images.landing7,
  Images.landing8,
  Images.landing9,
]

const stats = [
  { value: 16, label1: 'HOSPITALITY WORKERS', label2: 'IN THE U.S.', quantity: "M+" },
  { value: 900, label1: 'INDUSTRY POWERING', label2: 'OUR ECONOMY', prefix: '$', quantity: "B" },
  { value: 70, label1: 'TURNOVER IN THE FIRST YEAR — THE', label2: 'HIGHEST OF ANY U.S. SECTOR', suffix: '%' },
]

const ImagesSection = () => {
  const sectionRef = useRef(null)
  const [startCount, setStartCount] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setStartCount(true)
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full py-8 lg:px-5 flex flex-col items-center justify-center mt-10">


      <div className="w-full flex justify-center items-center mb-10">
        <div className="w-full px-2">
          {/* Desktop view (Static row) */}
          <div className="hidden lg:flex justify-center gap-2">
            {AllImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="w-[160px] xl:w-[180px] h-[250px] md:h-[200px] flex items-center justify-center rounded-3xl overflow-hidden shadow-md"
                style={{ userSelect: 'none', WebkitUserDrag: 'none' }}
              >
                <img
                  src={img}
                  alt=""
                  draggable={false}
                  className="w-full h-full object-cover select-none"
                  style={{ WebkitUserDrag: 'none', pointerEvents: 'none' }}
                />
              </motion.div>
            ))}
          </div>

          {/* Mobile & Tablet view (Swiper) */}
          <div className="lg:hidden">
            <Swiper
              spaceBetween={0}
              className="w-full select-none"
              breakpoints={{
                320: { slidesPerView: 1.05, spaceBetween: 5 },
                480: { slidesPerView: 1.25, spaceBetween: 5 },
                640: { slidesPerView: 2, spaceBetween: 5 },
                768: { slidesPerView: 2.4, spaceBetween: 5 },
                992: { slidesPerView: 3.2, spaceBetween: 5 },
              }}
              simulateTouch={true}
              touchStartPreventDefault={false}
              preventClicks={false}
            >
              {AllImages.map((img, idx) => (
                <SwiperSlide key={idx} className="flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, delay: idx * 0.06 }}
                    className="w-full h-[250px] md:h-[280px] flex items-center justify-center rounded-3xl overflow-hidden shadow-md"
                    style={{ userSelect: 'none', WebkitUserDrag: 'none' }}
                  >
                    <img
                      src={img}
                      alt=""
                      draggable={false}
                      onDragStart={(e) => e.preventDefault()}
                      onMouseDown={(e) => e.preventDefault()}
                      className="w-full h-full object-cover select-none"
                      style={{ WebkitUserDrag: 'none', pointerEvents: 'none' }}
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>


      {/* Stats Row */}
      <div ref={sectionRef} className="w-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-10 mt-14">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.2 }}
            className="flex flex-col items-center justify-center mac w-full lg:w-[350px]"
          >
            <span className="text-3xl lg:text-5xl font-bold text-[#3c1d00] flex items-center justify-center">
              {stat.prefix && <span>{stat.prefix}</span>}
              {startCount ? (
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={3.5}
                />
              ) : (
                0
              )}
              {stat.quantity && <span>{stat.quantity}</span>}
              {stat.suffix && <span>{stat.suffix}</span>}
            </span>
            <span className="dreaming mt-2 text-center w-[50%] lg:w-full text-xl lg:text-[1.5vw] font-semibold leading-none tracking-wider text-[#3c1d00]">
              {stat.label1}
            </span>
            <span className="dreaming mt-2 text-center w-[50%] lg:w-full text-xl lg:text-[1.5vw] font-semibold leading-none tracking-wider text-[#3c1d00]">
              {stat.label2}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div >
  )
}

export default ImagesSection