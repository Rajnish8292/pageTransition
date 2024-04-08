'use client'

import Image from "next/image";
import styles from "./page.module.css";
import BottomNav from '../templates/BottomNav'
import { useEffect, useState } from "react";
import {motion, AnimatePresence} from 'framer-motion'

import DigitalStrategy from '@/components/pages/DigitalStrategy.jsx'
import ContentMarketing from '@/components/pages/ContentMarketing.jsx'
import BrandPositioning from '@/components/pages/BrandPositioning.jsx'
import SocialMediaMarketing from '@/components/pages/SocialMediaMarketing.jsx'
import SeoUx from '@/components/pages/SeoUx.jsx'
import GoogleAds from '@/components/pages/GoogleAds.jsx'

import COLOR_THEME from '@/assets/data/ColorTheme'






export default function Home() {
  const [currentPage, setCurrentPage] = useState(0)

  const pages = {
    0: <DigitalStrategy key='digitalStrategy' currentPage = {currentPage} />,
    1: <ContentMarketing key='contentMarketing' currentPage = {currentPage}  />,
    2: <BrandPositioning key='brandPositioning'  currentPage = {currentPage} />,
    3: <SocialMediaMarketing key='socialMediaMarketing'  currentPage = {currentPage} />,
    4: <SeoUx key='seoUx'  currentPage = {currentPage} />,
    5: <GoogleAds key='googleAds'  currentPage = {currentPage} />
  }
  

  const changePageHandler = (pageNo) => { 
    setCurrentPage(pageNo)

   document.querySelector('.exit_transition_wrapper').style.background = COLOR_THEME[pageNo]['--secondary-lighten']
   document.querySelector('.wheel_indicator_path').setAttribute('stroke', COLOR_THEME[pageNo]['--primary'])

  }






  return (
    <>
    <AnimatePresence mode='wait'>
      {
        pages[currentPage] // render the current selected page
      }
    </AnimatePresence>

      <BottomNav changePage = {changePageHandler}/> 
    </>
  );
}
