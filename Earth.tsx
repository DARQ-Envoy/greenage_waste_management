

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 ./public/earth.glb -t 
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube001: THREE.Mesh
  }
  materials: {
    ['Default OBJ']: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Earth(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Earth.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube001.geometry} material={materials['Default OBJ']} />
    </group>
  )
}

useGLTF.preload('/Earth.glb')