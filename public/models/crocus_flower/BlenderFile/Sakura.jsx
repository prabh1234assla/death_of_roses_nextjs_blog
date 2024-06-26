/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Sakura.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Sakura.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.736, 0.149, -0.505]} rotation={[-Math.PI, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.Sakura2005.geometry} material={materials['Sakura1.004']} />
        <mesh geometry={nodes.Sakura2005_1.geometry} material={materials['stem.004']} />
        <mesh geometry={nodes.Sakura2005_2.geometry} material={materials['seed1.004']} />
      </group>
    </group>
  )
}

useGLTF.preload('/Sakura.glb')
