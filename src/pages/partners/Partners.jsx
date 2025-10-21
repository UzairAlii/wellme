import React from 'react'
import PartnersLanding from './PartnersLanding'
import ImagesSection from './ImagesSection'
import WhyPartner from './WhyPartner'
import Mobiles from '../../components/Mobiles'
import PartnersSegment from './PartnersSegment'
import HowItWorks from './HowItWorks'
import PreFooter from '../../components/PreFooter'
import { useLanguage } from '../../context/LanguageContext'

const Partners = () => {

  const { trans } = useLanguage()

    const handleLeftClick = () => {
    window.open('https://forms.gle/LQXUaqPgn85Y9uHW6', '_blank')
  }

  return (
    <div>
      <PartnersLanding />
      <ImagesSection />
      <WhyPartner />
      <Mobiles />
      <PartnersSegment />
      <HowItWorks />
      <PreFooter title={trans.PartnerPreFooterHeading} onLeftClick={handleLeftClick} titleWidth={"70%"} description={trans.PartnerPreFooterPara} leftBtnText={trans.JoinUsAsWellmePartnerBtn} rightBtnText={null}/>
    </div>
  )
}

export default Partners