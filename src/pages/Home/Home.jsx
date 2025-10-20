import React from 'react'
import HomeLanding from './HomeLanding'
import ImagesSection from './ImagesSection'
import Mobiles from '../../components/Mobiles'
import ForRestaurantsAndPartners from './ForRestaurantsAndPartners'
import BigLogo from './BigLogo'
import PreFooter from '../../components/PreFooter'
import { useLanguage } from '../../context/LanguageContext'

const Home = () => {

  const { language, trans } = useLanguage()

  return (
    <div>
      <HomeLanding />
      <ImagesSection/>
      <Mobiles/>
      <ForRestaurantsAndPartners />
      <BigLogo />
      <PreFooter title={trans.HomePreFooterHeading} titleWidth={"90%"} description={trans.HomePreFooterDesc} leftBtnText={trans.ApplyAsPartnerBtn} rightBtnText={trans.BringWellMeToYourTeamBtn} />
    </div>
  )
}

export default Home