import React from 'react'
import { motion } from "motion/react"
import { Images } from '../../assets/assets'
import { useLanguage } from '../../context/LanguageContext'

const OurTeam = () => {

  const { trans } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className='flex flex-col items-center justify-center w-full gap-16 mt-20 lg:mt-40'
    >
      {/* Heading */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="mac uppercase text-2xl md:text-3xl font-bold tracking-wide text-[#3c1d00]"
      >
       {trans.OurTeamHeading}
      </motion.h1>

      {/* Member 1 */}
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className='flex flex-col md:flex-row items-center justify-center md:items-center gap-6 md:gap-10 w-full max-w-4xl px-2'>
        <img
          src={Images.ceo}
          alt="team member"
          className='w-36 h-36 rounded-full object-cover'
        />
        <div className='text-center md:text-left'>
          <h3 className='italic font-medium text-[#111] tracking-wide text-xl mb-2 dreaming'>
            ALAN ZIZMOR — CEO & CO-FOUNDER
          </h3>
          <p className='text-[#111] text-base leading-tight max-w-xl openSauceRegular'>
            {trans.PersonAPara}
          </p>
        </div>
      </motion.div>

      {/* Member 2 */}
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
      className='flex flex-col md:flex-row items-center justify-center md:items-center gap-6 md:gap-10 w-full max-w-4xl px-2'>
        <img
          src={Images.coFounder}
          alt="team member"
          className='w-36 h-36 rounded-full object-cover'
        />
        <div className='text-center md:text-left'>
          <h3 className='italic font-medium text-[#111] tracking-wide text-xl mb-2 dreaming'>
            Ricardo Viso — Co-Founder
          </h3>
          <p className='text-[#111] text-base leading-tight max-w-xl openSauceRegular'>
            {trans.PersonBPara}

          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default OurTeam
