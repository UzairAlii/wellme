import React from 'react'
import HomeLanding from './HomeLanding'
import ImagesSection from './ImagesSection'
import Mobiles from '../../components/Mobiles'
import ForRestaurantsAndPartners from './ForRestaurantsAndPartners'
import BigLogo from './BigLogo'
import PreFooter from '../../components/PreFooter'
import { useLanguage } from '../../context/LanguageContext'

const Home = () => {

  const { trans } = useLanguage()

  const handleLeftClick = () => {
    window.open('https://forms.gle/LQXUaqPgn85Y9uHW6', '_blank')
  }

  const handleRightClick = () => {
    window.open('https://forms.gle/x7CNBWaRR7nWvSAB7', '_blank')
  }

  return (
    <div>
      <HomeLanding />
      <ImagesSection />
      <Mobiles />
      <ForRestaurantsAndPartners />
      <BigLogo />
      <PreFooter
        title={trans.HomePreFooterHeading}
        titleWidth={"90%"}
        description={trans.HomePreFooterDesc}
        leftBtnText={trans.ApplyAsPartnerBtn}
        rightBtnText={trans.BringWellMeToYourTeamBtn}
        onLeftClick={handleLeftClick}
        onRightClick={handleRightClick} />
    </div>
  )
}

export default Home