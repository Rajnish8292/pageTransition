import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import {motion} from 'framer-motion'



export default function Ball(props)
{
    const meshRef = useRef()
    const MeshVariants = {
        initial: {
            y: 200
        },
        animate: {
            y: 0
        },
        exit: {
            y: 200
        }
    }
    useFrame((state, delta, xFrame) => {
        meshRef.current.rotation.x += delta
        meshRef.current.rotation.y += delta
        meshRef.current.rotation.z += delta
    })
    return (
        <mesh  variants={MeshVariants} {...props} ref={meshRef}>
            <sphereGeometry args={[80, 64, 64]}/>
            <meshStandardMaterial color={'#FC6F6B'} roughness={0.35} metalness={0.1}/>
        </mesh>
    )
}