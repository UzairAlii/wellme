import React from 'react'
import { motion } from "motion/react";
import { Images } from '../../assets/assets';

const HospitalityChallange = () => {

    const points = [
        "70% turnover in the first year — one of the highest of any industry.",
        "Long hours, high stress, and limited resources.",
        "Majority bilingual workforce, but wellness content is usually English-only.",
        "Families bear the burden but are rarely included."
    ]

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full flex items-center justify-center my-10 mb-30 px-3">

            <div className="w-full max-w-4xl bg-white/20 backdrop-blur-lg rounded-[32px] border border-white/40 shadow-xl drop-shadow-lg px-8 lg:px-22 py-10 lg:py-14">
                <h1 className="mac uppercase text-xl md:text-3xl font-bold mb-7 tracking-wide text-[#3c1d00]">
                    The Hospitality Challenge
                </h1>
                <ul className="flex flex-col gap-5">
                    {points.map((text, idx) => (
                        <li key={idx} className="flex items-start md:items-center gap-4">
                            <img src={Images.keypoints} alt="" className="w-5 h-5" />
                            <span className="text-sm md:text-lg text-[#222] font-semibold">{text}</span>
                        </li>
                    ))}
                </ul>
                <button className='bg-[#c28347] rounded-full py-3 px-8 text-white text-sm lg:text-base font-bold cursor-pointer hover:bg-[#bf7836] mt-8'>
                    Bring WellMe to Your Team
                </button>
            </div>

        </motion.div>
    )
}

export default HospitalityChallange