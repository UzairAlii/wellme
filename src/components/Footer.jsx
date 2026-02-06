import { Images } from '../assets/assets'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useEffect, useState } from 'react'

const Footer = () => {

  const { trans } = useLanguage()

    const [scrollAfterNavigate, setScrollAfterNavigate] = useState(false)
    const [scrollToContact, setScrollToContact] = useState(false);
  
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/' && scrollAfterNavigate) {
      const section = document.getElementById('forPartnersAndRestaurants');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
      setScrollAfterNavigate(false);
    }

    if (location.pathname === '/About' && scrollToContact) {
      const section = document.getElementById('contact-form');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
      setScrollToContact(false);
    }
  }, [location.pathname, scrollAfterNavigate, scrollToContact]);

  const handleContactClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/About') {
      const section = document.getElementById('contact-form');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    } else {
      setScrollToContact(true);
      navigate('/About');
    }
  };
  
    const handleGetStarted = () => {
      if (location.pathname === '/Partners') {
        window.open('https://forms.gle/LQXUaqPgn85Y9uHW6', '_blank')
      } else if (location.pathname === '/Restaurants') {
        window.open('https://forms.gle/x7CNBWaRR7nWvSAB7', '_blank')
      } else if (location.pathname === '/About') {
        navigate('/')
        setScrollAfterNavigate(true)
      } else {
        const section = document.getElementById('forPartnersAndRestaurants')
        if (section) section.scrollIntoView({ behavior: 'smooth' })
      }
    }

  return (
    <footer className="w-full py-3 bg-transparent">
      <div className="bg-[#c6d1ed] rounded-[18px] w-[98%] mx-auto flex flex-col md:flex-row items-center justify-between px-5 py-4 md:py-3 shadow">
        {/* Logo */}
        <div className="flex items-center mb-3 md:mb-0">
          <img src={Images.brownLogo} alt="Footer Logo" className="w-24" />
        </div>
        {/* Links */}
        <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-8 font-semibold text-sm my-8 md:my-0 md:mb-0 lg:-mr-12">
          <NavLink
            to="/Partners"
            className={({ isActive }) =>
              isActive ? "text-[#c28347]" : "text-[#111] hover:text-[#bf7836]"
            }
          >
            <li className='transition hover:text-[#c28347] text-sm openSauceRegular font-semibold'>{trans.Partners}</li>
          </NavLink>

          <NavLink
            to="/Restaurants"
            className={({ isActive }) =>
              isActive ? "text-[#c28347]" : "text-[#111] hover:text-[#bf7836]"
            }
          >
            <li className='transition hover:text-[#c28347] openSauceRegular text-sm'>{trans.Restaurants}</li>
          </NavLink>

          <NavLink
            to="/About"
            className={({ isActive }) =>
              isActive ? "text-[#c28347]" : "text-[#111] hover:text-[#bf7836]"
            }
          >
            <li className='transition hover:text-[#c28347] openSauceRegular text-sm'>{trans.About}</li>
          </NavLink>

            <li className='transition hover:text-[#c28347] openSauceRegular text-sm cursor-pointer'>{trans.NewsLetter}</li>
          
        </ul>
        {/* Button */}
        <div className="flex items-center">
          <button
            onClick={handleGetStarted}
            className='bg-[#c28347] rounded-full py-3 px-8 text-white text-sm openSauceRegular font-semibold cursor-pointer hover:bg-[#bf7836]'
          >
            {trans.getStartedBtn}
          </button>
        </div>
      </div>
      {/* Bottom copyright and links */}
<div className="w-full max-w-7xl mx-auto text-[10px] lg:text-sm text-[#222] mt-2 px-3 py-[7px] openSauceRegular">
  <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1">
    
    <span>{trans.EndingFooterPara}</span>
    <span className="text-gray-400">|</span>

    <a className="hover:underline" href="https://thewellnessmethod.com/privacy-policy" target="_blank">
      {trans.PrivacyPolicy}
    </a>
    <span className="text-gray-400">|</span>

    <a className="hover:underline" href="https://thewellnessmethod.com/terms-and-conditions" target="_blank">
      {trans.TermsAndConditions}
    </a>
    <span className="text-gray-400">|</span>

    <button 
      onClick={handleContactClick} 
      className="hover:underline cursor-pointer bg-transparent border-none p-0"
    > 
      {trans.Contact}
    </button>
    <span className="text-gray-400">|</span>

    <a className="hover:underline" href="https://74e2-alan.systeme.io/assessment" target="_blank">
      {trans.wellmeHealthAssessment}
    </a>

  </div>
</div>
    </footer>
  )
}

export default Footer