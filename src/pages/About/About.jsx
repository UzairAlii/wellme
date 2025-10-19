import React from 'react'
import AboutLanding from './AboutLanding'
import ImagesSection from './ImagesSection'
import OurStory from './OurStory'
import OurValues from './OurValue'
import OurTeam from './OurTeam'
import OurVision from './OurVision'
import PreFooter from '../../components/PreFooter'

const About = () => {
  return (
    <div>
      <AboutLanding />
      <ImagesSection />
      <OurStory />
      <OurValues />
      <OurTeam />
      <OurVision />
      <PreFooter title={`Let’s Build the Future of Hospitality Together.`} titleWidth={"54%"} rightBtnText={"Connect with us"} />
    </div>
  )
}

export default About