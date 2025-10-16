import React from 'react'
import { Images } from '../../assets/assets'
import { motion } from "motion/react";

const PartnersLanding = () => {
  return (
    <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className='h-[70vh] md:h-[40vh] lg:h-[90vh] w-full flex flex-col items-center justify-center gap-10 px-5 mt-20 relative'>

            <motion.img
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1, type: 'spring', stiffness: 100 }}
                className='w-24' src={Images.smallLogo} alt="" />

            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className='mac text-2xl lg:text-5xl text-center w-full lg:w-[70%] font-semibold text-[#3c1d00]'>Grow with Us. Reach Thousands of Hospitality Workers & Families.</motion.h1>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className='text-center text-md lg:text-xl w-full lg:w-[63%]'>Become a Founding WellMe Partner and deliver your content or services directly to the people who need them most.</motion.p>

                <motion.button 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className='cursor-pointer px-5 py-3 font-semibold rounded-full border border-[#c6d1ed] bg-[#c6d1ed] transition-colors duration-200 hover:bg-transparent hover:border-black hover:text-[#111] text-sm'>
                    Become a Partner
                </motion.button>

                </motion.div>
  )
}

export default PartnersLanding