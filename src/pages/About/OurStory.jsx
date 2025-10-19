import React from 'react'
import { motion } from 'motion/react'

const OurStory = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full flex flex-col items-center justify-center mt-24 px-3">

            <div className='w-full lg:w-[48%] bg-white/20 backdrop-blur-lg rounded-4xl shadow-xl border border-white/40 drop-shadow-lg px-10 lg:px-22 py-10 lg:pt-18 lg:pb-22'>
                <h1 className="mac text-2xl uppercase md:text-3xl font-bold mb-7 tracking-wide text-[#3c1d00]">
                    Our Story
                </h1>
                <div className='flex flex-col gap-7'>
                    <p className='font-medium text-sm lg:text-lg outfit w-full lg:w-[93%] openSauceMedium'>Hospitality workers are the backbone of restaurants, hotels, and countless businesses. Yet for too long, they’ve been underserved — facing high stress, long hours, and limited access to wellness tools, often in a language they don’t speak. Families share that burden but rarely get the support they need.</p>
                <p className='font-medium text-sm lg:text-lg outfit w-full lg:w-[93%] openSauceMedium'>We created WellMe to change that.</p>
                <p className='font-medium text-sm lg:text-lg outfit w-full lg:w-[93%] openSauceMedium'>WellMe is the first bilingual wellness platform designed specifically for hospitality teams and their families. Our mission is to make wellness simple, inclusive, and community-driven — helping workers and families build healthier habits, feel supported, and thrive at work and at home.
</p>
                </div>


            </div>

        </motion.div>
    )
}

export default OurStory