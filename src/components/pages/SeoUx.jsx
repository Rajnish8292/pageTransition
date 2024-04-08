import {motion, AnimatePresence, cubicBezier} from 'framer-motion'
import './styles/SeoUx.css'
import localFont from 'next/font/local'
import Inner from '../Inner'
import PageTitle from '../PageTitle'


const nexaBold = localFont({
    src: '../../assets/fonts/Nexa_bold.otf',
})

const nexaLight = localFont({
    src: '../../assets/fonts/Nexa_light.otf',
})

const SeoUx = (props) =>{
    return (
        <Inner className='page_4 page' currentPage = {props.currentPage} onPageChange={props.onPageChange}>
            <PageTitle upperText = 'Seo' lowerText='& UX'/>
        </Inner>
)
}

export default SeoUx;