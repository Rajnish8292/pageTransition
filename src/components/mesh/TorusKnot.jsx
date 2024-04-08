import { useRef } from "react"
import { useFrame } from "@react-three/fiber"




export default function TorusKnot(props)
{
    const meshRef = useRef()
    
    return (
        <mesh {...props} ref={meshRef}>
            <torusKnotGeometry args={[90, 30, 90, 20]}/>
            <meshStandardMaterial color={'#FC6F6B'} roughness={0.35} metalness={0.1}/>        </mesh>
    )
}