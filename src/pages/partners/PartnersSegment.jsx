import React from 'react'
import { Images } from '../../assets/assets'
import { motion } from "motion/react";

const PartnersSegment = () => {
  return (
    <motion.div
      id='forPartnersAndRestaurants'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='h-fit w-full flex flex-col items-center justify-center gap-10 mt-30 px-3'>
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="mac text-2xl md:text-3xl font-bold mb-7 tracking-wide text-[#3c1d00] text-center">
        Our Partner Segments
      </motion.h1>

      {/* For Content Providers */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center
       gap-8 bg-white/30 backdrop-blur-lg rounded-4xl border border-white/40 shadow-xl px-6 lg:pl-16 lg:pr-12 lg:py-12 py-10">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center">
          <h2 className="mac text-lg md:text-2xl font-bold text-[#3c1d00] mb-3">CONTENT PROVIDERS</h2>
          <p className="text-base md:text-md md:text-start text-center text-[#222] mb-6 w-full md:w-[90%] leading-6 openSauceRegular">
            Bring your expertise to a new audience. From fitness to mindfulness, financial literacy to parenting, your content becomes part of a bilingual, mobile-first library.
          </p>
          <div className="flex flex-col gap-3 w-full mb-4">
            <div className="bg-[#e3eaf7] dreaming rounded-full py-2 px-4 text-sm tracking-wide font-semibold text-[#3c1d00] w-fit md:text-start text-center shadow-sm">
              YOU CREATE → WE ADAPT & TRANSLATE → WORKERS & FAMILIES ACCESS ANYTIME.
            </div>
            <div className="bg-[#e3eaf7] dreaming rounded-full py-2 px-4 text-sm tracking-wide font-semibold text-[#3c1d00] w-fit md:text-start text-center shadow-sm">
              VISIBILITY, ENGAGEMENT DATA, AND REVENUE OPPORTUNITIES.
            </div>
          </div>
          <button className="bg-[#c6d1ed] py-3 px-5 cursor-pointer rounded-full w-full max-w-[220px] text-[#3c1d00] text-base shadow hover:bg-[#b3c3e6] transition openSauceBold">
            Become a Partner
          </button>
        </div>
        {/* Right Image */}
        <div className="flex items-center justify-center">
          <img
            src={Images.forPartners}
            alt=""
            className="w-full max-w-[280px] h-[300px] object-cover rounded-4xl shadow-lg"
          />
        </div>
      </motion.div>

      {/* For Service Provider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center
  gap-8 bg-white/30 backdrop-blur-lg rounded-4xl border border-white/40 shadow-xl px-6 lg:pl-16 lg:pr-12 lg:py-12 py-10"
      >
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center">
          <h2 className="mac text-lg md:text-2xl font-bold text-[#3c1d00] mb-3">
            SERVICE PROVIDERS
          </h2>
          <p className="text-base md:text-md md:text-start text-center text-[#222] mb-6 w-full md:w-[90%] leading-6 openSauceRegular">
            Offer your services to an industry workforce that’s been overlooked for too long.
            From telehealth to childcare, counselling to financial tools, your business gets direct access.
          </p>

          <div className="flex flex-col gap-3 w-full mb-4">
            <div className="bg-[#ecdbe2] dreaming rounded-full py-2 px-4 text-sm tracking-wide font-semibold text-[#3c1d00] w-fit md:text-start text-center shadow-sm">
              WE INTEGRATE YOUR SERVICE → WORKERS DISCOVER YOU{" "}
              <br className="hidden md:block" />→ YOU GAIN NEW CUSTOMERS + INSIGHTS.
            </div>
            <div className="bg-[#ecdbe2] dreaming rounded-full py-2 px-4 text-sm tracking-wide font-semibold text-[#3c1d00] w-fit md:text-start text-center shadow-sm">
              ONLY UPSIDE: NO RISK, NO ACQUISITION COSTS.
            </div>
          </div>

          <button className="bg-[#efc0d4] py-3 px-5 cursor-pointer rounded-full w-full max-w-[220px] text-[#3c1d00] text-base shadow hover:bg-[#e3c1d1] transition openSauceBold">
            Become a Partner
          </button>
        </div>

        {/* Right Image */}
        <div className="flex items-center justify-center">
          <img
            src={Images.randomImage1}
            alt=""
            className="w-full max-w-[280px] h-[300px] object-cover rounded-4xl shadow-lg"
          />
        </div>
      </motion.div>


    </motion.div>
  )
}

export default PartnersSegment