import React from 'react'
import { motion } from "motion/react"

const OurVision = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='flex flex-col items-center justify-center px-3 mt-20 lg:mt-40 lg:mb-40'>

            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="mac uppercase text-2xl md:text-3xl font-bold tracking-wide text-[#3c1d00]"
            >
                OUR vision
            </motion.h1>

            <div className='w-full lg:w-[35%] bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl border border-white/40 drop-shadow-lg px-5 lg:px-14 py-10 lg:py-12 mt-10'>
                <p className='dreaming text-xl leading-tight block lg:hidden text-center'>To transform hospitality into an industry where workers and families are supported, valued, and equipped to thrive — creating a culture of joy, resilience, and sustainability that benefits everyone.</p>
                <p className='dreaming text-lg lg:text-xl leading-tight hidden lg:block'>To transform hospitality into an </p>
                <p className='dreaming text-lg lg:text-xl leading-tight hidden lg:block'>industry where workers and families are</p>
                <p className='dreaming text-lg lg:text-xl leading-tight hidden lg:block'>supported, valued, and equipped to thrive</p>
                <p className='dreaming text-lg lg:text-xl leading-tight hidden lg:block'>— creating a culture of joy, resilience,</p>
                <p className='dreaming text-lg lg:text-xl leading-tight hidden lg:block'>and sustainability that benefits everyone.</p>
            </div>

        </motion.div>
    )
}

export default OurVision