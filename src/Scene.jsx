/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 public/cat_cap/scene.gltf
Author: PatelDev (https://sketchfab.com/PatelDev)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cat-cap-0abe1e46f1de423c937e92a2af1e4124
Title: Cat Cap
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/cat_cap/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Material} scale={[1, 1, 0.9]} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.Material} />
      <mesh geometry={nodes.Object_7.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Object_9.geometry} material={materials['Material.001']} position={[-0.7, 0.42, 0]} rotation={[0, 0, 2.61]} scale={[0.03, 0.08, 0.08]} />
      <mesh geometry={nodes.Object_11.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Object_13.geometry} material={materials['Material.001']} position={[0.02, 0.03, 0]} />
    </group>
  )
}

useGLTF.preload('/cat_cap/scene.gltf')