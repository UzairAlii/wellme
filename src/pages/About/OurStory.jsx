import React from 'react'
import { motion } from 'motion/react'
import { useLanguage } from '../../context/LanguageContext'

const OurStory = () => {

    const { language, trans } = useLanguage()

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full flex flex-col items-center justify-center mt-20 lg:mt-30 px-3">

            <div className='w-full lg:w-[48%] bg-white/20 backdrop-blur-lg rounded-4xl shadow-xl border border-white/40 drop-shadow-lg px-10 lg:px-22 py-10 lg:pt-18 lg:pb-22'>
                <h1 className="mac text-2xl uppercase md:text-3xl font-bold mb-7 tracking-wide text-[#3c1d00]">
                    {trans.OurStoryHeading}
                </h1>
                <div className='flex flex-col gap-7'>
                    <p className='font-medium text-sm lg:text-lg outfit w-full lg:w-[93%] openSauceRegular'>{trans.OurStoryParaA}</p>
                    <p className='font-medium text-sm lg:text-lg outfit w-full lg:w-[93%] openSauceRegular'>{trans.OurStoryParaB}</p>
                    <p className='font-medium text-sm lg:text-lg outfit w-full lg:w-[93%] openSauceRegular'>{trans.OurStoryParaC}
                    </p>
                </div>


            </div>

        </motion.div>
    )
}

export default OurStory