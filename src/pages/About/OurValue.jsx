import React from 'react'
import { motion } from "motion/react";
import { useLanguage } from '../../context/LanguageContext'

const OurValue = () => {

    const { trans } = useLanguage()

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='flex flex-col items-center justify-center w-full mt-20 lg:mt-35'>
            <div className='flex flex-col items-center gap-2'>
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                    className="mac text-2xl md:text-3xl font-bold mb-7 tracking-wide text-[#3c1d00]">
                    {trans.OurValuesHeading}
                </motion.h1>

                <div className='flex flex-col items-center justify-center w-full gap-5'>

                   <div className='flex flex-col items-center justify-center gap-5'>
                         <div className='bg-[#aee5bf]/60 px-16 py-3 rounded-full text-base lg:text-xl font-medium dreaming'>{trans.Accessibility}</div>
                    <div className='flex flex-col text-center'>
                        <p className='text-base lg:text-lg font-normal opensauceRegular'>{trans.AccessibilityParaA}</p>
                        <p className='text-base lg:text-lg font-normal opensauceRegular'>{trans.AccessibilityParaB}</p>
                    </div>
                   </div>

                   <div className='flex flex-col items-center justify-center gap-5'>
                         <div className='bg-[#c6d1ed]/60 px-16 py-3 rounded-full text-base lg:text-xl font-medium dreaming'>{trans.Community}</div>
                    <div className='flex flex-col text-center'>
                        <p className='text-base lg:text-lg font-normal opensauceRegular'>{trans.CommunityParaA}</p>
                        <p className='text-base lg:text-lg font-normal opensauceRegular'>{trans.CommunityParaB}</p>
                    </div>
                   </div>

                   <div className='flex flex-col items-center justify-center gap-5'>
                         <div className='bg-[#efc0d4]/60 px-16 py-3 rounded-full text-base lg:text-xl font-medium dreaming'>{trans.EvidenceBased}</div>
                    <div className='flex flex-col text-center'>
                        <p className='text-base lg:text-lg font-normal opensauceRegular'>{trans.EvidenceBasedParaA}</p>
                        <p className='text-base lg:text-lg font-normal opensauceRegular'>{trans.EvidenceBasedParaB}</p>
                    </div>
                   </div>

                   <div className='flex flex-col items-center justify-center gap-5'>
                         <div className='bg-[#df9e48]/60 px-16 py-3 rounded-full text-base lg:text-xl font-medium dreaming'>{trans.Respect}</div>
                    <div className='flex flex-col text-center'>
                        <p className='text-base lg:text-lg font-normal opensauceRegular'>{trans.RespectParaA}</p>
                        <p className='text-base lg:text-lg font-normal opensauceRegular'>{trans.RespectParaB}</p>
                    </div>
                   </div>

                   <div className='flex flex-col items-center justify-center gap-5'>
                         <div className='bg-[#ffffff]/60 px-16 py-3 rounded-full text-base lg:text-xl font-medium dreaming'>{trans.Sustainability}</div>
                    <div className='flex flex-col text-center'>
                        <p className='text-base lg:text-lg font-normal opensauceRegular'>{trans.SustainabilityParaA}</p>
                        <p className='text-base lg:text-lg font-normal opensauceRegular'>{trans.SustainabilityParaB}</p>
                    </div>
                   </div>

                </div>
            </div>
        </motion.div>
    )
}

export default OurValue