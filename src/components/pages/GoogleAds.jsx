import {motion, AnimatePresence, cubicBezier} from 'framer-motion'
import './styles/GoogleAds.css'
import localFont from 'next/font/local'
import PageTitle from '../PageTitle'

import Inner from '../Inner'
const nexaBold = localFont({
    src: '../../assets/fonts/Nexa_bold.otf',
})

const nexaLight = localFont({
    src: '../../assets/fonts/Nexa_light.otf',
})

const GoogleAds = (props) =>{
    return (
        <Inner className='page_5 page' currentPage = {props.currentPage} onPageChange={props.onPageChange}>
            <PageTitle upperText = 'Google' lowerText='Ads'/>
        </Inner>
)
}

export default GoogleAds;