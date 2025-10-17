import React from 'react'
import { Images } from '../../assets/assets'
import { motion } from "motion/react";

const ForRestaurantsAndPartners = () => {
    return (
        <motion.div
            id='forPartnersAndRestaurants'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center justify-center min-h-[70vh] py-10 px-3 mt-30">

            <div className='flex flex-col items-center justify-center w-full gap-3'>
                <motion.h1
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="mac text-xl block lg:hidden lg:text-2xl w-full lg:w-[70%] font-semibold text-center text-[#3c1d00]">
                 Hospitality is essential. It’s time we support the people who make it possible.
            </motion.h1>
                <motion.h1
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="mac hidden lg:block text-xl lg:text-2xl w-full lg:w-[70%] font-semibold text-center text-[#3c1d00]">
                Hospitality is essential. It’s time we
            </motion.h1>
            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mac hidden lg:block text-xl lg:text-2xl w-full lg:w-[70%] font-semibold text-center text-[#3c1d00] mb-8">
                 support the people who make it possible.
            </motion.h1>
            </div>

            {/* For Partners Section */}
            <div className="w-full lg:w-[80%] flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-12 mt-4">
                {/* Left Card */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className=" bg-white/20 backdrop-blur-lg rounded-[32px] border border-white/40 shadow-xl drop-shadow-lgrounded-[36px] flex flex-col items-center justify-center px-6 py-10 lg:py-12 w-full lg:w-[50%] ">
                    <h1 className="text-2xl lg:text-3xl mac font-semibold mb-3 tracking-wide text-[#3c1d00]">FOR PARTNERS</h1>
                    <p className="text-lg lg:text-xl font-semibold w-full lg:w-[90%] text-center mb-6 text-[#3c1d00]">
                        Grow with us by reaching thousands of hospitality workers and families.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 w-full">
                        <div className="bg-[#e3eaf7] rounded-full py-3 px-5 text-xs tracking-wide font2 text-[#3c1d00] text-center shadow-sm w-fit">
                            ZERO COST TO PARTICIPATE
                        </div>
                        <div className="bg-[#e3eaf7] rounded-full py-3 px-5 text-xs tracking-wide font2 text-[#3c1d00] text-center shadow-sm w-fit">
                            NEW VISIBILITY & REVENUE
                        </div>
                        <div className="bg-[#e3eaf7] rounded-full py-3 px-5 text-xs tracking-wide font2 text-[#3c1d00] text-center shadow-sm w-fit">
                            FIRST-MOVER ADVANTAGE
                        </div>
                    </div>
                    <button className="bg-[#c6d1ed] py-3 px-10 font-semibold cursor-pointer rounded-full mt-7 text-[#3c1d00] text-base shadow hover:bg-[#b3c3e6] transition">
                        Become a Partner
                    </button>
                </motion.div>
                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                    className="w-full lg:w-[50%] flex items-center justify-center">
                    <img
                        className="w-full h-fit lg:h-[400px] object-cover rounded-[36px] shadow-lg"
                        src={Images.forPartners}
                        alt=""
                    />
                </motion.div>
            </div>

            {/* For Restaurants Section */}
            <div className="w-full lg:w-[80%] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mt-12">
                {/* Left Image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                    className="w-full lg:w-[50%] flex items-center justify-center">
                    <img
                        className="w-full h-fit lg:h-[400px] object-cover rounded-[36px] shadow-lg"
                        src={Images.forRestaurants}
                        alt=""
                    />
                </motion.div>
                {/* Right Card */}
                <motion.div 
                initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                className=" bg-white/20 backdrop-blur-lg rounded-[32px] border border-white/40 shadow-xl drop-shadow-lgrounded-[36px] flex flex-col items-center justify-center px-6 py-10 lg:py-12 w-full lg:w-[50%] ">
                    <h1 className="text-2xl lg:text-3xl mac font-semibold mb-3 tracking-wide text-[#3c1d00]">FOR RESTAURANTS</h1>
                    <p className="text-lg lg:text-xl font-semibold w-full lg:w-[90%] text-center mb-6 text-[#3c1d00]">
                        Bring wellness to your team and their families.
                    </p>
                    <div className="flex flex-col gap-4 w-full items-center justify-center">
                        <div className="bg-[#e8dfcf] rounded-full py-3 px-5 text-xs tracking-wide font2 text-[#3c1d00] text-center shadow-sm w-fit">
                            REDUCE TURNOVER & ABSENTEEISM
                        </div>
                        <div className="bg-[#e8dfcf] rounded-full py-3 px-5 text-xs tracking-wide font2 text-[#3c1d00] text-center shadow-sm w-fit">
                            SIMPLE, BILINGUAL, MOBILE-FIRST ACCESS
                        </div>
                        <div className="bg-[#e8dfcf] rounded-full py-3 px-5 text-xs tracking-wide font2 text-[#3c1d00] text-center shadow-sm w-fit">
                            STRENGTHEN LOYALTY & RETENTION
                        </div>
                    </div>
                    <button className="bg-transparent border-[1px] border-[#3c1d00] py-3 px-10 font-semibold cursor-pointer rounded-full mt-7 text-[#3c1d00] text-base shadow hover:bg-[#f7f6f3] transition">
                        For Restaurants
                    </button>
                </motion.div>
            </div>

            <div className='flex lg:flex-row flex-col items-center gap-10 mt-10 w-full lg:w-[70%]'>
                <motion.div 
                initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                className='flex flex-col gap-5 bg-white/20 backdrop-blur-lg border border-white/40 shadow-xl drop-shadow-lg px-10 py-7 rounded-full'>
                    <p className='italic font-medium text-lg lg:text-2xl'>“WellMe is exactly what our teams needed — easy, inclusive, and accessible for the whole family.”</p>
                    <span className='font-bold italic text-lg'>— Restaurant Operator</span>
                </motion.div>
                <motion.div 
                initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                className='flex flex-col gap-5 bg-white/20 backdrop-blur-lg border border-white/40 shadow-xl drop-shadow-lg px-10 py-7 rounded-full'>
                    <p className='italic font-medium text-lg lg:text-2xl'>“Partnering with WellMe gave us new visibility and a chance to make real impact.”</p>
                    <span className='font-bold italic text-lg'>—  Service Provider</span>
                </motion.div>
            </div>

        </motion.div>
    )
}

export default ForRestaurantsAndPartners