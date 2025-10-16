import React from 'react'
import { Images } from '../../assets/assets'

const HowItWorks = () => {
  return (
    <div className="relative w-full min-h-[700px] flex flex-col items-center justify-center py-10 mt-20">
      <h2 className="text-2xl md:text-3xl font-bold text-[#3c1d00] text-center mb-10 tracking-wide mac">
        HOW IT WORKS
      </h2>
      <img className='w-xl' src={Images.howItWorkImg} alt="" />
    </div>
  )
}

export default HowItWorks