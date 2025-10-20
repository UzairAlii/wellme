import React from 'react'
import { motion } from "motion/react"
import { useLanguage } from '../../context/LanguageContext'

const OurVision = () => {

    const { language, trans } = useLanguage()

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
                {trans.OurVisionHeading}
            </motion.h1>

            <div className='w-full lg:w-[37%] bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl border border-white/40 drop-shadow-lg px-5 lg:px-14 py-10 lg:py-12 mt-10 flex flex-col items-start justify-center'>
                <p className='dreaming text-xl leading-tight block lg:hidden text-center'>{trans.OurVisionParaMobile}</p>
                <p className='dreaming text-lg lg:text-xl leading-tight hidden lg:block'>{trans.OurVisionParaB}</p>
                <p className='dreaming text-lg lg:text-xl leading-tight hidden lg:block'>{trans.OurVisionParac}</p>
                <p className='dreaming text-lg lg:text-xl leading-tight hidden lg:block'>{trans.OurVisionParaD}</p>
                <p className='dreaming text-lg lg:text-xl leading-tight hidden lg:block'>— {trans.OurVisionParaE}</p>
                <p className='dreaming text-lg lg:text-xl leading-tight hidden lg:block'>{trans.OurVisionParaE}</p>
            </div>

        </motion.div>
    )
}

export default OurVision