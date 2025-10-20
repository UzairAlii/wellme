import React from 'react'
import { Images } from '../../assets/assets'
import { motion } from "motion/react";
import { useLanguage } from '../../context/LanguageContext'

const HomeLanding = () => {

    const { toggleLanguage, language } = useLanguage()
    const { trans } = useLanguage()

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className='h-[70vh] md:h-[40vh] lg:h-[90vh] w-full flex flex-col items-center justify-center gap-10 px-5 mt-30 relative'>

            <motion.img
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1, type: 'spring', stiffness: 100 }}
                className='w-24' src={Images.smallLogo} alt="" />

            <div className="flex flex-col items-center justify-center w-full gap-[20px]">

                {/* ✅ Agar Spanish hai to sirf ek heading dikhani hai */}
                {language === "es" ? (
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mac text-2xl lg:text-5xl text-center w-full lg:w-[70%] font-semibold text-[#3c1d00]"
                    >
                        {trans.headingMobile}
                    </motion.h1>
                ) : (
                    <>
                        {/* ✅ English version (3 parts) */}
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="mac hidden md:block text-2xl lg:text-5xl text-center w-full lg:w-[70%] font-semibold text-[#251500]"
                        >
                            {trans.headingA}
                        </motion.h1>

                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="mac hidden md:block text-2xl lg:text-5xl text-center w-full lg:w-[70%] font-semibold text-[#251500]"
                        >
                            {trans.headingB}
                        </motion.h1>

                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                            className="mac hidden md:block text-2xl lg:text-5xl text-center w-full lg:w-[70%] font-semibold text-[#251500]"
                        >
                            {trans.headingC}
                        </motion.h1>

                        {/* Mobile full heading (for small screens English) */}
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                            className="mac block md:hidden text-2xl lg:text-5xl text-center w-full lg:w-[70%] font-semibold text-[#3c1d00]"
                        >
                            {trans.headingMobile}
                        </motion.h1>
                    </>
                )}
            </div>

            <div className="w-full flex items-center justify-center flex-col">
                {language === "es" ? (
                    // SPANISH — only one paragraph for all screen sizes
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="text-center text-sm lg:text-lg w-full lg:w-[63%] openSauceRegular"
                    >
                        {trans.paraMobile}
                    </motion.p>
                ) : (
                    <>
                        {/* Desktop — English split paragraphs */}
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="text-center hidden lg:block text-md lg:text-lg w-full lg:w-[63%] openSauceRegular"
                        >
                            {trans.paraA}
                        </motion.p>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="text-center hidden lg:block text-md lg:text-lg w-full lg:w-[63%] openSauceRegular"
                        >
                            {trans.paraB}
                        </motion.p>

                        {/* Mobile — English full paragraph */}
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="text-center block lg:hidden text-md lg:text-lg w-full lg:w-[63%] openSauceRegular"
                        >
                            {trans.paraMobile}
                        </motion.p>
                    </>
                )}
            </div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="buttons flex items-center gap-2 lg:gap-5">
                <button className='cursor-pointer px-5 lg:px-9 py-3 rounded-full border border-[#c6d1ed] bg-[#c6d1ed] transition-colors duration-200 hover:bg-transparent hover:border-2 hover:border-black hover:text-[#111] text-sm lg:text-base openSauceMedium '>
                    {trans.BecomePartnerBtn}
                </button>
                <button className='cursor-pointer px-5 lg:px-9 py-3 rounded-full border-2 border-black bg-transparent transition-colors duration-200 hover:text-black text-sm lg:text-base openSauceMedium '>
                    {trans.ForRestaurantBtn}
                </button>
            </motion.div>

        </motion.div>
    )
}

export default HomeLanding