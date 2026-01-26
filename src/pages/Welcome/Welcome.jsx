import React from 'react';
import { motion } from 'framer-motion';
import { Images } from '../../assets/assets';
import { useLanguage } from '../../context/LanguageContext';

const WelcomePage = () => {
  const { trans } = useLanguage();

  return (
    <div className='h-fit w-full flex flex-col items-center justify-center px-4 gap-10 md:px-5 mt-30 font-sans mb-10 pt-20 pb-30'>
      
      {/* Logo Section */}
      <motion.img
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        className='w-24' 
        src={Images.smallLogo} 
        alt="WellMe Logo" 
      />

      {/* Main Content Container */}
      <div className="md:max-w-2xl flex flex-col items-center w-full">
        
        {/* Title */}
        <h1 className="text-3xl mac md:text-5xl font-extrabold text-[#302015] uppercase">
          {trans.WelcomeHeading}
        </h1>

        {/* Description Text */}
        <div className="flex flex-col text-[#000] text-sm md:text-base font-medium openSauceRegular mt-16">
          <p>
            {trans.WelcomeStatus}
          </p>

          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-lg text-[#3d2a1d] mt-5">
                {trans.WelcomeNextTitle}
            </h3>
            <p>
              {trans.WelcomeNextDesc}
            </p>
          </div>

          <p className='mt-7'>
            {trans.WelcomeEmployees}
          </p>

          <p className='mt-7'>
            {trans.WelcomeSupport}
          </p>

          <p>
            {trans.WelcomeThankYou}
          </p>

          {/* Footer/Sign-off */}
          <div className="mt-7">
            <p>{trans.WelcomeFamily}</p>
            <p className="font-bold">{trans.WelcomeTeam}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;