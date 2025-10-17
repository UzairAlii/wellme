import React from 'react'
import HomeLanding from './HomeLanding'
import ImagesSection from './ImagesSection'
import Mobiles from '../../components/Mobiles'
import ForRestaurantsAndPartners from './ForRestaurantsAndPartners'
import BigLogo from './BigLogo'
import PreFooter from '../../components/PreFooter'

const Home = () => {
  return (
    <div>
      <HomeLanding />
      <ImagesSection/>
      <Mobiles/>
      <ForRestaurantsAndPartners />
      <BigLogo />
      <PreFooter title={" Ready to join us?"} description={"Whether you’re a partner or a restaurant operator, WellMe makes it easy to get started."} leftBtnText={"Apply as a Partner"} rightBtnText={"Bring WellMe to Your Team"} />
    </div>
  )
}

export default Home