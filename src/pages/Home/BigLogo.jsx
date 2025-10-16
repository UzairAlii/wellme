import React from 'react'
import { Images } from '../../assets/assets'

const BigLogo = () => {
  return (
    <div className="flex items-center justify-center w-full py-10 px-2">
      <div className="relative w-[380px] h-[380px] md:w-[460px] md:h-[460px] flex items-center justify-center rounded-full overflow-hidden">
        {/* Gradient Circle */}
        <img
          src={Images.gredientCircle}
          alt="Gradient Circle"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
        />
        {/* Big Logo Icons */}
        <img
          src={Images.bigLogoIcon}
          alt="Big Logo Icons"
          className="absolute top-0 left-0 w-full h-full object-contain"
        />
      </div>
    </div>
  )
}

export default BigLogo