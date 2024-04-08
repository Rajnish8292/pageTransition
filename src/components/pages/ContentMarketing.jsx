
import {motion, AnimatePresence, cubicBezier} from 'framer-motion'
import './styles/ContentMarketing.css'
import localFont from 'next/font/local'
import PageTitle from '../PageTitle'

import { Canvas , useThree} from '@react-three/fiber'
import { useLayoutEffect, useEffect } from 'react'

import Inner from '../Inner'
const nexaBold = localFont({
    src: '../../assets/fonts/Nexa_bold.otf',
})

const nexaLight = localFont({
    src: '../../assets/fonts/Nexa_light.otf',
})


function Scene()
{
        const {camera, scene} = useThree()

        // Orthographic camera setting
        useLayoutEffect(() => {
            camera.top = window.innerHeight / 2
            camera.bottom = window.innerHeight / -2
            camera.left = window.innerWidth / -2
            camera.right = window.innerWidth / 2
            camera.near = 0.01
            camera.far = 5000
    
            camera.updateProjectionMatrix()
        })
    
    
        // Applying texture to every component of the scene
        useEffect(()=> {
            for(let i in scene.children)
            {
                if(scene.children[i].isMesh)
                {
                    scene.children[i].material.color = new Color('#FC6F6B')
    
                    
                } else if(scene.children[i].isGroup)
                {
                    for(let j in scene.children[i].children)
                    {
                        scene.children[i].children[j].material.color = new Color('#FC6F6B')
                    }
                }
            }
        }, [])
    return (
        <></>
    )
}

const ContentMarketing = (props) =>{
    return (
        <Inner className='page_1 page' currentPage = {props.currentPage} onPageChange={props.onPageChange}>
            <PageTitle upperText = 'Content' lowerText='Marketing'/>
            <Canvas orthographic style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    background: 'none'
                }} 
        
                camera={{
                    near: 0.01,
                    far: 5000,
                }}>
                    <Scene  />
                </Canvas>
        </Inner>
)
}

export default ContentMarketing;