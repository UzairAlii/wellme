import React from 'react'
import { motion } from "motion/react";
import { Images } from '../../assets/assets';

const AboutLanding = () => {
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

            <div className='flex flex-col items-center justify-center w-full gap-3'>
              {/* Mobile */}
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className='mac block lg:hidden text-2xl lg:text-5xl text-center w-full lg:w-[70%] font-semibold text-[#251500]'>Our Mission:</motion.h1>
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className='mac block lg:hidden text-2xl lg:text-5xl text-center w-full lg:w-[70%] font-semibold text-[#c4822b]'>Transform Hospitality Through Wellness</motion.h1>
                    {/* desktop  */}
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className='mac hidden lg:block text-2xl lg:text-5xl text-center w-full lg:w-[70%] font-semibold text-[#251500]'>Our Mission:  </motion.h1>
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className='mac hidden lg:block text-2xl lg:text-5xl text-center w-full lg:w-[70%] font-semibold text-[#c4822b]'>Transform Hospitality </motion.h1>
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className='mac hidden lg:block text-2xl lg:text-5xl text-center w-full lg:w-[70%] font-semibold text-[#c4822b]'>Through Wellness </motion.h1>
            </div>

            <div className='w-full flex flex-col items-center justify-center'>
                {/* MOBILE */}
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className='text-center block lg:hidden text-md lg:text-xl w-full lg:w-[63%] openSauceRegular'>We believe the people who power the hospitality industry deserve access to the same care, support, and opportunities they provide to others.</motion.p>

                {/* DESKTOP */}
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className='text-center hidden lg:block text-md lg:text-xl w-full lg:w-[63%]'>We believe the people who power the hospitality industry</motion.p>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className='text-center hidden lg:block text-md lg:text-xl w-full lg:w-[63%]'>deserve access to the same care, support, and </motion.p>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className='text-center hidden lg:block text-md lg:text-xl w-full lg:w-[63%]'>opportunities they provide to others.</motion.p>

            </div>

        </motion.div>
  )
}

export default AboutLanding