import React from 'react'
import { motion } from 'motion/react'
import { Images } from '../../assets/assets'
import { useLanguage } from '../../context/LanguageContext'

const WhyMatters = () => {

    const { language, trans } = useLanguage()

  return (
     <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-full flex flex-col items-center justify-center mt-30 px-3">
    
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                    className="mac text-xl md:text-3xl text-center font-bold mb-7 tracking-wide text-[#3c1d00]">
                    {trans.WhyMattersHeading}
                </motion.h1>
    
                <div className='w-full flex flex-col lg:flex-row items-center justify-center'>
    
                    <div className='max-w-3xl bg-white/20 backdrop-blur-lg rounded-[32px] border border-white/40 shadow-xl drop-shadow-lg px-8 lg:px-10 py-10 lg:py-16 flex flex-col items-center lg:items-start lg:justify-center gap-5'>
                        <div className="bg-[#df9e4851] rounded-full py-2 px-4 text-sm tracking-wide font-semibold text-[#3c1d00] w-fit md:text-start text-center shadow-sm dreaming">
                           {trans.WhyMattersPointA}
                        </div>
                        <div className="bg-[#df9e4851] rounded-full py-2 px-4 text-sm tracking-wide font-semibold text-[#3c1d00] w-fit md:text-start text-center shadow-sm dreaming">
                            {trans.WhyMattersPointB}
                        </div>
                        <div className="bg-[#df9e4851] rounded-full py-2 px-4 text-sm tracking-wide font-semibold text-[#3c1d00] w-fit md:text-start text-center shadow-sm dreaming">
                            {trans.WhyMattersPointC}
                        </div>
                    </div>

                    <div>
                        <img className='rounded-4xl w-full lg:w-[13vw]' src={Images.oneMobile} alt="" />
                    </div>
    
                </div>
            </motion.div>
  )
}

export default WhyMatters