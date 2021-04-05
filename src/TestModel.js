/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef, useState, useEffect } from 'react'
import { useFrame } from 'react-three-fiber'
import { useGLTF } from '@react-three/drei/useGLTF'

import { useAnimations } from '@react-three/drei/useAnimations'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/testModel.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    console.log(actions);
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
          material={materials.Beta_Joints_MAT}
          geometry={nodes.Beta_Joints.geometry}
          skeleton={nodes.Beta_Joints.skeleton}
        />
        <skinnedMesh
          material={materials['asdf1:Beta_HighLimbsGeoSG2']}
          geometry={nodes.Beta_Surface.geometry}
          skeleton={nodes.Beta_Surface.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/testModel.glb')