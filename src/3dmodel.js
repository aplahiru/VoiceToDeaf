import React, { Component, useRef, Suspense } from "react";
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Canvas, useLoader, useFrame, extend, useThree } from "react-three-fiber";
import { useGLTFLoader, Html } from "drei";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { CubeTextureLoader } from "three";

// export const Face=()=>{
//     const mask = useRef();
//     const { nodes } = useLoader(GLTFLoader, "./resources/scene.gltf");
//     useFrame(() => (mask.current.rotation.y += 0.0002));
//     return (
//         <mesh
//           ref={mask}
//           visible
//           position={[0, 0, 0]}
//           // Adding data from mars.glb to the geometry and material of the sphere
//           geometry={nodes.Cube008.geometry}
//           material={nodes.Cube008.material}
//         />
//       );
// }

// // Loads the skybox texture and applies it to the scene.
// export const SkyBox = () => {
//     const { scene } = useThree();
//     const loader = new CubeTextureLoader();
//     // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
//     const texture = loader.load([
//       "src\resources\textures\material_atlas_25679_1_diffuse.png",
//       "src\resources\textures\material_atlas_77838_1_diffuse.png",
//     ]);
  
//     // Set the scene background property to the resulting texture.
//     scene.background = texture;
//     return null;
//   };


//   extend({ OrbitControls });

//   const CameraControls = () => {
//     const {
//       camera,
//       gl: { domElement },
//     } = useThree();
  
//     // Ref to the controls, so that we can update them on every frame with useFrame
//     // const controls = useRef();
  
//     camera.position.z = 999;
  
//     // useFrame(() => controls.current.update());
  
//     return (
//       <orbitControls
//         // ref={controls}
//         args={[camera, domElement]}
//         autoRotate={false}
//         enableZoom={false}
//       />
//     );
//   };


  
// export const Dmodel = () => {
//     return (
//       <>
//         <Canvas className="canvas">
//           <CameraControls />
//           <directionalLight intensity={1} />
//           <ambientLight intensity={0.6} />
//           <Suspense fallback="loading">
//             <Face />
//           </Suspense>
//           <SkyBox />
//         </Canvas>
//       </>
//     );
//   };
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75,window.innerWidth/ window.innerHeight,0.1,1000);
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth,window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const geometry = new THREE.SphereGeometry(10,10,10);
// const meterial = new THREE.MeshNormalMaterial({wireframe:true});
// const sphere = new THREE.Mesh(geometry,meterial);
// scene.add(sphere);

// camera.position.z = 70;

// const animate = () =>{
//     requestAnimationFrame(animate);
//     renderer.render(scene,camera);
// }
// animate();


export const Dmodel =()=>{
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
    
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        this.mount.appendChild(renderer.domElement);
    
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
    
        camera.position.z = 5;
        const control = new OrbitControls(camera,renderer.domElement)
        control.minDistance = 1;
        control.maxDistance = 1000;
    
        var animate = ()=> {
          requestAnimationFrame(animate);
    
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            control.update();
    
          renderer.render(scene, camera);
        };
    
        animate();
            
}