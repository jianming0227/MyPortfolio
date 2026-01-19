import React, { useRef, useMemo, useEffect } from 'react'
import * as THREE from 'three'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const group = useRef()
  const cupRef = useRef() // 1. Create a ref for the specific part we want to animate
  const cupRef2 = useRef() // 1. Create a ref for the specific part we want to animate
  const { nodes, materials, animations } = useGLTF('/models/java.glb')

  // 2. Define the new White Material (Ceramic look)
  const whiteMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: 'white',        // The requested color
      roughness: 0.2,        // Smoothness
      metalness: 0.1,        // Low metalness for ceramic/plastic
      clearcoat: 1,          // Shiny coating
      clearcoatRoughness: 0.1
    })
  }, [])

  const greyMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: 'grey',        // The requested color
      roughness: 0.2,        // Smoothness
      metalness: 0.1,        // Low metalness for ceramic/plastic
      clearcoat: 1,          // Shiny coating
      clearcoatRoughness: 0.1
    })
  }, [])

  // 3. Animation Loop
  useFrame((state, delta) => {
    if (cupRef.current) {
      cupRef.current.rotation.z += delta * 1 // Rotate on Z axis (due to parent rotation adjustment)
    }
  })

  useFrame((state, delta) => {
    if (cupRef2.current) {
      cupRef2.current.rotation.y += delta * 1 // Rotate on Z axis (due to parent rotation adjustment)
    }
  })


  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    if (!actions) return
    const firstAction = Object.values(actions)[0]
    if (firstAction) firstAction.play()
    return () => {
      if (firstAction) firstAction.stop()
    }
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene" position={[-5, 0, 0]} scale={1.4}>
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            {/* 4. Attached the ref to the Cup group and applied the white material */}
            <group name="Cube" ref={cupRef}>
              <mesh
                name="Cube_0"
                castShadow
                receiveShadow
                geometry={nodes.Cube_0.geometry}
                material={whiteMaterial}
              />
            </group>
            <group name="Plane" position={[0.787, 0, 0]} rotation={[Math.PI / 2, 0, 0]} ref={cupRef2} >
              <mesh
                name="Plane_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane_0.geometry}
                // Fixed typo: changed {c} to {materials.Material} or your preferred material
                material={whiteMaterial}
              />
            </group>
            <group
              name="Plane001"
              position={[0, 0, 1.518]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={1.218}>
              <mesh
                name="Plane001_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane001_0.geometry}
                material={materials['Material.002']}
                morphTargetDictionary={nodes.Plane001_0.morphTargetDictionary}
                morphTargetInfluences={nodes.Plane001_0.morphTargetInfluences}
              />
            </group>
            <group
              name="Torus001"
              position={[-0.138, -0.061, -0.771]}
              rotation={[-0.14, -0.02, 0.097]}
              scale={[0.467, 0.432, 0.432]}>
              <mesh
                name="Torus001_0"
                castShadow
                receiveShadow
                geometry={nodes.Torus001_0.geometry}
                material={greyMaterial}
              />
            </group>
            <group
              name="Torus000"
              position={[0.095, -0.029, -0.88]}
              rotation={[-0.134, -0.046, 0.098]}
              scale={[0.454, 0.419, 0.303]}>
              <mesh
                name="Torus000_0"
                castShadow
                receiveShadow
                geometry={nodes.Torus000_0.geometry}
                material={greyMaterial}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/java.glb')