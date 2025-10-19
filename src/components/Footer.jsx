import React from 'react'
import { Images } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full py-3 bg-transparent">
      <div className="bg-[#c6d1ed] rounded-[18px] w-full mx-auto flex flex-col md:flex-row items-center justify-between px-5 py-4 md:py-3 shadow">
        {/* Logo */}
        <div className="flex items-center mb-3 md:mb-0">
          <img src={Images.brownLogo} alt="Footer Logo" className="w-24" />
        </div>
        {/* Links */}
        <ul className="flex flex-col md:flex-row items-center gap-2 md:gap-8 font-semibold text-sm mb-3 md:mb-0 lg:-mr-12">
          <NavLink
            to="/Partners"
            className={({ isActive }) =>
              isActive ? "text-[#c28347]" : "text-[#111] hover:text-[#bf7836]"
            }
          >
            <li className='transition hover:text-[#c28347] font-bold text-base'>Partners</li>
          </NavLink>

          <NavLink
            to="/Restaurants"
            className={({ isActive }) =>
              isActive ? "text-[#c28347]" : "text-[#111] hover:text-[#bf7836]"
            }
          >
            <li className='transition hover:text-[#c28347] font-bold text-base'>Restaurants</li>
          </NavLink>

          <NavLink
            to="/About"
            className={({ isActive }) =>
              isActive ? "text-[#c28347]" : "text-[#111] hover:text-[#bf7836]"
            }
          >
            <li className='transition hover:text-[#c28347] font-bold text-base'>About</li>
          </NavLink>

          <NavLink
            to="/Newsletter"
            className={({ isActive }) =>
              isActive ? "text-[#c28347]" : "text-[#111] hover:text-[#bf7836]"
            }
          >
            <li className='transition hover:text-[#c28347] font-bold text-base'>Newsletter</li>
          </NavLink>
        </ul>
        {/* Button */}
        <div className="flex items-center">
          <button
            onClick={() => {
              const section = document.getElementById('forPartnersAndRestaurants');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className='bg-[#c28347] rounded-full py-3 px-8 text-white text-sm font-bold cursor-pointer hover:bg-[#bf7836]'
          >
            Get Started
          </button>
        </div>
      </div>
      {/* Bottom copyright and links */}
      <div className="w-full max-w-6xl mx-auto text-xs lg:text-sm text-[#222] text-center mt-2 px-3">
        © 2025 The Wellness Method | Privacy Policy | Terms and Conditions | Contact | Take the wellme Health Assessment
      </div>
    </footer>
  )
}

export default Footer