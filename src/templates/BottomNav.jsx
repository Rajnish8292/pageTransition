'use client'
import localFont from 'next/font/local'
import styles from './styles/bottom_nav.module.css'
import {motion, useAnimate} from 'framer-motion'

const nexaBold = localFont({
    src: '../assets/fonts/Nexa_bold.otf',
})

const nexaLight = localFont({
    src: '../assets/fonts/Nexa_light.otf',
})

const BottomNav = (props) => {
    const {changePage} = props
    const [scope, animate] = useAnimate()

    const rotateWheelTo = (deg) => {
        animate(scope.current, {
            rotateZ: `${deg}deg`
        })
    }
    return (
        <>
            <div className={[styles.bottom_nav, nexaBold.className].join(' ')}>
                <svg className={[styles.nav_wheel_indicator, ''].join(' ')} width={190} height={100} xmlns={'http://www.w3.org/2000/svg'} style={{
                    position: 'absolute',
                }}>
                    <path className='wheel_indicator_path' d="M 10 50 Q 95 30 180 50" strokeWidth="4" stroke="#FC6F6B"  strokeLinecap="round" fill="transparent"></path>
                </svg>
                <motion.svg ref={scope} layout className={styles.nav_wheel} xmlns ={'http://www.w3.org/2000/svg'} height={'100%'} width={'100%'} style={{ scale:1.8, rotateZ: '71deg'}} >
                    <defs>
                        <path d="
                        M 0, 250
                        a 250,250 0 1,1 500,0
                        a 250,250 0 1,1 -500,0
                        " id="textcircle">
                        </path>
                    </defs>
                    <text textLength={1570.7963267948965} style={{
                        fontSize: '12px',
                        transform: 'translate(11px,11px)'
                    }}>
                        <textPath href='#textcircle' style={{ userSelect: 'none', cursor: 'pointer' }}>
                            <tspan>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                            <motion.tspan  fill='#fff' styles={{ cursor: 'pointer', userSelect: 'none' }} onClick={props.changePage ? () => {changePage(0); rotateWheelTo(71)} : null}>Digital Strategy</motion.tspan>
                            <tspan>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                            <motion.tspan  fill='#fff' styles={{ cursor: 'pointer', userSelect: 'none' }} onClick={props.changePage ? () => {changePage(1); rotateWheelTo(40.10)} : null}>Content Marketing</motion.tspan>
                            <tspan>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                            <motion.tspan  fill='#fff' styles={{ cursor: 'pointer', userSelect: 'none' }} onClick={props.changePage ? () => {changePage(2);rotateWheelTo(10)} : null}>Brand Positioning</motion.tspan>
                            <tspan>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                            <motion.tspan  fill='#fff' styles={{ cursor: 'pointer', userSelect: 'none' }} onClick={props.changePage ? () => {changePage(3); rotateWheelTo(336.5)} : null}>Social Media Marketing</motion.tspan>
                            <tspan>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                            <motion.tspan  fill='#fff' styles={{ cursor: 'pointer', userSelect: 'none' }} onClick={props.changePage ? () => {changePage(4); rotateWheelTo(302.3)} : null}>Seo & UX</motion.tspan>
                            <tspan>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                            <motion.tspan  fill='#fff' styles={{ cursor: 'pointer', userSelect: 'none' }} onClick={props.changePage ? () => {changePage(5); rotateWheelTo(276.5)} : null}>Google Ads</motion.tspan>
                            <tspan>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                            <motion.tspan  fill='#fff' styles={{ cursor: 'pointer', userSelect: 'none' }} onClick={props.changePage ? () => {changePage(0); rotateWheelTo(251)} : null}>Digital Strategy</motion.tspan>
                            <tspan>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                            <motion.tspan  fill='#fff' styles={{ cursor: 'pointer', userSelect: 'none' }} onClick={props.changePage ? () => {changePage(1); rotateWheelTo(220)} : null}>Content Marketing</motion.tspan>
                            <tspan>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                            <motion.tspan  fill='#fff' styles={{ cursor: 'pointer', userSelect: 'none' }} onClick={props.changePage ? () => {changePage(2); rotateWheelTo(190)} : null}>Brand Positioning</motion.tspan>
                            <tspan>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                            <motion.tspan  fill='#fff' styles={{ cursor: 'pointer', userSelect: 'none' }} onClick={props.changePage ? () => {changePage(3); rotateWheelTo(156.5)} : null}>Social Media Marketing</motion.tspan>
                            <tspan>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                            <motion.tspan  fill='#fff' styles={{ cursor: 'pointer', userSelect: 'none' }} onClick={props.changePage ? () => {changePage(4); rotateWheelTo(123)} : null}>Seo & UX</motion.tspan>
                            <tspan>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                            <motion.tspan  fill='#fff' styles={{ cursor: 'pointer', userSelect: 'none' }} onClick={props.changePage ? () => {changePage(5); rotateWheelTo(97)} : null}>Google Ads</motion.tspan>
                        </textPath>
                        
                    </text>
                </motion.svg>
            </div>
        </>
    )
}

export default BottomNav