import React from 'react'
import { motion } from "motion/react";
import { Images } from '../../assets/assets';

const RestLanding = () => {
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
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className='mac text-2xl lg:text-5xl text-center w-full lg:w-[70%] font-semibold text-[#251500]'>Wellness That</motion.h1>
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className='mac text-2xl lg:text-5xl text-center w-full lg:w-[70%] font-semibold text-[#251500]'>Strengthens Your </motion.h1>
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className='mac text-2xl lg:text-5xl text-center w-full lg:w-[70%] font-semibold text-[#251500]'>Workforce.</motion.h1>
            </div>

            <div className='w-full flex flex-col items-center justify-center'>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className='text-center block lg:hidden text-md lg:text-xl w-full lg:w-[63%] openSauceRegular'>Support your staff. Reduce turnover. Include families. WellMe makes it simple.</motion.p>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className='text-center hidden lg:block text-md lg:text-xl w-full lg:w-[63%]'>Support your staff. Reduce turnover. Include</motion.p>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className='text-center hidden lg:block text-md lg:text-xl w-full lg:w-[63%]'>families. WellMe makes it simple.</motion.p>

            </div>

            <motion.button
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className='cursor-pointer px-5 lg:px-9 py-3 rounded-full border border-[#c6d1ed] bg-[#c28347] transition-colors duration-200 hover:bg-transparent hover:border-black openSauceBold text-white hover:text-black text-base'>
                Bring WellMe to Your Team
            </motion.button>

        </motion.div>
    )
}

export default RestLanding