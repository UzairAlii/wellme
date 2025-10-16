import React from 'react'
import { Images } from '../assets/assets'

const Mobiles = () => {
  return (
    <div className='h-fixed md:h-[60vh] w-full flex items-center justify-center mt-5 md:mt-10'>
        <img className='h-full w-full object-contain md:object-cover' src={Images.mobiles} alt="" />
    </div>
  )
}

export default Mobiles