import React, { useEffect } from 'react'
import { Images } from '../../assets/assets'
import { Swiper, SwiperSlide } from 'swiper/react'
import { motion } from "motion/react";
import 'swiper/css'

const AllImages = [
    Images.restlanding1,
    Images.restlanding2,
    Images.restlanding3,
    Images.restlanding4,
    Images.restlanding5,
]



const ImagesSection = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full py-7 px-2 md:px-5 flex flex-col items-center justify-center">
            {/* Images Row */}
            <div className="w-full flex justify-center items-center mb-10">

                {/* Desktop */}
                <div className="hidden md:flex gap-8 justify-center w-full">
                    {AllImages.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: idx * 0.2 }}
                            className="flex-1 max-w-[260px] flex items-center justify-center"
                        >
                            <img
                                src={img}
                                alt=""
                                className="w-full h-full object-cover rounded-[32px] shadow-lg"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Swiper */}
                <div className="md:hidden w-full">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1.2}
                        className="w-full"
                    >
                        {AllImages.map((img, idx) => (
                            <SwiperSlide key={idx}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: idx * 0.2 }}
                                    className="w-full h-[260px]"
                                >
                                    <img
                                        src={img}
                                        alt=""
                                        className="w-full h-full object-cover rounded-[32px] shadow-md"
                                    />
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

        </motion.div>
    )
}

export default ImagesSection