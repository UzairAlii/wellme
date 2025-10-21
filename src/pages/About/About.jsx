import React from 'react'
import AboutLanding from './AboutLanding'
import ImagesSection from './ImagesSection'
import OurStory from './OurStory'
import OurValues from './OurValue'
import OurTeam from './OurTeam'
import OurVision from './OurVision'
import PreFooter from '../../components/PreFooter'
import { useLanguage } from '../../context/LanguageContext'

const About = () => {

  const { trans } = useLanguage()

   const handleRightClick = () => {
    // Create a temporary anchor tag and click it
    const link = document.createElement('a')
    link.href = "mailto:hello@thewellnessmethod.com?subject=Hello&body=I would like to connect"
    link.target = "_blank"
    link.click()
  }


  return (
    <div>
      <AboutLanding />
      <ImagesSection />
      <OurStory />
      <OurValues />
      <OurTeam />
      <OurVision />
      <PreFooter title={trans.AboutPagePreFooterHeading} onRightClick={handleRightClick} titleWidth={"54%"} rightBtnText={trans.ConnectWithUsBtn} />
    </div>
  )
}

export default About