import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import Partners from './pages/partners/Partners'
import Restaurants from './pages/restaurants/Restaurants'
import About from './pages/About/About'
import { Images } from './assets/assets'
import PreFooter from './components/PreFooter'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Welcome from './pages/Welcome/Welcome'
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy/PP'

const App = () => {
  return (
    <div className="relative">
      <ScrollToTop />
      <img
        src={Images.gredientBg}
        className="fixed inset-0 w-full h-full object-cover -z-1 opacity-50 pointer-events-none"
      />

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Partners' element={<Partners />} />
        <Route path='/Restaurants' element={<Restaurants />} />
        <Route path='/Welcome' element={<Welcome />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      </Routes>
      <Footer />


    </div>
  )
}

export default App