import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { CapsuleGeometry } from "three"




export default function Capsule(props)
{
    const meshRef = useRef()

    useFrame((state, delta, xFrame) => {
        meshRef.current.rotation.x += delta
        meshRef.current.rotation.y += delta
        meshRef.current.rotation.z += delta
    })
    return (
        <mesh {...props} ref={meshRef}>
            <capsuleGeometry args={[40, 100, 10, 20]}/>
            <meshStandardMaterial color={'#FC6F6B'} roughness={0.35} metalness={0.1}/>        </mesh>
    )
}