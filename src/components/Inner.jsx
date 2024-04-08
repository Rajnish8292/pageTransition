'use client'
import { cubicBezier, motion, wrap } from "framer-motion"
import { useEffect } from "react"
export default function Inner({children, className, onPageChange})
{

    if(typeof onPageChange != 'function')
    {
        console.error('ERROR : onPageChange  must be a function')
    } else {
        onPageChange((currentPage) => {
            console.log(className.split(' ')[0], ':', currentPage )
        })

    }
    const wrapperVariant = {
            initial: {
                clipPath: 'circle(0% at 50% 100%)'
            },
            exit: {
                clipPath: 'circle(200% at 50% 100%)'
            }
    }




    return (

        <>
        <motion.div className="exit_transition_wrapper" initial='initial' exit='exit' variants={wrapperVariant} transition={
            {
                duration: 1.2,
                ease: cubicBezier(0.83, 0, 0.17, 1)
            }
        }></motion.div>
        <motion.div className={className}>
            {children}
        </motion.div>
        </>

    )
}