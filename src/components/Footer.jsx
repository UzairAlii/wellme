import React from 'react'
import { Images } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full py-3 bg-transparent">
      <div className="bg-[#c6d1ed] rounded-[18px] w-full mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-4 md:py-3 shadow">
        {/* Logo */}
        <div className="flex items-center mb-3 md:mb-0">
          <img src={Images.brownLogo} alt="Footer Logo" className="w-24" />
        </div>
        {/* Links */}
        <ul className="flex flex-col md:flex-row items-center gap-2 md:gap-8 font-semibold text-[#222] text-sm mb-3 md:mb-0">
          <Link to="/Partners"><li>Partners</li></Link>
          <Link to="/Restaurants"><li>Restaurants</li></Link>
          <Link to="/About"><li>About</li></Link>
          <Link to="/Newsletter"><li>Newsletter</li></Link>
        </ul>
        {/* Button */}
        <div className="flex items-center">
          <button className="bg-[#c28347] text-white font-semibold rounded-full px-6 py-2 text-sm shadow hover:bg-[#b3742f] transition">
            Get Started
          </button>
        </div>
      </div>
      {/* Bottom copyright and links */}
      <div className="w-full max-w-6xl mx-auto text-[11px] text-[#222] text-center mt-2">
        © 2025 The Wellness Method | Privacy Policy | Terms and Conditions | Contact | Take the wellme Health Assessment
      </div>
    </footer>
  )
}

export default Footer