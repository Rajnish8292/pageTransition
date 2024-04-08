'use client'

import { useLoader, useFrame } from "@react-three/fiber"
import { color } from "framer-motion"
import { TextureLoader } from "three"
import { useRef } from "react"
// import {colorMap} from '../../assets/textures/Bark014_1K-JPG/Bark014_1K-JPG_Color.jpg'

export default function Cone(props)
{
    // const colorMap = useLoader(TextureLoader, '../../assets/textures/Bark014_1K-JPG/Bark014_1K-JPG_Color.jpg')
    const meshRef = useRef()
    useFrame((state, delta, xFrame) => {

        meshRef.current.rotation.x += delta
        meshRef.current.rotation.y += delta
        meshRef.current.rotation.z += delta
    })
    return (
        <>
            <mesh {...props}  ref={meshRef}>
                <coneGeometry  args={[80, 80, 64, 64]}></coneGeometry>
            <meshStandardMaterial color={'#FC6F6B'} roughness={0.35} metalness={0.1}/>            </mesh>
        </>
    )
}