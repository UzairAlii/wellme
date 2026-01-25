import React from 'react';
import { motion } from 'framer-motion';
import { Images } from '../../assets/assets';
import { useLanguage } from '../../context/LanguageContext';

const TermsAndConditions = () => {
  const { trans } = useLanguage();

  return (
    <div className='h-fit w-full flex flex-col items-center justify-center px-4 gap-10 md:px-5 mt-30 font-sans mb-10'>

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
      <div className="md:max-w-4xl flex flex-col items-center w-full">

        {/* Title */}
        <h1 className="text-3xl mac md:text-5xl font-extrabold text-[#302015] uppercase text-center">
          {trans.TermsHeading}
        </h1>

        {/* Description Text / Terms Data */}
        <div className="flex flex-col text-[#050200] text-sm md:text-md font-medium openSauceRegular mt-16">

          <p className='mt-4'>{trans.TermsPara1}</p>

          <p dangerouslySetInnerHTML={{ __html: trans.TermsPara2 }} className='mt-7' />

          <p className='mt-7 font-bold text-[#3d2a1d]'>{trans.TermsEmergency}</p>

          <p className='mt-7 font-bold text-[#3d2a1d]'>{trans.TermsArbitration}</p>

          {/* Section 1 */}
          <h2 className='text-xl font-bold text-[#3d2a1d] mt-10'>{trans.TermsSec1Title}</h2>

          <h3 className='font-bold mt-5'>{trans.TermsSec1_1Title}</h3>
          <p className='mt-4'>{trans.TermsSec1_1Desc}</p>

          <h3 className='font-bold mt-5'>{trans.TermsSec1_2Title}</h3>
          <p className='mt-6'>{trans.TermsSec1_2A}</p>
          <p className='mt-6'>{trans.TermsSec1_2B}</p>
          <p className='mt-6'>{trans.TermsSec1_2C}</p>
          <p className='mt-6'>{trans.TermsSec1_2D}</p>

          <h3 className='font-bold mt-5'>{trans.TermsSec1_3Title}</h3>
          <p className='mt-4'>{trans.TermsSec1_3Desc}</p>

          {/* Section 2 */}
          <h2 className='text-xl font-bold text-[#3d2a1d] mt-10'>{trans.TermsSec2Title}</h2>

          <h3 className='font-bold mt-5'>{trans.TermsSec2_1Title}</h3>
          <p className='mt-4'>{trans.TermsSec2_1A}</p>
          <p className='mt-4'>{trans.TermsSec2_1B}</p>
          <p className='mt-4'>{trans.TermsSec2_1C}</p>

          <h3 className='font-bold mt-5'>{trans.TermsSec2_2Title}</h3>
          <p className='mt-4'>{trans.TermsSec2_2Intro}</p>
          <p className='mt-4'>{trans.TermsSec2_2A}</p>
          <p className='mt-4'>{trans.TermsSec2_2B}</p>
          <p className='mt-4'>{trans.TermsSec2_2C}</p>
          <p className='mt-4'>{trans.TermsSec2_2D}</p>
          <p className='mt-4'>{trans.TermsSec2_2Outro}</p>

          <h3 className='font-bold mt-5'>{trans.TermsSec2_3Title}</h3>
          <p className='mt-4'>{trans.TermsSec2_3A}</p>
          <p className='mt-4'>{trans.TermsSec2_3B}</p>
          <p className='mt-4'>{trans.TermsSec2_3C}</p>
          <p className='mt-4'>{trans.TermsSec2_3D}</p>
          <p className='mt-4'>{trans.TermsSec2_3E}</p>
          <p className='mt-4'>{trans.TermsSec2_3F}</p>
          <p className='mt-4'>{trans.TermsSec2_3G}</p>
          <p className='mt-4'>{trans.TermsSec2_3H}</p>
          <p className='mt-4'>{trans.TermsSec2_3I}</p>

          <h3 className='font-bold mt-5'>{trans.TermsSec2_4Title}</h3>
          <p className='mt-4'>{trans.TermsSec2_4A}</p>
          <p dangerouslySetInnerHTML={{ __html: trans.TermsSec2_4B }} className='mt-4' />
          <p className='mt-4'>{trans.TermsSec2_4C}</p>

          <h3 className='font-bold mt-5'>{trans.TermsSec2_5Title}</h3>
          <p className='mt-4'>{trans.TermsSec2_5Desc}</p>

          <h3 className='font-bold mt-5'>{trans.TermsSec2_6Title}</h3>
          <p className='mt-4'>{trans.TermsSec2_6Desc}</p>

          {/* Section 3 */}
          <h2 className='text-2xl font-bold text-[#3d2a1d] pt-10'>{trans.TermsSec3Title}</h2>
          <h3 className='font-bold mt-5'>{trans.TermsSec3_1Title}</h3>
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec3_1Desc }} />

          <h3 className='font-bold mt-5'>{trans.TermsSec3_2Title}</h3>
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec3_2A }} />
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec3_2B }} />

          <h3 className='font-bold mt-5'>{trans.TermsSec3_3Title}</h3>
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec3_3Desc }} />

          {/* Section 4 */}
          <h2 className='text-2xl font-bold text-[#3d2a1d] pt-10'>{trans.TermsSec4Title}</h2>
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec4Intro }} />
          <div className='space-y-2 mt-4'>
            <p dangerouslySetInnerHTML={{ __html: trans.TermsSec4A }} />
            <p dangerouslySetInnerHTML={{ __html: trans.TermsSec4B }} />
            <p dangerouslySetInnerHTML={{ __html: trans.TermsSec4C }} />
            <p dangerouslySetInnerHTML={{ __html: trans.TermsSec4D }} />
            <p dangerouslySetInnerHTML={{ __html: trans.TermsSec4E }} />
            <p dangerouslySetInnerHTML={{ __html: trans.TermsSec4F }} />
            <p dangerouslySetInnerHTML={{ __html: trans.TermsSec4G }} />
            <p dangerouslySetInnerHTML={{ __html: trans.TermsSec4H }} />
            <p dangerouslySetInnerHTML={{ __html: trans.TermsSec4I }} />
            <p dangerouslySetInnerHTML={{ __html: trans.TermsSec4J }} />
            <p dangerouslySetInnerHTML={{ __html: trans.TermsSec4K }} />
            <p dangerouslySetInnerHTML={{ __html: trans.TermsSec4L }} />
            <p dangerouslySetInnerHTML={{ __html: trans.TermsSec4M }} />
            <p dangerouslySetInnerHTML={{ __html: trans.TermsSec4N }} />
            <p dangerouslySetInnerHTML={{ __html: trans.TermsSec4O }} />
            <p dangerouslySetInnerHTML={{ __html: trans.TermsSec4P }} />
          </div>
          <p className='mt-5' dangerouslySetInnerHTML={{ __html: trans.TermsSec4Outro1 }} />
          <p className='mt-3' dangerouslySetInnerHTML={{ __html: trans.TermsSec4Outro2 }} />
          <p className='mt-3' dangerouslySetInnerHTML={{ __html: trans.TermsSec4Outro3 }} />

          {/* Section 5 */}
          <h2 className='text-2xl font-bold text-[#3d2a1d] pt-10'>{trans.TermsSec5Title}</h2>
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec5Desc }} />

          <h3 className='font-bold mt-5'>{trans.TermsSec5_1Title}</h3>
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec5_1A }} />
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec5_1B }} />
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec5_1C }} />
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec5_1D }} />
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec5_1E }} />

          <h3 className='font-bold mt-5'>{trans.TermsSec5_2Title}</h3>
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec5_2Desc }} />

          {/* Section 6 */}
          <h2 className='text-2xl font-bold text-[#3d2a1d] mt-10'>{trans.TermsSec6Title}</h2>
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec6Para1 }} />
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec6Para2 }} />
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec6Para3 }} />
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec6Para4 }} />

          {/* --- Section 7 --- */}
          <h2 className='text-2xl font-bold text-[#3d2a1d] pt-10'>{trans.TermsSec7Title}</h2>
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec7_1 }} />
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec7_2 }} />
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec7_3 }} />
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec7_4 }} />
          
          <h3 className='font-bold mt-5'>{trans.TermsSec7_5Title}</h3>
          <div className='space-y-4'>
            <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec7_5A }} />
            <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec7_5B }} />
            <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec7_5C }} />
            <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec7_5D }} />
            <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec7_5E }} />
            <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec7_5F }} />
            <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec7_5G }} />
            <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec7_5H }} />
            <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec7_5I }} />
          </div>
          
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec7_6 }} />
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec7_7 }} />
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec7_8 }} />

          {/* --- Section 8 --- */}
          <h2 className='text-2xl font-bold text-[#3d2a1d] pt-10'>{trans.TermsSec8Title}</h2>
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec8_1 }} />
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec8_2 }} />
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec8_3 }} />
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec8_4 }} />

          {/* --- Section 9 --- */}
          <h2 className='text-2xl font-bold text-[#3d2a1d] pt-10'>{trans.TermsSec9Title}</h2>
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec9Para1 }} />
          <p className='font-bold text-[#3d2a1d] mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec9Intro }} />
          
          <div className='space-y-4'>
            <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec9A }} />
            <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec9B }} />
            <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec9C }} />
            <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec9D }} />
            <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec9E }} />
            <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec9F }} />
            <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec9G }} />
            <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec9H }} />
          </div>

          <h3 className='font-bold mt-5'>{trans.TermsSec9_1Title}</h3>
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec9_1Para }} />

          <h3 className='font-bold mt-5'>{trans.TermsSec9_2Title}</h3>
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec9_2Para }} />

          <h3 className='font-bold mt-5'>{trans.TermsSec9_3Title}</h3>
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.TermsSec9_3Para }} />

          {/* SECTION 10 */}
      <h2 className='text-2xl font-bold text-[#3d2a1d] pt-10'>{trans.TermsSec10Title}</h2>
      <p className="mt-4" dangerouslySetInnerHTML={{ __html: trans.TermsSec10_1 }} />
      <p className="mt-4">{trans.TermsSec10_1_Note}</p>
      <p className="mt-4" dangerouslySetInnerHTML={{ __html: trans.TermsSec10_2 }} />
      <p className="mt-4" dangerouslySetInnerHTML={{ __html: trans.TermsSec10_3 }} />

      {/* SECTION 11 */}
      <h2 className='text-2xl font-bold text-[#3d2a1d] pt-10 mt-4'>{trans.TermsSec11Title}</h2>
      <p className="mt-4" dangerouslySetInnerHTML={{ __html: trans.TermsSec11_1 }} />
      <p className="mt-4" dangerouslySetInnerHTML={{ __html: trans.TermsSec11_2 }} />
      <p className="mt-4" dangerouslySetInnerHTML={{ __html: trans.TermsSec11_3 }} />
      <p className="mt-4" dangerouslySetInnerHTML={{ __html: trans.TermsSec11_4Title }} />
      
      <div className='ml-4 space-y-4 mt-4'>
        <p>{trans.TermsSec11_4_a}</p>
        <p>{trans.TermsSec11_4_b}</p>
        <p>{trans.TermsSec11_4_c}</p>
        <p>{trans.TermsSec11_4_d}</p>
        <p>{trans.TermsSec11_4_e}</p>
        <p>{trans.TermsSec11_4_f}</p>
      </div>
      
      <p className="mt-4" dangerouslySetInnerHTML={{ __html: trans.TermsSec11_4_g }} />

      {/* SECTION 12 */}
      <h2 className='text-2xl font-bold text-[#3d2a1d] pt-10'>{trans.TermsSec12Title}</h2>
      <p className="mt-4">{trans.TermsSec12Para1}</p>
      <p className="mt-4">{trans.TermsSec12Para2}</p>
      <p className="mt-4">{trans.TermsSec12Para3}</p>
      <p className="mt-4">{trans.TermsSec12Para4}</p>
      <p className="mt-4">{trans.TermsSec12Para5}</p>
      <p className="mt-4">{trans.TermsSec12Para6}</p>
      <p className="mt-4 font-bold">{trans.TermsSec12Para7}</p>

      {/* SECTION 14 */}
      <h2 className='text-2xl font-bold text-[#3d2a1d] pt-10'>{trans.TermsSec14Title}</h2>
      <p className="mt-4 font-semibold italic text-sm text-[#7a6a5e]">{trans.TermsSec14Intro}</p>
      
      <div className='space-y-6 mt-4'>
        <p>{trans.TermsSec14_a}</p>
        <p>{trans.TermsSec14_b}</p>
        <p>{trans.TermsSec14_c}</p>
        <p>{trans.TermsSec14_d}</p>
        <p>{trans.TermsSec14_e}</p>
        <p>{trans.TermsSec14_f}</p>
        <p>{trans.TermsSec14_g}</p>
        <p>{trans.TermsSec14_h}</p>
        <p>{trans.TermsSec14_i}</p>
        <p>{trans.TermsSec14_j}</p>
      </div>

      {/* SECTION 15 */}
      <h2 className='text-2xl font-bold text-[#3d2a1d] pt-10'>{trans.TermsSec15Title}</h2>
      
      <h3 className='text-md font-bold mt-4'>{trans.TermsSec15_1Title}</h3>
      <p className="mt-4">{trans.TermsSec15_1Para}</p>

      <h3 className='text-md font-bold mt-4'>{trans.TermsSec15_2Title}</h3>
      <p className="mt-4">{trans.TermsSec15_2Para}</p>

      <h3 className='text-md font-bold mt-4'>{trans.TermsSec15_3Title}</h3>
      <p className="mt-4">{trans.TermsSec15_3Para1}</p>
      <p className="mt-4">{trans.TermsSec15_3Para2}</p>
      <p className="mt-4">{trans.TermsSec15_3Para3}</p>

      <h3 className='text-md font-bold mt-4'>{trans.TermsSec15_4Title}</h3>
      <p className="mt-4">{trans.TermsSec15_4Para}</p>

      <h3 className='text-md font-bold mt-4'>{trans.TermsSec15_5Title}</h3>
      <p className="mt-4">{trans.TermsSec15_5Para}</p>

      <h3 className='text-md font-bold mt-4'>{trans.TermsSec15_6Title}</h3>
      <p className="mt-4">{trans.TermsSec15_6Para}</p>

      <h3 className='text-md font-bold mt-4'>{trans.TermsSec15_7Title}</h3>
      <p className="mt-4">{trans.TermsSec15_7Para}</p>

      <h3 className='text-md font-bold mt-4'>{trans.TermsSec15_8Title}</h3>
      <p className="mt-4">{trans.TermsSec15_8Para}</p>

      <h3 className='text-md font-bold mt-4'>{trans.TermsSec15_9Title}</h3>
      <p className="mt-4">{trans.TermsSec15_9Para}</p>
      
      <h3 className='text-md font-bold mt-4'>{trans.TermsSec15_10Title}</h3>
      <p className="mt-4">{trans.TermsSec15_10Para}</p>

      <h3 className='text-md font-bold mt-4'>{trans.TermsSec15_11Title}</h3>
      <p className="mt-4">{trans.TermsSec15_11Para}</p>

        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;