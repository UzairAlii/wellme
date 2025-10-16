import React from 'react'
import HomeLanding from './HomeLanding'
import ImagesSection from './ImagesSection'
import Mobiles from '../../components/Mobiles'
import ForRestaurantsAndPartners from './ForRestaurantsAndPartners'
import BigLogo from './BigLogo'

const Home = () => {
  return (
    <div>
      <HomeLanding />
      <ImagesSection/>
      <Mobiles/>
      <ForRestaurantsAndPartners />
      <BigLogo />
    </div>
  )
}

export default Home