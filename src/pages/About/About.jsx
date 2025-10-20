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

  const { language, trans } = useLanguage()

  return (
    <div>
      <AboutLanding />
      <ImagesSection />
      <OurStory />
      <OurValues />
      <OurTeam />
      <OurVision />
      <PreFooter title={trans.AboutPagePreFooterHeading} titleWidth={"54%"} rightBtnText={trans.ConnectWithUsBtn} />
    </div>
  )
}

export default About