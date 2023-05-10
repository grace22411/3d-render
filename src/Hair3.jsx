/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 Hair3.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Hair3.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Hair008.geometry} material={materials['Hair Mat']} />
    </group>
  )
}

useGLTF.preload('/Hair3.gltf')