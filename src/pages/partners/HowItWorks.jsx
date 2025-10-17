import React from 'react'
import { Images } from '../../assets/assets'
import { motion } from "motion/react";

const HowItWorks = () => {
  return (
    <div className="relative w-full min-h-[700px] flex flex-col items-center justify-center py-10 mt-20">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="text-2xl md:text-3xl font-bold text-[#3c1d00] text-center mb-10 tracking-wide mac">
        HOW IT WORKS
      </motion.h2>
      <img className='w-xl' src={Images.howItWorkImg} alt="" />
    </div>
  )
}

export default HowItWorks