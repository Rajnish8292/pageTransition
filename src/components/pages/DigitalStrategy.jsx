'use client'

import {motion, AnimatePresence ,cubicBezier, color, motionValue, useMotionValue, animate, useSpring} from 'framer-motion'
import './styles/DigitalStrategy.css'
import localFont from 'next/font/local'


import Cone from '@/components/mesh/Cone'
import ShpereAndCylinder from '../mesh/SphereAndCylinder'
import Donut from '../mesh/Donut'
import Ball from '../mesh/Ball'
import Octahedron from '../mesh/octahedron'
import TorusKnot from '../mesh/TorusKnot'
import Capsule from '../mesh/Capsule'

import Inner from '../Inner'
import PageTitle from '../PageTitle'

import { AxesHelper, TextureLoader, Color, Vector3 } from 'three'
import { Canvas, useThree, useLoader,  extend, useFrame } from '@react-three/fiber'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'

import { convertArray } from 'three/src/animation/AnimationUtils'

extend({ AxesHelper })


const nexaBold = localFont({
    src: '../../assets/fonts/Nexa_bold.otf',
})

const nexaLight = localFont({
    src: '../../assets/fonts/Nexa_light.otf',
})

const positions = {
    cone: [370, 230, -300],
    sphereAndCylinder: [500, 10, -300],
    donut: [-370, 230, -300],
    ball: [-500, 10, -300],
    capsule: [-370, -190, -300],
    octahedron: [370, -190, -300],
    main: [0, 0, -300]

}


function Scene(props) {

    const canvasRef = props.parentRef
    const {camera, scene} = useThree()
    let mouseX = useMotionValue(0)
    let mouseY = useMotionValue(0)
    const motionValueY = {}

    for(const key in positions)
    {
        motionValueY[key] = useMotionValue(-500)

        animate(motionValueY[key], positions[key][1], {type: 'spring', stiffness: 200, damping: 20})
    }


    useEffect(() => {

        if(canvasRef.current)
        {
            console.log('Event Listener initated!')
            canvasRef.current.addEventListener('mousemove', (e) => {

                const X = e.clientX - (window.innerWidth/2),
                      Y = (e.clientY - (window.innerHeight/2)) * -1
                
                
                      mouseX.setCurrent(X/(window.innerWidth/2))
                      mouseY.setCurrent(Y/(window.innerHeight/2))


                      animate(mouseX, 0, {duration: 0.5})
                      animate(mouseY, 0,  {duration: 0.5})


            })

        } else {
            console.log('Cannot able to read canvasRef')
        }
    }, [canvasRef.current])

    useFrame((state, delta, XFrame) => {
        const {scene} = state
        const objects = scene.children

        for(let i in objects)
        {
            const object = objects[i]

            if(object.isMesh || object.isGroup)
            {
                if(object.name != 'main') {
                    let position = object.position
                    object.position.y = motionValueY[object.name].get()
                    object.position.set(position.x + mouseX.get()*(0.5 + Math.random() * (4 - 0.5)), position.y +  mouseY.get()*(0.5 + Math.random() * (4 - 0.5)), position.z)

                } else {
                    let position = object.position
                    object.position.y = motionValueY[object.name].get()
                    object.position.set(position.x + mouseX.get()*0.2, position.y +  mouseY.get()*0.2, position.z)

                }


            }
        }
    })
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
            <>
            <ambientLight intensity={0.9} />
            {/* <spotLight position={[0, 0, 10]} color={'white'}/> */}
            <directionalLight position={[0, 200, 0]}/>
            {/* <directionalLight position={[-300, 300, 0]}/> */}
            <directionalLight position={[-300, 300, 0]}/>
            <directionalLight position={[300, -300, 0]}/>
            <hemisphereLight intensity={0.2}/>
            <spotLight intensity={60} />

            <Cone position={positions.cone} name="cone"/>
            <ShpereAndCylinder  position = {positions.sphereAndCylinder} name="sphereAndCylinder"/>
            <Donut  position = {positions.donut} name="donut"/>
            <Ball  position= {positions.ball} name="ball"/>
            <Capsule position={positions.capsule} name="capsule"/>
            <Octahedron position={positions.octahedron} name="octahedron"/>
            <TorusKnot  position={positions.main} name="main"/>
            </>



    )
}


const DigitalStrategy = (props) =>{

    const canvasRef = useRef()




    return (
            <Inner className='page_0 page' currentPage = {props.currentPage}  onPageChange={props.onPageChange}>
                
                <PageTitle upperText = 'Brand' lowerText='Positioning'/>
                <Canvas ref= {canvasRef} orthographic style={{
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
                    <Scene parentRef = {canvasRef} />
                </Canvas>
            </Inner>
        

    )
}

export default DigitalStrategy;