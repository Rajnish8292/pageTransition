import {motion, AnimatePresence, cubicBezier} from 'framer-motion'
import './styles/SocialMediaMarketing.css'
import localFont from 'next/font/local'
import Inner from '../Inner'

import PageTitle from '../PageTitle'

const nexaBold = localFont({
    src: '../../assets/fonts/Nexa_bold.otf',
})

const nexaLight = localFont({
    src: '../../assets/fonts/Nexa_light.otf',
})

const SocialMediaMarketing = (props) =>{
    return (
        <Inner className='page_3 page' currentPage = {props.currentPage} onPageChange={props.onPageChange}>
            <PageTitle upperText = 'Social Media' lowerText='Marketing'/>
        </Inner>
)
}

export default SocialMediaMarketing;