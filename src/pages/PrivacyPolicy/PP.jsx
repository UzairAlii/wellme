import React from 'react';
import { motion } from 'framer-motion';
import { Images } from '../../assets/assets';
import { useLanguage } from '../../context/LanguageContext';

const PrivacyPolicy = () => {
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
          {trans.PrivacyTitle}
        </h1>

        {/* Description Text / Privacy Data */}
        <div className="flex flex-col text-[#050200] text-sm md:text-md font-medium openSauceRegular mt-16 w-full">

          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.PrivacyIntro1 }} />
          <p className='mt-7' dangerouslySetInnerHTML={{ __html: trans.PrivacyIntro2 }} />

          <p className='mt-7 font-bold text-[#3d2a1d]'>{trans.PrivacyInteractTitle}</p>
          
          <ul className='list-disc ml-6 space-y-4 mt-4'>
            <li dangerouslySetInnerHTML={{ __html: trans.PrivacyPoint1 }} />
            <li dangerouslySetInnerHTML={{ __html: trans.PrivacyPoint2 }} />
            <li dangerouslySetInnerHTML={{ __html: trans.PrivacyPoint3 }} />
            <li dangerouslySetInnerHTML={{ __html: trans.PrivacyPoint4 }} />
            <li dangerouslySetInnerHTML={{ __html: trans.PrivacyPoint5 }} />
          </ul>

          <p className='mt-7 italic' dangerouslySetInnerHTML={{ __html: trans.PrivacyClosing }} />

          {/* Table of Contents Section */}
          <h2 className='text-xl font-bold text-[#3d2a1d] mt-10 uppercase'>{trans.TableOfContentsTitle}</h2>
          <p className='mt-4'>{trans.TableOfContentsIntro}</p>
          
          <div className='mt-6 space-y-6'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <div key={i} className="border-l-2 border-[#3d2a1d] pl-4">
                <p className='font-bold text-[#3d2a1d]'>{trans[`TOC_${i}`]}</p>
                <p className='mt-1' dangerouslySetInnerHTML={{ __html: trans[`TOC_${i}_Desc`] }} />
              </div>
            ))}
          </div>

          {/* Section 1 */}
          <h2 className='text-2xl font-bold text-[#3d2a1d] mt-12 border-t pt-10 uppercase'>{trans.Sec1_Title}</h2>
          <p className='mt-6'>{trans.Sec1_Para1}</p>

          {/* 1(a) */}
          <h3 className='font-bold mt-8 text-[#3d2a1d]'>{trans.Sec1_a_Title}</h3>
          <div className='space-y-6 mt-4'>
            <p dangerouslySetInnerHTML={{ __html: trans.Sec1_a_P1 }} />
            <p dangerouslySetInnerHTML={{ __html: trans.Sec1_a_P2 }} />
            <p dangerouslySetInnerHTML={{ __html: trans.Sec1_a_P3 }} />
            <p dangerouslySetInnerHTML={{ __html: trans.Sec1_a_P4 }} />
            <p dangerouslySetInnerHTML={{ __html: trans.Sec1_a_P5 }} />
            <p dangerouslySetInnerHTML={{ __html: trans.Sec1_a_P6 }} />
            <p dangerouslySetInnerHTML={{ __html: trans.Sec1_a_P7 }} />
            <p dangerouslySetInnerHTML={{ __html: trans.Sec1_a_P8 }} />
          </div>

          {/* 1(b) */}
          <h3 className='font-bold mt-8 text-[#3d2a1d]'>{trans.Sec1_b_Title}</h3>
          <p className='mt-4'>{trans.Sec1_b_Para}</p>
          <ul className='list-disc ml-6 space-y-4 mt-4'>
            <li>{trans.Sec1_b_Li1}</li>
            <li>{trans.Sec1_b_Li2}</li>
            <li>{trans.Sec1_b_Li3}</li>
            <li>{trans.Sec1_b_Li4}</li>
          </ul>

          {/* 1(c) */}
          <h3 className='font-bold mt-8 text-[#3d2a1d]'>{trans.Sec1_c_Title}</h3>
          <p className='mt-4'>{trans.Sec1_c_Para}</p>
          <ul className='list-disc ml-6 space-y-4 mt-4'>
            <li>{trans.Sec1_c_Li1}</li>
            <li>{trans.Sec1_c_Li2}</li>
          </ul>

          {/* 1(d) */}
          <h3 className='font-bold mt-8 text-[#3d2a1d]'>{trans.Sec1_d_Title}</h3>
          <p className='mt-4'>{trans.Sec1_d_Para}</p>

          {/* Section 2: Use of personal information */}
          <h2 className='text-2xl font-bold text-[#3d2a1d] mt-12 border-t pt-10 uppercase'>{trans.Sec2_Title}</h2>
          <p className='mt-6'>{trans.Sec2_Para1}</p>
          <ul className='list-disc ml-6 space-y-4 mt-6'>
            <li>{trans.Sec2_Li1}</li>
            <li>{trans.Sec2_Li2}</li>
            <li>{trans.Sec2_Li3}</li>
            <li>{trans.Sec2_Li4}</li>
            <li>{trans.Sec2_Li5}</li>
            <li>{trans.Sec2_Li6}</li>
            <li>{trans.Sec2_Li7}</li>
            <li>{trans.Sec2_Li8}</li>
            <li>{trans.Sec2_Li9}</li>
            <li>{trans.Sec2_Li10}</li>
            <li>{trans.Sec2_Li11}</li>
            <li>{trans.Sec2_Li12}</li>
            <li>{trans.Sec2_Li13}</li>
          </ul>
          <div className='mt-8'>
             <span className='font-bold text-[#3d2a1d]'>{trans.Sec2_AIFeatureTitle} </span>
             <span dangerouslySetInnerHTML={{ __html: trans.Sec2_AIFeaturePara }} />
          </div>

          {/* Section 3: Sharing of personal information */}
          <h2 className='text-2xl font-bold text-[#3d2a1d] mt-12 border-t pt-10 uppercase'>{trans.Sec3_Title}</h2>
          <p className='mt-6'>{trans.Sec3_Para1}</p>
          <ul className='list-disc ml-6 space-y-6 mt-6'>
            <li dangerouslySetInnerHTML={{ __html: trans.Sec3_Li1 }} />
            <li dangerouslySetInnerHTML={{ __html: trans.Sec3_Li2 }} />
            <li dangerouslySetInnerHTML={{ __html: trans.Sec3_Li3 }} />
            <li dangerouslySetInnerHTML={{ __html: trans.Sec3_Li4 }} />
            <li dangerouslySetInnerHTML={{ __html: trans.Sec3_Li5 }} />
            <li dangerouslySetInnerHTML={{ __html: trans.Sec3_Li6 }} />
            <li dangerouslySetInnerHTML={{ __html: trans.Sec3_Li7 }} />
            <li dangerouslySetInnerHTML={{ __html: trans.Sec3_Li8 }} />
          </ul>

          {/* Section 4: Data security and retention */}
          <h2 className='text-2xl font-bold text-[#3d2a1d] mt-12 border-t pt-10 uppercase'>{trans.Sec4_Title}</h2>
          <p className='mt-6'>{trans.Sec4_Para1}</p>
          <p className='mt-6' dangerouslySetInnerHTML={{ __html: trans.Sec4_Para2 }} />
          <p className='mt-6'>{trans.Sec4_Para3}</p>

          {/* Section 5: Your privacy rights */}
          <h2 className='text-2xl font-bold text-[#3d2a1d] mt-12 border-t pt-10 uppercase'>{trans.Sec5_Title}</h2>
          <p className='mt-6' dangerouslySetInnerHTML={{ __html: trans.Sec5_Para1 }} />
          <ul className='list-disc ml-6 space-y-6 mt-6'>
            <li dangerouslySetInnerHTML={{ __html: trans.Sec5_Li1 }} />
            <li dangerouslySetInnerHTML={{ __html: trans.Sec5_Li2 }} />
            <li dangerouslySetInnerHTML={{ __html: trans.Sec5_Li3 }} />
            <li dangerouslySetInnerHTML={{ __html: trans.Sec5_Li4 }} />
            <li dangerouslySetInnerHTML={{ __html: trans.Sec5_Li5 }} />
            <li dangerouslySetInnerHTML={{ __html: trans.Sec5_Li6 }} />
          </ul>
          <p className='mt-6'>{trans.Sec5_Para2}</p>
          <p className='mt-6'>{trans.Sec5_Para3}</p>
          <p className='mt-6'>{trans.Sec5_Para4}</p>

          {/* Section 6: Children's privacy */}
          <h2 className='text-2xl font-bold text-[#3d2a1d] mt-12 border-t pt-10 uppercase'>{trans.Sec6_Title}</h2>
          <p className='mt-6'>{trans.Sec6_Para1}</p>
          <ul className='list-disc ml-6 space-y-4 mt-6'>
            <li>{trans.Sec6_Li1}</li>
            <li>{trans.Sec6_Li2}</li>
            <li>{trans.Sec6_Li3}</li>
          </ul>
          <p className='mt-6'>{trans.Sec6_Para2}</p>
          <p className='mt-6' dangerouslySetInnerHTML={{ __html: trans.Sec6_Para3 }} />

          {/* Section 7: Cookies */}
          <h2 className='text-2xl font-bold text-[#3d2a1d] mt-12 border-t pt-10 uppercase'>{trans.Sec7_Title}</h2>
          <p className='mt-6' dangerouslySetInnerHTML={{ __html: trans.Sec7_Para1 }} />

          {/* Section 8: Changes */}
          <h2 className='text-2xl font-bold text-[#3d2a1d] mt-12 border-t pt-10 uppercase'>{trans.Sec8_Title}</h2>
          <p className='mt-6'>{trans.Sec8_Para1}</p>

          {/* Section 9: Contact us */}
          <h2 className='text-2xl font-bold text-[#3d2a1d] mt-12 border-t pt-10 uppercase'>{trans.Sec9_Title}</h2>
          <p className='mt-6' dangerouslySetInnerHTML={{ __html: trans.Sec9_Para1 }} />

          {/* Section 10: Supplemental notices */}
          <h2 className='text-2xl font-bold text-[#3d2a1d] mt-12 border-t pt-10 uppercase'>{trans.Sec10_Title}</h2>
          <p className='mt-6'>{trans.Sec10_Para1}</p>

          {/* 10(a) EU and UK */}
          <h3 className='font-bold mt-10 text-[#3d2a1d] text-xl'>{trans.Sec10_a_Title}</h3>
          <p className='mt-6'><b>{trans.Sec10_a_Sub1}</b> {trans.Sec10_a_P1}</p>
          <p className='mt-6' dangerouslySetInnerHTML={{ __html: trans.Sec10_a_P2 }} />
          <p className='mt-6'>{trans.Sec10_a_P3}</p>
          <ul className='list-disc ml-6 space-y-2 mt-4'>
            <li>{trans.Sec10_a_Li1}</li>
            <li>{trans.Sec10_a_Li2}</li>
            <li>{trans.Sec10_a_Li3}</li>
          </ul>
          <p className='mt-6' dangerouslySetInnerHTML={{ __html: trans.Sec10_a_P4 }} />
          <p className='mt-6' dangerouslySetInnerHTML={{ __html: trans.Sec10_a_P5 }} />
          <p className='mt-6'>{trans.Sec10_a_P6}</p>

          <p className='mt-10 font-bold text-[#3d2a1d]'>{trans.Sec10_a_Sub2}</p>
          <p className='mt-4'>{trans.Sec10_a_P7}</p>
          <ul className='list-disc ml-6 space-y-2 mt-4'>
            <li>{trans.Sec10_a_Li4}</li>
            <li>{trans.Sec10_a_Li5}</li>
            <li>{trans.Sec10_a_Li6}</li>
            <li>{trans.Sec10_a_Li7}</li>
          </ul>

          <p className='mt-10 font-bold text-[#3d2a1d]'>{trans.Sec10_a_Sub3}</p>
          <p className='mt-4'>{trans.Sec10_a_P8}</p>
          <p className='mt-4'>{trans.Sec10_a_P9}</p>
          <ul className='list-disc ml-6 space-y-4 mt-4'>
            <li dangerouslySetInnerHTML={{ __html: trans.Sec10_a_Li8 }} />
            <li dangerouslySetInnerHTML={{ __html: trans.Sec10_a_Li9 }} />
            <li dangerouslySetInnerHTML={{ __html: trans.Sec10_a_Li10 }} />
            <li dangerouslySetInnerHTML={{ __html: trans.Sec10_a_Li11 }} />
            <li dangerouslySetInnerHTML={{ __html: trans.Sec10_a_Li12 }} />
            <li dangerouslySetInnerHTML={{ __html: trans.Sec10_a_Li13 }} />
            <li dangerouslySetInnerHTML={{ __html: trans.Sec10_a_Li14 }} />
          </ul>

          <p className='mt-10 font-bold text-[#3d2a1d]'>{trans.Sec10_a_Sub4}</p>
          <p className='mt-4'>{trans.Sec10_a_P10}</p>
          <ul className='list-disc ml-6 space-y-4 mt-4'>
            <li>{trans.Sec10_a_Li15}</li>
            <li>{trans.Sec10_a_Li16}</li>
            <li dangerouslySetInnerHTML={{ __html: trans.Sec10_a_Li17 }} />
          </ul>
          <p className='mt-6'>{trans.Sec10_a_P11}</p>

          <p className='mt-10 font-bold text-[#3d2a1d]'>{trans.Sec10_a_Sub5}</p>
          <p className='mt-4'>{trans.Sec10_a_P12}</p>
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.Sec10_a_P13 }} />
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.Sec10_a_P14 }} />
          <p className='mt-6' dangerouslySetInnerHTML={{ __html: trans.Sec10_a_P15 }} />

          {/* 10(b) California */}
          <h3 className='font-bold mt-12 text-[#3d2a1d] text-xl'>{trans.Sec10_b_Title}</h3>
          <p className='mt-6'>{trans.Sec10_b_P1}</p>
          <p className='mt-10 font-bold text-[#3d2a1d]'>{trans.Sec10_b_Sub1}</p>
          <p className='mt-4'>{trans.Sec10_b_P2}</p>
          <p className='mt-6'>{trans.Sec10_b_P3}</p>

          <div className='h-fit w-full flex items-center justify-center mt-10 mb-10'>
            <img className='bg-cover w-full' src={Images.privacyImage} alt="" />
          </div>

          {/* Section 10(b) Continued */}
          <p className='italic' dangerouslySetInnerHTML={{ __html: trans.Sec10_b_Note }} />
          
          <p className='mt-10 font-bold text-[#3d2a1d]'>{trans.Sec10_b_UseTitle}</p>
          <p className='mt-4'>{trans.Sec10_b_UseIntro}</p>
          <ul className='list-disc ml-6 space-y-4 mt-4'>
            <li>{trans.Sec10_b_UseLi1}</li>
            <li>{trans.Sec10_b_UseLi2}</li>
            <li>{trans.Sec10_b_UseLi3}</li>
            <li>{trans.Sec10_b_UseLi4}</li>
            <li>{trans.Sec10_b_UseLi5}</li>
            <li>{trans.Sec10_b_UseLi6}</li>
            <li>{trans.Sec10_b_UseLi7}</li>
            <li>{trans.Sec10_b_UseLi8}</li>
            <li>{trans.Sec10_b_UseLi9}</li>
            <li>{trans.Sec10_b_UseLi10}</li>
            <li>{trans.Sec10_b_UseLi11}</li>
            <li>{trans.Sec10_b_UseLi12}</li>
          </ul>

          <p className='mt-10 font-bold text-[#3d2a1d]'>{trans.Sec10_b_SensitiveTitle}</p>
          <p className='mt-4'>{trans.Sec10_b_SensitivePara}</p>

          <p className='mt-10 font-bold text-[#3d2a1d]'>{trans.Sec10_b_RetentionTitle}</p>
          <p className='mt-4'>{trans.Sec10_b_RetentionPara}</p>

          <p className='mt-10 font-bold text-[#3d2a1d]'>{trans.Sec10_b_RightsTitle}</p>
          <p className='mt-4'>{trans.Sec10_b_RightsPara}</p>
          <ul className='list-disc ml-6 space-y-4 mt-6'>
            <li dangerouslySetInnerHTML={{ __html: trans.Sec10_b_RightsLi1 }} />
            <li dangerouslySetInnerHTML={{ __html: trans.Sec10_b_RightsLi2 }} />
            <li dangerouslySetInnerHTML={{ __html: trans.Sec10_b_RightsLi3 }} />
            <li dangerouslySetInnerHTML={{ __html: trans.Sec10_b_RightsLi4 }} />
            <li dangerouslySetInnerHTML={{ __html: trans.Sec10_b_RightsLi5 }} />
            <li dangerouslySetInnerHTML={{ __html: trans.Sec10_b_RightsLi6 }} />
            <li dangerouslySetInnerHTML={{ __html: trans.Sec10_b_RightsLi7 }} />
          </ul>

          <p className='mt-10 font-bold text-[#3d2a1d]'>{trans.Sec10_b_OptOutTitle}</p>
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: trans.Sec10_b_OptOutPara }} />

          {/* Section 10(c): Other US States */}
          <h3 className='font-bold mt-12 text-[#3d2a1d] text-xl'>{trans.Sec10_c_Title}</h3>
          <p className='mt-6'>{trans.Sec10_c_Para1}</p>

          <p className='mt-10 font-bold text-[#3d2a1d]'>{trans.Sec10_c_ColTitle}</p>
          <p className='mt-4'>{trans.Sec10_c_ColPara}</p>

          <p className='mt-10 font-bold text-[#3d2a1d]'>{trans.Sec10_c_UseTitle}</p>
          <p className='mt-4'>{trans.Sec10_c_UsePara}</p>

          <p className='mt-10 font-bold text-[#3d2a1d]'>{trans.Sec10_c_DisTitle}</p>
          <p className='mt-4'>{trans.Sec10_c_DisPara}</p>

          <p className='mt-10 font-bold text-[#3d2a1d]'>{trans.Sec10_c_RightsTitle}</p>
          <p className='mt-4'>{trans.Sec10_c_RightsPara}</p>
          <ul className='list-disc ml-6 space-y-6 mt-6'>
            <li dangerouslySetInnerHTML={{ __html: trans.Sec10_c_RightsLi1 }} />
            <li dangerouslySetInnerHTML={{ __html: trans.Sec10_c_RightsLi2 }} />
            <li dangerouslySetInnerHTML={{ __html: trans.Sec10_c_RightsLi3 }} />
            <li dangerouslySetInnerHTML={{ __html: trans.Sec10_c_RightsLi4 }} />
            <li dangerouslySetInnerHTML={{ __html: trans.Sec10_c_RightsLi5 }} />
          </ul>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;