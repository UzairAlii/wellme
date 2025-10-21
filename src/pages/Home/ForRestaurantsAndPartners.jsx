import React from 'react'
import { Images } from '../../assets/assets'
import { motion } from "motion/react";
import { useLanguage } from '../../context/LanguageContext'

const ForRestaurantsAndPartners = () => {

    const { trans } = useLanguage()

    return (
        <motion.div
            id='forPartnersAndRestaurants'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center justify-center min-h-[70vh] py-10 px-3 mt-16">

            <div className='flex flex-col items-center justify-center w-full gap-3'>
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                    className="mac text-lg block lg:hidden lg:text-2xl w-full lg:w-[70%] font-semibold text-center text-[#3c1d00]">
                    {trans.ForPandRHeadingMobile}
                </motion.h1>
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                    className="mac hidden lg:block text-xl lg:text-2xl w-full lg:w-[70%] font-semibold text-center text-[#3c1d00]">
                    {trans.ForPandRHeadingA}
                </motion.h1>
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mac hidden lg:block text-xl lg:text-2xl w-full lg:w-[70%] font-semibold text-center text-[#3c1d00] mb-8">
                    {trans.ForPandRHeadingB}
                </motion.h1>
            </div>

            {/* For Partners Section */}
            <div className="w-full lg:w-[80%] flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-9 mt-4">
                {/* Left Card */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className="bg-white/20 backdrop-blur-lg rounded-[32px] border border-white/40 shadow-xl drop-shadow-lg flex flex-col items-center justify-center px-6 py-7 lg:py-10 w-full lg:w-[40%] h-full lg:h-[450px] ">
                    <h1 className="text-xl lg:text-2xl mac font-semibold mb-2 tracking-wide text-[#3c1d00]">{trans.ForPartner}</h1>
                    <p className="text-base lg:text-lg w-full lg:w-[80%] text-center mb-6 text-[#3c1d00] openSauceMedium">
                        {trans.ForPartnerPara}
                    </p>
                    <div className="flex flex-col items-center justify-center gap-2 w-full">
                        <div className="bg-[#e3eaf7] rounded-full py-3 px-5 text-sm tracking-wide text-[#3c1d00] text-center shadow-sm w-fit dreaming font-semibold uppercase">
                            {trans.ZeroCostToParticipate}
                        </div>
                        <div className="bg-[#e3eaf7] rounded-full py-3 px-5 text-sm tracking-wide text-[#3c1d00] text-center shadow-sm w-fit dreaming font-semibold uppercase">
                            {trans.NewVisibilityandRevenue}
                        </div>
                        <div className="bg-[#e3eaf7] rounded-full py-3 px-5 text-sm tracking-wide text-[#3c1d00] text-center shadow-sm w-fit dreaming font-semibold uppercase">
                            {trans.FirstMoverAdvantage}
                        </div>
                    </div>

                    {/* FOR PARTNER FORM */}
                    <a href="https://forms.gle/LQXUaqPgn85Y9uHW6"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'inherit' }}>
                        <button className="bg-[#c6d1ed] py-3 px-10 cursor-pointer rounded-full mt-7 text-[#3c1d00] text-base shadow hover:bg-[#b3c3e6] transition openSauceBold">

                            {trans.BecomePartnerBtn}

                        </button>
                    </a>
                </motion.div>




                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                    className="w-full lg:w-[60%] flex items-center justify-center h-full lg:h-[450px]">
                    <img
                        className="w-full h-full object-cover rounded-[36px] shadow-lg"
                        src={Images.forPartners}
                        alt=""
                    />
                </motion.div>
            </div>

            {/* For Restaurants Section */}
            <div className="w-full lg:w-[80%] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-9 mt-10">
                {/* Left Image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                    className="w-full lg:w-[60%] flex items-center justify-center h-full lg:h-[450px]"
                >
                    <img
                        className="w-full h-full object-cover rounded-[36px] shadow-lg"
                        src={Images.forRestaurants}
                        alt=""
                    />
                </motion.div>

                {/* Right Card */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className="bg-white/20 backdrop-blur-lg rounded-[32px] border border-white/40 shadow-xl drop-shadow-lg flex flex-col items-center justify-center px-6 py-7 lg:py-10 w-full lg:w-[40%] h-full lg:h-[450px]"
                >
                    <h1 className="text-xl lg:text-2xl mac font-semibold mb-2 tracking-wide text-[#3c1d00]">
                        {trans.ForRestaurants}
                    </h1>
                    <p className="text-base lg:text-lg w-full lg:w-[80%] text-center mb-6 text-[#3c1d00] openSauceMedium">
                        {trans.ForRestPara}
                    </p>
                    <div className="flex flex-col items-center justify-center gap-2 w-full">
                        <div className="bg-[#df9e48]/30 rounded-full py-3 px-5 text-sm tracking-wide text-[#3c1d00] text-center shadow-sm w-fit dreaming font-semibold uppercase">
                            {trans.ReduceTurnoverandAbsenteeism}
                        </div>
                        <div className="bg-[#df9e48]/30 rounded-full py-3 px-5 text-sm tracking-wide text-[#3c1d00] text-center shadow-sm w-fit dreaming font-semibold uppercase">
                            {trans.SimpleBilingualMobileFirstAccess}
                        </div>
                        <div className="bg-[#df9e48]/30 rounded-full py-3 px-5 text-sm tracking-wide text-[#3c1d00] text-center shadow-sm w-fit dreaming font-semibold uppercase">
                            {trans.StrengthenLoyaltyandRetention}
                        </div>
                    </div>

                    {/* FOR RESTAURANT FORM */}
                    <a href="https://forms.gle/x7CNBWaRR7nWvSAB7"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'inherit' }}>
                        <button className="bg-transparent border-2 border-black py-3 px-10 cursor-pointer openSauceBold rounded-full mt-7 text-[#3c1d00] text-base shadow transition">

                            {trans.ForRestaurants}

                        </button>
                    </a>
                </motion.div>
            </div>




            <div className='flex lg:flex-row flex-col items-center gap-10 mt-10 w-full lg:w-[80%]'>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className='flex flex-col items-center justify-center text-center bg-white/20 backdrop-blur-lg border border-white/40 shadow-xl drop-shadow-lg rounded-2xl h-[220px] w-full lg:w-[60%]'>
                    <p className='italic text-base lg:text-lg w-[90%] lg:w-[55%] openSauceRegular'>“{trans.ForRandPBottomBox1}”</p>
                    <span className='openSauceBold italic text-lg'>{trans.RestaurantOperator}</span>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                    className='flex flex-col items-center justify-center text-center bg-white/20 backdrop-blur-lg border border-white/40 shadow-xl drop-shadow-lg rounded-2xl h-[220px] w-full lg:w-[40%]'>
                    <p className='italic text-base lg:text-lg w-[90%] lg:w-[70%] openSauceRegular'>
                        “{trans.ForRandPBottomBox2}”
                    </p>
                    <span className='openSauceBold italic text-lg'>{trans.ServiceProvider}</span>
                </motion.div>
            </div>

        </motion.div>
    )
}

export default ForRestaurantsAndPartners