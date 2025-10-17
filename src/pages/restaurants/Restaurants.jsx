import React from 'react'
import RestLanding from './RestLanding'
import ImagesSection from './ImagesSection'
import HospitalityChallange from './HospitalityChallange'
import Mobiles from '../../components/Mobiles'
import OurSolution from './OurSolution'
import WhyMatters from './WhyMatters'
import ValueForWorkers from './ValueForWorkers'

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
    </div>
  )
}

export default Restaurants