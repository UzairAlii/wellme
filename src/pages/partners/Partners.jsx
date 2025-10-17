import React from 'react'
import PartnersLanding from './PartnersLanding'
import ImagesSection from './ImagesSection'
import WhyPartner from './WhyPartner'
import Mobiles from '../../components/Mobiles'
import PartnersSegment from './PartnersSegment'
import HowItWorks from './HowItWorks'
import PreFooter from '../../components/PreFooter'

const Partners = () => {
  return (
    <div>
      <PartnersLanding />
      <ImagesSection />
      <WhyPartner />
      <Mobiles />
      <PartnersSegment />
      <HowItWorks />
      <PreFooter title={" Founding Partner Advantage"} description={"Be among the first. Lock in preferred positioning, shape the platform with us, and grow as we scale."} leftBtnText={"Join Us as a Founding WellMe Partner"} rightBtnText={null}/>
    </div>
  )
}

export default Partners