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

  const { language, trans } = useLanguage()

  return (
    <div>
      <PartnersLanding />
      <ImagesSection />
      <WhyPartner />
      <Mobiles />
      <PartnersSegment />
      <HowItWorks />
      <PreFooter title={trans.PartnerPreFooterHeading} titleWidth={"70%"} description={trans.PartnerPreFooterPara} leftBtnText={trans.JoinUsAsWellmePartnerBtn} rightBtnText={null}/>
    </div>
  )
}

export default Partners