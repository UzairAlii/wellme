import React from 'react'
import { motion } from "motion/react";

const OurValue = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='flex flex-col items-center justify-center w-full mt-20 lg:mt-30'>
            <div className='flex flex-col items-center gap-2'>
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                    className="mac text-2xl md:text-3xl font-bold mb-7 tracking-wide text-[#3c1d00]">
                    Our Values
                </motion.h1>

                <div className='flex flex-col items-center justify-center w-full gap-5'>

                   <div className='flex flex-col items-center justify-center gap-5'>
                         <div className='bg-[#aee5bf]/60 px-16 py-3 rounded-full text-base lg:text-xl font-medium dreaming'>Accessibility</div>
                    <div className='flex flex-col text-center'>
                        <p className='text-base lg:text-lg font-normal opensauceRegular'>Wellness should be easy to access, in every </p>
                        <p className='text-base lg:text-lg font-normal opensauceRegular'>language, on any device.</p>
                    </div>
                   </div>

                   <div className='flex flex-col items-center justify-center gap-5'>
                         <div className='bg-[#c6d1ed]/60 px-16 py-3 rounded-full text-base lg:text-xl font-medium dreaming'>Community</div>
                    <div className='flex flex-col text-center'>
                        <p className='text-base lg:text-lg font-normal opensauceRegular'>Wellness should be easy to access, in every </p>
                        <p className='text-base lg:text-lg font-normal opensauceRegular'>language, on any device.</p>
                    </div>
                   </div>

                   <div className='flex flex-col items-center justify-center gap-5'>
                         <div className='bg-[#efc0d4]/60 px-16 py-3 rounded-full text-base lg:text-xl font-medium dreaming'>Evidence-Based</div>
                    <div className='flex flex-col text-center'>
                        <p className='text-base lg:text-lg font-normal opensauceRegular'>Wellness should be easy to access, in every </p>
                        <p className='text-base lg:text-lg font-normal opensauceRegular'>language, on any device.</p>
                    </div>
                   </div>

                   <div className='flex flex-col items-center justify-center gap-5'>
                         <div className='bg-[#df9e48]/60 px-16 py-3 rounded-full text-base lg:text-xl font-medium dreaming'>Respect</div>
                    <div className='flex flex-col text-center'>
                        <p className='text-base lg:text-lg font-normal opensauceRegular'>Wellness should be easy to access, in every </p>
                        <p className='text-base lg:text-lg font-normal opensauceRegular'>language, on any device.</p>
                    </div>
                   </div>

                   <div className='flex flex-col items-center justify-center gap-5'>
                         <div className='bg-[#ffffff]/60 px-16 py-3 rounded-full text-base lg:text-xl font-medium dreaming'>Sustainability</div>
                    <div className='flex flex-col text-center'>
                        <p className='text-base lg:text-lg font-normal opensauceRegular'>Wellness should be easy to access, in every </p>
                        <p className='text-base lg:text-lg font-normal opensauceRegular'>language, on any device.</p>
                    </div>
                   </div>

                </div>
            </div>
        </motion.div>
    )
}

export default OurValue