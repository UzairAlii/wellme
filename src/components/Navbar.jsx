import React, { useEffect, useState } from 'react'
import { Images } from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScroll, setIsScroll] = useState(false)



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className='fixed top-0 left-0 w-full z-20'>
      <div className='h-[13vh] w-full flex items-center justify-center px-4 lg:px-10 relative'>
        {/* Desktop/Tablet Navbar */}
        <div className='hidden lg:flex w-[65%] bg-[#c6d1ed]/40 backdrop-blur-md shadow-sm rounded-full py-2 pl-5 pr-2 items-center justify-between'>
          <Link to={'/'}>
            <div className="logo">
              <img className='w-14' src={Images.logo} alt="" />
            </div>
          </Link>
          <ul className='flex items-center gap-5 font-semibold'>
            <Link to={"/Partners"}><li className='transition hover:text-[#c28347]'>Partners</li></Link>
            <Link to={"/Restaurants"}><li className='transition hover:text-[#c28347]'>Restaurants</li></Link>
            <Link to={"/About"}><li className='transition hover:text-[#c28347]'>About</li></Link>
          </ul>
          <button
            onClick={() => {
              const section = document.getElementById('forPartnersAndRestaurants');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className='bg-[#c28347] rounded-full py-2 px-4 text-white text-sm font-semibold cursor-pointer hover:bg-[#bf7836]'
          >
            Get Started
          </button>
        </div>

        <div className="language absolute right-10 hidden lg:block">
          <button className='bg-[#c282475b] px-4 py-2 font-semibold rounded-full text-sm w-full border-[1px] border-[#c282475b] transition-colors duration-200 hover:bg-transparent hover:border-black hover:text-[#111]'>EN/ES</button>
        </div>

        {/* Mobile Navbar */}
        <div className={`flex lg:hidden w-full items-center justify-between py-4 rounded-full px-2 ${isScroll ? "bg-white/40 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
          <Link to={'/'}>
            <div className="logo">
              <img className='w-12' src={Images.logo} alt="" />
            </div>
          </Link>
          <div className='flex items-center'>
            <button
              onClick={() => {
                const section = document.getElementById('forPartnersAndRestaurants');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className='bg-[#c28347] rounded-full py-2 px-4 text-white text-sm font-semibold cursor-pointer hover:bg-[#bf7836]'
            >
              Get Started
            </button>
            <button
              className='ml-2 flex flex-col justify-center items-center w-10 h-10'
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <img src={Images.bars} alt="" />
            </button>
          </div>
        </div>

        {/* Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-[#c6d1ed]/40 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}

        {/* Slide-in Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-[80vw] max-w-xs bg-[#f7faff] shadow-lg z-50 flex flex-col pt-20 px-6 transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          style={{ borderTopLeftRadius: '2rem', borderBottomLeftRadius: '2rem' }}
        >
          <button
            className="absolute top-6 right-6 text-2xl font-bold"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <img className='w-5' src={Images.cancel} alt="" />
          </button>
          <ul className='flex flex-col gap-6 font-semibold text-lg'>
            <Link to={"/Partners"} onClick={() => setMenuOpen(false)}><li className='text-sm pb-5 border-b-[1px] border-[#00000079]'>Partners</li></Link>
            <Link to={"/Restaurants"} onClick={() => setMenuOpen(false)}><li className='text-sm pb-5 border-b-[1px] border-[#00000079]'>Restaurants</li></Link>
            <Link to={"/About"} onClick={() => setMenuOpen(false)}><li className='text-sm pb-5 border-b-[1px] border-[#00000079]'>About</li></Link>
          </ul>
          <div className="language mt-auto mb-8">
            <button className='bg-[#c282475b] px-4 py-2 font-semibold rounded-full text-sm w-full'>EN/ES</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar