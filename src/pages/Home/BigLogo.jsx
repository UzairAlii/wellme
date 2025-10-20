import React from 'react'
import { Images } from '../../assets/assets'

const BigLogo = () => {
  return (
    <div className="flex items-center justify-center w-full py-10 px-2">
      <div className="h-fit flex items-center justify-center overflow-hidden">
        <img className='w-4xl' src={Images.bigCircle} alt="" />
      </div>
    </div>
  )
}

export default BigLogo