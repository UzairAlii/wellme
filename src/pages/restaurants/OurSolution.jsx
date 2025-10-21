import React from 'react'
import { motion } from 'motion/react'
import { Images } from '../../assets/assets'
import { useLanguage } from '../../context/LanguageContext'

const OurSolution = () => {

    const { trans } = useLanguage()

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full flex flex-col items-center justify-center mt-22 px-3">

            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="mac text-2xl md:text-3xl font-bold mb-7 tracking-wide text-[#3c1d00]">
                {trans.OurSolutionHeading}
            </motion.h1>

            <div className='w-full max-w-[800px] bg-white/20 backdrop-blur-lg rounded-[32px] border border-white/40 shadow-xl drop-shadow-lg px-2 lg:px-14 py-10 lg:py-14'>

                <div className='logo&heading flex lg:flex-row flex-col text-center md:text-start items-center justify-start gap-3'>
                    <img src={Images.logo} alt="" />
                    <div className='flex flex-col'>
                        <p className='lg:text-lg block lg:hidden text-sm font-medium openSauceRegular'>{trans.OurSolutionParaMobile}</p>
                        <p className='lg:text-lg hidden lg:block text-sm font-medium openSauceRegular'>{trans.OurSolutionParaA}</p>
                        <p className='lg:text-lg hidden lg:block text-sm font-medium openSauceRegular'>{trans.OurSolutionParaB}</p>
                    </div>
                </div>

                <div className='flex flex-col items-start mt-10 gap-5'>
                    <div className="bg-[#c9d2e1] rounded-full py-2 px-4 text-sm tracking-wide font-semibold text-[#3c1d00] w-fit md:text-start text-center shadow-sm dreaming">
                        {trans.OurSolutionPointA}
                    </div>
                    <div className="bg-[#c3cfe4] rounded-full py-2 px-4 text-sm tracking-wide font-semibold text-[#3c1d00] w-fit md:text-start text-center shadow-sm dreaming">
                        {trans.OurSolutionPointB}
                    </div>
                    <div className="bg-[#c3cfe4] rounded-full py-2 px-4 text-sm tracking-wide font-semibold text-[#3c1d00] w-fit md:text-start text-center shadow-sm dreaming">
                        {trans.OurSolutionPointC}
                    </div>
                </div>

            </div>
        </motion.div>
    )
}

export default OurSolution