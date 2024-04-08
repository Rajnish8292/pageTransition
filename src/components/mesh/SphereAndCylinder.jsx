import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function ShpereAndCylinder(props)
{
    const sphereRef = useRef()
    const cylinderRef = useRef()
    const groupRef = useRef()

    useFrame((state, delta, xFrame) => {
        groupRef.current.rotation.x += delta
        groupRef.current.rotation.y += delta
        groupRef.current.rotation.z += delta
    }, [])

    return (
        <group {...props} ref={groupRef}>
            <mesh ref={sphereRef}>
                <sphereGeometry args={[40, 64, 64]} />
                <meshStandardMaterial color={'#FC6F6B'} roughness={0.35} metalness={0.1}/>            </mesh>

            <mesh ref={cylinderRef}>
                <cylinderGeometry args={[20, 20, 150, 64, 3]}/>
                <meshStandardMaterial color={'#FC6F6B'} roughness={0.35} metalness={0.1}/>            </mesh>


        </group>
    )

}