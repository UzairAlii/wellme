import React from 'react'
import RestLanding from './RestLanding'
import ImagesSection from './ImagesSection'
import HospitalityChallange from './HospitalityChallange'
import Mobiles from '../../components/Mobiles'
import OurSolution from './OurSolution'
import WhyMatters from './WhyMatters'
import ValueForWorkers from './ValueForWorkers'
import PreFooter from '../../components/PreFooter'
import { useLanguage } from '../../context/LanguageContext'

const Restaurants = () => {

  const { language, trans } = useLanguage()

  return (
    <div>
      <RestLanding />
      <ImagesSection />
      <HospitalityChallange />
      <Mobiles />
      <OurSolution />
      <WhyMatters />
      <ValueForWorkers />
      <PreFooter title={trans.RestaurantPagePreFooterHeading} description={null} leftBtnText={trans.BringWellMeToYourRestaurantBtn} rightBtnText={null} leftBtnColor={"#c28347"} leftBtnTextColor={"#fff"} />
    </div>
  )
}

export default Restaurants