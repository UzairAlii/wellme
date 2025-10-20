import React from 'react'
import { Images } from '../../assets/assets'
import { motion } from "motion/react";
import { useLanguage } from '../../context/LanguageContext'



const WhyPartner = () => {

    const { language, trans } = useLanguage()

    const points = [
        trans.WhyPartnerPointA,
        trans.WhyPartnerPointB,
        trans.WhyPartnerPointC,
        trans.WhyPartnerPointD
    ]

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full flex items-center justify-center mb-30 px-3">
            <div className="w-full max-w-[920px] bg-white/20 backdrop-blur-lg rounded-[32px] border border-white/40 shadow-xl drop-shadow-lg px-8 lg:px-20 py-10 lg:py-20">
                <h1 className="mac text-xl md:text-3xl font-bold mb-5 tracking-wide text-[#251500]">
                    {trans.WhyPartnerHeading}
                </h1>
                <ul className="flex flex-col gap-3">
                    {points.map((text, idx) => (
                        <li key={idx} className="flex items-start md:items-center gap-4">
                            <img src={Images.keypoints} alt="" className="w-5 h-5" />
                            {language === "es" ? (
                                <span className="text-sm md:text-lg text-[#222] openSauceMedium">{text}</span>

                            ) : (

                                <span className="text-sm md:text-lg text-[#222] openSauceMedium">{text}</span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    )
}

export default WhyPartner