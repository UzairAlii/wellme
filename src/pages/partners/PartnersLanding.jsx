import React from 'react'
import { Images } from '../../assets/assets'
import { motion } from "motion/react";
import { useLanguage } from '../../context/LanguageContext'

const PartnersLanding = () => {

  const { language, trans } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className='h-[70vh] md:h-[40vh] lg:h-[90vh] w-full flex flex-col items-center justify-center gap-10 px-5 mt-20 relative'>

      <motion.img
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        className='w-24' src={Images.smallLogo} alt="" />

      <div className='flex flex-col items-center justify-center w-full gap-3'>
        {language === "es" ? (

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='mac block text-2xl lg:text-5xl text-center w-full lg:w-[70%] font-semibold text-[#251500]'>{trans.PartnerLandingHeadingMobile}</motion.h1>

        ) : (
          <>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className='mac block lg:hidden text-2xl lg:text-5xl text-center w-full lg:w-[70%] font-semibold text-[#251500]'>{trans.PartnerLandingHeadingMobile}</motion.h1>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className='mac hidden lg:block text-2xl lg:text-5xl text-center w-full lg:w-[70%] font-semibold text-[#251500]'>{trans.PartnerLandingHeadingA}</motion.h1>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className='mac hidden lg:block text-2xl lg:text-5xl text-center w-full lg:w-[70%] font-semibold text-[#251500]'>{trans.PartnerLandingHeadingB}</motion.h1>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className='mac hidden md:block text-2xl lg:text-5xl text-center w-full lg:w-[70%] font-semibold text-[#251500]'>{trans.PartnerLandingHeadingC}</motion.h1>
          </>
        )}

      </div>

      <div className='w-full flex flex-col items-center justify-center'>
        {language === "es" ? (
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className='text-center block lg:hidden text-md lg:text-lg w-full lg:w-[63%] openSauceRegular'>{trans.PartnersLandingParaMobile}</motion.p>

        ) : (
          <>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className='text-center block lg:hidden text-md lg:text-lg w-full lg:w-[63%] openSauceRegular'>{trans.PartnersLandingParaMobile}</motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className='text-center hidden lg:block text-md lg:text-lg w-full lg:w-[63%] openSauceRegular'>{trans.PartnersLandingParaA}</motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className='text-center hidden lg:block text-md lg:text-lg w-full lg:w-[63%] openSauceRegular'>{trans.PartnersLandingParaB}</motion.p>
          </>
        )}


      </div>
      <a href="https://forms.gle/x7CNBWaRR7nWvSAB7"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', color: 'inherit' }}>
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className='cursor-pointer px-5 lg:px-9 py-3 openSauceBold rounded-full border border-[#c6d1ed] bg-[#c6d1ed] transition-colors duration-200 hover:bg-transparent hover:border-black hover:text-[#111] text-base'>
          {trans.BecomePartnerBtn}
        </motion.button>
      </a>

    </motion.div>
  )
}

export default PartnersLanding
