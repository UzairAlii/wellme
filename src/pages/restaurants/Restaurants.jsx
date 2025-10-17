import React from 'react'
import RestLanding from './RestLanding'
import ImagesSection from './ImagesSection'
import HospitalityChallange from './HospitalityChallange'
import Mobiles from '../../components/Mobiles'
import OurSolution from './OurSolution'
import WhyMatters from './WhyMatters'
import ValueForWorkers from './ValueForWorkers'
import PreFooter from '../../components/PreFooter'

const Restaurants = () => {
  return (
    <div>
      <RestLanding />
      <ImagesSection />
      <HospitalityChallange />
      <Mobiles />
      <OurSolution />
      <WhyMatters />
      <ValueForWorkers />
      <PreFooter title={" Ready to Support Your Team?"} description={null} leftBtnText={"Bring WellMe to Your Restaurant"} rightBtnText={null} leftBtnColor={"#c28347"} leftBtnTextColor={"#fff"} />
    </div>
  )
}

export default Restaurants