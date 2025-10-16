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
  { value: 16, label: 'HOSPITALITY WORKERS IN THE U.S.', quantity: "M+" },
  { value: 900, label: 'INDUSTRY POWERING OUR ECONOMY', prefix: '$', quantity: "B" },
  { value: 70, label: 'TURNOVER IN THE FIRST YEAR — THE HIGHEST OF ANY U.S. SECTOR', suffix: '%' },
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
      className="w-full py-12 px-2 md:px-5 flex flex-col items-center justify-center">
      {/* Images Row */}
      <div className="w-full flex justify-center items-center mb-10">

        {/* Desktop */}
        <div className="hidden md:flex gap-6">
          {AllImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.2 }}
              className="w-32 h-44"
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover rounded-[22px] shadow-md"
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="md:hidden w-full px-2">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.2}
            className="w-full"
          >
            {AllImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, }}
                  className="w-full h-44"
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-44 object-cover rounded-[22px] shadow-md"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Stats Row */}
      {/* Stats Row */}
      <div ref={sectionRef} className="w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-30 mt-2">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.2 }}
            className="flex flex-col items-center justify-center mac w-full md:w-[250px]"
          >
            <span className="text-3xl md:text-5xl font-bold text-[#3c1d00] flex items-center justify-center">
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
            <span className="outfit mt-2 text-center w-[50%] md:w-full text-xs md:text-base font-semibold tracking-wide text-[#3c1d00]">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default ImagesSection