/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 public/braid.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/braid.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.73, 0.82]}>
        <mesh geometry={nodes.Imani_Scalp_254252.geometry} material={materials.Scalp} />
        <mesh geometry={nodes.Imani_Scalp_254252_1.geometry} material={materials['Braid MAT 3']} />
      </group>
    </group>
  )
}

useGLTF.preload('/braid.gltf')
