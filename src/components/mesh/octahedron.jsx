import { useRef } from "react"
import { useFrame } from "@react-three/fiber"




export default function Octahedron(props)
{
    const meshRef = useRef()

    useFrame((state, delta, xFrame) => {
        meshRef.current.rotation.x += delta
        meshRef.current.rotation.y += delta
        meshRef.current.rotation.z += delta
    })
    return (
        <mesh {...props} ref={meshRef}>
            <octahedronGeometry args={[80, 1]}/>
            <meshStandardMaterial color={'#FC6F6B'} roughness={0.35} metalness={0.1}/>        </mesh>
    )
}