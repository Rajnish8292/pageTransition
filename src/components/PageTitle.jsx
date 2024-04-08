
import localFont from 'next/font/local'
import { cubicBezier, motion } from "framer-motion"



const nexaBold = localFont({
    src: '../assets/fonts/Nexa_bold.otf',
})

export default function PageTitle(props) {
    const textVariants = {
        initial: {
            y: '90%'
        },
        animate: {
            y: '0'
        },
        exit: {
            y: '100%'
        }
    }
    const textTransition = {
        duration: 1,
        ease: cubicBezier(0.83, 0, 0.17, 1)
    }
    return (
        <div  className={['page_title_wrapper', nexaBold.className].join(' ')}>
        <div className={['page_title']}>
            <div style={{
                display: 'flex',
                overflow: 'hidden'
            }}><motion.p initial='initial' animate='animate' exit='exit' transition={textTransition} variants={textVariants}>{props.upperText}</motion.p></div>
            <div style={{
                display: 'flex',
                overflow: 'hidden'
            }}><motion.p initial='initial' animate='animate' exit='exit' variants={textVariants} transition={textTransition} >{props.lowerText}</motion.p></div>
        </div>
    </div>
    )
}