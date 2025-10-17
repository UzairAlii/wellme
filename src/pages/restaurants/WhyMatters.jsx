import React from 'react'
import { motion } from 'motion/react'
import { Images } from '../../assets/assets'

const WhyMatters = () => {
  return (
     <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-full flex flex-col items-center justify-center mt-10 mb-30 px-3">
    
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                    className="mac text-xl md:text-3xl font-bold mb-7 tracking-wide text-[#3c1d00]">
                    Why This Matters for You
                </motion.h1>
    
                <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-10 '>
    
                    <div className='max-w-3xl bg-white/20 backdrop-blur-lg rounded-[32px] border border-white/40 shadow-xl drop-shadow-lg px-8 py-10 flex flex-col gap-5'>
                        <div className="bg-[#df9e4851] rounded-full py-2 px-4 text-sm tracking-wide font-semibold text-[#3c1d00] w-fit md:text-start text-center shadow-sm">
                           Reduce costly turnover and absenteeism.
                        </div>
                        <div className="bg-[#df9e4851] rounded-full py-2 px-4 text-sm tracking-wide font-semibold text-[#3c1d00] w-fit md:text-start text-center shadow-sm">
                            Build loyalty and retention by showing staff and families you care.
                        </div>
                        <div className="bg-[#df9e4851] rounded-full py-2 px-4 text-sm tracking-wide font-semibold text-[#3c1d00] w-fit md:text-start text-center shadow-sm">
                            Give your teams a resource designed for their schedules, languages, and needs.
                        </div>
                    </div>

                    <div>
                        <img className='rounded-4xl' src={Images.oneMobile} alt="" />
                    </div>
    
                </div>
            </motion.div>
  )
}

export default WhyMatters